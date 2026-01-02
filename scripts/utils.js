/**
 * Shared utility functions for build scripts
 */

const fs = require('fs');

/**
 * Read a file or exit with error if it doesn't exist or is empty
 * @param {string} filePath - Path to the file to read
 * @returns {string} File contents
 */
function readFileOrFail(filePath) {
    let content;
    try {
        content = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`File not found: ${filePath}`);
        } else {
            console.error(`Error reading file ${filePath}: ${error.message}`);
        }
        process.exit(1);
    }

    if (content.length === 0) {
        console.error(`File is empty: ${filePath}`);
        process.exit(1);
    }

    return content;
}

/**
 * Validate that a bookmarklet object has all required fields
 * @param {object} bookmarklet - The bookmarklet object to validate
 * @param {number} index - The index in the bookmarklets array (for error messages)
 */
function validateBookmarklet(bookmarklet, index) {
    const required = ['name', 'file', 'version'];
    for (const field of required) {
        // eslint-disable-next-line security/detect-object-injection
        if (!(field in bookmarklet) || bookmarklet[field] === null) {
            console.error(`Invalid config: bookmarklet at index ${index} missing required field '${field}'`);
            process.exit(1);
        }
        // eslint-disable-next-line security/detect-object-injection
        const value = bookmarklet[field];
        if (typeof value === 'string' && value.trim().length === 0) {
            console.error(`Invalid config: bookmarklet at index ${index} has empty string for field '${field}'`);
            process.exit(1);
        }
    }
}

module.exports = {
    readFileOrFail,
    validateBookmarklet
};
