#!/usr/bin/env node
/**
 * Update README.md with bookmarklet versions and code
 * This script replaces the Grunt updatereadme task
 */

const fs = require('fs');
const path = require('path');
const {readFileOrFail, validateBookmarklet} = require('./utils');

// process.exit() never returns, so consistent-return doesn't apply
// eslint-disable-next-line consistent-return
function replaceReadme(readMeString, regexPattern, newStr, bookmarkletName) {
    if (readMeString.match(regexPattern)) {
        return readMeString.replace(regexPattern, newStr);
    }

    // Fail if there's no match
    console.error(`Can't find old "${newStr}" reference for ${bookmarkletName} using ${regexPattern}`);
    process.exit(1);
}

function updateReadmeForBookmarklet(readMeString, bookmarklet) {
    const webPath = path.join(__dirname, '..', 'web', bookmarklet.file);
    const theCode = readFileOrFail(webPath);

    // Update bullet list of JavaScript Bookmarks
    readMeString = replaceReadme(
        readMeString,
        new RegExp(`\\+ __\\[${bookmarklet.name}\\] v\\d+\\.\\d+\\.\\d+__:`),
        `+ __[${bookmarklet.name}] v${bookmarklet.version}__:`,
        bookmarklet.name
    );

    // Update bullet list of URL-based Setup links
    readMeString = replaceReadme(
        readMeString,
        new RegExp(`-- \\[Setup ${bookmarklet.name}\\] v\\d+\\.\\d+\\.\\d+`),
        `-- [Setup ${bookmarklet.name}] v${bookmarklet.version}`,
        bookmarklet.name
    );

    // Update JavaScript (reference) links
    readMeString = replaceReadme(
        readMeString,
        new RegExp(`\\[${bookmarklet.name}\\]: javascript:.*'\\d+\\.\\d+\\.\\d+' "${bookmarklet.name}"`),
        `[${bookmarklet.name}]: ${theCode} "${bookmarklet.name}"`,
        bookmarklet.name
    );

    // Update Setup (reference) links
    readMeString = replaceReadme(
        readMeString,
        new RegExp(`#javascript:.*?'\\d+\\.\\d+.\\d+' "Setup ${bookmarklet.name}"`),
        `#${theCode} "Setup ${bookmarklet.name}"`,
        bookmarklet.name
    );

    return readMeString;
}

function main() {
    const configPath = path.join(__dirname, '..', 'bookmarklets.json');
    const readmePath = path.join(__dirname, '..', 'README.md');

    const configContent = readFileOrFail(configPath);
    let config;
    try {
        config = JSON.parse(configContent);
    } catch (error) {
        console.error(`Invalid JSON in config file ${configPath}: ${error.message}`);
        process.exit(1);
    }

    if (!config.bookmarklets || !Array.isArray(config.bookmarklets)) {
        console.error(`Invalid config: 'bookmarklets' must be an array in ${configPath}`);
        process.exit(1);
    }

    if (config.bookmarklets.length === 0) {
        console.error(`Invalid config: 'bookmarklets' array is empty in ${configPath}`);
        process.exit(1);
    }

    let readMeString = readFileOrFail(readmePath);

    console.log('Updating README.md...');

    for (const [index, bookmarklet] of config.bookmarklets.entries()) {
        validateBookmarklet(bookmarklet, index);
        try {
            readMeString = updateReadmeForBookmarklet(readMeString, bookmarklet);
            console.log(`Updated README.md for ${bookmarklet.name} v${bookmarklet.version}`);
        } catch (error) {
            console.error(`Error updating README for ${bookmarklet.name}:`, error.message);
            process.exit(1);
        }
    }

    fs.writeFileSync(readmePath, readMeString, 'utf8');
    console.log('README.md update complete!');
}

main();
