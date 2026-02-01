# Security Policy

## Supported Versions

The following versions of OpenInlets are currently supported with security
updates:

| Version | Supported          |
| ------- | ------------------ |
| 4.1.x   | :white_check_mark: |

## Reporting a Vulnerability

**For security vulnerabilities, please use private disclosure:**

1. **Preferred:** Report via [GitHub Security Advisories](https://github.com/mobilemind/OpenInlets/security/advisories/new)
   - This allows for private, coordinated disclosure
   - You'll receive credit for the discovery
   - We can work together on a fix before public disclosure

2. **Alternative:** If you cannot use GitHub Security Advisories, create a
   private issue or email the maintainer directly (see package.json for contact
   info)

**Please do not report security vulnerabilities via public GitHub issues** as
this may put users at risk before a fix is available.

### What to Include

When reporting a vulnerability, please include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)

### Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Fix Timeline:** Depends on severity, but typically within 30 days for
  high/critical issues

## Release Process

Releases are automated via GitHub Actions when a version tag is pushed.
The release workflow:

1. Verifies the tag version matches `package.json` version
2. Runs security audit
3. Builds all bookmarklets
4. Generates SBOM
5. Creates a release archive
6. Publishes GitHub Release with auto-generated notes
7. Updates gh-pages branch (copies README.md → index.md)

### Creating a Release

```bash
# Update version in package.json
npm version patch  # or minor, or major

# Push with tags (triggers release workflow)
git push --follow-tags

# Or manually create and push a signed tag
git tag -s 4.1.0 -m "Release version 4.0.0"
git push origin 4.1.0
```

## Release Verification

All releases should be signed with GPG/SSH signatures for verification:

### Verifying Signed Tags

```bash
# Verify the signature on a release tag
git verify-tag 4.1.0

# Show tag details with signature
git tag -v 4.1.0
```

### Verifying Signed Commits

```bash
# Show commit signature
git log --show-signature -1 <commit-hash>

# Verify all commits in a range
git log --show-signature origin/main..HEAD
```

### Software Bill of Materials (SBOM)

Each CI build and release generates a Software Bill of Materials (SBOM) in
CycloneDX format. Release SBOMs are attached to GitHub Releases, while CI build
SBOMs are available as workflow artifacts. The SBOM provides transparency into
all dependencies used in the build.

To generate an SBOM locally:

```bash
npm sbom --sbom-format=cyclonedx --omit=dev > sbom.json
```

## Maintainer Security Practices

To ensure the integrity of published packages and repository security:

- **2FA Required:** All project maintainers must enable two-factor authentication
  on their GitHub accounts
- **Signed Commits:** All commits to the main branch must be GPG signed
- **Code Review:** All changes require review and approval before merging
  (via CODEOWNERS)
- **Dependency Security:** Daily automated security scans via Dependabot for
  vulnerabilities, plus weekly version update checks
- **Lockfile Integrity:** npm ci validates package-lock.json integrity (fails
  if corrupted or mismatched)
- **Lifecycle Script Blocking:** Automatic npm lifecycle scripts (preinstall,
  postinstall, prepare) are blocked via `ignore-scripts=true` in `.npmrc` to
  prevent supply chain attacks from malicious packages
- **SBOM Generation:** Software Bill of Materials attached to every release for
  supply chain transparency

### Branch Protection Rules

The `main` branch is protected with the following rules to prevent supply chain
attacks:

#### Required Settings

- **Require pull request reviews before merging**
  - Required approving reviews: 1 (from CODEOWNERS)
  - Dismiss stale pull request approvals when new commits are pushed: ✓
  - Require review from Code Owners: ✓

- **Require status checks to pass before merging**
  - Require branches to be up to date before merging: ✓
  - Required status checks:
    - `Analyze (javascript)` - CodeQL security analysis
    - `build` - Build and test completion across Node.js versions
    - `Lint Code Base` - Code quality and style checks

- **Require signed commits**
  - All commits must be signed with GPG key: ✓
  - This prevents commit impersonation and ensures authenticity

- **Require linear history**
  - Prevent merge commits: ✓
  - Enforce squash or rebase merging for clean history

- **Restrictions**
  - Restrict who can push to matching branches: ✓
  - Only repository administrators can push directly

- **Rules applied to administrators**
  - Admins can push commits to pull request branches (bypass mode: pull_request)
  - Admins still require passing status checks and reviews to merge

- **Allow force pushes**: ✗ (disabled)
- **Allow deletions**: ✗ (disabled)

### Repository Settings

Additional security settings enabled:

- **Vulnerability alerts**: ✓ Enabled (Dependabot alerts)
- **Security updates**: ✓ Automated security PRs via Dependabot
- **Secret scanning**: ✓ Enabled for detecting exposed credentials
- **Push protection**: ✓ Prevents accidental secret commits
- **Private vulnerability reporting**: ✓ Enabled via Security Advisories

## Build Security Considerations

### Terser Optimization Settings

The project uses aggressive Terser optimization settings (including `unsafe`
flags) to minimize bookmarklet size for browser URL length constraints. While
these settings can produce semantically different code in edge cases, they are
considered acceptable for this project because:

1. TypeScript transpiling and aggressive ESLint checks: Bookmarklets are written
   in TypeScript for more type safety, and scanned with aggressive ESLint checks.
2. **Size Requirements**: Bookmarklets must be extremely small to fit within
   browser URL length limits
3. **Code Simplicity**: The source code is straightforward and doesn't rely on
   edge case JavaScript behaviors
4. **Testing**: Each bookmarklet is tested post-minification to verify correct
behavior

These optimization settings do not introduce security vulnerabilities, but
developers should be aware they can change code semantics in rare cases.

### Build Verification

To verify the integrity of a build:

```bash
# Run the full build process
npm run build

# Generate and review SBOM
npm sbom --sbom-format=cyclonedx --omit=dev > sbom.json

# Run security audit
npm audit --audit-level=high

# Test bookmarklets manually in target browsers
```

Sign all commits and tags. Verify signatures before deploying code.

## Bookmarklet Security

### Security Scanning Process

OpenInlets bookmarklets undergo security scanning at the **source code level**
before being built into their final URL-encoded format:

1. **Source Files** (`src/*.ts`) contain the original, readable TypeScript code
2. **ESLint + Security Plugin** scans source files using `eslint-plugin-security`
   with strict security rules
3. **Minification** compresses the code using Terser
4. **URL Encoding** converts the minified code into `javascript:` URI format
   (`dist/*.bookmarklet`)

The final bookmarklet files in `dist/*.bookmarklet` are **intentionally
excluded** from CodeQL JavaScript analysis because they are URL-encoded
JavaScript URIs (not standard JavaScript files). Security scanning occurs on
the source files where the code is readable and parseable.

### Security Configuration

ESLint security rules enabled in `.github/linters/eslint.config.js`:

- `eslint-plugin-security` with recommended rules
- No `eval()` or implied eval allowed
- No unsafe code practices
- No external script injection
- Strict code quality standards

### Runtime Security Context

**Important:** Bookmarklets execute in the user's browser context and have
access to:

- The current page's DOM (Document Object Model)
- Cookies for the current domain
- localStorage and sessionStorage
- Any data visible on the page

>NOTE: None of the bookmarklets in this project use cookies, localStorage,
or sessionStorage.

**Bookmarklets cannot:**

- Access data from other domains (same-origin policy applies)
- Persist across page reloads (they run once when triggered)
- Run automatically (user must manually activate them)
- Bypass Content Security Policy on sites that block `javascript:` URIs

### User Security Recommendations

If you're installing OpenInlets bookmarklets:

1. **Review the source code** - All bookmarklets are open source. Check
   `src/*.ts` to see exactly what each bookmarklet does before installing
2. **Verify the source** - Only install bookmarklets from the official
   [OpenInlets repository](https://github.com/mobilemind/OpenInlets)
3. **Understand the permissions** - Bookmarklets can read page content and
   cookies when you activate them
4. **Check for network requests** - Review if a bookmarklet makes external
   network requests (most OpenInlets bookmarklets only manipulate the current
   page or redirect to known services)
5. **Keep bookmarklets updated** - Security fixes are published through new
   releases

### Bookmarklet Security Checklist (for Developers)

When adding or modifying bookmarklets, verify:

- [ ] No use of `eval()` or `Function()` constructor (blocked by ESLint)
- [ ] No external script injection from untrusted sources
- [ ] No access to sensitive data (cookies, localStorage,
sessionStorage).
- [ ] If a new bookmarklet uses sensitive data, update the README
and this SECURITY document.
- [ ] Clear documentation of what the bookmarklet does
- [ ] Testing in multiple browsers post-minification
- [ ] No credentials or secrets in the code
- [ ] All external URLs use HTTPS
- [ ] Input validation for any user-provided data

### Transparency and Auditability

All OpenInlets bookmarklets are:

- **Open source** - Full source code available in `src/` directory
- **Auditable** - Clear build process from source to bookmarklet
- **Versioned** - Each bookmarklet includes version number
- **Tested** - Validated through automated builds and manual testing
- **Documented** - Purpose and behavior documented in README.md

To audit a bookmarklet, compare the URL-decoded `dist/*.bookmarklet` file with its
corresponding `src/*.ts` source file. The build process is deterministic and
reproducible.
