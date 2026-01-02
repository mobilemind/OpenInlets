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

/**
 * Validate that a bookmarklet object has all required fields
 * @param {object} bookmarklet - The bookmarklet object to validate
 * @param {number} index - The index in the bookmarklets array (for error messages)
 */
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

module.exports = {
    readFileOrFail,
    validateBookmarklet
};
