# Code Fixes Needed for Template Completion

This document lists all code changes required to complete the local business microsite template. Use this checklist with Claude Code in VS Code.

---

## Priority Fixes (Required)

### 1. Fix Testimonials Schema Inconsistency

**File:** `src/content/config.ts`

**Issue:** The testimonials schema is missing the `service` field that appears in documentation examples.

**Current schema (lines 67-76):**
```typescript
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    location: z.string().optional(),
    review: z.string(),
    rating: z.number().min(1).max(5).optional(),
    date: z.string().transform((str) => new Date(str)).optional(),
  }),
});
```

**Required change:**
Add `service` field to match documentation examples and allow testimonials to be categorized by service type.

```typescript
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(),
    location: z.string().optional(),
    service: z.string().optional(),  // <-- ADD THIS LINE
    review: z.string(),
    rating: z.number().min(1).max(5).optional(),
    date: z.string().transform((str) => new Date(str)).optional(),
  }),
});
```

**Why:** This ensures consistency with:
- JSON conversion examples in documentation
- Skill reference files
- Mock content examples (like `jane-s-bendigo.md`)

---

### 2. Search and Remove Template References

**Files:** All files in `src/` directory (EXCLUDING `_reference/mock-content/`)

**Issue:** Need to verify no placeholder or mock data remains in template files.

**Search for:**
- "Bendigo" (case-insensitive)
- "Eaglehawk"
- "Golden Square"
- Any other location-specific references from mock content

**Command to run:**
```bash
# From project root
grep -r "Bendigo" src/ --exclude-dir=_reference
grep -r "bendigo" src/ --exclude-dir=_reference
grep -r "Eaglehawk" src/ --exclude-dir=_reference
grep -r "eaglehawk" src/ --exclude-dir=_reference
```

**Expected result:** No matches (0 results)

**If matches found:** Review and remove/replace with template placeholders

**Exception:** The following files SHOULD have placeholders and are OK:
- `src/data/project.json` - All values should be `YOUR_COMPANY_NAME`, `YOUR_PHONE`, etc.
- `src/pages/about.md` - Should be generic template
- `astro.config.mjs` - Should have `https://yourdomain.com`

---

### 3. Test Build

**Command:**
```bash
npm install
npm run build
```

**Expected behavior:**
- Build should START without code/syntax errors
- Build will FAIL with "no content" errors - THIS IS EXPECTED for empty content folders
- What matters: No TypeScript errors, no import errors, no schema validation errors in CODE

**Success criteria:**
- ✅ TypeScript compiles without errors
- ✅ Astro components render without errors
- ✅ Schema definitions valid
- ✅ Imports resolve correctly
- ⚠️ "Empty content collection" errors are EXPECTED and OK

**If errors occur:**
- Fix any code syntax errors
- Fix any schema validation errors
- Fix any import path errors
- Content errors can be ignored

---

## Optional Performance Enhancements

### 4. Add Preload Directives for Critical Resources

**File:** `src/layouts/BaseLayout.astro`

**Current state:** 
- Google Fonts preconnected ✅ (lines 36-37)
- Font Awesome loaded from CDN ✅ (line 40)
- No explicit preload for critical assets

**Optional additions (add after line 40):**

```html
<!-- Preload critical assets for better LCP -->
<link rel="preload" as="image" href="/images/hero/default-hero.jpg" />
<link rel="preload" as="image" href="/og-default.jpg" />
```

**Note:** Only add preload for assets that appear "above the fold" on most pages. Too many preloads can hurt performance.

**Benefit:** Slightly improves Largest Contentful Paint (LCP) score.

**Trade-off:** Adds extra HTTP requests. Only worthwhile for truly critical resources.

---

### 5. Verify Lazy Loading Implementation

**Files:** All Astro components using images

**Check:** Ensure all images use Astro's `<Image>` component (not `<img>` tags)

**Astro's `<Image>` component automatically:**
- Lazy loads images below the fold
- Converts to WebP format
- Optimizes file sizes
- Generates srcset for responsive images

**Example of correct usage:**
```astro
---
import { Image } from 'astro:assets';
---
<Image src="/images/hero.jpg" alt="Description" width={800} height={600} />
```

**Search for legacy `<img>` tags:**
```bash
grep -r "<img" src/components/
grep -r "<img" src/layouts/
```

**If found:** Convert to `<Image>` component where appropriate.

**Exception:** Some `<img>` tags are fine for:
- External images (from URLs)
- Decorative images that don't need optimization
- SVG icons (already optimized)

---

## Documentation Placement

Place these completed documentation files in the `_reference/` directory:

- [ ] Copy `CONTENT_GENERATION_PROMPTS.md` → `_reference/CONTENT_GENERATION_PROMPTS.md`
- [ ] Copy `JSON_TO_MD_EXAMPLES.md` → `_reference/JSON_TO_MD_EXAMPLES.md`
- [ ] Copy `KEYWORD_DATA_TEMPLATE.csv` → `_reference/KEYWORD_DATA_TEMPLATE.csv`
- [ ] Copy `DEPLOYMENT_CHECKLIST.md` → `_reference/DEPLOYMENT_CHECKLIST.md`

These files are now complete and ready to use for all future site deployments.

---

## Git Workflow

Once all fixes are complete:

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Complete template with comprehensive documentation and schema fixes

- Added service field to testimonials schema for consistency
- Verified no mock data remains in template files
- Added complete documentation: prompts, examples, keywords, deployment
- Tested build (code compiles, content errors expected)
- Template ready for production use"

# Push to main branch
git push origin main
```

---

## Validation Checklist

Before considering template complete:

**Code Quality:**
- [ ] Testimonials schema includes `service` field
- [ ] No "Bendigo" or other mock location names in `src/` (except `_reference/mock-content/`)
- [ ] `npm run build` runs without CODE errors (content errors OK)
- [ ] All imports resolve correctly
- [ ] No TypeScript errors

**Documentation:**
- [ ] All 4 documentation files created and placed in `_reference/`
- [ ] Documentation is production-ready (no TODOs, no placeholders)
- [ ] Examples are complete and realistic
- [ ] Instructions are clear and actionable

**Template State:**
- [ ] `project.json` has placeholder values (YOUR_COMPANY_NAME, etc.)
- [ ] `about.md` is generic template
- [ ] Content folders empty (`locations/`, `services/`, `posts/`, `testimonials/`)
- [ ] No build artifacts committed (`.astro/`, `dist/`, `node_modules/` in .gitignore)

**Git:**
- [ ] All changes committed with clear message
- [ ] Pushed to GitHub main branch
- [ ] No sensitive data committed (API keys, real client info, etc.)

---

## Testing New Site Deployment

Once template is complete, test the workflow with a new site:

1. Clone template repo
2. Update `project.json` with real business data
3. Run keyword research
4. Use `local-microsite-generator` skill to generate content
5. Convert JSON to markdown files
6. Place files in appropriate content directories
7. Run `npm run build` - should complete successfully
8. Deploy and follow `DEPLOYMENT_CHECKLIST.md`

If any issues arise, update template accordingly.

---

## Notes

- The template is intentionally "empty" of content - this is correct
- Build will fail until content is added - this is expected behavior
- Focus on code quality and documentation completeness
- All examples and prompts have been thoroughly tested
- The skill provides comprehensive context for content generation

---

## Success Criteria

Template is complete when:
- ✅ All required schema fields present and consistent
- ✅ No mock data in template files
- ✅ Code compiles without errors
- ✅ All documentation files complete and accurate
- ✅ Changes committed and pushed to GitHub
- ✅ Template can be cloned and deployed for new sites immediately

The template is now a production-ready foundation for deploying 50+ local business microsites with consistent quality and SEO best practices.
