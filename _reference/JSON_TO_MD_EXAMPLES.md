# JSON to Markdown Conversion Examples

This document shows the exact JSON structure Claude outputs and the resulting .md file format for each content type. Use these examples when converting generated content to markdown files.

---

## Table of Contents

1. [Location Page](#location-page)
2. [Service Page](#service-page)
3. [Blog Post](#blog-post)
4. [Testimonial](#testimonial)
5. [Conversion Guidelines](#conversion-guidelines)

---

## Location Page

### JSON Structure (Claude Output)

```json
{
  "slug": "bendigo",
  "title": "Mortgage Broker Bendigo | Expert Home Loan Advice",
  "meta_description": "Looking for a trusted mortgage broker in Bendigo? Get expert advice on home loans, refinancing, and investment properties. Free consultation.",
  "city_name": "Bendigo",
  "state": "VIC",
  "subtitle": "Your local finance specialists in historic Bendigo, serving Central Victoria.",
  "geo_lat": "-36.7570",
  "geo_long": "144.2794",
  "last_updated": "2025-11-02",
  "is_hub": true,
  "order": 1,
  "has_physical_location": false,
  "show_founder": true,
  "area_served": [
    {
      "name": "Bendigo",
      "postcode": "3550"
    },
    {
      "name": "Eaglehawk",
      "postcode": "3556"
    },
    {
      "name": "Golden Square",
      "postcode": "3555"
    }
  ],
  "key_benefits": [
    {
      "icon": "fas fa-handshake",
      "title": "Local Market Expertise",
      "description": "Deep understanding of Bendigo's property market and lending landscape."
    },
    {
      "icon": "fas fa-percent",
      "title": "Competitive Rates",
      "description": "Access to exclusive rates from 40+ lenders across Australia."
    },
    {
      "icon": "fas fa-clock",
      "title": "Fast Approvals",
      "description": "Streamlined process with most applications approved within 48 hours."
    }
  ],
  "property_insights": [
    {
      "label": "Median House Price",
      "value": "$625,000",
      "source": "Domain, Dec 2024"
    },
    {
      "label": "Annual Growth",
      "value": "+5.2%",
      "source": "CoreLogic"
    }
  ],
  "faqs": [
    {
      "question": "Do I need to visit your office in Bendigo?",
      "answer": "No, we operate remotely for your convenience. All consultations can be done via phone, video call, or email."
    },
    {
      "question": "What areas do you service around Bendigo?",
      "answer": "We serve Bendigo and all surrounding areas including Eaglehawk, Golden Square, Kangaroo Flat, and Strathfieldsaye."
    }
  ],
  "content": "Located in the heart of Central Victoria, Bendigo is a vibrant community with a rich gold-rush history, known for its beautiful heritage architecture, Lake Weeroona, and Rosalind Park.\n\n## Your Local Bendigo Broker\n\nWhether you're looking to buy your first home near one of the great local schools, refinance your existing mortgage, or invest in Bendigo's growing property market, we're here to help you navigate the complexities of home loans with ease.\n\n## Why Choose Us in Bendigo\n\nWe understand the local market inside and out. From the character homes in Golden Square to the family-friendly developments in Strathfieldsaye, we have deep knowledge of Bendigo's diverse property landscape."
}
```

### Resulting .md File

**File path:** `src/content/locations/bendigo.md`

```markdown
---
title: "Mortgage Broker Bendigo | Expert Home Loan Advice"
meta_description: "Looking for a trusted mortgage broker in Bendigo? Get expert advice on home loans, refinancing, and investment properties. Free consultation."
city_name: "Bendigo"
state: "VIC"
subtitle: "Your local finance specialists in historic Bendigo, serving Central Victoria."
geo_lat: "-36.7570"
geo_long: "144.2794"
last_updated: "2025-11-02"
is_hub: true
order: 1
has_physical_location: false
show_founder: true

area_served:
  - name: "Bendigo"
    postcode: "3550"
  - name: "Eaglehawk"
    postcode: "3556"
  - name: "Golden Square"
    postcode: "3555"

key_benefits:
  - icon: "fas fa-handshake"
    title: "Local Market Expertise"
    description: "Deep understanding of Bendigo's property market and lending landscape."
  - icon: "fas fa-percent"
    title: "Competitive Rates"
    description: "Access to exclusive rates from 40+ lenders across Australia."
  - icon: "fas fa-clock"
    title: "Fast Approvals"
    description: "Streamlined process with most applications approved within 48 hours."

property_insights:
  - label: "Median House Price"
    value: "$625,000"
    source: "Domain, Dec 2024"
  - label: "Annual Growth"
    value: "+5.2%"
    source: "CoreLogic"

faqs:
  - question: "Do I need to visit your office in Bendigo?"
    answer: "No, we operate remotely for your convenience. All consultations can be done via phone, video call, or email."
  - question: "What areas do you service around Bendigo?"
    answer: "We serve Bendigo and all surrounding areas including Eaglehawk, Golden Square, Kangaroo Flat, and Strathfieldsaye."
---

Located in the heart of Central Victoria, Bendigo is a vibrant community with a rich gold-rush history, known for its beautiful heritage architecture, Lake Weeroona, and Rosalind Park.

## Your Local Bendigo Broker

Whether you're looking to buy your first home near one of the great local schools, refinance your existing mortgage, or invest in Bendigo's growing property market, we're here to help you navigate the complexities of home loans with ease.

## Why Choose Us in Bendigo

We understand the local market inside and out. From the character homes in Golden Square to the family-friendly developments in Strathfieldsaye, we have deep knowledge of Bendigo's diverse property landscape.
```

---

## Service Page

### JSON Structure (Claude Output)

```json
{
  "slug": "home-loans",
  "title": "Home Loans | Expert Mortgage Services",
  "meta_description": "Get expert home loan advice. We compare 40+ lenders to find you the best rate for your first home, refinance, or investment property.",
  "service_type": "Home Loan",
  "icon": "fas fa-home",
  "excerpt": "Expert home loan advice with access to 40+ lenders.",
  "key_benefits": [
    {
      "icon": "fas fa-search",
      "title": "Lender Comparison",
      "description": "We compare 40+ lenders to find your best rate."
    },
    {
      "icon": "fas fa-dollar-sign",
      "title": "No Upfront Fees",
      "description": "Broker fees paid by lender at settlement. Free consultation."
    },
    {
      "icon": "fas fa-clock",
      "title": "Fast Approvals",
      "description": "Most applications approved within 48 hours."
    }
  ],
  "faqs": [
    {
      "question": "How much can I borrow?",
      "answer": "Borrow capacity depends on income, expenses, and deposit. Contact us for a free assessment."
    },
    {
      "question": "What documents do I need?",
      "answer": "Typically: ID, payslips, bank statements, and asset/liability statements. We'll provide a complete checklist."
    }
  ],
  "content": "Buying a home is one of the biggest financial decisions you'll ever make.\n\n## Our Home Loan Process\n\n1. **Free Consultation** - Discuss your goals and financial situation\n2. **Assess Your Situation** - Review income, expenses, and borrowing capacity\n3. **Compare Lenders** - Access 40+ lenders to find your best rate\n4. **Application Lodgment** - Handle all paperwork and liaise with lenders\n5. **Settlement Support** - Guide you through to successful settlement\n\n## Why Choose Us for Home Loans\n\nWe're not tied to any single lender, which means we can shop the market for the best deal for YOU. Our expert brokers have helped hundreds of families secure their dream homes.\n\n## Get Started Today\n\nCall us now for a free consultation and let's find the perfect home loan for your situation."
}
```

### Resulting .md File

**File path:** `src/content/services/home-loans.md`

```markdown
---
title: "Home Loans | Expert Mortgage Services"
meta_description: "Get expert home loan advice. We compare 40+ lenders to find you the best rate for your first home, refinance, or investment property."
service_type: "Home Loan"
icon: "fas fa-home"
excerpt: "Expert home loan advice with access to 40+ lenders."

key_benefits:
  - icon: "fas fa-search"
    title: "Lender Comparison"
    description: "We compare 40+ lenders to find your best rate."
  - icon: "fas fa-dollar-sign"
    title: "No Upfront Fees"
    description: "Broker fees paid by lender at settlement. Free consultation."
  - icon: "fas fa-clock"
    title: "Fast Approvals"
    description: "Most applications approved within 48 hours."

faqs:
  - question: "How much can I borrow?"
    answer: "Borrow capacity depends on income, expenses, and deposit. Contact us for a free assessment."
  - question: "What documents do I need?"
    answer: "Typically: ID, payslips, bank statements, and asset/liability statements. We'll provide a complete checklist."
---

Buying a home is one of the biggest financial decisions you'll ever make.

## Our Home Loan Process

1. **Free Consultation** - Discuss your goals and financial situation
2. **Assess Your Situation** - Review income, expenses, and borrowing capacity
3. **Compare Lenders** - Access 40+ lenders to find your best rate
4. **Application Lodgment** - Handle all paperwork and liaise with lenders
5. **Settlement Support** - Guide you through to successful settlement

## Why Choose Us for Home Loans

We're not tied to any single lender, which means we can shop the market for the best deal for YOU. Our expert brokers have helped hundreds of families secure their dream homes.

## Get Started Today

Call us now for a free consultation and let's find the perfect home loan for your situation.
```

---

## Blog Post

### JSON Structure (Claude Output)

```json
{
  "slug": "first-home-buyer-mistakes",
  "title": "5 Mistakes First-Home Buyers Make",
  "meta_description": "Learn the 5 most common mistakes first-home buyers make and how to avoid them. Expert advice from experienced mortgage brokers.",
  "date": "2025-11-02",
  "author": "John Smith",
  "featured_image": "first-home-buyer.jpg",
  "featured_image_alt": "Young couple reviewing documents with mortgage broker",
  "excerpt": "Buying your first home is exciting, but many buyers make costly mistakes. Learn what to avoid.",
  "read_time": "6 min",
  "categories": ["Home Buying", "First Home Buyer"],
  "tags": ["First Home Buyer", "Home Loans", "Property Tips"],
  "content": "Buying your first home is exciting, but the journey can be tricky. Here are 5 common mistakes first-home buyers make—and how to avoid them.\n\n## Mistake #1: Not Getting Pre-Approval\n\nMany buyers start house hunting without pre-approval. This is risky because you don't know your budget and can waste time on properties you can't afford.\n\n**Solution:** Get pre-approval before you start looking. This shows sellers you're serious and gives you a clear budget.\n\n## Mistake #2: Borrowing Your Maximum\n\nJust because you can borrow $500k doesn't mean you should. Lenders approve based on current income, but don't account for lifestyle changes or emergencies.\n\n**Solution:** Borrow comfortably below your maximum. Leave room for rate rises and life changes.\n\n## Mistake #3: Skipping the Building Inspection\n\nSome buyers skip inspections to save $500-800. This can cost tens of thousands if major issues emerge later.\n\n**Solution:** Always get a professional building and pest inspection. It's cheap insurance.\n\n## Mistake #4: Forgetting Additional Costs\n\nStamp duty, legal fees, moving costs, and furniture add up quickly. Many first-timers only budget for the deposit.\n\n**Solution:** Budget an extra 5-10% of the purchase price for all costs beyond the deposit.\n\n## Mistake #5: Not Using a Broker\n\nFirst-timers often go straight to their bank, missing out on better rates and terms from other lenders.\n\n**Solution:** Use a mortgage broker (like us!) who can compare 40+ lenders at no cost to you.\n\n## Get Expert Help\n\nReady to buy your first home the smart way? Contact us today for a free consultation and personalized advice."
}
```

### Resulting .md File

**File path:** `src/content/posts/first-home-buyer-mistakes.md`

```markdown
---
title: "5 Mistakes First-Home Buyers Make"
meta_description: "Learn the 5 most common mistakes first-home buyers make and how to avoid them. Expert advice from experienced mortgage brokers."
date: 2025-11-02
author: "John Smith"
featured_image: "first-home-buyer.jpg"
featured_image_alt: "Young couple reviewing documents with mortgage broker"
excerpt: "Buying your first home is exciting, but many buyers make costly mistakes. Learn what to avoid."
read_time: "6 min"
categories:
  - "Home Buying"
  - "First Home Buyer"
tags:
  - "First Home Buyer"
  - "Home Loans"
  - "Property Tips"
---

Buying your first home is exciting, but the journey can be tricky. Here are 5 common mistakes first-home buyers make—and how to avoid them.

## Mistake #1: Not Getting Pre-Approval

Many buyers start house hunting without pre-approval. This is risky because you don't know your budget and can waste time on properties you can't afford.

**Solution:** Get pre-approval before you start looking. This shows sellers you're serious and gives you a clear budget.

## Mistake #2: Borrowing Your Maximum

Just because you can borrow $500k doesn't mean you should. Lenders approve based on current income, but don't account for lifestyle changes or emergencies.

**Solution:** Borrow comfortably below your maximum. Leave room for rate rises and life changes.

## Mistake #3: Skipping the Building Inspection

Some buyers skip inspections to save $500-800. This can cost tens of thousands if major issues emerge later.

**Solution:** Always get a professional building and pest inspection. It's cheap insurance.

## Mistake #4: Forgetting Additional Costs

Stamp duty, legal fees, moving costs, and furniture add up quickly. Many first-timers only budget for the deposit.

**Solution:** Budget an extra 5-10% of the purchase price for all costs beyond the deposit.

## Mistake #5: Not Using a Broker

First-timers often go straight to their bank, missing out on better rates and terms from other lenders.

**Solution:** Use a mortgage broker (like us!) who can compare 40+ lenders at no cost to you.

## Get Expert Help

Ready to buy your first home the smart way? Contact us today for a free consultation and personalized advice.
```

---

## Testimonial

### JSON Structure (Claude Output)

```json
{
  "author": "Jane S.",
  "location": "Bendigo",
  "service": "Home Loan",
  "rating": 5,
  "date": "2025-10-15",
  "review": "John was amazing! He helped us get our first home loan in Bendigo. The process was smooth and stress-free. We couldn't be happier with the service and would highly recommend to anyone looking for a mortgage broker in Bendigo."
}
```

### Resulting .md File

**File path:** `src/content/testimonials/jane-s-bendigo.md`

```markdown
---
author: "Jane S."
location: "Bendigo"
service: "Home Loan"
rating: 5
date: 2025-10-15
---

John was amazing! He helped us get our first home loan in Bendigo. The process was smooth and stress-free. We couldn't be happier with the service and would highly recommend to anyone looking for a mortgage broker in Bendigo.
```

---

## Conversion Guidelines

### File Naming Conventions

| Content Type | Naming Pattern | Example |
|--------------|----------------|---------|
| Hub Location | `{slug}.md` | `bendigo.md` |
| Spoke Location | `{hub-slug}/{spoke-slug}.md` | `bendigo/eaglehawk.md` |
| Service | `{slug}.md` | `home-loans.md` |
| Blog Post | `{slug}.md` | `first-home-buyer-mistakes.md` |
| Testimonial | `{author-slug}-{location-slug}.md` | `jane-s-bendigo.md` |

**Slug rules:**
- All lowercase
- Hyphens for spaces
- No special characters
- Keep it short and descriptive

### YAML Frontmatter Formatting

**String values:**
```yaml
title: "Mortgage Broker Bendigo"  # Quotes recommended
meta_description: "Looking for a trusted broker..."  # Always quote
```

**Boolean values:**
```yaml
is_hub: true  # No quotes
has_physical_location: false  # No quotes
show_founder: true  # No quotes
```

**Number values:**
```yaml
order: 1  # No quotes
rating: 5  # No quotes
```

**Date values:**
```yaml
date: 2025-11-02  # No quotes, YYYY-MM-DD format
last_updated: "2025-11-02"  # Can use quotes
```

**Array values:**
```yaml
# Simple array
tags:
  - "First Home Buyer"
  - "Home Loans"
  - "Property Tips"

# Array of objects
key_benefits:
  - icon: "fas fa-handshake"
    title: "Local Market Expertise"
    description: "Deep understanding of market."
  - icon: "fas fa-percent"
    title: "Competitive Rates"
    description: "Access to 40+ lenders."
```

**Indentation rules:**
- Use 2 spaces per indent level
- Arrays: hyphen-space then content
- Nested objects: indent 2 more spaces
- Maintain consistent spacing

### Content Body Formatting

**Placement:**
- Content goes AFTER the closing `---`
- No additional separators needed
- First line of content should start immediately

**Markdown support:**
```markdown
## H2 Headings (use ## not #)
### H3 Headings (use ### for subsections)

**Bold text** for emphasis
*Italic text* for subtle emphasis

[Link text](https://example.com) for links

1. Numbered lists
2. Use standard markdown

- Bullet lists
- Also standard markdown
```

**Newline handling:**
```json
// In JSON, use \n for line breaks
"content": "Paragraph 1\n\nParagraph 2\n\n## Heading"
```

Becomes:
```markdown
Paragraph 1

Paragraph 2

## Heading
```

### Common Pitfalls to Avoid

❌ **Wrong:**
```yaml
title: Mortgage Broker Bendigo  # Missing quotes
key_benefits: []  # Empty array in frontmatter
is_hub: "true"  # Boolean as string
```

✅ **Correct:**
```yaml
title: "Mortgage Broker Bendigo"
# Omit key_benefits if empty
is_hub: true
```

❌ **Wrong:**
```markdown
---
title: "Test"
---
# This is H1 heading  # Don't use H1 in content
```

✅ **Correct:**
```markdown
---
title: "Test"  # Title becomes H1
---
## This is H2 heading  # Start with H2
```

### Batch Conversion Tips

**For multiple locations/services/posts:**

1. Claude outputs array: `[{...}, {...}, {...}]`
2. Extract each object
3. Create individual .md files
4. Maintain consistent formatting
5. Double-check all slugs are unique

**File organization:**
```
src/content/
├── locations/
│   ├── bendigo.md              # Hub
│   └── bendigo/
│       ├── eaglehawk.md        # Spoke
│       └── golden-square.md    # Spoke
├── services/
│   ├── home-loans.md
│   └── refinancing.md
├── posts/
│   ├── first-home-buyer-mistakes.md
│   └── property-market-update.md
└── testimonials/
    ├── jane-s-bendigo.md
    └── mark-t-eaglehawk.md
```

### Validation Checklist

Before deploying converted .md files:

- [ ] File named correctly (lowercase, hyphens)
- [ ] YAML frontmatter valid (run `npm run build` to check)
- [ ] All required fields present
- [ ] Content body starts after `---`
- [ ] H2 headings used (not H1)
- [ ] Keyword density 1-2%
- [ ] No duplicate content
- [ ] CTAs present
- [ ] Local expertise shown (for location pages)

---

## Automation Potential

This conversion process can be automated with a script. Future enhancement: Create Python script to:

1. Parse JSON array from Claude
2. Extract each object
3. Generate .md files with proper formatting
4. Place in correct directories
5. Validate YAML structure

For now, manual conversion following these examples ensures quality and allows for review.
