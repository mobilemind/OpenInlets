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
- **Lines of Code**: 21 TypeScript source files in `src/`, 6 Node.js scripts
  in `scripts/`
- **Node Version Required**: >=24.13.1 (strict requirement via
  `engineStrict: true`)
- **npm Version Required**: >=11.8.0
- **Primary Output**: 21 `.bookmarklet` files in `dist/` directory

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

- All 21 bookmarklets were built
- Calculates total size
- **Expected time**: 5-10 seconds

### Pre-push Validation

The `pre-push` git hook runs automatically before every push. It performs:

1. Hook drift check (ensures `.git/hooks/pre-push` matches `./pre-push`)
2. `package-lock.json` existence check
3. npm security audit
4. ESLint on all TypeScript and JavaScript source (`npx eslint .`)
5. Full build (`npm run build`)
6. Spell checking with `cspell` (if installed)
7. Version consistency checks (git tag, package.json, SECURITY.md)
8. LICENSE year check

Additional checks run in CI (`linter.yml`):

- Shell script linting with `shellcheck`
- GitHub Actions validation with `actionlint`
- YAML validation with `yamllint`
- Markdown linting with `markdownlint`
- JSON/JSONC validation

**Pre-requisite**: If the pre-push hook is not installed or out of sync, run:

```sh
cp -fpv pre-push .git/hooks
```

### Linting

ESLint configuration is in `eslint.config.js` (project root, auto-discovered):

```bash
npx eslint .
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

- **`src/*.ts`** - 21 TypeScript bookmarklet source files (human-readable)
  - Each file is a self-contained bookmarklet implementation
  - Uses strict TypeScript configuration (see `tsconfig.json`)
  - Target: ES2020 for modern browser compatibility
  
- **`scripts/*.js`** - 6 Node.js build/test scripts:
  - `build-bookmarklet.js` - Converts minified JS to bookmarklet URLs
  - `minify.js` - Minifies compiled JavaScript with Terser
  - `test-utmstrip.js` - UTM strip parameter test suite
  - `update-readme.js` - Updates README.md with bookmarklet links
  - `verify-build.js` - Validates build output
  - `utils.js` - Shared utilities

### Build Artifacts

- **`.temp/*.js`** - TypeScript compiler output (intermediate, gitignored)
- **`dist/*.bookmarklet`** - Final bookmarklet files (21 files, committed to git)

**CRITICAL**: Never examine or review the contents of `dist/*.bookmarklet`
files. These are URL-encoded bookmarklets, not TypeScript or JavaScript. They
start with `javascript:` and contain percent-encoded minified code. **The only
validation needed is that for every `src/*.ts` file basename, there exists
exactly one corresponding `dist/*.bookmarklet` file (plus any listed in
`bookmarklets.json`).** Use `npm run verify-build` to check this
automatically.

### Configuration Files

- **`package.json`** - Dependencies and npm scripts
- **`tsconfig.json`** - TypeScript compiler configuration (src/)
- **`tsconfig.scripts.json`** - TypeScript configuration for scripts (unused currently)
- **`bookmarklets.json`** - Bookmarklet metadata (name, file, version)
- **`eslint.config.js`** - ESLint rules (strict, security-focused)
- **`.markdownlint.json`** - Markdown linting rules
- **`.yamllint.yml`** - YAML linting rules
- **`.github/actionlint.yaml`** - GitHub Actions linting rules
- **`.cspell.jsonc`** - Spell checking configuration
- **`.cspell/dictionary-custom.txt`** - Custom word dictionary

### GitHub Actions Workflows

Located in `.github/workflows/`:

1. **`ci.yml`** - NodeJS Build
   - Triggers: push to main/hotfix, PRs to main
   - Matrix: Node 24.x and 25.x
   - Steps: Security audit → Install deps → Build & test → Generate SBOM
   - **Timeout**: 5 minutes

2. **`linter.yml`** - Lint Code Base
   - Triggers: push to main/hotfix, PRs to main, manual dispatch
   - Runs: ESLint, markdownlint, yamllint, JSON/JSONC validation, shellcheck,
     actionlint
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
3. Run `npm test` to validate (or wait for pre-push hook)
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

```sh
npm update
npm audit fix
npm test
```

Check that builds still work after updates.

## Known Issues and Workarounds

### Node Version Mismatch Warnings

**Issue**: If you see `EBADENGINE Unsupported engine` warnings:

```text
npm warn EBADENGINE required: { node: '>=24.13.1', npm: '>=11.8.0' }
npm warn EBADENGINE current: { node: 'v20.19.6', npm: '10.8.2' }
```

**Workaround**: The build may work but is not officially supported. Upgrade
Node.js and npm to meet the requirements. The project uses `engineStrict: true`
to enforce these requirements.

### Missing Git Hooks

**Issue**: Pre-push hook fails with "pre-push and active .git/hooks/pre-push
differ".

**Fix**: Run the following to install the pre-push hook:

```sh
cp -fpv pre-push .git/hooks
```

### Missing Optional Tools

**Issue**: Some checks are skipped if optional tools (cspell) aren't installed
locally.

**Workaround**: `cspell` is optional for local spell checking. Other linting
tools (shellcheck, yamllint, actionlint) run in CI via `linter.yml`. Install
cspell for full local validation:

```sh
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
- `pre-push` - Git pre-push hook (shell)
- `tsconfig.json` - TypeScript compiler configuration

**Directories**:

- `src/` - TypeScript bookmarklet source files (16 files)
- `scripts/` - Node.js build scripts (5 files)
- `dist/` - Built bookmarklet files (16 .bookmarklet files)
- `.github/workflows/` - CI/CD workflows (5 files)
- Root linter configs: `eslint.config.js`, `.markdownlint.json`, `.yamllint.yml`
- `.github/actionlint.yaml` - GitHub Actions linting rules
- `.cspell/` - Spell check dictionary
- `.temp/` - Temporary build artifacts (gitignored)
- `node_modules/` - Dependencies (gitignored)

## Instructions for Coding Agents

1. **Trust these instructions**. Only search for additional information if
   something is incomplete or incorrect.

2. **Always run the build** (`npm run build`) after making code changes to
   TypeScript files.

3. **Always validate** with `npm test` before committing.

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

9. **Linter configs use convention over configuration.** `eslint.config.js`,
   `.markdownlint.json`, and `.yamllint.yml` are in the project root where
   their tools auto-discover them. Do not add explicit `--config` flags —
   the default discovery is intentional.

10. **CI runs individual linters** (ESLint, markdownlint, yamllint, JSON/JSONC
    validation, shellcheck, actionlint) directly on the Ubuntu runner — no
    Docker or Super-Linter.

11. **GitHub Actions run automatically** on push/PR. Check workflow results if
    CI fails.
