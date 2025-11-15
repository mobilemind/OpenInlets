# Security Policy

## Supported Versions

The following versions of OpenInlets are currently supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 3.6.x   | :white_check_mark: |

## Reporting a Vulnerability

**For security vulnerabilities, please use private disclosure:**

1. **Preferred:** Report via [GitHub Security Advisories](https://github.com/mobilemind/OpenInlets/security/advisories/new)
   - This allows for private, coordinated disclosure
   - You'll receive credit for the discovery
   - We can work together on a fix before public disclosure

2. **Alternative:** If you cannot use GitHub Security Advisories, create a private issue or email the maintainer directly (see package.json for contact info)

**Please do not report security vulnerabilities via public GitHub issues** as this may put users at risk before a fix is available.

### What to Include

When reporting a vulnerability, please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)

### Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Fix Timeline:** Depends on severity, but typically within 30 days for high/critical issues

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
git tag -s 3.6.2 -m "Release version 3.6.2"
git push origin 3.6.2
```

## Release Verification

All releases should be signed with GPG/SSH signatures for verification:

### Verifying Signed Tags

```bash
# Verify the signature on a release tag
git verify-tag 3.6.1

# Show tag details with signature
git tag -v 3.6.1
```

### Verifying Signed Commits

```bash
# Show commit signature
git log --show-signature -1 <commit-hash>

# Verify all commits in a range
git log --show-signature origin/main..HEAD
```

### Software Bill of Materials (SBOM)

Each CI build and release generates a Software Bill of Materials (SBOM) in CycloneDX
format. Release SBOMs are attached to GitHub Releases, while CI build SBOMs are
available as workflow artifacts. The SBOM provides transparency into all dependencies
used in the build.

To generate an SBOM locally:

```bash
npm sbom --sbom-format=cyclonedx --omit=dev > sbom.json
```

## Maintainer Security Practices

To ensure the integrity of published packages and repository security:

- **2FA Required:** All project maintainers must enable two-factor authentication on their GitHub accounts
- **Signed Commits:** All commits to the main branch must be GPG signed
- **Code Review:** All changes require review and approval before merging (via CODEOWNERS)
- **Dependency Security:** Daily automated security scans via Dependabot for vulnerabilities, plus weekly version update checks
- **Lockfile Integrity:** npm ci validates package-lock.json integrity (fails if corrupted or mismatched)
- **SBOM Generation:** Software Bill of Materials attached to every release for supply chain transparency

### Branch Protection Rules

The `main` branch is protected with the following rules to prevent supply chain attacks:

#### Required Settings
- **Require pull request reviews before merging**
  - Required approving reviews: 1 (from CODEOWNERS)
  - Dismiss stale pull request approvals when new commits are pushed: ✓
  - Require review from Code Owners: ✓

- **Require status checks to pass before merging**
  - Require branches to be up to date before merging: ✓
  - Required status checks:
    - `Analyze (javascript)` - CodeQL security analysis
    - `Build Summary` - Build and test completion across Node.js versions
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
  - Include administrators: ✓
  - Even admins must follow branch protection rules

- **Allow force pushes**: ✗ (disabled)
- **Allow deletions**: ✗ (disabled)

#### Additional Protections
- **Lock branch**: Consider enabling for release branches
- **Do not allow bypassing the above settings**: ✓

### Repository Settings

Additional security settings enabled:
- **Vulnerability alerts**: ✓ Enabled (Dependabot alerts)
- **Security updates**: ✓ Automated security PRs via Dependabot
- **Secret scanning**: ✓ Enabled for detecting exposed credentials
- **Push protection**: ✓ Prevents accidental secret commits
- **Private vulnerability reporting**: ✓ Enabled via Security Advisories

## Build Security Considerations

### Uglify Optimization Settings

The project uses aggressive UglifyJS optimization settings (including `unsafe`
flags) to minimize bookmarklet size for browser URL length constraints. While
these settings can produce semantically different code in edge cases, they are
considered acceptable for this project because:

1. **Size Requirements**: Bookmarklets must be extremely small to fit within
   browser URL length limits
2. **Code Simplicity**: The source code is straightforward and doesn't rely on
   edge case JavaScript behaviors
3. **Testing**: Each bookmarklet is tested post-minification to verify correct
behavior

These optimization settings do not introduce security vulnerabilities, but
developers should be aware they can change code semantics in rare cases.

### Build Verification

To verify the integrity of a build:

```bash
# Run the full build process
npx grunt

# Generate and review SBOM
npm sbom --sbom-format=cyclonedx --omit=dev > sbom.json

# Run security audit
npm audit --audit-level=moderate

# Test bookmarklets manually in target browsers
```

Sign all commits and tags. Verify signatures before deploying code.
