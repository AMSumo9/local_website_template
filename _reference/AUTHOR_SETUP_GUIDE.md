# Author Setup Guide

This guide explains how to configure author/expert information for your local business website, with considerations for E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) SEO signals.

---

## Table of Contents

1. [Author Strategy Overview](#author-strategy-overview)
2. [Individual Person as Author](#individual-person-as-author)
3. [Company/Team as Author](#companyteam-as-author)
4. [E-E-A-T Considerations](#e-e-a-t-considerations)
5. [Configuration Instructions](#configuration-instructions)
6. [Using Dummy Data](#using-dummy-data)

---

## Author Strategy Overview

Your website needs a clear author/expert identity to build trust and demonstrate expertise. There are three main strategies:

### 1. **Individual Person** (`author_strategy: "individual"`)
Use when:
- You have a real person who will be the face of the business
- The person has verifiable credentials and experience
- You want to build personal brand recognition

**Benefits:**
- Strongest E-E-A-T signals
- Personal connection with customers
- Clear accountability

**Requirements:**
- Real name, credentials, and experience
- Professional headshot photo
- Biographical information
- Social proof (reviews mentioning the person)

---

### 2. **Company/Team** (`author_strategy: "company"`)
Use when:
- Multiple team members provide services
- No single person is the primary face
- Company brand is more important than individual

**Benefits:**
- Flexibility as team changes
- Focuses on company reputation
- No dependency on one person

**Requirements:**
- Company credentials (years in business, licenses, certifications)
- Team overview
- Company trust signals (associations, awards, reviews)

---

### 3. **Team Approach** (`author_strategy: "team"`)
Use when:
- You want to highlight multiple experts
- Different services have different specialists
- Building a collaborative brand

**Benefits:**
- Shows depth of expertise
- Allows specialization
- Can feature multiple credentials

**Requirements:**
- Information for key team members
- Clear role definitions
- Consistent branding across team

---

## Individual Person as Author

### Configuration in `project.json`

```json
{
  "author_strategy": "individual",
  "persona": {
    "expert_name": "Jane Smith",
    "expert_title": "Principal Mortgage Broker (15+ Years Experience)",
    "expert_bio": "Jane Smith is a 15-year veteran of the finance industry, fully licensed (MFAA Member #12345) and dedicated to serving the Brisbane community. She specializes in first-home buyer assistance and complex lending scenarios.",
    "expert_image": "/images/persona/jane-smith.png",
    "job_title": "Principal Broker",
    "credentials": "Diploma of Finance & Mortgage Broking, MFAA Member, 15+ years industry experience",
    "trust_badges": [
      "MFAA Member #12345",
      "ACL No. 389087",
      "15+ Years Experience",
      "Local Brisbane Specialist"
    ],
    "show_founder": true
  }
}
```

### What You Need

1. **Name**: Real, verifiable name
2. **Title**: Professional title with years of experience
3. **Bio**: 100-150 words covering:
   - Years of experience
   - Specific expertise areas
   - Professional credentials
   - Local market knowledge
   - Personal touch/why they do what they do
4. **Photo**: Professional headshot (high quality, good lighting)
5. **Credentials**: Licenses, certifications, memberships
6. **Trust Badges**: Verification that can be independently confirmed

---

## Company/Team as Author

### Configuration in `project.json`

```json
{
  "author_strategy": "company",
  "persona": {
    "expert_name": "Brisbane Finance Experts Team",
    "expert_title": "Established Finance Brokerage (Since 2008)",
    "expert_bio": "Brisbane Finance Experts is a locally-owned brokerage established in 2008, serving the greater Brisbane area. Our team of licensed brokers brings over 50 combined years of experience. We're proud members of the MFAA and maintain the highest industry standards.",
    "expert_image": "/images/persona/company-logo.png",
    "job_title": "Finance Brokerage",
    "credentials": "MFAA Corporate Member, ACL No. 389087, 15+ years serving Brisbane",
    "trust_badges": [
      "Est. 2008",
      "MFAA Corporate Member",
      "ACL No. 389087",
      "50+ Years Combined Experience",
      "500+ Happy Customers"
    ],
    "show_founder": false
  }
}
```

### What You Need

1. **Company Name**: Official business name
2. **Title**: "Established [Service] Provider" or "Expert [Service] Team"
3. **Bio**: 100-150 words covering:
   - Year established
   - Service area
   - Team credentials (combined experience)
   - Industry memberships
   - Company values or approach
4. **Image**: Company logo or team photo
5. **Credentials**: Business licenses, corporate memberships
6. **Trust Badges**: Years in business, number of customers served, associations

---

## E-E-A-T Considerations

### Experience
Show practical, real-world experience:
- Years in business/industry
- Number of clients served
- Specific scenarios handled
- Local market knowledge

### Expertise
Demonstrate knowledge and skill:
- Professional qualifications
- Industry certifications
- Continuing education
- Specialized knowledge areas

### Authoritativeness
Build recognition as a go-to resource:
- Industry memberships (MFAA, FBAA, etc.)
- Awards and recognition
- Speaking engagements
- Media mentions
- Published content

### Trustworthiness
Show reliability and credibility:
- Licenses and compliance
- Reviews and testimonials
- Years in business
- Transparent practices
- Professional affiliations

---

## Configuration Instructions

### Step 1: Choose Your Strategy

Decide on `individual`, `company`, or `team` based on your situation.

### Step 2: Gather Information

**For Individual:**
- Full name
- Professional credentials
- Years of experience
- Professional photo
- Detailed bio

**For Company:**
- Business name
- Year established
- Team overview
- Business licenses
- Company logo or team photo

### Step 3: Update `project.json`

Edit `/src/data/project.json` and update the `persona` section with your information.

### Step 4: Add Images

Place your photo or logo in the appropriate directory:
- `/public/images/persona/your-name.png` (or jpg/webp)

Ensure the filename matches what's in `project.json`.

### Step 5: Verify E-E-A-T Signals

Make sure you have:
- ✓ Verifiable credentials
- ✓ Professional image
- ✓ Clear expertise demonstration
- ✓ Trust signals (licenses, memberships)
- ✓ Local relevance

---

## Using Dummy Data

### Important Guidelines

If you're setting up the template for development or demo purposes:

1. **Define the Persona FIRST**: Don't make up credentials randomly. Create a consistent fictional persona with realistic details.

2. **Be Realistic**: Use credentials that would be appropriate for the industry:
   - Real certification types (e.g., "MFAA Member" for mortgage brokers)
   - Realistic experience levels (10-20 years, not 50)
   - Appropriate job titles

3. **Stay Consistent**: If you create "John Smith" as your dummy persona, use that name consistently across all content.

4. **Don't Fabricate**: Never use:
   - Real license numbers unless they're yours
   - Real people's names without permission
   - Specific membership IDs that could be verified
   - Real business certifications you don't have

5. **Mark as Placeholder**: In development, add a comment:
```json
{
  "persona": {
    "note": "PLACEHOLDER DATA - Replace before production",
    "expert_name": "John Smith (Example)",
    ...
  }
}
```

### Dummy Data Example

```json
{
  "author_strategy": "individual",
  "persona": {
    "_comment": "PLACEHOLDER - Replace before production",
    "expert_name": "Alex Johnson (Example)",
    "expert_title": "Senior Finance Consultant (Example Profile)",
    "expert_bio": "This is example biographical content for development purposes. Replace with real expert information before launching.",
    "expert_image": "/images/persona/placeholder.png",
    "job_title": "Senior Consultant",
    "credentials": "Example credentials for development",
    "trust_badges": [
      "Example Badge 1",
      "Example Badge 2"
    ],
    "show_founder": true
  }
}
```

---

## Before Launch Checklist

- [ ] Author strategy chosen and documented
- [ ] All persona information is real and verifiable (or clearly marked as example)
- [ ] Professional photo uploaded and optimized
- [ ] Credentials are accurate and can be verified
- [ ] Trust badges are truthful and substantiated
- [ ] Bio is written in natural language (not AI-generated style)
- [ ] E-E-A-T signals are present and authentic
- [ ] No fabricated licenses, certifications, or memberships
- [ ] Image file path in project.json matches actual file location
- [ ] `author_strategy` field is set correctly

---

## Examples by Industry

### Mortgage Broker
```json
{
  "expert_name": "Sarah Chen",
  "expert_title": "Accredited Mortgage Broker (MFAA Member)",
  "credentials": "Diploma of Finance & Mortgage Broking, MFAA Member #12345",
  "trust_badges": ["MFAA Member", "10+ Years Experience", "500+ Loans Settled"]
}
```

### Real Estate Agent
```json
{
  "expert_name": "Michael Roberts",
  "expert_title": "Licensed Real Estate Agent (REA Member)",
  "credentials": "Real Estate License #123456, REI Member",
  "trust_badges": ["Licensed Agent", "15 Years in Brisbane", "Top 10% Sales 2023"]
}
```

### Plumbing Service
```json
{
  "author_strategy": "company",
  "expert_name": "Brisbane Plumbing Pros Team",
  "expert_title": "Licensed Master Plumbers (Est. 2005)",
  "credentials": "QBCC License #123456, Master Plumbers Association Member",
  "trust_badges": ["QBCC Licensed", "Available 24/7", "5-Star Reviews"]
}
```

---

## Need Help?

- Review the E-E-A-T guidelines: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Check industry-specific credential requirements
- Ensure all claims can be substantiated
- When in doubt, be conservative with claims

Remember: **Authenticity and truthfulness are critical for both SEO and customer trust.** Never fabricate credentials or experience.
