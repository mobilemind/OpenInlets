const globals = require("globals");
const js = require("@eslint/js");
const security = require("eslint-plugin-security");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

const baseRules = {
    ...js.configs.recommended.rules,
    "array-callback-return": "error",
    "accessor-pairs": "error",
    "arrow-body-style": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "error",
    "complexity": ["error", 32],
    "consistent-return": "error",
    "consistent-this": "error",
    "curly": "error",
    "default-case": "error",
    "func-name-matching": "error",
    "guard-for-in": "error",
    "id-denylist": "error",
    "id-match": "error",
    "max-depth": "error",
    "max-nested-callbacks": "error",
    "max-params": ["error", 5],
    "max-statements": ["error", 55],
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-static-block": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-plusplus": "error",
    "no-proto": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "object-shorthand": "error",
    "operator-assignment": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "warn",
    "prefer-destructuring": "error",
    "prefer-object-spread": "error",
    "prefer-template": "warn",
    "prefer-numeric-literals": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "radix": "error",
    "require-await": "error",
    "sort-imports": "error",
    "sort-keys": "off",
    "symbol-description": "error",
    "unicode-bom": "error",
    "vars-on-top": "error",
    ...security.configs['recommended'].rules,
    "security/detect-non-literal-regexp": "off"
};

module.exports = [
    {
        files: ["src/*.js"],
        ignores: [".cspell.json","*.json", "**/*{.,-}min.js", "node_modules/*", "dist/*.bookmarklet"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {...globals.browser, ...globals.node},
            parserOptions: {
                ecmaFeatures: {globalReturn: false, impliedStrict: true}
            },
            sourceType: "script"
        },
        plugins: {security},
        rules: {
            ...baseRules,
            "init-declarations": "error",
            "no-await-in-loop": "error",
            "no-console": "error",
            "no-inline-comments": "error",
            "no-param-reassign": "error"
        }
    },
    {
        files: ["src/*.ts"],
        ignores: [".cspell.json","*.json", "**/*{.,-}min.js", "node_modules/*", "dist/*.bookmarklet"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
                ecmaVersion: 2020,
                sourceType: "script"
            },
            globals: {...globals.browser, ...globals.node}
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            security
        },
        rules: {
            ...baseRules,
            ...tsPlugin.configs.strict.rules,
            "init-declarations": "error",
            "no-await-in-loop": "error",
            "no-console": "error",
            "no-inline-comments": "error",
            "no-param-reassign": "error",
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": "error",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "error"
        }
    },
    {
        files: ["scripts/*.js", ".github/linters/*.js"],
        ignores: [".cspell.json","*.json", "**/*{.,-}min.js", "node_modules/*", "dist/*.bookmarklet"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.node,
            parserOptions: {
                ecmaFeatures: {globalReturn: false, impliedStrict: true}
            },
            sourceType: "script"
        },
        plugins: {security},
        rules: {
            ...baseRules,
            "no-await-in-loop": "off",
            "no-console": "off",
            "no-inline-comments": "off",
            "no-param-reassign": "off",
            "security/detect-non-literal-fs-filename": "off"
        }
    }
];
