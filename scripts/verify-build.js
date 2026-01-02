#!/usr/bin/env node
/**
 * Verify build artifacts match bookmarklets.json configuration
 * This script is used in CI/CD and can be run locally
 */

const fs = require('fs');
const path = require('path');

function main() {
    const configPath = path.join(__dirname, '..', 'bookmarklets.json');
    const webDir = path.join(__dirname, '..', 'web');

    // Read and parse bookmarklets.json
    let config;
    try {
        const configContent = fs.readFileSync(configPath, 'utf8');
        config = JSON.parse(configContent);
    } catch (error) {
        console.error(`Failed to read config: ${error.message}`);
        process.exit(1);
    }

    if (!config.bookmarklets || !Array.isArray(config.bookmarklets)) {
        console.error('Invalid config: missing bookmarklets array');
        process.exit(1);
    }

    const expectedCount = config.bookmarklets.length;
    console.log(`Verifying ${expectedCount} bookmarklets were built...`);

    const missing = [];
    const sizes = [];
    let totalSize = 0;

    // Check each expected bookmarklet
    for (const bookmarklet of config.bookmarklets) {
        const filePath = path.join(webDir, bookmarklet.file);

        if (fs.existsSync(filePath)) {
            const {size} = fs.statSync(filePath);
            totalSize += size;
            sizes.push({name: bookmarklet.name, file: bookmarklet.file, size});
        } else {
            missing.push(bookmarklet.file);
        }
    }

    // Report results
    if (missing.length > 0) {
        console.error(`\n✗ Missing ${missing.length} bookmarklet(s):`);
        for (const file of missing) {
            console.error(`  - ${file}`);
        }
        process.exit(1);
    }

    console.log(`✓ All ${expectedCount} bookmarklets built successfully`);
    console.log('');
    console.log('Build Summary:');
    console.log(`Total bookmarklet size: ${totalSize} bytes`);

    // Optional: show individual sizes if verbose flag is set
    if (process.argv.includes('--verbose') || process.argv.includes('-v')) {
        console.log('');
        console.log('Individual sizes:');
        for (const item of sizes) {
            console.log(`  ${item.name}: ${item.size} bytes`);
        }
    }
}

main();
