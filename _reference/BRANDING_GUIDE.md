# Branding Guide: Color Scheme Selection

This guide helps you choose appropriate colors for your local business website based on industry, psychology, and best practices.

---

## Table of Contents

1. [Why Colors Matter](#why-colors-matter)
2. [Configuration](#configuration)
3. [Color Psychology by Industry](#color-psychology-by-industry)
4. [Recommended Color Schemes](#recommended-color-schemes)
5. [Creating Your Color Palette](#creating-your-color-palette)
6. [Accessibility](#accessibility)
7. [Testing Your Colors](#testing-your-colors)

---

## Why Colors Matter

Colors influence:
- **Trust**: Professional colors build credibility
- **Recognition**: Consistent branding aids memory
- **Emotion**: Colors trigger specific feelings
- **Action**: Right colors improve conversion rates

### Color Psychology Quick Reference

| Color | Emotions/Associations | Best For |
|---|---|---|
| **Blue** | Trust, stability, professionalism, calm | Finance, healthcare, technology, legal |
| **Green** | Growth, health, wealth, nature | Finance, real estate, health, environment |
| **Red** | Energy, urgency, passion, excitement | Food, retail, emergency services |
| **Orange** | Friendly, affordable, energetic | Home services, trades, retail |
| **Purple** | Luxury, creativity, wisdom | Premium services, consulting, creative |
| **Gray/Black** | Professional, sophisticated, modern | Legal, luxury, technology |
| **Yellow** | Optimism, warmth, attention | Children's services, hospitality |

---

## Configuration

### Setting Colors in project.json

Edit `/src/data/project.json`:

```json
{
  "branding": {
    "primary_color": "#2563EB",
    "primary_color_dark": "#1D4ED8",
    "accent_color": "#DBEAFE"
  }
}
```

### Color Definitions

- **`primary_color`**: Main brand color (buttons, links, headers)
- **`primary_color_dark`**: Darker shade for hover states
- **`accent_color`**: Light background color for sections

---

## Color Psychology by Industry

### Financial Services

**Recommended**: Blue, Green, Navy

**Why**: Trust, stability, security, wealth

**Example Palettes:**

**Traditional Finance (Blue)**
```json
{
  "primary_color": "#2563EB",
  "primary_color_dark": "#1D4ED8",
  "accent_color": "#DBEAFE"
}
```
Result: Professional, trustworthy, stable

**Wealth/Growth (Green)**
```json
{
  "primary_color": "#059669",
  "primary_color_dark": "#047857",
  "accent_color": "#D1FAE5"
}
```
Result: Growth-focused, prosperity, fresh

**Premium Finance (Navy)**
```json
{
  "primary_color": "#1E3A8A",
  "primary_color_dark": "#1E40AF",
  "accent_color": "#DBEAFE"
}
```
Result: Authoritative, premium, established

---

### Real Estate

**Recommended**: Blue, Green, Gray, Teal

**Why**: Trust, growth, sophistication, stability

**Example Palettes:**

**Modern Real Estate (Teal)**
```json
{
  "primary_color": "#0D9488",
  "primary_color_dark": "#0F766E",
  "accent_color": "#CCFBF1"
}
```
Result: Fresh, modern, approachable

**Luxury Real Estate (Charcoal)**
```json
{
  "primary_color": "#374151",
  "primary_color_dark": "#1F2937",
  "accent_color": "#F3F4F6"
}
```
Result: Sophisticated, premium, elegant

**Family Real Estate (Warm Blue)**
```json
{
  "primary_color": "#3B82F6",
  "primary_color_dark": "#2563EB",
  "accent_color": "#DBEAFE"
}
```
Result: Friendly, trustworthy, welcoming

---

### Home Services (Plumbing, Electrical, HVAC)

**Recommended**: Orange, Red, Blue, Green

**Why**: Energy, reliability, trust, action

**Example Palettes:**

**Reliable Trades (Orange)**
```json
{
  "primary_color": "#EA580C",
  "primary_color_dark": "#C2410C",
  "accent_color": "#FFEDD5"
}
```
Result: Energetic, approachable, action-oriented

**Emergency Services (Red)**
```json
{
  "primary_color": "#DC2626",
  "primary_color_dark": "#B91C1C",
  "accent_color": "#FEE2E2"
}
```
Result: Urgent, bold, attention-grabbing

**Professional Services (Blue)**
```json
{
  "primary_color": "#2563EB",
  "primary_color_dark": "#1D4ED8",
  "accent_color": "#DBEAFE"
}
```
Result: Professional, trustworthy, capable

---

### Legal Services

**Recommended**: Navy, Charcoal, Burgundy

**Why**: Authority, professionalism, seriousness

**Example Palettes:**

**Traditional Legal (Navy)**
```json
{
  "primary_color": "#1E40AF",
  "primary_color_dark": "#1E3A8A",
  "accent_color": "#DBEAFE"
}
```
Result: Authoritative, traditional, trustworthy

**Modern Legal (Charcoal)**
```json
{
  "primary_color": "#374151",
  "primary_color_dark": "#1F2937",
  "accent_color": "#F3F4F6"
}
```
Result: Modern, sophisticated, professional

---

### Healthcare & Medical

**Recommended**: Blue, Green, Teal

**Why**: Trust, health, cleanliness, calm

**Example Palettes:**

**Medical Blue**
```json
{
  "primary_color": "#0EA5E9",
  "primary_color_dark": "#0284C7",
  "accent_color": "#E0F2FE"
}
```
Result: Clean, professional, calming

**Health Green**
```json
{
  "primary_color": "#10B981",
  "primary_color_dark": "#059669",
  "accent_color": "#D1FAE5"
}
```
Result: Health-focused, natural, healing

---

### Consulting & Professional Services

**Recommended**: Purple, Blue, Gray

**Why**: Expertise, innovation, professionalism

**Example Palettes:**

**Premium Consulting (Purple)**
```json
{
  "primary_color": "#7C3AED",
  "primary_color_dark": "#6D28D9",
  "accent_color": "#EDE9FE"
}
```
Result: Creative, premium, innovative

**Corporate Consulting (Slate)**
```json
{
  "primary_color": "#475569",
  "primary_color_dark": "#334155",
  "accent_color": "#F1F5F9"
}
```
Result: Professional, modern, serious

---

### Hospitality & Food

**Recommended**: Red, Orange, Yellow, Brown

**Why**: Appetite, warmth, energy, comfort

**Example Palettes:**

**Restaurant Red**
```json
{
  "primary_color": "#DC2626",
  "primary_color_dark": "#B91C1C",
  "accent_color": "#FEE2E2"
}
```
Result: Appetizing, bold, energetic

**Warm Hospitality (Orange)**
```json
{
  "primary_color": "#F59E0B",
  "primary_color_dark": "#D97706",
  "accent_color": "#FEF3C7"
}
```
Result: Welcoming, warm, friendly

---

### Retail & E-commerce

**Recommended**: Red, Orange, Green, Blue

**Why**: Action, trust, energy, purchase impulse

**Example Palettes:**

**Sale-Focused (Red)**
```json
{
  "primary_color": "#EF4444",
  "primary_color_dark": "#DC2626",
  "accent_color": "#FEE2E2"
}
```
Result: Urgent, action-driven, exciting

**Trust-Based (Blue)**
```json
{
  "primary_color": "#3B82F6",
  "primary_color_dark": "#2563EB",
  "accent_color": "#DBEAFE"
}
```
Result: Trustworthy, reliable, safe

---

## Recommended Color Schemes

### Option 1: Default Blue (Safe Choice)
**Best for**: Most industries, professional services
```json
{
  "primary_color": "#2563EB",
  "primary_color_dark": "#1D4ED8",
  "accent_color": "#DBEAFE"
}
```

### Option 2: Modern Teal
**Best for**: Real estate, modern services
```json
{
  "primary_color": "#0D9488",
  "primary_color_dark": "#0F766E",
  "accent_color": "#CCFBF1"
}
```

### Option 3: Growth Green
**Best for**: Finance, investment, health
```json
{
  "primary_color": "#059669",
  "primary_color_dark": "#047857",
  "accent_color": "#D1FAE5"
}
```

### Option 4: Energy Orange
**Best for**: Home services, trades
```json
{
  "primary_color": "#EA580C",
  "primary_color_dark": "#C2410C",
  "accent_color": "#FFEDD5"
}
```

### Option 5: Premium Purple
**Best for**: Consulting, creative services
```json
{
  "primary_color": "#7C3AED",
  "primary_color_dark": "#6D28D9",
  "accent_color": "#EDE9FE"
}
```

### Option 6: Professional Slate
**Best for**: Legal, corporate, technology
```json
{
  "primary_color": "#475569",
  "primary_color_dark": "#334155",
  "accent_color": "#F1F5F9"
}
```

---

## Creating Your Color Palette

### Step 1: Choose Primary Color

Pick a color that represents your brand values and industry.

**Questions to ask:**
- What emotion do you want to evoke?
- What do competitors use? (Consider differentiation)
- What appeals to your target demographic?
- Does it work with your logo?

### Step 2: Create Dark Variant

The dark variant should be 10-20% darker for hover effects.

**Tools:**
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)

### Step 3: Choose Accent Color

The accent should be a very light tint of your primary color (80-90% lighter).

**Formula:**
- Primary: #2563EB (blue)
- Dark: Darker shade → #1D4ED8
- Accent: Lightest tint → #DBEAFE

---

## Accessibility

### Contrast Requirements

**WCAG AA Standards** (minimum):
- Normal text: 4.5:1 contrast ratio
- Large text (18pt+): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

### Testing Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)

### Common Issues

**❌ Poor Contrast:**
```json
{
  "primary_color": "#FFD700",  // Yellow on white = poor contrast
  "primary_color_dark": "#FFA500",
  "accent_color": "#FFFACD"
}
```

**✓ Good Contrast:**
```json
{
  "primary_color": "#2563EB",  // Blue on white = good contrast
  "primary_color_dark": "#1D4ED8",
  "accent_color": "#DBEAFE"
}
```

---

## Testing Your Colors

### Visual Test

1. Apply colors to your site
2. View on multiple devices
3. Check in different lighting conditions
4. Get feedback from others

### Checklist

- [ ] Primary color contrasts well with white (4.5:1+)
- [ ] Primary color contrasts well with dark backgrounds
- [ ] Accent color is subtle, not overwhelming
- [ ] Dark variant is noticeably different from primary
- [ ] Colors work with your logo
- [ ] Colors don't clash with imagery
- [ ] Colors look good on mobile devices
- [ ] Colorblind-friendly (test with simulators)

### Colorblind Testing

**Tools:**
- [Color Oracle](https://colororacle.org/) (free app)
- [Coblis Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)

---

## Color Combinations to Avoid

### 1. Red + Green
- Problematic for colorblind users (8% of males)

### 2. Yellow + White
- Poor contrast, hard to read

### 3. Too Many Bright Colors
- Overwhelming, unprofessional

### 4. Neon Colors
- Hard on eyes, looks amateurish

### 5. Pure Black (#000000)
- Too harsh, use dark gray instead (#1F2937)

---

## Quick Selection Guide

**If you're unsure, use this decision tree:**

1. **Need maximum trust?** → Blue (#2563EB)
2. **Want to stand out from competitors?** → Check what they use, pick different
3. **Service-based business?** → Blue or Teal (#0D9488)
4. **Product-based business?** → Orange or Red
5. **Premium/Luxury service?** → Navy (#1E3A8A), Purple (#7C3AED), or Charcoal (#374151)
6. **Health/Wellness?** → Green (#059669) or Teal (#0D9488)
7. **Legal/Corporate?** → Navy (#1E40AF) or Slate (#475569)
8. **Creative/Consulting?** → Purple (#7C3AED) or Teal (#0D9488)

**When in doubt**: Use the default blue (#2563EB). It's safe, professional, and works for most industries.

---

## Examples by Business Type

### Mortgage Broker (Brisbane)
```json
{
  "primary_color": "#059669",  // Green - wealth, growth
  "primary_color_dark": "#047857",
  "accent_color": "#D1FAE5"
}
```

### Real Estate Agent (Sydney)
```json
{
  "primary_color": "#0D9488",  // Teal - modern, fresh
  "primary_color_dark": "#0F766E",
  "accent_color": "#CCFBF1"
}
```

### Plumber (Melbourne)
```json
{
  "primary_color": "#EA580C",  // Orange - reliable, energetic
  "primary_color_dark": "#C2410C",
  "accent_color": "#FFEDD5"
}
```

### Family Lawyer (Perth)
```json
{
  "primary_color": "#1E40AF",  // Navy - authoritative, trustworthy
  "primary_color_dark": "#1E3A8A",
  "accent_color": "#DBEAFE"
}
```

### Business Consultant (Brisbane)
```json
{
  "primary_color": "#7C3AED",  // Purple - innovative, premium
  "primary_color_dark": "#6D28D9",
  "accent_color": "#EDE9FE"
}
```

---

## Pre-Launch Checklist

Before launching, verify:

- [ ] Colors configured in `project.json`
- [ ] Primary color tested for contrast (4.5:1 minimum)
- [ ] Colors work with logo and imagery
- [ ] Tested on mobile devices
- [ ] Viewed by someone else for feedback
- [ ] Checked with colorblind simulator
- [ ] Accent color is subtle, not overpowering
- [ ] Dark variant is clearly different from primary
- [ ] Colors match industry expectations
- [ ] Overall appearance is professional

---

## Need Help?

**If you can't decide:**
1. Look at 3-5 successful competitors
2. Note their color choices
3. Pick something similar but distinct
4. Test with target customers if possible

**Default Fallback:**
If no colors are specified, the template uses a safe, professional blue (#2563EB).

---

## Resources

**Color Tools:**
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors) - Pre-made palettes
- [UI Colors](https://uicolors.app/) - Tailwind palette generator
- [Adobe Color](https://color.adobe.com/) - Color wheel and harmonies

**Accessibility:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum)

**Color Psychology:**
- [Color Psychology Guide](https://www.helpscout.com/blog/psychology-of-color/)

---

## Remember

**Colors are part of your brand identity.** Choose colors that:
1. Reflect your industry
2. Build trust with your audience
3. Meet accessibility standards
4. Differentiate you from competitors
5. Look professional across all devices

When in doubt, **keep it simple and professional**—it's better to be safe than sorry.
