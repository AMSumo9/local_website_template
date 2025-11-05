# North Brisbane Mortgage Brokers - Microsite #1

**Project:** local_website_brisbane_001
**Region:** North Brisbane
**Status:** Phase 1 - In Development
**Launch Target:** Q1 2025

---

## 🎯 Project Overview

This is the **first microsite** in a multi-site strategy to dominate mortgage broker searches across Brisbane and Queensland. This site specifically targets **North Brisbane suburbs** with a narrow focus on mortgage broking services.

### Geographic Coverage
**Primary Service Area:**
- North Lakes (110 searches/month @ $24.18 CPC)
- Chermside (40 searches @ $35.36 CPC)
- Aspley (90 searches @ $0 CPC - untapped!)
- Redcliffe (50 searches @ $25.12 CPC)
- Caboolture (50 searches @ $35.70 CPC)
- Strathpine, Petrie, Kedron, Nundah, Albany Creek, Stafford

**Extended Coverage:**
- Brendale, Mango Hill, Kallangur, Deception Bay

### Market Opportunity
- **Total Monthly Search Volume:** 2,640+ searches
- **Average CPC:** $26.50
- **SEO Difficulty:** 14-23 (Low-Medium)
- **Competition Level:** Low-Medium
- **Viability Score:** ⭐⭐⭐⭐⭐ (5/5)

### Primary Target Keywords
1. mortgage broker north brisbane (880 searches, $19.88 CPC)
2. mortgage broker brisbane north (720 searches, $26.18 CPC)
3. mortgage broker north lakes (110 searches, $24.18 CPC)
4. mortgage broker aspley (90 searches, $0 CPC)
5. mortgage broker chermside (40 searches, $35.36 CPC)

---

## 🏗️ Technology Stack

- **Framework:** Astro 4.0
- **Styling:** TailwindCSS 3.4
- **Language:** TypeScript 5.9
- **SEO:** Complete schema.org implementation
- **Build:** Static site generation (SSG)

---

## 📁 Project Structure

```
/
├── src/
│   ├── components/         # Reusable UI components
│   ├── layouts/           # Page templates
│   ├── pages/             # Routes (dynamic + static)
│   ├── content/           # Content collections
│   │   ├── locations/     # North Brisbane suburb pages
│   │   ├── services/      # Service variations
│   │   ├── posts/         # Blog articles
│   │   └── testimonials/  # Client reviews
│   ├── data/
│   │   └── project.json   # North Brisbane configuration
│   └── assets/
│
├── _reference/            # Documentation & strategy
│   ├── BRISBANE_KEYWORD_ANALYSIS.md
│   ├── MULTI_MICROSITE_STRATEGY_REPORT.md
│   ├── CONTENT_GENERATION_PROMPTS.md
│   ├── DEPLOYMENT_CHECKLIST.md
│   └── KEYWORD_DATA_TEMPLATE.csv
│
└── public/
    └── pdfs/              # Lead magnets
```

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# Site available at http://localhost:4321
```

### Build
```bash
npm run build
npm run preview
```

---

## 📝 Content Requirements

### Location Pages (Priority 1)
Create markdown files in `src/content/locations/` for:

1. **Hub Page:** `/locations/north-brisbane.md`
2. **Suburb Pages:**
   - north-lakes.md (High priority - 110 searches)
   - chermside.md (High priority - $35 CPC)
   - aspley.md (High priority - $0 CPC, no competition!)
   - redcliffe.md
   - caboolture.md
   - strathpine.md
   - petrie.md
   - kedron.md
   - nundah.md
   - albany-creek.md

### Service Pages (Priority 2)
Create markdown files in `src/content/services/`:

1. home-loans-north-brisbane.md
2. first-home-buyers-north-brisbane.md (High volume)
3. investment-property-loans.md
4. refinancing-north-brisbane.md (Highest CPC $42-48!)
5. construction-loans.md

### Blog Content (Priority 3)
Create in `src/content/posts/`:

- North Brisbane property market updates
- First home buyer guides
- Suburb profiles (e.g., "Living in North Lakes: 2025 Guide")
- Refinancing tips
- Investment property strategies

---

## 🎯 SEO Strategy

### On-Page Optimization
- **Homepage:** Target "mortgage broker north brisbane"
- **Hub Page:** Target "mortgage broker brisbane north"
- **Suburb Pages:** Target "[suburb] mortgage broker"
- **Service Pages:** Target "[service] north brisbane"

### Schema Implementation
All pages include:
- LocalBusiness schema
- FinancialService schema
- BreadcrumbList schema
- AggregateRating (from testimonials)
- BlogPosting schema (blog posts)
- FAQPage schema (where applicable)

### Local SEO
- Google Business Profile optimized for "Chermside"
- Service areas: All 15 North Brisbane suburbs
- NAP consistency across all pages
- Local citations and directories

---

## 🔑 Key Configuration

### Update Before Launch

**1. Business Details** (`src/data/project.json`):
- Company ACN and authorised representative number
- Real phone number and email
- Actual office address
- Google Analytics tracking ID
- FormSubmit.co email for lead capture

**2. Persona/Expert**:
- Replace "Sarah Thompson" with actual broker name
- Update bio and credentials
- Add actual broker photo to `/src/assets/images/persona/`

**3. Domain**:
- Purchase: northbrisbanemortgagebroker.com.au
- Or alternative: mortgagebrokernorthbrisbane.com.au
- Update in project.json

**4. Social Media**:
- Create Facebook page
- Create Instagram profile
- Update URLs in project.json

---

## 📊 Multi-Site Strategy Context

This is **Microsite #1** in a planned network of 8+ mortgage broker microsites:

### Phase 1 Sites (0-3 months)
1. **North Brisbane** (This site) ⭐⭐⭐⭐⭐
2. Gold Coast ⭐⭐⭐⭐⭐
3. Brisbane Central/Inner City ⭐⭐⭐⭐☆

### Phase 2 Sites (3-9 months)
4. Toowoomba/Darling Downs
5. Ipswich/West Brisbane
6. Sunshine Coast

### Phase 3 Sites (9-18 months)
7. South Brisbane/Logan
8. East Brisbane/Redlands
9. Regional QLD (Townsville, Mackay, Cairns)

### Strategic Notes
- **Geographic overlap is intentional** - multiple sites can target same suburbs with different personas
- Each site builds brand authority in its region
- Cross-linking between sites strengthens overall network SEO
- Different personas/brands avoid duplicate content penalties

---

## 📈 Success Metrics

### Target KPIs (3 months post-launch)
- **Organic Traffic:** 1,500+ monthly visitors
- **Keyword Rankings:** Top 3 for "mortgage broker north brisbane"
- **Lead Generation:** 20-30 qualified leads/month
- **Conversion Rate:** 3-5% (contact form submissions)

### Expected ROI
- **Investment:** ~$15,000 (content + setup)
- **Monthly Revenue Potential:** $12,000-18,000
- **Payback Period:** 1-2 months

---

## 🛠️ Development Checklist

### Pre-Launch
- [ ] Update project.json with real business details
- [ ] Create all location pages (10 suburbs minimum)
- [ ] Create all service pages (5 services)
- [ ] Write 10+ blog posts
- [ ] Add 20+ testimonials
- [ ] Source/create images for all pages
- [ ] Create lead magnet PDF
- [ ] Set up FormSubmit.co email capture
- [ ] Configure Google Analytics
- [ ] Test build process
- [ ] Test all forms and CTAs

### Launch
- [ ] Deploy to hosting (Netlify/Vercel recommended)
- [ ] Configure custom domain
- [ ] Set up Google Business Profile
- [ ] Submit to Google Search Console
- [ ] Submit sitemap
- [ ] Create local citations (top 15 directories)
- [ ] Set up social media profiles
- [ ] Install Facebook Pixel (if using ads)

### Post-Launch (First 30 Days)
- [ ] Monitor Google Search Console for indexing
- [ ] Track keyword rankings
- [ ] Set up Google Ads campaign (if applicable)
- [ ] Generate reviews (target 10+ in first month)
- [ ] Publish weekly blog content
- [ ] Build initial backlinks
- [ ] Monitor lead quality and conversion rates

---

## 📚 Documentation

Comprehensive strategy documents in `_reference/`:

1. **MULTI_MICROSITE_STRATEGY_REPORT.md** - Full 9-site strategy
2. **BRISBANE_KEYWORD_ANALYSIS.md** - Detailed keyword research
3. **CONTENT_GENERATION_PROMPTS.md** - Content creation templates
4. **DEPLOYMENT_CHECKLIST.md** - Launch workflow
5. **JSON_TO_MD_EXAMPLES.md** - Content formatting guide

---

## 🤝 Next Steps

1. **Content Creation** - Generate location and service pages using prompts in `_reference/`
2. **Image Sourcing** - Collect images for North Brisbane suburbs
3. **Lead Magnet** - Create "North Brisbane First Home Buyer's Guide 2025" PDF
4. **Domain Purchase** - Secure northbrisbanemortgagebroker.com.au
5. **Google Business** - Create GMB listing for Chermside office

---

## 📞 Technical Support

For template issues or questions:
- Review documentation in `_reference/` directory
- Check FIXES_NEEDED.md for common issues
- Test with: `npm run build`

---

## 🎉 Strategic Advantage

**Why North Brisbane First?**
- Strong search volume (2,640 monthly searches)
- Low competition (SEO difficulty 14-23)
- Aspley = $0 CPC (completely untapped market)
- High CPCs indicate strong commercial intent
- Clean geographic identity
- Perfect testing ground for microsite approach

Once this site is ranking well, the template and strategy can be rapidly deployed to Gold Coast (#2 priority) and other regions.

---

**Last Updated:** November 2025
**Next Review:** After Phase 1 launch
**Microsite Status:** Development → Content Creation → Launch → Optimize
