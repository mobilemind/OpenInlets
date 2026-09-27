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
        if (!(field in bookmarklet) || bookmarklet[field] === null) {
            console.error(`Invalid config: bookmarklet at index ${index} missing required field '${field}'`);
            process.exit(1);
        }
        const value = bookmarklet[field];
        if (typeof value === 'string' && value.trim().length === 0) {
            console.error(`Invalid config: bookmarklet at index ${index} has empty string for field '${field}'`);
            process.exit(1);
        }
    }
}

/**
 * Percent-encoded triplets that are restored to literal characters in bookmarklet URLs.
 *
 * Each encoded URL is used as (1) a raw `javascript:` URL and the fragment of the Setup
 * link, (2) an HTML `href` attribute value, and (3) a Markdown reference-link destination.
 * These characters are legal in an RFC 3986 fragment, inert in a double-quoted HTML
 * attribute and inert in a CommonMark link destination, so leaving them literal saves bytes.
 *
 * Characters that stay encoded: `\` (Markdown escape), `&` (entity), `<` `>` (tags),
 * `"` (ends attribute/title), `#` (fragment delimiter), `%` (decoding ambiguity),
 * `` ` `` (WHATWG fragment encode set), and `*` `_` (Markdown emphasis, forced to
 * `%2A`/`%5F`). `{}[]|^` are left encoded for now.
 */
const RESTORED_TRIPLETS = new Map([
    ['%3A', ':'], ['%3D', '='], ['%2C', ','], ['%2F', '/'], ['%3B', ';'],
    ['%24', '$'], ['%40', '@'], ['%2B', '+'], ['%3F', '?']
]);

const MAX_PAREN_DEPTH = 32;

/**
 * Check that parentheses are balanced and not nested deeper than MAX_PAREN_DEPTH
 * @param {string} body - Encoded URL body
 * @returns {string|null} Reason the parens are unusable, or null if they are fine
 */
function parenProblem(body) {
    let depth = 0;
    for (const ch of body) {
        if (ch === '(') {
            depth += 1;
            if (depth > MAX_PAREN_DEPTH) {
                return `parentheses nest deeper than ${MAX_PAREN_DEPTH}`;
            }
        } else if (ch === ')') {
            depth -= 1;
            if (depth < 0) {
                return 'unbalanced parentheses';
            }
        }
    }
    return depth === 0 ? null : 'unbalanced parentheses';
}

/**
 * Validate an encoded bookmarklet URL; throws a descriptive Error on any failure
 * @param {string} url - Full `javascript:...` URL
 */
function validateEncodedBookmarklet(url) {
    const prefix = 'javascript:';
    if (!url.startsWith(prefix)) {
        throw new Error(`URL does not start with '${prefix}'`);
    }
    const body = url.slice(prefix.length);
    if (!/^(?:[A-Za-z0-9\-.!~'():=,/;$@+?]|%[0-9A-F]{2})*$/.test(body)) {
        throw new Error('URL body contains characters that must be percent-encoded');
    }
    if (body.startsWith('/')) {
        throw new Error("URL body starts with '/', which changes URL parsing");
    }
    const problem = parenProblem(body);
    if (problem) {
        throw new Error(`URL body has ${problem}`);
    }
    if (new URL(url).href !== url) {
        throw new Error('URL does not survive a WHATWG URL round trip');
    }
    const asFragment = `https://example.com/x/#${url}`;
    if (new URL(asFragment).href !== asFragment) {
        throw new Error('URL does not survive a WHATWG URL round trip as a fragment');
    }
}

/**
 * Encode bookmarklet code as a compact, validated `javascript:` URL
 * @param {string} code - Minified bookmarklet code
 * @returns {string} Full `javascript:...` URL
 */
function encodeBookmarklet(code) {
    let body = encodeURIComponent(code)
        .replace(/\*/g, '%2A')
        .replace(/_/g, '%5F')
        .replace(/%(?:3A|3D|2C|2F|3B|24|40|2B|3F)/g, (triplet) => RESTORED_TRIPLETS.get(triplet));

    // A leading '/' would give the URL a hierarchical path and dot-segment resolution
    if (body.startsWith('/')) {
        body = `%2F${body.slice(1)}`;
    }

    const problem = parenProblem(body);
    if (problem) {
        console.warn(`Warning: ${problem}; encoding all parentheses`);
        body = body.replace(/\(/g, '%28').replace(/\)/g, '%29');
    }

    if (decodeURIComponent(body) !== code) {
        throw new Error('Encoded bookmarklet does not decode back to the original code');
    }
    const url = `javascript:${body}`;
    validateEncodedBookmarklet(url);
    return url;
}

module.exports = {
    readFileOrFail,
    validateBookmarklet,
    encodeBookmarklet,
    validateEncodedBookmarklet
};
