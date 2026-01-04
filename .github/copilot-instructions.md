# OpenInlets - Copilot Agent Instructions

## Repository Overview

**OpenInlets** is a collection of browser bookmarklet utilities originally
designed to open iOS apps from web pages. The project has evolved to include
bookmarklets that manipulate URLs, detect AWS hosting, and more. It's a small
(~67MB with node_modules), focused TypeScript project that compiles to
minified JavaScript bookmarklets.

- **Language**: TypeScript (src/), JavaScript (scripts/)
- **Target Runtime**: Browser bookmarklets (ES2020)
- **Build Tools**: TypeScript compiler, Terser for minification, Node.js
  scripts
- **Lines of Code**: 16 TypeScript source files in `src/`, 5 Node.js scripts
  in `scripts/`
- **Node Version Required**: >=24.12.0 (strict requirement via
  `engineStrict: true`)
- **npm Version Required**: >=11.6.0
- **Primary Output**: 16 `.bookmarklet` files in `dist/` directory

## Critical Build Instructions

### Environment Setup

**ALWAYS use the correct Node.js and npm versions.** The project uses
`engineStrict: true` and requires:

- Node.js >= 24.12.0
- npm >= 11.6.0

If you get version warnings during `npm ci`, the build may still work but is
not supported.

### Installation

**ALWAYS run this first** before any build or test operations:

```bash
npm ci --prefer-offline
```

- Use `npm ci` (not `npm install`) for reproducible builds
- The `--prefer-offline` flag speeds up installation
- Takes ~2-3 seconds with cache, ~30-60 seconds without

### Build Process

The build has three sequential steps (automatically chained by `npm run build`):

```bash
npm run build
```

This executes:

1. **Compile**: `npm run build:compile` → TypeScript compilation (`tsc`) →
   outputs to `.temp/` directory
2. **Minify**: `npm run build:minify` → Terser minification → outputs to
   `dist/*.js` (temporary)
3. **Bookmarklet**: `npm run build:bookmarklet` → Wraps minified code with
   `javascript:` URL prefix and version → outputs to `dist/*.bookmarklet`

**Expected time**: 3-5 seconds total

### Testing

```bash
npm test
```

This runs `npm run build && npm run verify-build`. The verification ensures:

- All 16 bookmarklets were built
- Calculates total size
- **Expected time**: 5-10 seconds

### Pre-commit Validation

**ALWAYS run before committing** (or the pre-push hook will catch it):

```bash
./preflight
```

This script checks:

1. Shell scripts with `shellcheck` (pre-push, preflight) - skipped if
   shellcheck not installed
2. YAML files with `yamllint` - skipped if yamllint not installed
3. Markdown files with `markdownlint` and `cspell`
4. GitHub Actions with `actionlint` - skipped if actionlint not installed
5. TypeScript/JavaScript with `eslint`
6. npm security audit
7. Verifies pre-push hook is installed at `.git/hooks/pre-push`

**Expected time**: 10-20 seconds with all tools, 5-10 seconds with minimal
tools

**Pre-requisite**: If preflight fails because `.git/hooks/pre-push` doesn't
match `./pre-push`, run:

```sh
cp -fpv pre-push .git/hooks
```

### Linting

ESLint configuration is in `.github/linters/eslint.config.js`:

```bash
npx eslint --config .github/linters/eslint.config.js .
```

**Expected time**: 2-5 seconds

### Full Deployment Build

To build and update README.md with bookmarklet links:

```bash
npm run deploy
```

This runs `npm run build && npm run build:readme` and updates the README.md
file with current bookmarklet code.

## Project Structure

### Source Files

- **`src/*.ts`** - 16 TypeScript bookmarklet source files (human-readable)
  - Each file is a self-contained bookmarklet implementation
  - Uses strict TypeScript configuration (see `tsconfig.json`)
  - Target: ES2020 for modern browser compatibility
  
- **`scripts/*.js`** - 5 Node.js build scripts:
  - `build-bookmarklet.js` - Converts minified JS to bookmarklet URLs
  - `minify.js` - Minifies compiled JavaScript with Terser
  - `update-readme.js` - Updates README.md with bookmarklet links
  - `verify-build.js` - Validates build output
  - `utils.js` - Shared utilities

### Build Artifacts

- **`.temp/*.js`** - TypeScript compiler output (intermediate, gitignored)
- **`dist/*.bookmarklet`** - Final bookmarklet files (16 files, committed to git)

**CRITICAL**: Never examine or review the contents of `dist/*.bookmarklet`
files. These are URL-encoded bookmarklets, not TypeScript or JavaScript. They
start with `javascript:` and contain percent-encoded minified code. **The only
validation needed is that for every `src/*.ts` file basename, there exists
exactly one corresponding `dist/*.bookmarklet` file.** Use `npm run
verify-build` to check this automatically.

### Configuration Files

- **`package.json`** - Dependencies and npm scripts
- **`tsconfig.json`** - TypeScript compiler configuration (src/)
- **`tsconfig.scripts.json`** - TypeScript configuration for scripts (unused currently)
- **`bookmarklets.json`** - Bookmarklet metadata (name, file, version)
- **`.github/linters/eslint.config.js`** - ESLint rules (strict, security-focused)
- **`.github/linters/.markdownlint.json`** - Markdown linting rules
- **`.github/linters/.yaml-lint.yml`** - YAML linting rules
- **`.github/linters/actionlint.yaml`** - GitHub Actions linting rules
- **`.cspell.jsonc`** - Spell checking configuration
- **`.cspell/dictionary-custom.txt`** - Custom word dictionary

### GitHub Actions Workflows

Located in `.github/workflows/`:

1. **`ci.yml`** - NodeJS Build
   - Triggers: push to main/hotfix, PRs to main
   - Matrix: Node 24.x and 25.x
   - Steps: Security audit → Install deps → Build & test → Generate SBOM
   - **Note**: Security audit currently has `continue-on-error: true` until
     Dec 18, 2025 (js-yaml issue)
   - **Timeout**: 5 minutes

2. **`linter.yml`** - Lint Code Base
   - Triggers: push to main/hotfix, PRs to main, manual dispatch
   - Runs: ESLint + Super-Linter (Bash, GitHub Actions, JSON, JSONC, Markdown,
     YAML)
   - **Timeout**: 10 minutes
   - Excludes: `dist/*.bookmarklet` files from linting

3. **`codeql-analysis.yml`** - CodeQL Security Analysis
   - Triggers: push to main/hotfix, PRs to main, weekly schedule, manual
     dispatch
   - Language: JavaScript/TypeScript
   - Config: `.github/codeql-config.yml` (excludes dist/*.bookmarklet)
   - **Timeout**: 10 minutes

4. **`release.yml`** - Release and Deploy
   - Triggers: version tags (e.g., 4.0.0), manual dispatch
   - Steps: Audit → Build → Create release → Deploy to gh-pages
   - **Timeout**: 15 minutes (release), 8 minutes (gh-pages deploy)

## Common Workflows

### Making Code Changes

1. Modify `src/*.ts` files (TypeScript source)
2. Run `npm run build` to compile and generate bookmarklets
3. Run `./preflight` to validate (or wait for pre-push hook)
4. Commit changes (both src/*.ts and dist/*.bookmarklet should be committed)

### Adding a New Bookmarklet

1. Create `src/newbookmarklet.ts` with TypeScript code
2. Add entry to `bookmarklets.json` with name, file
   (`newbookmarklet.bookmarklet`), and version
3. Run `npm run build` - will automatically compile, minify, and create the
   .bookmarklet file
4. Run `npm run deploy` to update README.md with the new bookmarklet link
5. Commit `src/newbookmarklet.ts`, `bookmarklets.json`,
   `dist/newbookmarklet.bookmarklet`, and `README.md`

### Updating Dependencies

```bash
npm update
npm audit fix
npm test
./preflight
```

Check that builds still work after updates.

## Known Issues and Workarounds

### npm Audit Warnings (Temporary)

**Issue**: npm audit may report moderate vulnerabilities in js-yaml transitive
dependency.

**Workaround**: Currently set to `continue-on-error: true` in workflows until
December 18, 2025, or until js-yaml is updated. This is documented in:

- `.github/workflows/ci.yml` (line 39)
- `.github/workflows/release.yml` (line 47)
- `pre-push` script (line 50)

### Node Version Mismatch Warnings

**Issue**: If you see `EBADENGINE Unsupported engine` warnings:

```text
npm warn EBADENGINE required: { node: '>=24.12.0', npm: '>=11.6.0' }
npm warn EBADENGINE current: { node: 'v20.19.6', npm: '10.8.2' }
```

**Workaround**: The build may work but is not officially supported. Upgrade
Node.js and npm to meet the requirements. The project uses `engineStrict: true`
to enforce these requirements.

### Missing Git Hooks

**Issue**: preflight fails with "pre-push and active .git/hooks/pre-push
differ".

**Fix**: Run the following to install the pre-push hook:

```sh
cp -fpv pre-push .git/hooks
```

### Missing Optional Tools

**Issue**: preflight skips checks if optional tools (shellcheck, yamllint,
actionlint, cspell) aren't installed.

**Workaround**: These checks are non-blocking locally but will run in CI.
Install tools for full validation:

```sh
# shellcheck
brew install shellcheck  # or: apt install shellcheck

# yamllint
pip install yamllint

# actionlint
brew install actionlint  # or download from https://github.com/rhysd/actionlint

# cspell
npm install -g cspell
```

## Key Files Reference

**Root Directory**:

- `README.md` - Main documentation with bookmarklet descriptions and
  installation
- `SECURITY.md` - Security policy and vulnerability reporting
- `LICENSE` - MIT License (requires current year: 2014-2026)
- `package.json` - Project metadata and scripts
- `package-lock.json` - Locked dependencies (always commit changes)
- `bookmarklets.json` - Bookmarklet registry (name, file, version)
- `preflight` - Pre-commit validation script (shell)
- `pre-push` - Git pre-push hook (shell)
- `tsconfig.json` - TypeScript compiler configuration

**Directories**:

- `src/` - TypeScript bookmarklet source files (16 files)
- `scripts/` - Node.js build scripts (5 files)
- `dist/` - Built bookmarklet files (16 .bookmarklet files)
- `.github/workflows/` - CI/CD workflows (4 files)
- `.github/linters/` - Linting configurations (4 files)
- `.cspell/` - Spell check dictionary
- `.temp/` - Temporary build artifacts (gitignored)
- `node_modules/` - Dependencies (gitignored)

## Instructions for Coding Agents

1. **Trust these instructions**. Only search for additional information if
   something is incomplete or incorrect.

2. **Always run the build** (`npm run build`) after making code changes to
   TypeScript files.

3. **Always validate** with `./preflight` or `npm test` before committing.

4. **Never examine `dist/*.bookmarklet` contents**. They are URL-encoded
   bookmarklets, not source code. Only verify that the files exist (one per
   `src/*.ts` file).

5. **Commit both source and dist**. Changes to `src/*.ts` require corresponding
   commits of `dist/*.bookmarklet` files.

6. **Use npm ci, not npm install** for reproducible builds.

7. **Check Node/npm versions** if you encounter engine warnings or build
   failures.

8. **ESLint is strict**. The configuration enforces security rules and strict
   coding standards. If eslint fails, fix the issues - don't disable rules.

9. **Super-Linter runs in CI**. Local preflight may skip some checks if tools
   are missing, but CI runs all checks.

10. **GitHub Actions run automatically** on push/PR. Check workflow results if
    CI fails.
