#!/usr/bin/env node
/**
 * Minify JavaScript files using Terser
 * This script replaces the Grunt uglify task
 */

const fs = require('fs');
const path = require('path');
const {minify} = require('terser');

// Terser options matching the aggressive UglifyJS settings from Gruntfile.js
// Note: These "unsafe" optimizations are intentionally enabled to minimize
// bookmarklet size for URL length constraints. These may produce semantically
// different code in edge cases, but are acceptable for this use case where:
// 1. Bookmarklets must be extremely small to fit in browser URL length limits
// 2. The code is simple, well-tested, and doesn't rely on edge case behaviors
// 3. Each bookmarklet is tested post-minification to verify correct behavior
// Security note: These settings do not introduce vulnerabilities, but can
// change code semantics. See SECURITY.md for build verification procedures.
const terserOptions = {
    ecma: 2020, // Target ES2020 - fully supported by Safari 26.1+
    module: false, // Not ES modules
    compress: {
        // Aggressive unsafe optimizations (matching UglifyJS config)
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_undefined: true,
        unsafe_methods: true,
        unsafe_arrows: true,

        // Additional compression options
        arrows: true, // Keep arrow functions (shorter than regular in modern ES)
        arguments: true, // Optimize arguments usage
        booleans: true, // Optimize boolean expressions
        collapse_vars: true, // Collapse single-use variables
        comparisons: true, // Optimize comparisons
        computed_props: true, // Transform computed properties
        conditionals: true, // Optimize if/conditional expressions
        dead_code: true, // Remove unreachable code
        directives: true, // Remove redundant directives
        drop_console: true, // Remove console.* calls
        drop_debugger: true, // Remove debugger statements
        evaluate: true, // Evaluate constant expressions
        expression: true, // Preserve completion values
        hoist_funs: true, // Hoist function declarations
        hoist_props: true, // Hoist properties
        hoist_vars: false, // Don't hoist var declarations (smaller with let/const)
        if_return: true, // Optimize if/return and if/continue
        inline: 3, // Inline function calls (3 = aggressive)
        join_vars: true, // Join consecutive var statements
        keep_fargs: false, // Remove unused function arguments
        keep_infinity: false, // Replace Infinity with 1/0
        loops: true, // Optimize loops
        negate_iife: true, // Negate IIFEs when return value unused
        passes: 3, // 3 passes for better compression
        properties: true, // Optimize property access
        pure_getters: false, // Don't assume getters are pure (safer)
        reduce_funcs: true, // Merge function declarations
        reduce_vars: true, // Optimize variable assignments
        sequences: true, // Join consecutive statements with comma
        side_effects: true, // Remove expressions with no side effects
        switches: true, // Optimize switches
        toplevel: true, // Enable top-level optimizations
        typeofs: true, // Optimize typeof expressions
        unused: true, // Drop unreferenced variables/functions
    },
    mangle: {
        toplevel: true,
        safari10: false, // Not needed for Safari 26.1+
        eval: true, // Mangle names in scopes with eval
    },
    format: {
        ascii_only: false, // Allow unicode (can save bytes)
        beautify: false,
        comments: false, // Remove all comments
        ecma: 2020, // Use ES2020 syntax in output (arrow functions, const, etc.)
        indent_level: 0,
        quote_style: 1, // Prefer single quotes (smaller w/ custom URI encoding)
        semicolons: true, // Always use semicolons (safer for bookmarklets)
        webkit: false, // Not needed for modern Safari
    },
    toplevel: true,
};

async function minifyFile(srcPath, destPath) {
    const code = fs.readFileSync(srcPath, 'utf8');
    const result = await minify(code, terserOptions);

    if (result.error) {
        throw result.error;
    }

    if (!result.code) {
        throw new Error(`Minification produced no output for ${srcPath}`);
    }

    // Ensure destination directory exists
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, {recursive: true});
    }

    fs.writeFileSync(destPath, result.code, 'utf8');

    const srcSize = code.length;
    const destSize = result.code.length;
    const reduction = ((1 - destSize / srcSize) * 100).toFixed(1);

    console.log(`Minified ${path.basename(srcPath)}: ${srcSize} → ${destSize} bytes (-${reduction}%)`);

    if (result.warnings) {
        result.warnings.forEach(warning => console.warn(`Warning: ${warning}`));
    }
}

async function main() {
    const srcDir = path.join(__dirname, '..', '.temp');
    const destDir = path.join(__dirname, '..', 'dist');

    if (!fs.existsSync(srcDir)) {
        console.error(`Source directory not found: ${srcDir}`);
        process.exit(1);
    }

    // Read bookmarklets.json to get output filenames
    const configPath = path.join(__dirname, '..', 'bookmarklets.json');
    let config;
    try {
        const configContent = fs.readFileSync(configPath, 'utf8');
        config = JSON.parse(configContent);
    } catch (error) {
        console.error(`Error reading ${configPath}: ${error.message}`);
        process.exit(1);
    }

    if (!config.bookmarklets || !Array.isArray(config.bookmarklets)) {
        console.error(`Invalid config: 'bookmarklets' must be an array in ${configPath}`);
        process.exit(1);
    }

    console.log(`Minifying ${config.bookmarklets.length} files from ${srcDir} to ${destDir}...`);

    for (const bookmarklet of config.bookmarklets) {
        // Source file is always .js (TypeScript compiler output)
        const baseName = path.basename(bookmarklet.file, path.extname(bookmarklet.file));
        const srcPath = path.join(srcDir, `${baseName}.js`);
        // Destination file uses the extension from bookmarklets.json
        const destPath = path.join(destDir, bookmarklet.file);

        if (!fs.existsSync(srcPath)) {
            console.error(`Source file not found: ${srcPath}`);
            process.exit(1);
        }

        try {
            await minifyFile(srcPath, destPath);
        } catch (error) {
            console.error(`Error minifying ${bookmarklet.file}:`, error.message);
            process.exit(1);
        }
    }

    console.log('Minification complete!');
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
