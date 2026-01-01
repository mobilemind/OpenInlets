const globals = require("globals");
const js = require("@eslint/js");
const security = require("eslint-plugin-security");

module.exports = [
    {
        files: [".github/linters/eslint.config.js", "scripts/*.js", "src/*.js"],
        ignores: [".cspell.json","*.json", "**/*{.,-}min.js", "node_modules/*", "web/*.js"],
        languageOptions: {
            ecmaVersion: 2020, // ES2020 - matches Terser target for bookmarklets
            globals: {
                ...globals.browser,
                ...globals.node
            },
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: false,
                    impliedStrict: true
                }
            },
            sourceType: "script"
        },
        plugins: {
            security
        },
        rules: {
            // Eslint - http://eslint.org/docs/rules/
            ...js.configs.recommended.rules,
            // Possible Problems
            "array-callback-return": "error",
            "no-await-in-loop": "error",
            "no-console": "error",
            "no-template-curly-in-string": "error",
            // Suggestions
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
            "init-declarations": "error",
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
            "no-inline-comments": "error",
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
            "no-param-reassign": "error",
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
            "no-var": "error", // ES2020: enforce const/let, no var
            "no-void": "error",
            "no-warning-comments": "error",
            "object-shorthand": "error",
            "operator-assignment": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "warn",
            "prefer-destructuring": "error",
            "prefer-object-spread": "error", // ES2020: use {...obj} instead of Object.assign
            "prefer-template": "warn", // ES2020: encourage template literals
            "prefer-numeric-literals": "error",
            "prefer-promise-reject-errors": "error",
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "radix": "error",
            "require-await": "error",
            "sort-imports": "error",
            "sort-keys": "off",
            "symbol-description": "error",
            "vars-on-top": "error",
            // Layout & Formatting
            "unicode-bom": "error",
            // security - https://github.com/nodesecurity/eslint-plugin-security
            ...security.configs['recommended'].rules,
//             "security/detect-non-literal-fs-filename": "off",
            "security/detect-non-literal-regexp": "off"
        }
    }
];
