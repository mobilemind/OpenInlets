#!/usr/bin/env node
/**
 * Build bookmarklet URLs from minified JavaScript files
 * This script replaces the Grunt buildbookmarklet task
 */

const fs = require('fs');
const path = require('path');

function readFileOrFail(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf8');

    if (content.length === 0) {
        console.error(`File is empty: ${filePath}`);
        process.exit(1);
    }

    return content;
}

function validateBookmarklet(bookmarklet, index) {
    const required = ['name', 'file', 'version'];
    for (const field of required) {
        // eslint-disable-next-line security/detect-object-injection
        if (!bookmarklet[field]) {
            console.error(`Invalid config: bookmarklet at index ${index} missing required field '${field}'`);
            process.exit(1);
        }
    }
}

function buildBookmarklet(bookmarklet) {
    const srcPath = path.join(__dirname, '..', 'src', bookmarklet.file);
    const webPath = path.join(__dirname, '..', 'web', bookmarklet.file);

    // Get original source size for statistics
    const originalCode = readFileOrFail(srcPath);
    const srcLen = originalCode.length;

    // Read minified code from web/ directory
    let theCode = readFileOrFail(webPath);

    // Append version string
    theCode = `${theCode}void'${bookmarklet.version}'`;

    // URL encoding for javascript: URL avoids RegEx & HTML issues
    // with things like: "$&*+/<>?[]\^; also force encode '*'–>%2A, '_'–>%5F for regex & Markdown
    theCode = `javascript:${encodeURIComponent(theCode).replace(/\*/g, '%2A').replace(/_/g, '%5F')}`;

    // Un-encode a couple of generally safe chars for URLs to reduce size
    theCode = theCode.replace(/%3A/g, ':').replace(/%3D/g, '=');

    // Write the bookmarklet back to web/ directory
    fs.writeFileSync(webPath, theCode, 'utf8');

    // Output statistics
    const webLen = theCode.length;
    const diff = srcLen - webLen;
    const ratio = (diff / srcLen * 100).toFixed(1);

    console.log(`${bookmarklet.name} v${bookmarklet.version}, src: ${srcLen} bytes, web: ${webLen} bytes (-${ratio}%)`);
}

function main() {
    const configPath = path.join(__dirname, '..', 'bookmarklets.json');
    const configContent = readFileOrFail(configPath);
    let config;
    try {
        config = JSON.parse(configContent);
    } catch (error) {
        console.error(`Invalid JSON in ${configPath}: ${error.message}`);
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

    console.log('Building bookmarklets...');

    for (const [index, bookmarklet] of config.bookmarklets.entries()) {
        validateBookmarklet(bookmarklet, index);
        try {
            buildBookmarklet(bookmarklet);
        } catch (error) {
            console.error(`Error building ${bookmarklet.name}:`, error.message);
            process.exit(1);
        }
    }

    console.log('Bookmarklet building complete!');
}

main();
