# Deployment Checklist (V2)

Complete checklist for deploying a local business microsite from development to live production.

**Version 2 Updates:**
- Author/E-E-A-T strategy configuration
- Business model clarification (service provider vs lead generation)
- Spelling localization checks
- AI writing hallmarks removal
- Color scheme guidance
- Automated validation scripts

---

## Table of Contents

1. [Pre-Deployment Preparation](#pre-deployment-preparation)
2. [Content Setup](#content-setup)
3. [Technical Configuration](#technical-configuration)
4. [Testing & Quality Assurance](#testing--quality-assurance)
5. [Deployment](#deployment)
6. [Post-Deployment SEO](#post-deployment-seo)
7. [Monitoring & Optimization](#monitoring--optimization)

---

## Pre-Deployment Preparation

### Business Information Gathering

- [ ] **Company Details**
  - Legal business name
  - Trading name (if different)
  - ABN/ACN
  - Business registration documents
  - Licenses and certifications

- [ ] **Contact Information (NAP)**
  - Business phone number (dedicated line)
  - Business email address
  - Physical address (if applicable) OR service area only
  - Operating hours
  - Preferred contact method

- [ ] **Expert/Founder Information**
  - Full name
  - Job title
  - Professional credentials
  - Years of experience
  - Professional headshot photo (high-res)
  - Short bio (100-150 words)

- [ ] **Brand Assets**
  - Logo (SVG and PNG formats)
  - Brand colors (hex codes)
  - Font choices (if custom)
  - Any existing brand guidelines

- [ ] **Social Media Profiles**
  - Facebook page URL
  - Instagram profile URL
  - LinkedIn profile URL
  - TikTok profile URL (if applicable)
  - Twitter/X profile URL (if applicable)

### NEW: Author/E-E-A-T Strategy (V2)

- [ ] **Author Strategy Defined**
  - Chosen strategy: Individual / Company / Team
  - Read `AUTHOR_SETUP_GUIDE.md` for detailed guidance
  - If using dummy data, defined consistent persona first
  - No fabricated credentials or licenses

- [ ] **Individual Person Strategy** (if applicable)
  - Real, verifiable name collected
  - Professional credentials documented
  - Years of experience confirmed
  - Professional headshot obtained (high-res)
  - Biographical information written (100-150 words)
  - Trust badges are accurate and verifiable

- [ ] **Company/Team Strategy** (if applicable)
  - Company name and year established
  - Team overview and combined experience
  - Business licenses and certifications
  - Company logo or team photo obtained
  - Corporate trust signals documented

### NEW: Business Model Clarification (V2)

- [ ] **Business Model Defined**
  - Type: Service Provider / Lead Generation / Referral
  - Decision documented in project.json
  - Content strategy aligned with business model
  - CTA language appropriate for model
  - Legal disclaimers match model type

### NEW: Color Scheme Selection (V2)

- [ ] **Brand Colors Chosen**
  - Read `BRANDING_GUIDE.md` for industry guidance
  - Primary color selected (with reasoning)
  - Dark variant created (10-20% darker)
  - Accent color created (80-90% lighter)
  - Colors tested for contrast (WCAG AA: 4.5:1 minimum)
  - Colors tested with logo and imagery
  - Colorblind-friendly (tested with simulator)

### Keyword Research Completed

- [ ] **Primary Keywords Identified**
  - 10-20 high-value keywords
  - Search volume verified
  - Search intent classified
  - Competition assessed
  - Local search volume confirmed

- [ ] **Keyword Data Organized**
  - Hub location keywords (2-3 per hub)
  - Spoke location keywords (1-2 per spoke)
  - Service page keywords (2-3 per service)
  - Blog post keywords (10-15 topics)
  - Keyword spreadsheet completed

### Content Generation Completed

- [ ] **Location Pages**
  - Hub location content (400-500 words)
  - Spoke location content (300-400 words each)
  - All location FAQs written
  - Local expertise demonstrated
  - Unique content per location

- [ ] **Service Pages**
  - **V2: Services count is a multiple of 3 (3, 6, 9, etc.) for grid layout**
  - 3-5 service pages written (400-600 words each)
  - Service FAQs included
  - Clear CTAs on each page
  - Process explanations provided
  - **V2: No template niche references if different niche**

- [ ] **Blog Posts**
  - 10-15 initial blog posts (800-1500 words each)
  - Mix of informational and commercial intent
  - Featured images sourced or created
  - Author bio included

- [ ] **Testimonials**
  - 5-10 client testimonials gathered
  - Client permission obtained
  - Anonymized appropriately (initials + location)
  - Service type specified for each

---

## Content Setup

### Project Configuration

- [ ] **Update `project.json`**
  - Company name and tagline
  - Industry and service details
  - Expert/founder information
  - Contact NAP details
  - Social media URLs
  - Brand colors
  - Opening hours
  - Service areas
  - Geographic coordinates (main location)
  - Legal notice/disclaimer

- [ ] **Convert JSON to Markdown**
  - Location pages → `src/content/locations/`
  - Service pages → `src/content/services/`
  - Blog posts → `src/content/posts/`
  - Testimonials → `src/content/testimonials/`
  - Verify YAML frontmatter structure
  - Check markdown formatting

- [ ] **Update `about.md`**
  - Replace generic template with real content
  - Include expert bio and credentials
  - Add mission/values
  - Include CTA

### Image Assets

- [ ] **Gather Required Images**
  - Expert/founder headshot (optimized)
  - Logo files (multiple formats)
  - Featured images for blog posts
  - Location images (if applicable)
  - Service-related images
  - Open Graph default image (1200x630px)

- [ ] **Optimize Images**
  - Compress file sizes (<200KB each)
  - Use WebP format where possible
  - Set proper dimensions
  - Add descriptive filenames

- [ ] **Upload to Correct Directories**
  - `/public/images/persona/` - Expert photos
  - `/public/images/blog/` - Blog featured images
  - `/public/images/locations/` - Location images
  - `/public/images/services/` - Service images
  - `/public/` - Logo, favicon, OG image

---

## Technical Configuration

### Astro Configuration

- [ ] **Update `astro.config.mjs`**
  - Set correct site URL (production domain)
  - Verify sitemap integration enabled
  - Check trailing slash setting

- [ ] **Verify `robots.txt.ts`**
  - Correct site URL
  - Sitemap URL correct
  - Allow/disallow rules appropriate

### Domain & Hosting

- [ ] **Domain Setup**
  - Domain purchased and registered
  - DNS configured correctly
  - SSL certificate obtained (should be automatic with most hosts)

- [ ] **Hosting Platform Selected**
  - Netlify / Vercel / Cloudflare Pages configured
  - GitHub repository connected
  - Build settings configured
  - Environment variables set (if needed)

### Analytics & Tracking

- [ ] **Google Analytics Setup**
  - GA4 property created
  - Tracking ID obtained
  - Update tracking ID in `project.json`
  - Enhanced measurement enabled
  - Goals/conversions configured

- [ ] **Additional Tracking (Optional)**
  - Facebook Pixel (if using FB ads)
  - Hotjar or similar (heatmaps/recordings)
  - Call tracking number setup

---

## Testing & Quality Assurance

### NEW: V2 Automated Validation

- [ ] **Run Validation Scripts**
  - Run `npm run validate` - Check services count (must be multiple of 3)
  - Run `npm run pre-launch` - Comprehensive content validation
  - Run `npm run check-all` - Both validations together
  - Fix all errors before proceeding
  - Review and address all warnings

### NEW: V2 Content Quality Checks

- [ ] **AI Writing Hallmarks Removed**
  - No em dashes (—) in content
  - No "It's worth noting" or similar AI phrases
  - No "Navigate the landscape" or flowery metaphors
  - No "leverage" or "utilize" (use "use" instead)
  - Read `CONTENT_WRITING_GUIDELINES.md` for full list
  - Content sounds natural when read aloud

- [ ] **Spelling Consistency**
  - Locale configured in `project.json` (AU/GB/US)
  - All content uses consistent regional spelling
  - British: colour, organise, centre, licence (noun)
  - American: color, organize, center, license (noun)
  - Run pre-launch script to catch inconsistencies
  - Read `SPELLING_GUIDE.md` for reference

- [ ] **Niche Consistency**
  - No references to "Bendigo" if different city
  - No references to "Mortgage Broker" if different service
  - All content matches your actual niche/location
  - Pre-launch script catches template references

### Local Testing

- [ ] **Build Site Locally**
  - Run `npm install`
  - Run `npm run build`
  - Verify no build errors
  - Check for missing images
  - Test all internal links

- [ ] **Content Quality Check**
  - No placeholder text remaining
  - No "Bendigo" references in template files
  - All location content unique
  - Keyword density 1-2% on all pages
  - CTAs present on all pages
  - Contact information correct everywhere

- [ ] **Browser Testing**
  - Test in Chrome, Firefox, Safari, Edge
  - Mobile responsive on iOS and Android
  - Forms work correctly
  - Modal opens/closes properly
  - Navigation functions correctly

### SEO Validation

- [ ] **On-Page SEO**
  - All pages have unique titles (<60 chars)
  - All pages have unique meta descriptions (150-155 chars)
  - H1 tags present and optimized
  - Schema markup validates (test with Google Rich Results Test)
  - Canonical URLs correct
  - Open Graph tags present
  - Twitter Card tags present

- [ ] **Technical SEO**
  - sitemap.xml generating correctly
  - robots.txt accessible and correct
  - 404 page exists and styled
  - No broken links
  - Images have alt text
  - Page load speed <3 seconds

- [ ] **Accessibility**
  - ARIA labels on interactive elements
  - Keyboard navigation works
  - Color contrast meets WCAG AA standards
  - Screen reader friendly

---

## Deployment

### Pre-Deployment Final Checks

- [ ] **Final Content Review**
  - All placeholder content replaced
  - Phone numbers correct
  - Email addresses correct
  - Social links correct
  - Privacy policy complete
  - Legal disclaimers appropriate

- [ ] **Final Technical Check**
  - No console errors
  - No broken images
  - Forms submit correctly
  - Analytics tracking confirmed
  - Mobile performance optimized

### Go Live

- [ ] **Deploy to Production**
  - Push to main branch (if auto-deploy)
  - OR manually trigger deploy
  - Verify successful deployment
  - Check production URL loads correctly

- [ ] **DNS Propagation**
  - Wait for DNS propagation (up to 48 hours)
  - Test site from multiple locations/networks
  - Verify SSL certificate active (HTTPS)

- [ ] **Post-Deploy Verification**
  - All pages load correctly
  - Images display properly
  - Forms submit successfully
  - Analytics tracking working
  - No 404 errors
  - Mobile version displays correctly

---

## Post-Deployment SEO

### Google Business Profile Setup

- [ ] **Create/Claim Google Business Profile**
  - Search for business on Google Maps
  - Claim existing listing OR create new
  - Verify ownership (postcard/phone/email)
  - Complete all profile sections:
    - Business name (match website exactly)
    - Category (primary + secondary)
    - Service area or physical location
    - Phone number (match website NAP)
    - Website URL
    - Hours of operation
    - Services offered
    - Business description (750 chars max)
    - Attributes (payment methods, accessibility, etc.)

- [ ] **Optimize GBP Listing**
  - Upload high-quality photos (exterior, interior, team, services)
  - Add business logo
  - Set primary and secondary categories
  - Add products/services with descriptions
  - Enable messaging (if desired)
  - Create initial posts (services, offers, updates)
  - Respond to any existing reviews

- [ ] **GBP Ongoing Management**
  - Post weekly updates
  - Respond to reviews within 24 hours
  - Add Q&A entries
  - Update photos monthly
  - Monitor insights/analytics

### Google Search Console Setup

- [ ] **Add Property to Google Search Console**
  - Visit Google Search Console
  - Add property (use Domain property type)
  - Verify ownership via DNS TXT record OR HTML file upload
  - Set preferred domain (www vs non-www)

- [ ] **Submit Sitemap**
  - Navigate to Sitemaps section
  - Submit sitemap URL: `https://yourdomain.com/sitemap-index.xml`
  - Verify sitemap processed successfully
  - Check for any errors

- [ ] **Configure GSC Settings**
  - Set target country (Australia)
  - Add all team members with appropriate permissions
  - Set up email alerts for critical issues
  - Enable email notifications for manual actions

- [ ] **Initial GSC Monitoring**
  - Check coverage report for errors
  - Monitor indexing status
  - Review Core Web Vitals
  - Check mobile usability report

### Local Citations Submission

Submit business to top 10-15 local directories with consistent NAP (Name, Address, Phone).

**Priority Citations (Australia):**

- [ ] **Google Business Profile** (completed above)
- [ ] **Bing Places for Business**
  - https://www.bingplaces.com
  - Complete business profile
  - Match NAP exactly

- [ ] **True Local**
  - https://www.truelocal.com.au
  - Create free listing
  - Add business details, photos, description

- [ ] **Yellow Pages Australia**
  - https://www.yellowpages.com.au
  - Claim or create listing
  - Complete profile with categories

- [ ] **White Pages Australia**
  - https://www.whitepages.com.au
  - Business listing submission
  - Verify phone number

- [ ] **Hotfrog Australia**
  - https://www.hotfrog.com.au
  - Free business directory
  - Add detailed description

- [ ] **Local Business Directory (Industry-Specific)**
  - Finance: MFAA, FBAA directories (if mortgage broker)
  - Trade: HIA, Master Builders (if construction)
  - Professional: Industry association directories
  - Local: Chamber of Commerce directory

- [ ] **Yelp Australia**
  - https://www.yelp.com.au
  - Claim business page
  - Add photos and description

- [ ] **StartLocal**
  - https://www.startlocal.com.au
  - Free business listing
  - Complete all fields

- [ ] **Brownbook**
  - https://www.brownbook.net
  - International directory with AU presence
  - Full business details

**Citation Guidelines:**
- Use EXACT same business name across all citations
- Use EXACT same phone number (don't use multiple numbers)
- Use EXACT same address format (if physical location)
- Use consistent business categories
- Add business description where possible
- Include website URL
- Add business hours
- Upload logo/photos where allowed

### Initial Backlinks Strategy

Build foundational backlinks to establish domain authority.

**Immediate Opportunities (0-2 weeks):**

- [ ] **Directory Links**
  - Submit to quality Australian business directories (see citations above)
  - Industry-specific directories
  - Local Chamber of Commerce
  - Professional associations

- [ ] **Social Profile Links**
  - Complete Facebook business page
  - Create LinkedIn company page
  - Instagram business profile
  - Any relevant social platforms
  - Link back to website from all profiles

- [ ] **Local Business Listings**
  - Submit to local news/business sections
  - Community organization listings
  - Sponsorship/partnership pages (if applicable)

**Short-Term Strategy (2-8 weeks):**

- [ ] **Content Partnerships**
  - Guest post on complementary local businesses
  - Partner with local organizations for content
  - Contribute expert insights to industry blogs
  - Local news mentions (press releases)

- [ ] **Resource Link Building**
  - Create valuable resources (guides, calculators)
  - Reach out to sites linking to similar resources
  - Offer as updated/better alternative

- [ ] **Testimonial Links**
  - Provide testimonials to software/tools you use
  - Include link back to website in testimonial
  - Common for: CRM, accounting software, industry tools

**Ongoing Strategy (2-6 months):**

- [ ] **Content Marketing**
  - Publish blog posts regularly (2-4 per month)
  - Share on social media
  - Reach out to industry sites for shares
  - Build topical authority

- [ ] **Local PR**
  - Local news outlets
  - Community events
  - Charity involvement
  - Speaking engagements
  - Industry awards/recognition

- [ ] **Industry Engagement**
  - Comment on industry forums/discussions
  - Answer questions on Quora, Reddit (with value)
  - Participate in professional networks
  - Contribute to industry publications

**Backlink Quality Guidelines:**
- Focus on relevant, local, and industry-specific links
- Avoid paid link schemes or PBNs
- Natural anchor text (branded, URL, generic)
- Diversify link sources
- Quality over quantity always
- Monitor with Ahrefs/SEMrush

---

## Monitoring & Optimization

### First 30 Days

- [ ] **Daily Monitoring**
  - Check Google Search Console for errors
  - Monitor analytics for traffic
  - Review form submissions
  - Respond to any GBP reviews
  - Check site uptime

- [ ] **Weekly Tasks**
  - Publish new blog post
  - Update GBP post
  - Review keyword rankings (if tracking)
  - Check backlink progress
  - Respond to any inquiries/leads

- [ ] **First Month Report**
  - Pages indexed in Google
  - Keyword rankings positions
  - Traffic sources and volume
  - Conversion rate (form submissions, calls)
  - GBP insights (views, actions)
  - Backlinks acquired

### Ongoing Optimization (Monthly)

- [ ] **SEO Monitoring**
  - Keyword ranking changes
  - Organic traffic trends
  - Click-through rates (GSC)
  - Core Web Vitals scores
  - Index coverage issues

- [ ] **Content Updates**
  - Publish 2-4 new blog posts
  - Update old content with fresh data
  - Add new testimonials
  - Refresh service pages seasonally

- [ ] **Technical Maintenance**
  - Check for broken links
  - Review page load speeds
  - Update dependencies
  - Monitor uptime
  - Backup site files

- [ ] **Conversion Optimization**
  - A/B test CTAs
  - Review form submission rates
  - Analyze user behavior (heatmaps)
  - Optimize high-traffic pages
  - Improve pages with high bounce rates

---

## Launch Checklist Summary

**Pre-Launch (Must Complete):**
- [ ] All content created and converted to markdown
- [ ] `project.json` fully updated
- [ ] Images optimized and uploaded
- [ ] Domain and hosting configured
- [ ] Site builds without errors
- [ ] All pages tested in multiple browsers
- [ ] Analytics tracking installed and tested

**Launch Day:**
- [ ] Deploy to production
- [ ] Verify site live and accessible
- [ ] Submit sitemap to Google Search Console
- [ ] Create/optimize Google Business Profile
- [ ] Begin citation submissions

**First Week:**
- [ ] Complete top 10 citation submissions
- [ ] Set up social media profiles
- [ ] Begin initial backlink outreach
- [ ] Publish first post-launch blog post
- [ ] Monitor for any technical issues

**First Month:**
- [ ] Complete all 15 priority citations
- [ ] Publish 4 blog posts
- [ ] Acquire 10-20 quality backlinks
- [ ] Respond to any reviews/inquiries
- [ ] Review first month analytics

---

## Notes

- This checklist should be customized for each specific site deployment
- Some items may not apply depending on business type and goals
- Timeline estimates assume resources available and content prepared
- SEO results typically visible in 3-6 months, not immediately
- Consistent effort in content and link building drives long-term success

---

## Resources

**SEO Tools:**
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- Google Business Profile: https://www.google.com/business
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev

**Citation Checkers:**
- Moz Local: https://moz.com/products/local
- BrightLocal: https://www.brightlocal.com
- Whitespark: https://whitespark.ca

**Keyword Research:**
- Ahrefs: https://ahrefs.com
- SEMrush: https://www.semrush.com
- Google Keyword Planner: https://ads.google.com/home/tools/keyword-planner
