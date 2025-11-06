# Spelling Guide: Geographic Localization

This guide ensures spelling consistency based on the geographic location of your website. Using the correct regional spelling improves professionalism and local relevance.

---

## Table of Contents

1. [Setting Your Locale](#setting-your-locale)
2. [British vs American Spelling](#british-vs-american-spelling)
3. [Common Differences](#common-differences)
4. [Industry-Specific Terms](#industry-specific-terms)
5. [Validation](#validation)

---

## Setting Your Locale

Configure your locale in `/src/data/project.json`:

```json
{
  "locale": {
    "country": "AU",
    "language": "en-AU",
    "spelling": "british",
    "date_format": "DD/MM/YYYY"
  }
}
```

### Locale Options

**Australia (AU):**
```json
{
  "country": "AU",
  "language": "en-AU",
  "spelling": "british"
}
```

**United Kingdom (UK):**
```json
{
  "country": "GB",
  "language": "en-GB",
  "spelling": "british"
}
```

**United States (US):**
```json
{
  "country": "US",
  "language": "en-US",
  "spelling": "american"
}
```

**Canada (CA):**
```json
{
  "country": "CA",
  "language": "en-CA",
  "spelling": "british"
}
```

---

## British vs American Spelling

### British English
Used in: Australia, UK, New Zealand, Ireland, South Africa, Canada (mostly), India

### American English
Used in: United States

---

## Common Differences

### 1. -our vs -or

| British (AU/UK) | American (US) | Usage |
|---|---|---|
| colour | color | Brand colours, color scheme |
| favour | favor | In favour of, favorite |
| honour | honor | Honour our commitments |
| labour | labor | Labour costs, manual labor |
| neighbour | neighbor | Neighbourhood, local neighbors |
| behaviour | behavior | Customer behaviour |

**Example:**
- 🇦🇺 "We offer a variety of colour schemes for your brand."
- 🇺🇸 "We offer a variety of color schemes for your brand."

---

### 2. -ise vs -ize

| British (AU/UK) | American (US) | Usage |
|---|---|---|
| organise | organize | Organise your finances |
| realise | realize | Realise your goals |
| specialise | specialize | We specialise in... |
| recognise | recognize | Recognised expert |
| authorise | authorize | Authorised representative |
| optimise | optimize | Optimised for SEO |
| analyse | analyze | Market analysis |

**Example:**
- 🇦🇺 "We specialise in helping first-home buyers realise their property goals."
- 🇺🇸 "We specialize in helping first-home buyers realize their property goals."

---

### 3. -yse vs -yze

| British (AU/UK) | American (US) | Usage |
|---|---|---|
| analyse | analyze | Market analysis |
| paralyse | paralyze | Don't be paralyzed by choice |

---

### 4. -re vs -er

| British (AU/UK) | American (US) | Usage |
|---|---|---|
| centre | center | Service centre, central location |
| metre | meter | Square metres, measurement |
| theatre | theater | The theatre district |
| fibre | fiber | Fibre broadband |
| calibre | caliber | High-calibre service |

**Example:**
- 🇦🇺 "Visit our service centre in the heart of the city centre."
- 🇺🇸 "Visit our service center in the heart of the city center."

---

### 5. -ence vs -ense

| British (AU/UK) | American (US) | Usage |
|---|---|---|
| licence (noun) | license (noun) | Business licence, driver's licence |
| license (verb) | license (verb) | We are licensed to... |
| defence | defense | Defence against fraud |
| offence | offense | No offence intended |
| pretence | pretense | Without pretence |

**Important Note:**
- In British English: **licence** (noun), **license** (verb)
- In American English: **license** (both noun and verb)

**Example:**
- 🇦🇺 "We hold a current Australian Credit Licence (ACL No. 123456)."
- 🇺🇸 "We hold a current credit license (License No. 123456)."

---

### 6. -ogue vs -og

| British (AU/UK) | American (US) | Usage |
|---|---|---|
| catalogue | catalog | Product catalogue |
| dialogue | dialog | Open dialogue with clients |
| analogue | analog | Analogue process |

---

### 7. Double L vs Single L

| British (AU/UK) | American (US) | Usage |
|---|---|---|
| travelled | traveled | We have travelled... |
| travelling | traveling | Are you travelling? |
| counsellor | counselor | Financial counsellor |
| modelling | modeling | Financial modelling |
| cancelled | canceled | Appointment cancelled |
| labelled | labeled | Clearly labelled |

---

### 8. -ll vs -l

| British (AU/UK) | American (US) | Usage |
|---|---|---|
| enrol | enroll | Enrol now |
| fulfil | fulfill | Fulfil your dreams |
| skilful | skillful | Skilful guidance |

---

### 9. Other Common Differences

| British (AU/UK) | American (US) | Usage |
|---|---|---|
| cheque | check | Bank cheque, check payment |
| grey | gray | Grey area |
| judgement | judgment | Professional judgement |
| programme | program | Training programme |
| tyre | tire | Car tyres |
| storey | story | Two-storey house |
| mum | mom | Mum and dad investors |
| whilst | while | Whilst we process... |

---

## Industry-Specific Terms

### Financial Services (Australia)

✓ **Correct (AU):**
- Australian Credit Licence (ACL)
- National Consumer Credit Protection Act
- Authorised representative
- Honour a commitment
- Recognised qualification

✗ **Incorrect (AU):**
- Australian Credit License
- Authorized representative
- Honor a commitment
- Recognized qualification

### Real Estate (Australia)

✓ **Correct (AU):**
- Square metres (m²)
- Colour scheme
- Neighbourhood
- Realise capital gains

✗ **Incorrect (AU):**
- Square meters
- Color scheme
- Neighborhood
- Realize capital gains

---

## Content Examples

### Australian Website Example

```markdown
## Colour Your Financial Future

We specialise in helping Brisbane families realise their property dreams. Our team of licensed brokers operates from our centre in the CBD, providing personalised service that honours our commitment to excellence.

With over 15 years' experience, we're recognised as local experts in home finance. Contact us to organise a free consultation.
```

### US Website Example

```markdown
## Color Your Financial Future

We specialize in helping Atlanta families realize their property dreams. Our team of licensed brokers operates from our center in the downtown area, providing personalized service that honors our commitment to excellence.

With over 15 years of experience, we're recognized as local experts in home finance. Contact us to organize a free consultation.
```

---

## Validation

### Pre-Launch Spelling Check

Run the pre-launch validation script:

```bash
npm run pre-launch
```

This will check for:
- American spelling in British English sites
- British spelling in American English sites
- Inconsistent spelling within the same document
- Common errors

### Manual Review

Use Find & Replace to check your content:

**For Australian/UK sites, search for:**
- `color` (should be `colour`)
- `organize` (should be `organise`)
- `realize` (should be `realise`)
- `center` (should be `centre`)
- `license` as noun (should be `licence`)
- `traveled` (should be `travelled`)
- `analyze` (should be `analyse`)

**For US sites, search for:**
- `colour` (should be `color`)
- `organise` (should be `organize`)
- `realise` (should be `realize`)
- `centre` (should be `center`)
- `licence` as noun (should be `license`)
- `travelled` (should be `traveled`)
- `analyse` (should be `analyze`)

---

## Quick Reference Table

| Word Type | British (AU/UK) | American (US) |
|---|---|---|
| **-our/-or** | colour, favour, honour | color, favor, honor |
| **-ise/-ize** | organise, realise, specialise | organize, realize, specialize |
| **-yse/-yze** | analyse | analyze |
| **-re/-er** | centre, metre | center, meter |
| **-ence/-ense** | licence (n), defence | license (n), defense |
| **-ogue/-og** | catalogue, dialogue | catalog, dialog |
| **Double L** | travelled, modelling | traveled, modeling |
| **Other** | cheque, grey, whilst, judgement | check, gray, while, judgment |

---

## Tools and Resources

### Online Spell Checkers
- **Grammarly**: Set to Australian English or American English
- **Microsoft Word**: Language settings → English (Australia) or English (United States)
- **Google Docs**: Tools → Spelling → Choose language variant

### Browser Extensions
- **Language Tool**: Supports regional variants
- **Grammarly**: Detects regional spelling

### Pre-Launch Checklist

- [ ] Locale configured in `project.json`
- [ ] All content reviewed for spelling consistency
- [ ] Pre-launch validation script run
- [ ] No mixing of British and American spelling
- [ ] Industry-specific terms use correct regional spelling
- [ ] Common errors checked (licence vs license, etc.)
- [ ] Dates formatted according to locale
- [ ] Currency symbols match locale ($ vs £ vs €)

---

## Common Mistakes to Avoid

1. ❌ Mixing spellings in the same document
   - ✓ Be consistent throughout

2. ❌ Using American spelling for Australian business
   - ✓ Match spelling to target audience location

3. ❌ Inconsistent use of -ise/-ize
   - ✓ Choose British -ise or American -ize and stick with it

4. ❌ Wrong licence/license usage
   - ✓ AU/UK: licence (noun), license (verb)
   - ✓ US: license (both)

5. ❌ Mixing metre/meter
   - ✓ AU/UK: metre (measurement), meter (device)
   - ✓ US: meter (both)

---

## Remember

**Consistency is key!** Choose your regional variant based on where your target audience is located, then apply it consistently throughout all content.

Regional spelling shows attention to detail and local expertise—both important for building trust with your audience.
