# UtmStrip Maintenance Guide

## Overview

The tracking parameter landscape evolves continuously: ad platforms launch new
click IDs, email platforms rename parameters, and browsers add their own
stripping that shifts expectations. This guide documents a quarterly review
process to keep `src/utmstrip.ts` current and the test infrastructure in sync.

## Quarterly Review Checklist

### Reference Sources to Check

1. **DuckDuckGo** — <https://github.com/duckduckgo/privacy-configuration/blob/main/features/tracking-parameters.json>
2. **ClearURLs** — <https://rules.clearurls.xyz/data.minify.json> (or GitHub
   rules file)
3. **Firefox** — <https://firefox-source-docs.mozilla.org/toolkit/components/antitracking/anti-tracking/query-stripping/index.html>
4. **Brave** — <https://github.com/brave/brave-core/blob/master/components/query_filter/utils.cc/>

### Review Steps

1. Fetch each reference source (links above)
2. Extract parameter names → compare against `universalExact`,
   `universalPrefixes`, and host-specific arrays in `src/utmstrip.ts`
3. For each param in reference sources but NOT in `utmstrip.ts`:
   research it → decide add/skip
4. For each param in `utmstrip.ts` NOT in any reference source: research if
   deprecated → decide remove
5. Update `src/utmstrip.ts` + `scripts/test-utmstrip.js` +
   `tests/utmstrip-test-urls.json` together (all three files must stay in sync)

### Decision Criteria

**Add a parameter if:**

- Two or more reference sources list it, OR
- A major platform (Google, Meta, Microsoft, TikTok, LinkedIn, Amazon) has
  published docs

**Remove a parameter if:**

- The originating platform no longer exists, OR
- No reference source has listed it for 2+ consecutive quarterly reviews, AND
- No community reports of it in the wild (check GitHub issues)

**Keep parameters that are:**

- Rare but real (confirmed real-world examples), even if not in reference
  sources

## After Making Changes

1. Update `tests/utmstrip-test-urls.json` (add test cases **before** code
   changes)
2. Update `scripts/test-utmstrip.js` to match new `src/utmstrip.ts` arrays
3. Update `src/utmstrip.ts` with the new parameters
4. Update `/* cSpell: ignore ... */` comments in both `src/utmstrip.ts` and
   `scripts/test-utmstrip.js` if new words would be flagged as misspellings
5. Run: `npm test`
6. Run: `npm run deploy`
7. File a PR; CI will validate the full build + tests

## Quarterly Review Schedule

| Approx. Timing | Focus                                                  |
| -------------- | ------------------------------------------------------ |
| Q1 - January   | Post-holiday changes; new January GA4 params           |
| Q2 - April     | Spring marketing; browser spring privacy updates       |
| Q3 - July      | Mid-year ad platform changes; iOS/Safari summer betas  |
| Q4 - October   | Pre-holiday; browser major releases; platform launches |

Each review should take approximately 1 hour: 30 min research, 20 min code
& test changes, 10 min PR.

## Parameter Decision Log

Track decisions here to avoid re-researching the same parameters each quarter.

### Added Parameters (with rationale)

| Parameter      | Platform     | Added   | Rationale                       |
| -------------- | ------------ | -----   | ------------------------------- |
| `rdt_cid`      | Reddit Ads   | 2026-Q1 | A top-5 ad platform in DDG list |
| `ScCid`        | Snapchat Ads | 2026-Q1 | Major mobile ad platform in DDG |
| `qclid`        | Quora Ads    | 2026-Q1 | Confirmed in Quora Ads docs     |
| `tblci`        | Taboola      | 2026-Q1 | Native ads on news/media sites  |
| `cjevent`      | CJ Affiliate | 2026-Q1 | Commission Junction affiliates  |
| `ef_id`        | Adobe        | 2026-Q1 | Adobe Advertising Cloud IDs     |
| `outbrain_cid` | Outbrain     | 2026-Q1 | Native ad ID                    |

### Skipped Parameters (with reasoning)

| Parameter           | Reason to Skip                              |
| ------------------- | ------------------------------------------- |
| `click_id`          | Too generic,not safely stripped universally |
| `distinct_id`       | Mixpanel ID — functional, could break sites |
| `branch_match_id`   | Branch.io linking used for native apps      |
| `c_n`, `c_p`, `c_t` | Matomo tracking — rare in shared URLs       |
| `mytarget_click_id` | VK/Mail.ru regional Russian platform        |

## Automated Monitoring

A GitHub Actions workflow (`.github/workflows/tracking-params-check.yml`) runs
monthly on the 1st of each month. It fetches the DuckDuckGo tracking parameters
list, compares against `src/utmstrip.ts`, and opens a GitHub issue if new
parameters are detected.

This gives early warning before quarterly reviews so researchers aren't
surprised by accumulated drift.
