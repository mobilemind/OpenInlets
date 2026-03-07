# UTMStrip Implementation Reference

This file contains extracted param lists for the refactored implementation.

## Universal Params (All Hosts)

### Exact Matches
```typescript
const universalExact = [
    // Generic tracking
    'assetType', 'elqTrack', 'mkt_tok', 'originalReferer', 'referrer',
    'terminal_id', 'trk', 'trkCampaign', 'trkInfo',
    // *id suffix params (expanded)
    'anid', 'assetid', 'campaignid', 'eid', 'gclid', 'recipientid', 'siteid',
    // Facebook (when fb_ or fbclid present)
    'fbclid', 'hrc', 'refsrc',
    // Google Analytics gcl*
    'gclsrc',
    // HubSpot
    '_hsenc', '_hsmi',
    // MailChimp
    'mc_cid', 'mc_eid',
    // Marketo
    'iesrc',
];
```

### Prefix Matches
```typescript
const universalPrefixes = [
    // Facebook
    'fb_',           // fb_action_ids, fb_action_types, fb_ref, fb_source
    'action_',       // action_object_map, action_ref_map, action_type_map
    // Google Analytics
    'utm_',          // utm_campaign, utm_cid, utm_content, utm_design, utm_medium,
                     // utm_name, utm_place, utm_pubreferrer, utm_reader, utm_source,
                     // utm_swu, utm_term, utm_userid, utm_viz_id
    'ga_',           // ga_campaign, ga_cid, ga_content, etc. (same suffixes as utm_)
    // HubSpot
    'hmb_',          // hmb_campaign, hmb_medium, hmb_source
    // Matomo
    'pk_',           // pk_campaign, pk_content, pk_kwd, pk_medium, pk_source
];
```

## Host-Specific Params

### AliExpress (`hostStr.includes('aliexpress.')`)
```typescript
const aliexpressExact = [
    'btsid', 'ws_ab_test',
    'spm', 'scm',              // from s[cp]m
    'algo_evid', 'algo_pvid',  // from algo_[ep]vid
];
const aliexpressPrefixes = [
    'aff_',  // aff_platform, aff_trace_key
];
```

### Amazon (`/(|\.)amazon\.com$/.test(hostStr)`)
```typescript
const amazonExact = [
    // Line 23: _encoding, ie, linkCode, linkId, pf, psc, ref_, tag
    '_encoding', 'ie', 'linkCode', 'linkId', 'pf', 'psc', 'ref_', 'tag',
    // Line 25: content-id, crid, cv_ct_cx, language, qid, sprefix, sr, th
    'content-id', 'crid', 'cv_ct_cx', 'language', 'qid', 'sprefix', 'sr', 'th',
    // Line 26: asc(_campaign|_refurl|_source|subtag)
    'asc_campaign', 'asc_refurl', 'asc_source', 'ascsubtag',
    // Line 27: dib(_tag)?
    'dib', 'dib_tag',
    // Line 24: p[df]_rd_* (finite list from research)
    'pd_rd_i', 'pd_rd_r', 'pd_rd_w', 'pd_rd_wg',
    'pf_rd_i', 'pf_rd_m', 'pf_rd_p', 'pf_rd_r', 'pf_rd_s', 'pf_rd_t',
];
```

### YouTube (`/(m|www)\.youtube\.com$/.test(hostStr) || hostStr === 'youtu.be' || hostStr === 'www.youtube-nocookie.com'`)
```typescript
const youtubeExact = [
    'ac', 'annotation_id', 'app', 'feature', 'gclid', 'kw', 'src_vid',
];
```

## Conditional Checks (Optimization)

The original code uses `.includes()` checks before applying certain rules:
- `searchStr.includes('fb_')` → apply Facebook fb_* rules
- `searchStr.includes('action_')` → apply action_*_map rules
- `searchStr.toLowerCase().includes('id=')` → apply *id rules
- `searchStr.includes('ga_') || searchStr.includes('utm_')` → apply GA rules
- `/[?&]_hs(enc|mi)=/.test(searchStr)` → apply HubSpot _hs* rules
- `searchStr.includes('hmb_')` → apply HubSpot hmb_* rules
- `searchStr.includes('cm_')` → apply IBM cm_* rules (EXCLUDED)
- `/[?&]mc_[ce]id=/.test(searchStr)` → apply MailChimp rules
- `/[?&](iesrc|mkt_tok)=/.test(searchStr)` → apply Marketo rules
- `searchStr.includes('pk_')` → apply Matomo rules

These can be preserved as optimizations or removed if URLSearchParams iteration is fast enough.

## Excluded from Scope

### IBM Coremetrics (`cm_mmca\d+`)
The numeric pattern `cm_mmca1`, `cm_mmca2`, etc. is **excluded** from this refactor.
- Keep original regex: `/([?&])cm_(mmc|mmca\d+|re|sp)=[^&]+/ig`
- Or remove entirely if IBM tracking is deprecated

## Path Cleanup

```typescript
// Remove /amp/ or /amp from end of pathname
pathStr = pathStr.replace(/\/amp\/?$/, '');
```

## Post-Strip Cleanup (Current)

The current implementation does manual string cleanup:
```typescript
searchStr = searchStr.replace(/&&+/g, '&').replace(/&$/, '');
searchStr = searchStr[0] === '?' ? searchStr.replace(/^\?&/, '?') : `?${searchStr}`;
searchStr = searchStr.length < 3 ? '' : searchStr;
```

With URLSearchParams, this is **not needed** - `.toString()` produces clean output.

## URL Reconstruction

```typescript
const newURL = `${location.protocol}//${location.host}${pathStr}${searchStr}${location.hash}`;
```

With URL object:
```typescript
url.pathname = cleanedPath;
url.search = params.toString();
const newURL = url.href;  // or url.toString()
```
