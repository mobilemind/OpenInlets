#!/usr/bin/env node
/**
 * Test bookmarklet URL encoding and validate every dist/ bookmarklet
 * Run: node scripts/test-encoding.js
 */
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const {encodeBookmarklet, validateEncodedBookmarklet} = require('./utils');

const PREFIX = 'javascript:';
let passed = 0;

function bodyOf(code) {
    const url = encodeBookmarklet(code);
    assert.ok(url.startsWith(PREFIX), `missing prefix for ${code}`);
    const body = url.slice(PREFIX.length);
    assert.strictEqual(decodeURIComponent(body), code, `round trip failed for ${code}`);
    return body;
}

function test(name, fn) {
    try {
        fn();
        passed += 1;
    } catch (error) {
        console.error(`FAIL: ${name}\n${error.message}`);
        process.exit(1);
    }
}

test('restored characters are literal', () => {
    for (const ch of ':=,/;$@+?') {
        assert.strictEqual(bodyOf(`a${ch}b`), `a${ch}b`, `'${ch}' should be literal`);
    }
});

test('unreserved characters and * _ handling', () => {
    assert.strictEqual(bodyOf("-_.!~*'()"), "-%5F.!~%2A'()");
});

test('characters that must stay encoded', () => {
    const expected = {
        ' ': '%20', '\\': '%5C', '&': '%26', '<': '%3C', '>': '%3E', '"': '%22',
        '#': '%23', '%': '%25', '`': '%60', '{': '%7B', '}': '%7D', '[': '%5B',
        ']': '%5D', '|': '%7C', '^': '%5E'
    };
    for (const [ch, enc] of Object.entries(expected)) {
        assert.strictEqual(bodyOf(`a${ch}b`), `a${enc}b`, `'${ch}' should be ${enc}`);
    }
});

test('literal %2F in source is not restored', () => {
    assert.strictEqual(bodyOf('a%2Fb'), 'a%252Fb');
});

test('README-style replace keeps $ sequences intact', () => {
    for (const code of ["x='$'+y", 'a$&b', 'a$$b', 'a$1b', "a$'b", 'a$`b']) {
        const url = encodeBookmarklet(code);
        const result = 'X'.replace(/X/, () => url);
        assert.strictEqual(result, url, `replacement corrupted ${code}`);
    }
});

test('leading slash stays encoded', () => {
    const body = bodyOf('/a\\/..\\/b/.test(x)');
    assert.ok(body.startsWith('%2F'), `body should start with %2F: ${body}`);
});

test('unbalanced parentheses are all encoded', () => {
    const originalWarn = console.warn;
    console.warn = () => 0;
    try {
        const body = bodyOf("x=')'");
        assert.ok(!/[()]/.test(body), `parens should be encoded: ${body}`);
        assert.ok(body.includes('%29'));
    } finally {
        console.warn = originalWarn;
    }
});

test('excessively nested parentheses are all encoded', () => {
    const originalWarn = console.warn;
    console.warn = () => 0;
    try {
        const body = bodyOf(`${'('.repeat(33)}${')'.repeat(33)}`);
        assert.ok(!/[()]/.test(body));
    } finally {
        console.warn = originalWarn;
    }
});

test('non-ASCII is percent-encoded', () => {
    assert.strictEqual(bodyOf("'…'"), "'%E2%80%A6'");
});

test('validator rejects bad input', () => {
    assert.throws(() => validateEncodedBookmarklet('http://x'), /javascript:/);
    assert.throws(() => validateEncodedBookmarklet('javascript:a b'), /percent-encoded/);
    assert.throws(() => validateEncodedBookmarklet('javascript:/a'), /starts with/);
    assert.throws(() => validateEncodedBookmarklet('javascript:(a'), /parentheses/);
});

// Validate every dist/ bookmarklet
const configPath = path.join(__dirname, '..', 'bookmarklets.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
for (const bookmarklet of config.bookmarklets) {
    test(`dist/${bookmarklet.file}`, () => {
        const url = fs.readFileSync(path.join(__dirname, '..', 'dist', bookmarklet.file), 'utf8');
        validateEncodedBookmarklet(url);
    });
}

console.log(`Encoding tests passed: ${passed}`);
