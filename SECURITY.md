# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 3.6.x   | :white_check_mark: |

## Reporting a Vulnerability

Create an issue to report a security vulnerability.
I'll update reported vulnerabilities using Issues.
See <https://github.com/mobilemind/OpenInlets/issues>

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

Each CI build generates a Software Bill of Materials (SBOM) in CycloneDX format, available as a workflow artifact. The SBOM provides transparency into all dependencies used in the build.

To generate an SBOM locally:

```bash
npm sbom --sbom-format=cyclonedx --omit=dev > sbom.json
```

## Build Security Considerations

### Uglify Optimization Settings

The project uses aggressive UglifyJS optimization settings (including `unsafe` flags) to minimize bookmarklet size for browser URL length constraints. While these settings can produce semantically different code in edge cases, they are considered acceptable for this project because:

1. **Size Requirements**: Bookmarklets must be extremely small to fit within browser URL length limits
2. **Code Simplicity**: The source code is straightforward and doesn't rely on edge case JavaScript behaviors
3. **Testing**: Each bookmarklet is tested post-minification to verify correct behavior

These optimization settings do not introduce security vulnerabilities, but developers should be aware they can change code semantics in rare cases.

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

All commits and tags should be signed. Verify signatures before deploying code.
