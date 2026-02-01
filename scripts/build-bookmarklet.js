#!/usr/bin/env node
/**
 * Build bookmarklet URLs from minified JavaScript files
 * This script replaces the Grunt buildbookmarklet task
 */

const fs = require('fs');
const path = require('path');
const {readFileOrFail, validateBookmarklet} = require('./utils');

function buildBookmarklet(bookmarklet) {
    // Source file in .temp/ is always .js (TypeScript compiler output)
    const baseName = path.basename(bookmarklet.file, path.extname(bookmarklet.file));
    const srcPath = path.join(__dirname, '..', '.temp', `${baseName}.js`);
    const distPath = path.join(__dirname, '..', 'dist', bookmarklet.file);

    // Get compiled source size for statistics (from TypeScript output)
    const originalCode = readFileOrFail(srcPath);
    const srcLen = originalCode.length;

    // Read minified code from dist/ directory
    let theCode = readFileOrFail(distPath);

    // "unstrict" theCode in simplest cases (no vars or const in bookmarklet)
    if (! /(const|let|var) /.test(theCode)) {
        theCode = theCode.replace(/^'use strict';/,'');
    }

    // Append version string
    theCode = `${theCode}void'${bookmarklet.version}'`;

    // URL encoding for javascript: URL avoids RegEx & HTML issues
    // with things like: "$&*+/<>?[]\^; also force encode '*'–>%2A, '_'–>%5F for regex & Markdown
    theCode = `javascript:${encodeURIComponent(theCode).replace(/\*/g, '%2A').replace(/_/g, '%5F')}`;

    // Un-encode a couple of generally safe chars for URLs to reduce size
    theCode = theCode.replace(/%3A/g, ':').replace(/%3D/g, '=');

    // Write the bookmarklet back to dist/ directory
    fs.writeFileSync(distPath, theCode, 'utf8');

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
