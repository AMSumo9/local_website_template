# Content Generation Prompts

Complete prompt library for generating all content types for local business microsites. These prompts are designed to work with Claude and produce JSON output that can be converted to markdown files.

---

## Table of Contents

1. [Location Pages](#location-pages)
2. [Service Pages](#service-pages)
3. [Blog Posts](#blog-posts)
4. [Quality Control](#quality-control)
5. [Usage Guidelines](#usage-guidelines)

---

## Location Pages

### Prompt 1A: Single Location Page

Use this for generating ONE location at a time.

```
I need you to create content for a location page for my [INDUSTRY/SERVICE] business.

**Business Details:**
- Company Name: [YOUR_COMPANY_NAME]
- Service Type: [e.g., mortgage broker, tree removal]
- Primary Service: [e.g., home loans]
- Expert Name: [YOUR_EXPERT_NAME]
- Target Audience: [e.g., homebuyers, property investors]

**Location Details:**
- City/Suburb: [LOCATION_NAME]
- State: [STATE]
- Is this a hub location?: [Yes/No]
- Surrounding areas served: [LIST SUBURBS]
- Geographic coordinates: [LAT, LONG] (use Google Maps)

**Target Keywords:**
[PASTE KEYWORDS FROM YOUR RESEARCH]

Example format:
- mortgage broker [location] (320/mo, Commercial)
- home loans [location] (180/mo, Transactional)

**Content Requirements:**
- Compelling title (60 chars max) with primary keyword
- Meta description (155 chars) - commercial intent, includes keyword
- Location content (300-500 words):
  - Demonstrate local expertise
  - Mention 2-3 local landmarks or community features
  - Explain why locals should choose our service
  - Natural keyword integration (1-2% density, NO stuffing)
  - Transactional/commercial focus (guide to action)
- Create 4-6 key benefits specific to this location
- Generate 5-8 location-specific FAQs potential clients would ask
- If hub location: Brief mentions of surrounding suburbs
- If spoke location: Mention parent hub city

**Content Quality Standards:**
- NO keyword stuffing (natural language)
- HIGH-VALUE content (answer real questions, provide genuine insights)
- TRANSACTIONAL focus (guide users toward conversion)
- LOCAL EXPERTISE demonstration (specific knowledge)
- Minimum 300 words

**Output as JSON matching this structure:**
```json
{
  "slug": "location-name",
  "title": "Primary Keyword | Company Name",
  "meta_description": "155 character description with commercial intent",
  "city_name": "Location Name",
  "state": "STATE",
  "subtitle": "Brief tagline for this location",
  "geo_lat": "-00.0000",
  "geo_long": "000.0000",
  "last_updated": "2025-11-02",
  "is_hub": true/false,
  "order": 1,
  "has_physical_location": false,
  "show_founder": true,
  "area_served": [
    {"name": "Location Name", "postcode": "0000"},
    {"name": "Surrounding Suburb", "postcode": "0000"}
  ],
  "key_benefits": [
    {
      "icon": "fas fa-handshake",
      "title": "Benefit Title",
      "description": "Benefit description specific to this location"
    }
  ],
  "property_insights": [
    {
      "label": "Median House Price",
      "value": "$000,000",
      "source": "Source, Date"
    }
  ],
  "faqs": [
    {
      "question": "Location-specific question?",
      "answer": "Detailed, helpful answer"
    }
  ],
  "content": "Full 300-500 word markdown content here. Include H2 headings for sections. Demonstrate local knowledge. Natural keyword use. Guide toward conversion."
}
```
```

---

### Prompt 1B: Batch Location Pages (RECOMMENDED)

Use this for generating MULTIPLE locations at once (more consistent, faster).

```
I need you to create content for MULTIPLE location pages for my [INDUSTRY/SERVICE] business. I will provide all data in a structured format, and you should generate content for ALL locations maintaining consistency.

**Business Details:**
- Company Name: [YOUR_COMPANY_NAME]
- Service Type: [e.g., mortgage broker]
- Primary Service: [e.g., home loans]
- Expert Name: [YOUR_EXPERT_NAME]
- Target Audience: [e.g., homebuyers, property investors]
- Geographic Focus: [e.g., Central Victoria, North Brisbane]

**Location Data:**
[PASTE ALL LOCATION ROWS FROM YOUR KEYWORD SPREADSHEET]

Example format:
```
Location 1: Bendigo, VIC, Hub
Coordinates: -36.7570, 144.2794
Keywords: mortgage broker bendigo (320/mo, Commercial), home loans bendigo (180/mo, Transactional)
Surrounding: Eaglehawk, Golden Square, Strathfieldsaye
Order: 1

Location 2: Eaglehawk, VIC, Spoke (parent: Bendigo)
Coordinates: -36.7352, 144.2678
Keywords: mortgage broker eaglehawk (45/mo, Commercial)
Surrounding: Bendigo, California Gully
Order: 2

Location 3: Golden Square, VIC, Spoke (parent: Bendigo)
Coordinates: -36.7789, 144.2891
Keywords: home loans golden square (30/mo, Transactional)
Surrounding: Bendigo, Long Gully
Order: 3
```

**Requirements for EACH location:**
- Unique, compelling title with primary keyword (60 chars)
- Unique meta description (155 chars) - commercial intent
- Location-specific content (300-500 words):
  - Demonstrate local knowledge
  - Mention local landmarks/features
  - Natural keyword use (1-2% density, NO stuffing)
  - Conversion-focused
  - Different content for each location (no duplication)
- 4-6 key benefits relevant to THIS specific location
- 5-8 location-specific FAQs
- Hub pages: Brief mentions of spoke locations
- Spoke pages: Link back to hub, mention parent city

**Content Strategy:**
- NO duplicate content between locations
- Each location must feel unique and authentic
- Focus on HIGH-VALUE, transactional content
- Answer: "Why choose us in THIS specific location?"
- Demonstrate real local expertise

**Content Quality Standards:**
- 1-2% keyword density (natural integration)
- Answer real client questions
- Provide genuine local insights
- Guide toward conversion (consultation, call, form)
- Professional, authoritative tone

**Output as JSON array with one object per location:**
```json
[
  {
    "slug": "bendigo",
    "title": "...",
    "meta_description": "...",
    // ... (same structure as single location)
  },
  {
    "slug": "eaglehawk",
    // ...
  }
]
```

**CRITICAL:** Generate ALL locations in a single response for consistency.
```

---

## Service Pages

### Prompt 2A: Single Service Page

```
Create content for a service page for my [INDUSTRY] business.

**Business Details:**
- Company Name: [YOUR_COMPANY_NAME]
- Industry: [e.g., financial services, arboriculture]
- Geographic Focus: [e.g., Bendigo region, North Brisbane]
- Expert Name: [YOUR_EXPERT_NAME]

**Service Details:**
- Service Name: [e.g., Home Loans, Tree Removal, SEO Consulting]
- Target Keywords: [PASTE KEYWORDS]
  
  Example:
  - home loan refinancing (890/mo, Transactional)
  - refinance mortgage (450/mo, Commercial)

- Related Services: [LIST 2-3 RELATED SERVICES]
- Target Audience: [WHO NEEDS THIS SERVICE?]

**Requirements:**
- Compelling service title with primary keyword
- Meta description (155 chars) - commercial intent, keyword included
- Service description (400-600 words):
  - What the service is and why clients need it
  - How our process works (step-by-step if applicable)
  - What makes our approach unique/better
  - Benefits of choosing us for this service
  - NO keyword stuffing (natural language)
  - Conversion-focused (clear path to action)
- 4-6 key benefits of this specific service
- 5-8 service-specific FAQs clients commonly ask
- Font Awesome icon suggestion (e.g., "fas fa-home", "fas fa-tree")
- Brief excerpt (1-2 sentences) for service listings

**Content Quality:**
- High-value content (NO generic fluff)
- Specific, actionable information
- Answer real client concerns
- Natural keyword integration (1-2% density)
- Clear conversion path (what to do next)

**Tone:** Professional, helpful, expert, trustworthy, action-oriented

**Output as JSON:**
```json
{
  "slug": "service-name",
  "title": "Service Name | Company Name",
  "meta_description": "155 character description with commercial intent",
  "service_type": "Service Category",
  "icon": "fas fa-icon-name",
  "excerpt": "Brief 1-2 sentence description for listings",
  "key_benefits": [
    {
      "icon": "fas fa-check",
      "title": "Benefit Title",
      "description": "Specific benefit description"
    }
  ],
  "faqs": [
    {
      "question": "Common service question?",
      "answer": "Detailed, helpful answer"
    }
  ],
  "content": "Full 400-600 word markdown content. Include ## H2 headings for sections like 'Our Process', 'Why Choose Us', 'Get Started Today'. Natural keyword use. Clear CTA at end."
}
```
```

---

### Prompt 2B: Batch Service Pages (RECOMMENDED)

```
Create content for ALL service pages for my [INDUSTRY] business in a single batch for consistency.

**Business Details:**
- Company Name: [YOUR_COMPANY_NAME]
- Industry: [INDUSTRY]
- Geographic Focus: [LOCATIONS YOU SERVE]
- Expert Name: [EXPERT_NAME]
- Target Audience: [PRIMARY AUDIENCE]

**Services to Create:**
[LIST ALL SERVICES WITH KEYWORDS AND RELATED SERVICES]

Example:
```
Service 1: Home Loans
Keywords: 
- home loans (3200/mo, Transactional)
- first home buyer loans (890/mo, Transactional)
- investment property loans (450/mo, Commercial)
Related Services: Refinancing, Investment Property Finance
Target: First-time buyers, upgraders, investors

Service 2: Refinancing
Keywords:
- refinance mortgage (720/mo, Transactional)
- lower home loan rate (180/mo, Commercial)
- mortgage refinancing (340/mo, Transactional)
Related Services: Home Loans, Debt Consolidation
Target: Existing homeowners looking to save

Service 3: Investment Property Finance
Keywords:
- investment property loans (450/mo, Commercial)
- investor home loans (280/mo, Commercial)
Related Services: Home Loans, Commercial Finance
Target: Property investors

Service 4: [ADDITIONAL SERVICES]
```

**Requirements for EACH service:**
- Unique title with primary keyword
- Meta description (155 chars) - commercial intent
- Service content (400-600 words):
  - What it is, why needed, how it works, what makes us different
  - High-value, specific, actionable
  - NO generic fluff or filler
  - Natural keyword integration (1-2% density)
  - Clear path to conversion
- 4-6 key benefits specific to this service
- 5-8 FAQs addressing real client questions
- Font Awesome icon
- Brief excerpt for listings

**Content Quality Standards:**
- NO duplicate content between services
- Each service should feel distinct
- Answer real questions
- Provide specific insights
- Natural keyword use
- Professional, expert tone

**Output as JSON array:**
```json
[
  {
    "slug": "home-loans",
    "title": "...",
    // ... (same structure as single service)
  },
  {
    "slug": "refinancing",
    // ...
  }
]
```

**CRITICAL:** Generate ALL services in one response for consistency.
```

---

## Blog Posts

### Prompt 3A: Single Blog Post

```
Write a blog post for my [INDUSTRY] business targeting [LOCATION/NICHE].

**Business Context:**
- Company: [YOUR_COMPANY_NAME]
- Service: [PRIMARY_SERVICE]
- Target Audience: [WHO ARE WE HELPING?]
- Geographic Focus: [LOCATION OR REGION]
- Expert: [EXPERT_NAME]

**Post Details:**
- Topic: [BLOG_TOPIC]
- Primary Keyword: [KEYWORD]
- Search Intent: [Informational/Commercial]
- Target Word Count: 800-1500 words
- Related Services to mention: [SERVICES]
- Related Locations to mention: [LOCATIONS]

**Requirements:**
- Compelling, keyword-optimized title (under 60 chars)
- Meta description (155 chars) that entices clicks
- Excerpt (1-2 sentences summarizing post)
- Author: [EXPERT_NAME]
- Featured image suggestion (describe what image would work)
- Post content (800-1500 words):
  - Hook in introduction (grab attention immediately)
  - 3-5 main sections with H2 subheadings
  - Practical, actionable advice (not theoretical fluff)
  - Natural mentions of relevant services and locations
  - Include statistics or data points (cite sources)
  - Expert insights (not just generic information)
  - Strong conclusion with clear CTA
- 3-5 relevant tags
- 1-2 categories
- Estimated read time (calculate based on word count / 200 words per minute)
- Date: 2025-11-02

**Tone:** [Educational/Conversational/Authoritative - YOU CHOOSE BASED ON TOPIC]

**Content Quality Standards:**
- HIGH-VALUE only - no fluff or filler
- Answer real questions readers have
- Provide genuine insights (not just rehashed basics)
- Natural keyword use (1-2% density)
- Guide readers toward conversion (subtle CTA throughout, strong CTA at end)
- Include real examples or case studies if possible
- Cite sources for any statistics or claims

**Output as JSON:**
```json
{
  "slug": "post-slug",
  "title": "Compelling Title with Keyword",
  "meta_description": "155 character description that entices clicks",
  "date": "2025-11-02",
  "author": "Expert Name",
  "featured_image": "suggested-filename.jpg",
  "featured_image_alt": "Description of image for accessibility",
  "excerpt": "1-2 sentence summary of the post value",
  "read_time": "7 min",
  "categories": ["Category 1", "Category 2"],
  "tags": ["Tag 1", "Tag 2", "Tag 3"],
  "content": "Full markdown blog post content here. Use ## for H2 headings. Include intro with hook, main sections, conclusion with CTA. Natural keyword integration. Valuable, actionable insights. 800-1500 words."
}
```
```

---

### Prompt 3B: Batch Blog Posts (RECOMMENDED)

```
Create [NUMBER] blog posts for my [INDUSTRY] business in a single batch for consistency.

**Business Context:**
- Company: [YOUR_COMPANY_NAME]
- Services: [LIST MAIN SERVICES]
- Locations: [LIST TARGET LOCATIONS]
- Expert: [EXPERT_NAME]
- Target Audience: [PRIMARY AUDIENCE]
- Tone: [Educational/Conversational/Authoritative]

**Blog Topics & Keywords:**
[PASTE FROM KEYWORD SPREADSHEET]

Example format:
```
Post 1: "5 Mistakes First-Home Buyers Make in [Location]"
Primary Keyword: first home buyer mistakes (260/mo, Informational)
Related Services: Home Loans
Related Locations: Bendigo, Eaglehawk
Target Audience: First-time buyers
Word Count: 1200

Post 2: "Understanding [Location] Property Market Trends in 2025"
Primary Keyword: property market [location] (180/mo, Informational)
Related Services: Investment Property Finance
Related Locations: Bendigo
Target Audience: Investors
Word Count: 1000

Post 3: "How to Choose the Right Mortgage Broker"
Primary Keyword: choose mortgage broker (140/mo, Commercial)
Related Services: Home Loans, Refinancing
Related Locations: All
Target Audience: All homebuyers
Word Count: 900

[ADDITIONAL POSTS]
```

**Requirements for EACH post:**
- 800-1500 words each
- High-value, actionable content
- Natural service/location mentions (not forced)
- Expert insights with authority
- Statistics cited with sources
- Strong, clear CTA
- Unique content (no duplication between posts)

**Content Strategy:**
- Each post should stand alone
- Vary the tone/approach between posts
- Some tactical (how-to), some strategic (trends/analysis)
- Mix informational and commercial intent
- All should guide toward conversion

**Output as JSON array:**
```json
[
  {
    "slug": "post-1-slug",
    "title": "...",
    // ... (same structure as single post)
  },
  {
    "slug": "post-2-slug",
    // ...
  }
]
```

**CRITICAL:** Generate ALL posts in one response for consistency and efficiency.
```

---

## Quality Control

### Prompt 5: Content Review

Use this to check generated content before deploying.

```
Review the following generated content for quality and SEO optimization:

[PASTE GENERATED CONTENT]

**Target Keyword:** [PRIMARY_KEYWORD]
**Page Type:** [Location/Service/Blog Post]
**Industry:** [INDUSTRY]

**Check for these issues:**

1. **Keyword Stuffing**
   - Calculate keyword density
   - Flag any unnatural repetition
   - Identify forced keyword usage
   - Recommend more natural phrasing if needed

2. **Duplicate Content**
   - Compare to other pages (if provided)
   - Identify any overly similar sections
   - Check for template language that wasn't customized

3. **Content Value**
   - Does this provide genuine insights?
   - Are there generic statements that could be removed?
   - Does it answer real client questions?
   - Is there actionable advice?
   - Score: High Value / Medium Value / Low Value

4. **Conversion Focus**
   - Is there a clear conversion path?
   - Does it guide users toward action?
   - Is the CTA strong and clear?
   - Are there missed opportunities for conversion?

5. **Local Expertise** (for location pages)
   - Does it demonstrate real local knowledge?
   - Are there specific landmarks or references?
   - Does it feel authentic to someone from this area?
   - Or does it feel generic/could apply to anywhere?

6. **Factual Accuracy**
   - Are any claims questionable or unsupported?
   - Are statistics cited with sources?
   - Is anything outdated or potentially inaccurate?

7. **Tone Consistency**
   - Does it match the brand voice (professional, helpful, expert)?
   - Is the tone appropriate for the target audience?
   - Any sections that feel off-brand?

**Provide:**
- Overall quality score (1-10)
- Specific issues found with line numbers
- Actionable recommendations for improvement
- Rewritten sections if major changes needed
```

---

### Prompt 6: SEO Optimization Check

Use this to verify SEO best practices.

```
Analyze this content for SEO optimization:

[PASTE CONTENT]

**Target Details:**
- Primary Keyword: [KEYWORD]
- Secondary Keywords: [LIST]
- Page Type: [Location/Service/Blog]
- Intended Rankings: [TARGET POSITIONS]

**Check these SEO factors:**

1. **Title Tag Optimization**
   - Length: [COUNT CHARACTERS] (should be <60)
   - Includes primary keyword?: Yes/No
   - Compelling for clicks?: Rate 1-10
   - Recommendations:

2. **Meta Description**
   - Length: [COUNT CHARACTERS] (should be 150-155)
   - Commercial/Transactional intent?: Yes/No
   - Includes primary keyword?: Yes/No
   - Action-oriented?: Yes/No
   - Recommendations:

3. **Keyword Density**
   - Primary keyword appearances: [COUNT]
   - Total word count: [COUNT]
   - Density: [CALCULATE PERCENTAGE]
   - Assessment: Too high (>3%) / Optimal (1-2%) / Too low (<1%)
   - Natural placement?: Yes/No
   - Recommendations:

4. **Heading Structure**
   - H1 count: [COUNT] (should be 1)
   - H2 count: [COUNT]
   - H3 count: [COUNT]
   - Proper hierarchy?: Yes/No
   - Keywords in headings?: List which ones
   - Recommendations:

5. **Internal Linking Opportunities**
   - Services that could be linked: [LIST]
   - Locations that could be linked: [LIST]
   - Blog posts that could be linked: [LIST]
   - Suggested anchor text for each

6. **Content Length**
   - Word count: [COUNT]
   - Adequate for keyword difficulty?: Yes/No
   - Comparison to competitors: Longer/Similar/Shorter
   - Recommendations:

7. **Search Intent Match**
   - Search intent: Transactional/Commercial/Informational
   - Does content match intent?: Yes/No
   - What searchers want vs. what content provides
   - Recommendations:

8. **Additional SEO Issues**
   - Missing elements
   - Opportunities for rich snippets
   - Potential ranking obstacles
   - Quick wins

**Provide:**
- SEO score (1-100)
- Priority fixes (high/medium/low)
- Expected ranking potential (realistic estimate)
- Specific actionable recommendations
```

---

### Prompt 7: Batch Quality Check

For checking multiple pieces of content at once.

```
Review ALL the following content pieces for consistency and quality:

[PASTE MULTIPLE PIECES]

**Check for:**

1. **Consistency across pieces:**
   - Tone and voice
   - Brand messaging
   - Quality level
   - Keyword strategy

2. **Duplicate content issues:**
   - Similar sections between pages
   - Repeated phrasing
   - Template language not customized

3. **Overall quality:**
   - Rate each piece (1-10)
   - Identify strongest and weakest
   - Common issues across all pieces

4. **Strategic gaps:**
   - Missing content opportunities
   - Topics not covered
   - Weak areas that need reinforcement

**Provide:**
- Overall batch assessment
- Piece-by-piece scores
- Common issues to fix
- Strategic recommendations
```

---

## Usage Guidelines

### When to Use Each Prompt

**Single vs. Batch:**
- Use **single prompts** (1A, 2A, 3A) when:
  - Creating 1-3 pieces of content
  - Need to review each piece individually
  - Have time for multiple conversations
  
- Use **batch prompts** (1B, 2B, 3B) when:
  - Creating 5+ pieces of content
  - Need consistency across pieces
  - Want faster content generation
  - Starting a new site from scratch

**Quality Control:**
- Use **Prompt 5** before deploying any content
- Use **Prompt 6** to optimize for target keywords
- Use **Prompt 7** when reviewing complete site content

### Content Quality Reminders

**ALWAYS:**
- Natural keyword integration (1-2% density)
- High-value, actionable content
- Transactional/commercial focus
- Local expertise demonstration
- Minimum word counts (300 locations, 400 services, 800 blog)

**NEVER:**
- Keyword stuffing (>3% density)
- Generic fluff or filler
- Duplicate content between pages
- Thin content (<300 words)
- Content without conversion path

### Keyword Integration Best Practices

**Target placement:**
- Title (H1)
- Meta description
- First paragraph
- At least one H2 heading
- Naturally throughout body
- URL slug

**Density calculation:**
```
Keyword Density = (Keyword Count / Total Words) × 100

Target: 1-2%
Maximum: 3%
```

**Example for 400-word location page:**
- Target keyword: 4-8 times
- Related keywords: 2-4 times each
- Natural, conversational placement

---

## Notes

- All prompts produce JSON output for easy conversion to markdown
- See JSON_TO_MD_EXAMPLES.md for conversion instructions
- Keywords should come from user research (see KEYWORD_DATA_TEMPLATE.csv)
- Content must pass quality checks before deployment
- Use skill: `local-microsite-generator` for full context when generating content
