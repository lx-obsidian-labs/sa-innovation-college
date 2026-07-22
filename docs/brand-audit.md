# Brand Audit — SA Innovation College

**Date:** July 2026
**Purpose:** Assessment of the current brand identity, personality, inconsistencies, and recommended direction for the headless Next.js rebuild.

---

## 1. Current Brand Identity

### 1.1 Color Palette

The live site's Elementor CSS reveals a fragmented colour system with no clear brand hierarchy.

**Hardcoded colours found in Elementor CSS:**

| Hex Code | Usage | Assessment |
|----------|-------|------------|
| #353535 | Dark grey text | Usable as body/heading ink |
| #3d4459 | Dark blue-grey | Appears in gradients and backgrounds |
| #e9e9e9 | Light grey | Section backgrounds, borders |
| #f9f9f9 | Off-white | Canvas/alternate section bg |
| #fffefe / #ffffff | White | Primary canvas |
| #06d9fa | Cyan/light blue | Likely a default Elementor accent, not intentional brand |
| #4632da | Purple | Likely a default Elementor accent, not intentional brand |
| #7e222200 | Transparent | Accidental transparent value |

**Elementor Global Color Variables:**

| Variable | Usage |
|----------|-------|
| --e-global-color-primary | Gradient endpoints (hero overlays) |
| --e-global-color-accent | Gradient endpoints (hero overlays) |
| --e-global-color-8630d9f | Custom, unknown purpose |
| --e-global-color-b500f0a | Custom, unknown purpose |
| --e-global-color-f898f31 | Custom, unknown purpose |

**Assessment:** The colour system is not a deliberate brand palette. It is a collection of Elementor defaults, template leftovers, and arbitrary custom variables with non-descriptive IDs. There is no single primary brand colour, no defined accent strategy, and no accessible contrast ratios documented. The cyan (#06d9fa) and purple (#4632da) are almost certainly Elementor boilerplate, not SA Innovation College brand colours.

**What is actually "the brand" today:** The dominant visible tones are dark grey (#353535), dark blue-grey (#3d4459), and white. The hero uses a gradient overlay from dark blue to an accent. This suggests the college has drifted toward a dark, muted palette without formalising it.

### 1.2 Typography

| Element | Font | Source |
|---------|------|--------|
| Headings | Montserrat | Google Fonts (via Elementor) |
| Body | Varela Round | Google Fonts (via Elementor) |

Font sizes range from 14px to 80px across 13 different sizes. There is no documented type scale, no defined weight usage, and no responsive sizing strategy visible in the CSS.

**Assessment:** Montserrat is a competent geometric sans-serif used widely in education. Varela Round is a rounded sans-serif that introduces a softer, more casual tone. The pairing creates mild tension: Montserrat reads as structured and professional, while Varela Round reads as friendly and approachable. This could work, but the execution is inconsistent -- 13 different font sizes suggest no systematic scale was defined.

### 1.3 Logo Usage

| Property | Value |
|----------|-------|
| Logo format | WebP |
| Display size | 618 x 618 |
| File size | 29 KB |
| Favicon | Favicon-150x150.webp (150x150) |

The logo is a square format (618x618) which suggests it may be a mark/icon rather than a horizontal lockup. The favicon file name indicates it was prepared separately. No SVG version of the logo was found in the media library.

**Assessment:** The logo exists in only one format and one size. For a headless rebuild, the logo should exist as: SVG (for sharpness at any size), a horizontal lockup (for header use), and a mark-only variant (for favicon/social). The 618x618 WebP is not suitable for responsive header display.

### 1.4 Visual Tone (Current Site)

- Hero sections use gradient overlays (dark blue to accent) -- creates a moody, institutional feel
- Header uses sticky behaviour with blur background -- modern pattern
- CTA buttons use "round" shape (high border-radius) -- softer, friendlier tone
- Partner logos displayed in a row below hero -- standard trust pattern
- Section backgrounds alternate between white (#ffffff) and light grey (#f9f9f9)
- No consistent iconography system identified
- Background decorative images (BG-*.png) are Elementor artifacts, not brand elements

**Overall visual tone:** Dark and muted with occasional bright accents. The site leans toward a traditional educational institution look without the polish of established competitors. It reads as a template that has been partially customised.

---

## 2. Brand Personality Assessment

### 2.1 What the Current Site Communicates

| Dimension | Current Reading | Evidence |
|-----------|----------------|----------|
| Modern vs Traditional | Mixed | Sticky header with blur is modern; gradient overlays and 13 font sizes suggest unstructured implementation |
| Premium vs Budget | Budget | Template-origin content from "Beyond" digital marketing agency; generic service cards; placeholder data on contact page |
| Professional vs Casual | Casual-leaning | Varela Round font; round buttons; no formal brand guidelines; broken social links |
| Educational vs Commercial | Unclear | Site identity says "college" but the content reads like a digital agency template. Courses page shows "Strategy" service cards. No actual programme detail pages. |
| Confident vs Uncertain | Uncertain | CTA buttons link to Elementor library (not site pages); placeholder contact data on contact page; no testimonials with real names |

### 2.2 Brand Personality Narrative

The current SA Innovation College website communicates an institution in transition. The tagline "Knowledge Growth Excellence" signals ambition, but the execution does not yet match. The site reads as a newly established college that has launched quickly using available tools (WordPress + Elementor + Hello Biz theme) without investing in brand identity development.

Key personality gaps:

- **No visual confidence:** The colour palette is scattered. There is no "hero colour" that someone would associate with SA Innovation College.
- **No narrative confidence:** Copy is generic ("Your future in education is ready to take off"). It does not differentiate from any other college.
- **No social confidence:** Testimonials exist but may use stock imagery. No real student names or outcomes are prominently displayed.
- **No institutional confidence:** Accreditation details are not prominently displayed. Partner logos exist but are not explained.

### 2.3 Comparison to Competitor Positioning

Based on the competitor research:

| Competitor | Personality | SA Innovation College (Current) |
|------------|-------------|--------------------------------|
| Richfield | Mobile-first, tech-forward, industry-connected | Not yet communicating this |
| Emeris | Established (34 years), unified brand, energetic teal | No equivalent brand anchor |
| Rosebank College | Interactive tools, student-first, accessible | No equivalent tools or interactivity |
| Coursera | Outcome-led, data-driven, trustworthy | No outcome data or proof points |
| Udemy | Modern, democratic, violet accent | No equivalent brand colour strategy |

**The gap:** Every competitor has a clear, singular brand personality. SA Innovation College currently has no definable personality because the brand has not been intentionally designed.

---

## 3. Brand Inconsistencies

### 3.1 Mixed Colour Palettes

The site uses at least 8 distinct hardcoded colours plus 5 Elementor global colour variables. No colour has been designated as "the brand colour." The cyan and purple values are Elementor defaults that have no connection to an education institution's brand. The custom Elementor variables (8630d9f, b500f0a, f898f31) use hash-based IDs, confirming they were auto-generated, not deliberately named.

**Impact:** Users cannot form a colour association with SA Innovation College. If you removed the logo, the colour palette alone would not identify the institution.

### 3.2 Template Content from Different Businesses

This is the most critical inconsistency. The WordPress REST API reveals:

- All 5 page body fields contain **placeholder content from a "Beyond" digital marketing agency** (discovered in content-audit.md:48)
- Blog categories include "Beyond News", "Hybrid Events", "Startups", "Meetups" -- none related to education (content-audit.md:29-39)
- The Courses page shows generic "Strategy" service cards instead of actual programmes (final-report.md:58)
- A duplicate "Strategy" service card exists on the Courses page (wordpress-audit.md:142)

**Impact:** The site is actively displaying another business's identity. This is a credibility risk if discovered by prospective students or partners.

### 3.3 Placeholder and Broken Elements

| Issue | Location | Severity |
|-------|----------|----------|
| CTA buttons link to Elementor library | All pages | Critical -- users leave the site |
| Social media links broken | Footer | High -- no social proof pathway |
| Floating contact widget has empty href | Global | High -- broken conversion path |
| Contact page has wrong phone, email, address | Contact page | Critical -- wrong information displayed |
| 96 of 100 images missing alt text | Global | High -- accessibility failure, SEO penalty |
| No meta descriptions on any page | Global | High -- poor search visibility |
| No Open Graph tags | Global | High -- poor social sharing |
| No JSON-LD schema | Global | Medium -- missed rich results |
| Permalinks set to default (?p=ID) | Global | Medium -- poor URL structure |
| No privacy policy page | Global | Legal/compliance risk |

**Impact:** The site has fundamental functional failures that undermine trust and conversion.

### 3.4 Missing Brand Elements

| Element | Status |
|---------|--------|
| Brand colour palette | Not defined |
| Brand typography scale | Not defined |
| Brand voice/tone guide | Not defined |
| Logo variations (SVG, horizontal, mark) | Not available |
| Iconography system | Not defined |
| Photography style guide | Not defined |
| Accreditation display | Not prominent |
| Mission/vision/values | Not visible on site |
| Brand tagline differentiation | Generic ("Knowledge Growth Excellence") |

---

## 4. Recommended Brand Direction

### 4.1 Target Brand Personality

SA Innovation College should project the following personality traits in the new site:

| Trait | Target | Rationale |
|-------|--------|-----------|
| **Modern** | High | The headless Next.js rebuild signals technical capability. The brand should match. |
| **Trustworthy** | High | Education requires trust. Accreditation, stats, and real testimonials are non-negotiable. |
| **Approachable** | Medium-High | The target audience includes first-time college applicants. The brand should feel welcoming, not intimidating. |
| **South African** | High | The college operates in Centurion, Gauteng. The brand should feel locally rooted, not generic. |
| **Outcome-focused** | High | Students choose colleges for career outcomes. The brand should communicate results, not just features. |
| **Professional** | Medium-High | Balancing approachability with institutional credibility. Not corporate-stiff, but not casual. |

### 4.2 Colour Direction

Based on competitor analysis and the college's positioning:

**Recommended primary:** Deep institutional blue (e.g., #1B4D8E)
- Communicates trust, credibility, and stability
- Aligns with education sector conventions (Coursera, Richfield, Emeris all use blue-family primaries)
- High contrast on white canvas for accessibility

**Recommended accent:** Warm amber (e.g., #F59E0B)
- Creates energy and urgency without competing with primary
- Works for badges, CTAs highlights, and time-sensitive elements
- Warm tone connects to South African visual identity

**Canvas:** White (#FFFFFF) with light surface (#F8FAFC) for section separation
**Ink:** Near-black (#0F172A) for headings, soft ink (#475569) for body text

**Rationale from competitor research (competitor-research.md:480-508):**
Coursera uses a single saturated blue (#0056d2) plus navy for callout bands. Udemy uses a single violet. Inflearn uses a single mint green. The pattern across successful education platforms is: one primary colour, one accent at most, neutral canvas. SA Innovation College should follow this pattern.

### 4.3 Typography Direction

**Recommended approach:** Single font family, three weights.

**Recommended font:** Inter
- Free, open source, optimised for screens
- Excellent readability at small sizes (important for mobile-first SA audience)
- Supports all South African languages
- Used by modern platforms (Coursera uses Source Sans Pro, Udemy uses Inter-adjacent humanist sans)

**Weight scale:**
- 700 (Bold): H1, H2, section headlines
- 600 (Semi-bold): H3, H4, nav labels, button text
- 400 (Regular): body text, descriptions

**Type scale (mobile-first):**
- H1: 32px mobile / 48px desktop, line-height 1.2
- H2: 24px mobile / 36px desktop, line-height 1.3
- H3: 20px mobile / 24px desktop, line-height 1.4
- Body: 16px, line-height 1.6
- Small/Caption: 14px, line-height 1.5

**Why not keep Montserrat + Varela Round?**
Montserrat is viable but overused in education. Varela Round introduces a casual rounded tone that may conflict with institutional credibility. A single family (Inter) reduces load time, ensures consistency, and simplifies the design system. If the client prefers to retain Montserrat, it is acceptable -- but Varela Round should be dropped in favour of Inter for body text.

### 4.4 Tone of Voice

| Dimension | Target | Avoid |
|-----------|--------|-------|
| Formality | Professional but not stiff | Academic jargon, corporate-speak |
| Confidence | Assured and direct | Arrogant, boastful, or uncertain |
| Specificity | Concrete and evidence-based | Vague claims ("thousands of students") |
| Warmth | Welcoming and encouraging | Patronising, overly casual |
| Urgency | Action-oriented CTAs | Pressure tactics, fake scarcity |

**Voice principles:**
1. Lead with outcomes, not features ("Get job-ready in 12 months" not "We offer a 12-month programme")
2. Use real numbers and real names ("5,000+ graduates" not "many successful students")
3. Write for the reader, not the institution ("Your future starts here" not "We provide excellent education")
4. Be specific about what makes SA Innovation College different (free computer literacy, location in Centurion, specific accreditations)
5. Use South African English conventions (not Americanised spelling)

### 4.5 Visual Language

| Element | Recommendation |
|---------|---------------|
| Photography | Real campus, real students, real graduates. No stock photos. Authentic South African context. |
| Iconography | Consistent icon library (Lucide or Heroicons). No mixed icon styles. |
| Illustration | Minimal or none. Let photography carry the visual weight. |
| Cards | 8px border-radius, consistent padding, clear hierarchy (image > title > metadata > CTA) |
| Buttons | 8px radius primary (filled), 8px radius secondary (outlined), 44-48px height for touch |
| Section spacing | 64px between major sections (desktop), 32-48px (mobile) |
| Content width | Max 1200px centred |
| Gradients | Avoid. Use solid colours with subtle surface variations instead. |

---

## 5. Brand Personality Matrix

Score each dimension on a 1-10 scale, where 1 = left side and 10 = right side.

| Dimension | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Current | Target |
|-----------|---|---|---|---|---|---|---|---|---|----|---------|--------|
| Modern | x | | | | | | | | | Traditional | **4** | **8** |
| Premium | | | | | x | | | | | Affordable | **5** | **7** |
| Professional | | | | | x | | | | | Casual | **5** | **8** |
| Technical | | | | x | | | | | | Human | **4** | **7** |
| Aspirational | | | | | | x | | | | Practical | **6** | **7** |
| Confident | | | | x | | | | | | Modest | **4** | **8** |
| Academic | | | | | x | | | | | Vocational | **5** | **6** |
| Corporate | | | | | | x | | | | Friendly | **6** | **7** |

### Matrix Interpretation

**Current state (blurred middle):** The site scores near the centre on every dimension, which means it communicates nothing distinctive. A brand that is "kind of modern, kind of professional, kind of everything" is functionally invisible. The low confidence score (4) is particularly damaging for an education institution where trust is the primary decision factor.

**Target state (clear identity):** The new site should push toward:
- **Modern (8):** The Next.js rebuild, mobile-first design, and clean UI signal technical capability
- **Professional (8):** Accreditation, real testimonials, and structured content build credibility
- **Confident (8):** Specific numbers, named graduates, and clear programme outcomes replace vague claims
- **Human (7):** Real photography, real names, and welcoming tone balance the professional positioning
- **Friendly (7):** Approachable but not casual -- the college should feel welcoming to first-time applicants

**The shift to avoid:** Do not push any single dimension to 10. A brand that is "ultra-premium" alienates the target market. A brand that is "ultra-casual" undermines credibility. The goal is a clear, distinctive identity -- not an extreme one.

---

## 6. Actionable Next Steps

### Immediate (Before Design Phase)

1. **Confirm brand colours with client** -- present 2-3 palette options based on the recommended direction. Get written sign-off.
2. **Confirm typography with client** -- present Inter as recommended, with Montserrat as alternative. Get sign-off.
3. **Confirm logo assets** -- request SVG, horizontal lockup, and mark-only variants from the client. If no SVG exists, commission one.
4. **Confirm brand voice** -- present tone of voice guidelines to client for approval.
5. **Verify all statistics** -- 5,000+ students, 15+ programmes, 95% graduation rate need client confirmation before being designed around.

### During Design Phase

6. **Build a design token system** -- translate confirmed brand decisions into CSS custom properties (colours, typography, spacing, radii).
7. **Create a brand style guide page** -- a living document within the Next.js project that shows the design system in action.
8. **Remove all template content** -- eliminate every trace of the "Beyond" digital marketing agency content, categories, and images.
9. **Source real photography** -- brief a photographer or source licensed images for: campus, students, graduates, course-specific contexts.

### Post-Launch

10. **Monitor brand consistency** -- ensure all new content follows the established palette, typography, and tone guidelines.
11. **Collect real testimonials** -- integrate HelloPeter or Google Reviews; collect named, consented student testimonials.
12. **Audit quarterly** -- review the site against this brand audit every quarter to prevent brand drift.

---

*Brand audit compiled July 2026. Sources: live site Elementor CSS analysis, WordPress REST API data, discovery phase outputs, competitor research, media audit, and content audit.*
