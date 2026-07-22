# Homepage Wireframe Specification

**Document:** Homepage Wireframe Specification
**Project:** SA Innovation College Website Rebuild
**Date:** July 2026
**Status:** Pre-development Specification

---

## Table of Contents

1. [Document Purpose](#document-purpose)
2. [Design Principles Reference](#design-principles-reference)
3. [Section 1: Announcement/Utility Bar](#section-1-announcementutility-bar)
4. [Section 2: Header](#section-2-header)
5. [Section 3: Hero Section](#section-3-hero-section)
6. [Section 4: Trust Strip](#section-4-trust-strip)
7. [Section 5: Course Discovery](#section-5-course-discovery)
8. [Section 6: Featured Programmes](#section-6-featured-programmes)
9. [Section 7: About the College](#section-7-about-the-college)
10. [Section 8: Why Choose SA Innovation](#section-8-why-choose-sa-innovation)
11. [Section 9: Student Outcomes/Stats](#section-9-student-outcomesstats)
12. [Section 10: Application Process](#section-10-application-process)
13. [Section 11: Testimonials](#section-11-testimonials)
14. [Section 12: Partner Logos](#section-12-partner-logos)
15. [Section 13: FAQ](#section-13-faq)
16. [Section 14: Final CTA](#section-14-final-cta)
17. [Section 15: Footer](#section-15-footer)
18. [Page Flow Summary](#page-flow-summary)
19. [Scroll Depth Estimate](#scroll-depth-estimate)
20. [Conversion Points Mapped](#conversion-points-mapped)
21. [Performance Budget Per Section](#performance-budget-per-section)

---

## Document Purpose

This document provides a complete wireframe specification for the SA Innovation College homepage. Each section includes business rationale, user rationale, responsive layout descriptions, ASCII wireframe diagrams, content specifications, component references, and a comparison against the current broken site.

The homepage serves one job: **route visitors to programme information and convert them into enquiries or applications**. Every section must earn its place on the page.

---

## Design Principles Reference

All sections in this document follow these non-negotiable principles (from `design-brief.md`):

1. **Mobile First, Data Conscious** -- every layout starts at 360px and scales up
2. **Clarity Over Cleverness** -- literal labels, obvious CTAs, predictable hierarchy
3. **Trust Is Shown, Not Claimed** -- accreditation badges, real addresses, verifiable facts
4. **Every Page Has One Job** -- the homepage routes and converts
5. **Content Before Container** -- real content drives layout, not empty templates
6. **Progressive Disclosure** -- minimum information at each scroll depth
7. **Accessibility Is Non-Negotiable** -- WCAG 2.2 AA minimum

---

## Section 1: Announcement/Utility Bar

### Business Rationale

The announcement bar creates urgency around time-sensitive information (intake dates, bursary deadlines, open days) without cluttering the hero section. It is the only section that changes frequently, giving returning visitors a reason to re-engage. Competitor research (Richfield, Emeris) confirms this pattern works in the SA private education market. The current site has no mechanism for time-sensitive communication.

### User Rationale

Answer the question: "Is the timing right for me to act?" Returning visitors (Journey 3 in `ux-research.md`) need a signal that something has changed. First-time visitors benefit from knowing that intakes are currently open, which reduces the "I'll come back later" deferral behaviour.

### Wireframe Description

**Desktop:**
- Full-width strip, 40px height
- Background: `--color-primary-dark` (#0F2D5E)
- White text, centered, 14px (`--text-caption`)
- Single line: "Mid-Year Intake Now Open -- Apply Before 15 August 2026"
- Optional close button (X) on far right, 44x44px tap target
- No images, no animations

**Tablet:**
- Identical to desktop. Full-width strip at 40px height.
- Text may wrap to two lines on narrow tablets (768px). Acceptable.

**Mobile:**
- Full-width strip, 40px height
- Text truncates or wraps. If text is too long, use abbreviated version: "Mid-Year Intake OPEN -- Apply Now"
- Close button remains accessible at 44x44px

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|  [X]  Mid-Year Intake Now Open -- Apply Before 15 August 2026   |
+------------------------------------------------------------------+

Mobile (360px):
+----------------------------------+
| [X] Mid-Year Intake OPEN         |
|     Apply Now                    |
+----------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Primary text | "Mid-Year Intake Now Open -- Apply Before 15 August 2026" | Placeholder -- confirm dates with client |
| Close button | X icon (44x44px) | Optional. If present, remembers dismiss for 7 days via localStorage |
| Link target | /admissions or /admissions/intake-dates | Clickable anywhere on the strip |
| Background | `--color-primary-dark` (#0F2D5E) | |
| Text colour | `--color-text-inverse` (#FFFFFF) | |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Banner/Alert | Design system tokens | Uses `--color-primary-dark` background, `--text-caption` font |
| Close Button | Button (ghost variant, white) | 44x44px minimum |

### Responsive Behaviour

| Breakpoint | Width | Height | Text Size | Layout |
|------------|-------|--------|-----------|--------|
| Mobile | 360px | 40px | 13px | Single line, truncates with ellipsis if needed |
| Tablet | 768px | 40px | 13px | Single line, full text |
| Desktop | 1200px | 40px | 13px | Single line, centered, close button right-aligned |

### Why It Is Better Than the Old Site

The current site has no announcement mechanism. Time-sensitive information (intake dates, bursary deadlines) would need to be manually edited into the hero or buried in a page. The announcement bar provides a dedicated, dismissable, reusable strip that can be toggled on/off per page without touching any other component.

---

## Section 2: Header

### Business Rationale

The header is the primary navigation instrument. It must accomplish three things: (1) identify the institution immediately via the logo, (2) make programme browsing accessible within one tap, and (3) keep the "Apply Now" CTA visible at all times. Competitor analysis shows that dual-CTA headers (Apply + Enquire) outperform single-CTA headers in the SA education market. The current site header is a generic "Beyond" agency template header with broken links and no Apply CTA.

### User Rationale

Every persona needs the header to work differently: Thabo (student) needs programme navigation. Dlamini (parent) needs the phone number and address. Priya (corporate) needs a "For Employers" path. Naledi (working adult) needs WhatsApp contact. The header must serve all four without clutter.

### Wireframe Description

**Desktop (above hero, not yet sticky):**
- Full-width white background
- Left: SA Innovation College logo (height 40px, links to /)
- Centre: Navigation links -- "Programmes" | "Admissions" | "About" | "Contact"
- Right: Utility links (small, 13px) -- "Call 0800 014 568" | "WhatsApp"
- Far right: "Enquire Now" (secondary button) + "Apply Now" (primary button)
- Height: 64px (`--nav-height`)
- Border bottom: 1px solid `--color-border` (#E2E8F0)

**Desktop (sticky, after scrolling past hero):**
- Same layout, white background with `backdrop-filter: blur(12px)` and reduced opacity (0.95)
- Logo may shrink slightly (40px to 32px height)
- Sticky z-index: `--z-sticky` (1020)

**Tablet (768px-1023px):**
- Logo left, hamburger icon right
- No visible nav links
- "Apply Now" button visible next to hamburger (small, 36px height)
- Height: 56px (`--nav-height-mobile`)

**Mobile (360px-639px):**
- Logo left (max 140px width), hamburger icon right
- Optional mini "Apply" button (pill, 32px height) next to hamburger
- Height: 56px
- Sticky at all times

### ASCII Wireframe

```
Desktop (1200px):
+----------------------------------------------------------------------+
| [LOGO]    Programmes  Admissions  About  Contact  | 0800... WhatsApp |
|                                              [Enquire] [Apply Now]  |
+----------------------------------------------------------------------+

Tablet (768px):
+----------------------------------------+
| [LOGO]              [Apply] [ = ]      |
+----------------------------------------+

Mobile (360px):
+------------------------------+
| [LOGO]           [Apply][ = ]|
+------------------------------+

Mobile Menu Overlay (after tapping = ):
+----------------------------------+
| [X]                              |
| [  Search...                   ] |
|                                  |
| > Programmes                     |
|   > Short Courses                |
|   > Diplomas & Certificates      |
|   > Online Learning              |
| > Admissions                     |
|   > How to Apply                 |
|   > Fees & Payment Plans         |
|   > Bursaries                    |
|   > Intake Dates                 |
| > About                          |
|   > Our Story                    |
|   > Accreditation                |
|   > Campuses                     |
|   > Partners                     |
| > Contact                        |
|                                  |
| Current Students:                |
|   Student Portal                 |
|   Academic Calendar              |
|                                  |
| For Employers:                   |
|   Corporate Training             |
|   Request a Quote                |
|                                  |
| +------------------------------+ |
| |        APPLY NOW             | |
| +------------------------------+ |
| |    CALL 0800 014 568         | |
| +------------------------------+ |
+----------------------------------+
```

### Content

| Element | Value | Link Target |
|---------|-------|-------------|
| Logo | SA Innovation College logo (WebP, 618x618) | / |
| Nav: Programmes | "Programmes" | /programmes |
| Nav: Admissions | "Admissions" | /admissions |
| Nav: About | "About" | /about |
| Nav: Contact | "Contact" | /contact |
| Utility: Phone | "Call 0800 014 568" | tel:0800014568 |
| Utility: WhatsApp | "WhatsApp" | wa.me/27727733960 |
| CTA: Enquire Now | "Enquire Now" (secondary) | /contact |
| CTA: Apply Now | "Apply Now" (primary) | /apply |
| Mobile: Search | Search input (top of overlay) | In-overlay search |
| Mobile: Student Portal | "Student Portal" (external link) | External URL |
| Mobile: Corporate Training | "Corporate Training" | /contact/corporate |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Header/Navbar | Design system tokens (`--nav-*`) | Sticky behaviour with blur backdrop |
| Button: Primary | `--btn-primary-*` | "Apply Now" |
| Button: Secondary | `--btn-secondary-*` | "Enquire Now" |
| Button: Ghost | `--btn-ghost-*` | Utility links (phone, WhatsApp) |
| Mobile Menu Overlay | Custom component | Full-screen overlay with accordion nav |
| Search Input | `--input-*` tokens | Within mobile overlay |

### Responsive Behaviour

| Breakpoint | Width | Height | Nav Style | CTA Visibility |
|------------|-------|--------|-----------|----------------|
| Mobile | 360px | 56px | Hamburger + overlay | Apply mini-button always visible |
| Tablet | 768px | 56px | Hamburger + overlay | Apply button visible |
| Desktop | 1024px+ | 64px | Horizontal nav links | Apply + Enquire both visible |
| Desktop Sticky | 1024px+ | 64px | Same, with backdrop blur | Same |

### Why It Is Better Than the Old Site

The current site has a "Beyond" agency template header with navigation items that link to placeholder pages, broken social links, and no "Apply Now" CTA. The new header provides clear, task-oriented navigation with two visible conversion CTAs (Apply + Enquire), a phone number and WhatsApp link for direct contact, and a mobile menu that organises content by audience (Prospective Students, Current Students, For Employers). Every link points to a real page.

---

## Section 3: Hero Section

### Business Rationale

The hero section has 5 seconds to communicate: (1) what SA Innovation College offers, (2) that it is legitimate, and (3) what to do next. Competitor research (Coursera, Richfield, Emeris) confirms that outcome-led headlines with a single primary CTA outperform feature-led or abstract headlines. The current hero text "Through Knowledge, We Grow Towards Excellence" is aspirational but tells a first-time visitor nothing about what the college actually does.

### User Rationale

Thabo (school leaver) lands from a Google search and needs immediate confirmation that this college offers what he searched for. Dlamini (parent) needs to see a real address and accreditation within the first screen. Naledi (working adult) needs to see "No Matric Required" or programme types that match her situation. The hero must answer: "Am I in the right place?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, white background
- Two-column layout within a 1200px max-width container
- Left column (6/12 grid, ~580px): text content
  - Overline badge: "Accredited Private Education" (amber badge, `--text-overline`)
  - Headline (H1): "Get the Skills That Get You Hired" (using `--text-display` clamp 36-56px)
  - Sub-headline: "SA Innovation College offers accredited short courses and qualifications in Centurion, Gauteng. No lengthy applications. Real skills. Real jobs." (using `--text-body-lg`, 16-18px)
  - Primary CTA: "Apply Now" (button, `--btn-height-lg` 48px)
  - Secondary CTA: "Browse Programmes" (text link, `--text-body`, primary blue colour, underline on hover)
  - Trust micro-copy below CTAs: "Free Computer Literacy course available" (13px, muted)
- Right column (6/12 grid, ~580px): hero image
  - Real campus/student photography (not stock)
  - Image dimensions: max 1200px wide, WebP format
  - Rounded corners: `--radius-lg` (12px)
  - Eager-loaded with `fetchpriority="high"`

**Tablet (768px-1023px):**
- Single column, stacked layout
- Text content first (full width)
- Hero image below text, full width
- Reduced padding: `--space-10` (40px) top/bottom

**Mobile (360px-639px):**
- Single column, stacked layout
- Text content first
- Hero image below, full width, max-height 240px (object-fit: cover)
- CTA buttons stack vertically (full width)
- Padding: `--space-8` (32px) top/bottom, `--space-4` (16px) horizontal

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|  [Accredited Private Education]     +------------------------+   |
|                                     |                        |   |
|  Get the Skills That               |    HERO IMAGE          |   |
|  Get You Hired                     |    (student/campus)    |   |
|                                     |                        |   |
|  SA Innovation College offers       +------------------------+   |
|  accredited short courses...                                     |
|                                                                  |
|  [Apply Now]   Browse Programmes                                 |
|                                                                  |
|  Free Computer Literacy course available                         |
|                                                                  |
+------------------------------------------------------------------+

Tablet (768px):
+----------------------------------------------+
| [Accredited Private Education]                |
|                                              |
| Get the Skills That Get You Hired            |
|                                              |
| SA Innovation College offers accredited...   |
|                                              |
| [Apply Now]   Browse Programmes              |
|                                              |
| +------------------------------------------+ |
| |         HERO IMAGE                       | |
| +------------------------------------------+ |
+----------------------------------------------+

Mobile (360px):
+------------------------------+
| [Accredited Private Education]|
|                              |
| Get the Skills That          |
| Get You Hired                |
|                              |
| SA Innovation College offers |
| accredited short courses...  |
|                              |
| +--------------------------+ |
| |      APPLY NOW           | |
| +--------------------------+ |
|   Browse Programmes          |
|                              |
| +--------------------------+ |
| |      HERO IMAGE          | |
| +--------------------------+ |
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Overline badge | "Accredited Private Education" | Amber badge, `--badge-accent-*` tokens |
| Headline (H1) | "Get the Skills That Get You Hired" | Uses `--text-display` scale |
| Sub-headline | "SA Innovation College offers accredited short courses and qualifications in Centurion, Gauteng. No lengthy applications. Real skills. Real jobs." | Uses `--text-body-lg` scale |
| Primary CTA | "Apply Now" | Links to /apply |
| Secondary CTA | "Browse Programmes" | Text link to /programmes |
| Trust micro-copy | "Free Computer Literacy course available" | 13px, `--color-text-muted` |
| Hero image | Real campus or student photo | WebP, max 1200w, 80KB budget |
| Alt text | "Students in a classroom at SA Innovation College Centurion campus" | Descriptive, max 125 chars |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Badge: Accent | `--badge-accent-*` tokens | Overline label |
| Button: Primary | `--btn-primary-*` tokens | "Apply Now" |
| Text Link | `--text-body` with `--color-text-accent` | "Browse Programmes" |
| Image | Next.js `<Image>` | Eager-loaded, responsive srcset |

### Responsive Behaviour

| Breakpoint | Layout | Columns | Image Position | CTA Stacking |
|------------|--------|---------|----------------|--------------|
| Mobile | Stacked | 1 | Below text | Vertical (full-width) |
| Tablet | Stacked | 1 | Below text | Horizontal |
| Desktop | Side-by-side | 6+6 (12-col grid) | Right column | Horizontal |

### Why It Is Better Than the Old Site

The current hero says "Through Knowledge, We Grow Towards Excellence" -- an aspirational statement that answers no visitor question. It has no visible CTA, no programme information, and no trust signals. The new hero leads with an outcome ("Get You Hired"), names the institution and location, includes a free course hook, and provides two clear CTAs. The hero image uses real photography instead of decorative Elementor backgrounds.

---

## Section 4: Trust Strip

### Business Rationale

Trust is the single biggest barrier to conversion in the SA private education market. Competitor research (Richfield, Emeris) confirms that accreditation logos placed immediately below the hero significantly reduce bounce rates. The current site has zero accreditation information visible on the homepage. Parents (Dlamini persona) specifically look for DHET, QCTO, and Umalusi registration before scrolling further.

### User Rationale

Dlamini (parent) needs to verify legitimacy within the first screen. Thabo (student) needs reassurance that the college is registered. The trust strip answers: "Is this college legitimate?" without requiring a click.

### Wireframe Description

**Desktop (1200px+):**
- Full-width strip, background: `--color-surface` (#F8FAFC)
- Content centred within 1200px container
- 3-4 accreditation/partner logos in a horizontal row
- Each logo: grayscale by default (`filter: grayscale(100%) opacity(60%)`), colour on hover
- Logo height: 40px, spacing: `--space-8` (32px) between logos
- Small label above logos: "Accredited & Registered With" (13px, `--color-text-muted`, uppercase, letter-spaced)
- Padding: `--space-8` (32px) top/bottom

**Tablet (768px-1023px):**
- Same layout, logos may wrap to 2 rows if 4+ logos
- Logo height reduced to 32px

**Mobile (360px-639px):**
- Horizontal scrollable row (CSS `overflow-x: auto`, `scroll-snap-type: x mandatory`)
- Each logo snap-aligned
- Logo height: 28px
- Padding: `--space-6` (24px) top/bottom

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|        ACCREDITED & REGISTERED WITH                               |
|                                                                  |
|  [DHET Logo]   [QCTO Logo]   [Umalusi Logo]   [SETA Logo]      |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| ACCREDITED & REGISTERED WITH |
|                              |
| [DHET] [QCTO] [Uma] [SET] ->|
|  (scrollable)                |
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Label | "Accredited & Registered With" | Uppercase, 13px, letter-spacing 0.1em |
| Logo 1 | DHET logo | Grayscale, link to DHET verification if available |
| Logo 2 | QCTO logo | Grayscale |
| Logo 3 | Umalusi logo | Grayscale |
| Logo 4 | SETA logo (if applicable) | Grayscale |
| Hover effect | Grayscale removed, full opacity | `transition: var(--transition-base)` |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Logo Strip | Custom horizontal flex layout | Grayscale filter tokens from design system |
| Scroll Container | CSS scroll-snap | Mobile-only horizontal scroll |

### Responsive Behaviour

| Breakpoint | Layout | Logo Height | Scroll | Spacing |
|------------|--------|-------------|--------|---------|
| Mobile | Horizontal scroll | 28px | Yes | 24px padding |
| Tablet | Horizontal row (may wrap) | 32px | No | 32px padding |
| Desktop | Horizontal row | 40px | No | 32px padding |

### Why It Is Better Than the Old Site

The current site has zero accreditation information on the homepage. A parent visiting the site has no way to verify legitimacy without hunting through sub-pages (which also contain template content). The new trust strip places accreditation logos immediately below the fold, visible within 2 seconds of landing, with no clicks required.

---

## Section 5: Course Discovery

### Business Rationale

Course discovery must help visitors self-select into the right programme category within 3 seconds. Competitor research shows that filter chips (Coursera, Inflearn) and category pill navigation outperform dropdown menus for primary content discovery. The current site lists 3-4 courses with no categorisation, no metadata, and no filtering.

### User Rationale

Thabo needs to quickly see if there is a traffic management programme. Naledi needs to filter by "No Matric Required" or "Short Course." The discovery section answers: "Do they have something for me?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, white background (`--color-canvas`)
- Section heading (H2): "Find Your Programme" (using `--text-h2`)
- Subtext: "Browse our accredited programmes by category" (16px, `--color-text-secondary`)
- Horizontal row of filter chips below heading:
  - "All" | "Short Courses" | "Qualifications" | "No Matric Required" | "Online" | "On-Campus"
  - Chip style: `--badge-gray-*` default, `--badge-primary-*` when active
  - Chips are buttons, not links
- Below chips: 3-column card grid showing programme categories (not individual courses)
  - 3 cards visible (Computer Literacy, Traffic Management, Hospitality & Tourism)
  - Each card: category image (16:9), category name, programme count, "Explore" link
- "View All Programmes" text link below grid

**Tablet (768px-1023px):**
- 2-column card grid
- Chips may wrap to 2 rows

**Mobile (360px-639px):**
- Chips in horizontal scrollable row
- 1-column card grid (full-width cards)
- Chips: "All | Short | Qualify | No Matric" (abbreviated labels)

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|  Find Your Programme                                             |
|  Browse our accredited programmes by category                    |
|                                                                  |
|  [All] [Short Courses] [Qualifications] [No Matric] [Online]   |
|                                                                  |
|  +------------------+ +------------------+ +------------------+  |
|  | [img: computer]  | | [img: traffic]   | | [img: hospo]     |  |
|  |                  | |                  | |                  |  |
|  | Computer         | | Traffic          | | Hospitality &    |  |
|  | Literacy         | | Management       | | Tourism          |  |
|  | 1 programme      | | 2 programmes     | | 1 programme      |  |
|  | Explore ->       | | Explore ->       | | Explore ->       |  |
|  +------------------+ +------------------+ +------------------+  |
|                                                                  |
|  View All Programmes ->                                          |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| Find Your Programme          |
| Browse by category           |
|                              |
| [All][Short][Qual][NoMat]-> |
| (scrollable chips)           |
|                              |
| +--------------------------+|
| | [img: computer]          ||
| | Computer Literacy        ||
| | 1 programme              ||
| | Explore ->               ||
| +--------------------------+|
| +--------------------------+|
| | [img: traffic]           ||
| | Traffic Management       ||
| | 2 programmes             ||
| | Explore ->               ||
| +--------------------------+|
| +--------------------------+|
| | [img: hospo]             ||
| | Hospitality & Tourism    ||
| | 1 programme              ||
| | Explore ->               ||
| +--------------------------+|
|                              |
| View All Programmes ->       |
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Section heading (H2) | "Find Your Programme" | `--text-h2` scale |
| Subtext | "Browse our accredited programmes by category" | `--text-body`, `--color-text-secondary` |
| Chip: All | "All" | Active by default |
| Chip: Short Courses | "Short Courses" | Filters to short course category |
| Chip: Qualifications | "Qualifications" | Filters to NQF qualifications |
| Chip: No Matric | "No Matric Required" | Key filter for Naledi persona |
| Chip: Online | "Online" | Filters to online delivery |
| Chip: On-Campus | "On-Campus" | Filters to campus-based |
| Card 1 | Computer Literacy | Image, name, count, "Explore" link |
| Card 2 | Traffic Management | Image, name, count, "Explore" link |
| Card 3 | Hospitality & Tourism | Image, name, count, "Explore" link |
| Bottom link | "View All Programmes" | Links to /programmes |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Filter Chips | `--badge-*` tokens, button behaviour | Horizontal scroll on mobile |
| Category Card | `--card-*` tokens | Image + metadata + CTA |
| Text Link | `--text-body` with `--color-text-accent` | "View All Programmes" |

### Responsive Behaviour

| Breakpoint | Grid | Chips | Cards Per Row | Card Image Ratio |
|------------|------|-------|---------------|------------------|
| Mobile | 1-col | Scrollable | 1 | 16:9 |
| Tablet | 2-col | Wrap (2 rows) | 2 | 16:9 |
| Desktop | 3-col | Single row | 3 | 16:9 |

### Why It Is Better Than the Old Site

The current site lists course names as plain text links with no images, no categorisation, and no metadata. The new discovery section uses category cards with images, programme counts, and filter chips that allow visitors to self-select by study mode, entry requirements, or programme type. This reduces cognitive overload and speeds up programme discovery.

---

## Section 6: Featured Programmes

### Business Rationale

Featured programme cards are the primary content conversion engine. They must show enough information (name, duration, level, fee indicator) to motivate a click-through to the programme detail page. Competitor research (Coursera, Udemy, Richfield) confirms that cards with 16:9 thumbnails, clear metadata, and a single CTA outperform text-only listings. The current site has zero programme detail pages.

### User Rationale

Thabo needs to see "Traffic Officer Course" with duration and cost. Naledi needs to see "No Matric Required" and "Part-Time Available." The programme section answers: "What specific programmes exist and which one fits me?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, background: `--color-surface` (#F8FAFC)
- Section heading (H2): "Featured Programmes" (using `--text-h2`)
- Subtext: "Start with a free course or explore our qualifications" (16px, `--color-text-secondary`)
- 3-column card grid
- Each card:
  - Thumbnail image (16:9 ratio, `--radius-md` top corners)
  - Qualification badge (top-left of image): "Short Course" or "NQF Level X"
  - Programme name (H3, `--text-h3`)
  - Duration: "6 weeks" or "12 months" (14px, `--color-text-secondary`)
  - Key detail: "No Matric Required" or "NQF Level 4" (14px badge if differentiator)
  - Fee indicator: "FREE" badge (amber) or "From R5,000" (14px)
  - CTA: "View Programme ->" (text link, primary blue)
  - Card: `--card-*` tokens, `--shadow-card`, hover lift `--shadow-card-hover`

**Tablet (768px-1023px):**
- 2-column grid
- 4 programmes visible (2 per row, 2 rows)
- Cards identical to desktop

**Mobile (360px-639px):**
- 1-column grid (full-width cards)
- 4 programmes visible (stacked)
- Card image above text, full width

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|  Featured Programmes                                             |
|  Start with a free course or explore our qualifications          |
|                                                                  |
|  +------------------+ +------------------+ +------------------+  |
|  |[img: computer]   | |[img: traffic]    | |[img: table]      |  |
|  | [Short Course]   | | [NQF Level 4]   | | [Short Course]   |  |
|  |                  | |                  | |                  |  |
|  | Computer         | | Traffic Officer  | | Table Service    |  |
|  | Literacy         | | Course           | | Course           |  |
|  | 6 weeks          | | 12 months        | | 4 weeks          |  |
|  | [No Matric Req]  | | NQF Level 4      | | [No Matric Req]  |  |
|  | [FREE]           | | From R5,000      | | From R2,500      |  |
|  |                  | |                  | |                  |  |
|  | View Programme ->| | View Programme ->| | View Programme ->|  |
|  +------------------+ +------------------+ +------------------+  |
|                                                                  |
|  View All Programmes ->                                          |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| Featured Programmes          |
| Start with a free course...  |
|                              |
| +--------------------------+|
| | [img: computer]          ||
| | [Short Course]           ||
| | Computer Literacy        ||
| | 6 weeks                  ||
| | [No Matric Req] [FREE]   ||
| | View Programme ->        ||
| +--------------------------+|
| +--------------------------+|
| | [img: traffic]           ||
| | [NQF Level 4]            ||
| | Traffic Officer Course   ||
| | 12 months                ||
| | NQF Level 4              ||
| | From R5,000              ||
| | View Programme ->        ||
| +--------------------------+|
| +--------------------------+|
| | [img: table]             ||
| | [Short Course]           ||
| | Table Service Course     ||
| | 4 weeks                  ||
| | [No Matric Req]          ||
| | From R2,500              ||
| | View Programme ->        ||
| +--------------------------+|
|                              |
| View All Programmes ->       |
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Section heading (H2) | "Featured Programmes" | `--text-h2` |
| Subtext | "Start with a free course or explore our qualifications" | `--text-body` |
| Card 1: Computer Literacy | Badge: "Short Course", Duration: "6 weeks", Badge: "No Matric Required", Fee: "FREE" (amber badge) | Links to /programmes/computer-literacy |
| Card 2: Traffic Officer Course | Badge: "NQF Level 4", Duration: "12 months", Fee: "From R5,000" | Links to /programmes/traffic-officer |
| Card 3: Table Service Course | Badge: "Short Course", Duration: "4 weeks", Badge: "No Matric Required", Fee: "From R2,500" | Links to /programmes/table-service |
| Bottom link | "View All Programmes" | Links to /programmes |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Programme Card | `--card-*` tokens | Image + metadata + CTA |
| Badge: Qualification | `--badge-primary-*` | "Short Course", "NQF Level X" |
| Badge: Feature | `--badge-success-*` | "No Matric Required" |
| Badge: Free | `--badge-accent-*` | "FREE" indicator |
| Button: Ghost (CTA) | Text link with arrow | "View Programme ->" |

### Responsive Behaviour

| Breakpoint | Grid | Cards Per Row | Card Image Ratio | Card Padding |
|------------|------|---------------|------------------|--------------|
| Mobile | 1-col | 1 (stacked) | 16:9 | 16px |
| Tablet | 2-col | 2 | 16:9 | 24px |
| Desktop | 3-col | 3 | 16:9 | 24px |

### Why It Is Better Than the Old Site

The current site lists course names as plain text with no images, no fees, no durations, and no entry requirements. Visitors have no way to compare programmes or understand what they are committing to. The new featured programmes section shows real programme cards with images, durations, fees, entry requirement badges, and direct links to detail pages. The "FREE" badge on Computer Literacy is a powerful differentiator that the current site buries.

---

## Section 7: About the College

### Business Rationale

The About section establishes institutional identity and provides a narrative hook for parents (Dlamini) and corporate partners (Priya). It must be brief enough to maintain scroll momentum but substantive enough to communicate that this is a real, established institution with a physical campus. The current About page content is entirely from a "Beyond" digital marketing agency template.

### User Rationale

Dlamini (parent) needs to see a real campus and understand the college's history. Priya (corporate) needs to see that this is an established institution worth partnering with. The About section answers: "Who are these people?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, white background (`--color-canvas`)
- Two-column layout within 1200px container
- Left column (6/12): image
  - Campus or student group photo
  - Rounded corners: `--radius-lg` (12px)
  - Aspect ratio: 4:3
- Right column (6/12): text content
  - Overline: "About SA Innovation College" (13px, `--color-text-muted`, uppercase)
  - Heading (H2): "Training That Leads to Employment" (using `--text-h2`)
  - Body text (2-3 sentences): Brief description of the college, its location, and its mission. "SA Innovation College is a registered private education institution based in Centurion, Gauteng. We offer accredited short courses and qualifications designed to get you job-ready. Our programmes combine practical training with industry-relevant skills."
  - CTA: "Learn More About Us ->" (text link, primary blue)
  - Trust micro-detail: "Established in Centurion | Registered with DHET" (13px, `--color-text-muted`)

**Tablet (768px-1023px):**
- Same two-column layout, reduced image size
- Padding: `--space-10` (40px) top/bottom

**Mobile (360px-639px):**
- Stacked: image first (full width, max-height 200px), then text below
- Padding: `--space-8` (32px) top/bottom

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|  +------------------+  About SA Innovation College               |
|  |                  |                                            |
|  |  CAMPUS IMAGE    |  Training That Leads to Employment         |
|  |  (4:3 ratio)     |                                            |
|  |                  |  SA Innovation College is a registered     |
|  |                  |  private education institution based in    |
|  |                  |  Centurion, Gauteng. We offer accredited   |
|  +------------------+  short courses...                          |
|                                                                  |
|                       Learn More About Us ->                     |
|                       Established in Centurion | Registered      |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| +--------------------------+|
| |      CAMPUS IMAGE        ||
| +--------------------------+|
|                              |
| About SA Innovation College  |
| Training That Leads to      |
| Employment                   |
|                              |
| SA Innovation College is a  |
| registered private education|
| institution based in        |
| Centurion, Gauteng...       |
|                              |
| Learn More About Us ->      |
| Established in Centurion    |
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Overline | "About SA Innovation College" | 13px, muted, uppercase |
| Heading (H2) | "Training That Leads to Employment" | `--text-h2` |
| Body | 2-3 sentence description of college | `--text-body-lg` |
| CTA | "Learn More About Us ->" | Links to /about |
| Trust detail | "Established in Centurion | Registered with DHET" | 13px, muted |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Image | Next.js `<Image>` | 4:3 aspect ratio, lazy-loaded |
| Text Block | Typography tokens | H2 + body + CTA |
| Text Link | `--text-body` with `--color-text-accent` | "Learn More" |

### Responsive Behaviour

| Breakpoint | Layout | Image Position | Image Size | Text Width |
|------------|--------|----------------|------------|------------|
| Mobile | Stacked | Above text | Full width, max-height 200px | Full width |
| Tablet | Side-by-side | Left | 50% width | 50% width |
| Desktop | Side-by-side | Left | 50% width | 50% width |

### Why It Is Better Than the Old Site

The current About page says "In a world where marketing strategies abound, we don't merely construct campaigns" -- this is the "Beyond" agency template content, not SA Innovation College content. The new About section uses real institutional language, a real campus photo, and provides a direct path to the full About page with accreditation details.

---

## Section 8: Why Choose SA Innovation

### Business Rationale

This section addresses the single most important question from the design brief: "What makes this college different from TVET colleges and universities?" The four differentiators must be specific, verifiable, and relevant to the target audience. The current site has zero differentiator messaging.

### User Rationale

Thabo needs to understand why he should choose this college over Tshwane South TVET. Naledi needs to see flexibility and accessibility. Dlamini needs to see accreditation and outcomes. The Why Choose section answers: "Why here and not somewhere else?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, background: `--color-surface` (#F8FAFC)
- Section heading (H2): "Why Choose SA Innovation College" (using `--text-h2`)
- Subtext: "Four reasons our students choose us" (16px, `--color-text-secondary`)
- 4-column card grid
- Each card:
  - Icon (48x48px, primary blue fill, on white circle background)
  - Card title (H3, `--text-h3`)
  - Description (2-3 sentences, `--text-body`)
  - Cards: white background, `--shadow-card`, `--radius-md`, `--card-padding`

**Tablet (768px-1023px):**
- 2-column grid (2x2)
- Cards identical to desktop

**Mobile (360px-639px):**
- 1-column grid (stacked)
- Full-width cards

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|  Why Choose SA Innovation College                                |
|  Four reasons our students choose us                             |
|                                                                  |
|  +----------------+ +----------------+ +----------------+ +-----+|
|  | [icon: cert]   | | [icon: briefcase]| | [icon: book]  | |[loc]||
|  |                | |                | |                | |     ||
|  | Accredited     | | Career-Focused | | Flexible       | |Close||
|  | Programmes     | | Training       | | Learning       | |to   ||
|  |                | |                | |                | |Home ||
|  | All programmes | | Training is    | | Short courses  | |     ||
|  | are registered | | designed with  | | fit around     | |Centu||
|  | with DHET and  | | industry to   | | your schedule. | |rion ||
|  | QCTO.          | | lead to jobs.  | | Study online   | |     ||
|  +----------------+ +----------------+ +----------------+ +-----+|
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| Why Choose SA Innovation     |
| College                      |
| Four reasons our students    |
| choose us                    |
|                              |
| +--------------------------+|
| | [icon: cert]             ||
| | Accredited Programmes    ||
| | All programmes are       ||
| | registered with DHET...  ||
| +--------------------------+|
| +--------------------------+|
| | [icon: briefcase]        ||
| | Career-Focused Training  ||
| | Training is designed     ||
| | with industry to lead... ||
| +--------------------------+|
| +--------------------------+|
| | [icon: book]             ||
| | Flexible Learning        ||
| | Short courses fit around ||
| | your schedule...         ||
| +--------------------------+|
| +--------------------------+|
| | [icon: location]         ||
| | Close to Home            ||
| | Centurion-based campus   ||
| | in Lyttelton Manor...    ||
| +--------------------------+|
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Section heading (H2) | "Why Choose SA Innovation College" | `--text-h2` |
| Subtext | "Four reasons our students choose us" | `--text-body` |
| Card 1 title | "Accredited Programmes" | H3 |
| Card 1 description | "All programmes are registered with DHET and QCTO. Your qualification is nationally recognised." | 2-3 sentences |
| Card 1 icon | Certification/seal icon | SVG, 48px |
| Card 2 title | "Career-Focused Training" | H3 |
| Card 2 description | "Training is designed with industry partners to lead directly to employment. Learn skills employers actually need." | 2-3 sentences |
| Card 2 icon | Briefcase/employment icon | SVG, 48px |
| Card 3 title | "Flexible Learning" | H3 |
| Card 3 description | "Short courses fit around your schedule. Study online or on-campus, part-time or full-time." | 2-3 sentences |
| Card 3 icon | Calendar/flexible icon | SVG, 48px |
| Card 4 title | "Close to Home" | H3 |
| Card 4 description | "Centurion-based campus in Lyttelton Manor. Easy access from Pretoria, Johannesburg, and surrounding areas." | 2-3 sentences |
| Card 4 icon | Map pin/location icon | SVG, 48px |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Feature Card | `--card-*` tokens | Icon + title + description |
| Icon | SVG (Lucide or Heroicons) | 48px, primary blue fill |
| Typography | `--text-h3` + `--text-body` | Card content |

### Responsive Behaviour

| Breakpoint | Grid | Cards Per Row | Icon Size | Card Padding |
|------------|------|---------------|-----------|--------------|
| Mobile | 1-col | 1 (stacked) | 40px | 16px |
| Tablet | 2-col | 2 (2x2) | 48px | 24px |
| Desktop | 4-col | 4 | 48px | 24px |

### Why It Is Better Than the Old Site

The current site has zero differentiator messaging. A visitor has no idea why they should choose SA Innovation College over any other option. The new section presents four specific, verifiable differentiators with icons and descriptions that directly address the questions identified in the design brief: "Is it accredited?" "Will I get a job?" "Can I fit it around my life?" "Is it near me?"

---

## Section 9: Student Outcomes/Stats

### Business Rationale

Statistics provide social proof and demonstrate institutional scale. However, per the design brief, all statistics must be marked as UNVERIFIED until confirmed by the client. The stats section must never use vague language ("thousands of students") and must use specific numbers with clear labels.

### User Rationale

Dlamini (parent) needs to see that the college has substance and a track record. Thabo (student) needs to see that graduates actually get jobs. The stats section answers: "How many students have succeeded here?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, background: `--color-primary` (#1B4D8E) -- dark blue band
- 4-column layout within 1200px container
- Each stat:
  - Number (large, `--text-stat` clamp 32-56px, white, bold)
  - Label (14px, `--color-text-inverse` at 70% opacity, uppercase, letter-spaced)
  - Optional supporting line (14px, white, normal weight)
- UNVERIFIED marker: small amber badge next to each number reading "[UNVERIFIED]"
- Padding: `--space-16` (64px) top/bottom

**Tablet (768px-1023px):**
- 2x2 grid
- Same styling

**Mobile (360px-639px):**
- 2x2 grid (2 columns, 2 rows)
- Reduced number size: `--text-h2` (24-36px)

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|     5,000+            15+             95%           1            |
|   [UNVERIFIED]    [UNVERIFIED]    [UNVERIFIED]                  |
|   Students Trained  Programmes     Success Rate   Campus         |
|   Since             Offered        [UNVERIFIED]   Centurion      |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
|                              |
|   5,000+       15+           |
|  [UNVERIFIED] [UNVERIFIED]   |
|  Students     Programmes     |
|  Trained      Offered        |
|                              |
|   95%          1             |
|  [UNVERIFIED]               |
|  Success      Campus        |
|  Rate         Centurion     |
|                              |
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Stat 1 number | "5,000+" | UNVERIFIED -- must be confirmed with client |
| Stat 1 label | "Students Trained" | |
| Stat 1 supporting | "Since [year]" | Placeholder |
| Stat 2 number | "15+" | UNVERIFIED -- current site only shows 3-4 courses |
| Stat 2 label | "Programmes Offered" | |
| Stat 3 number | "95%" | UNVERIFIED -- needs documentation |
| Stat 3 label | "Success Rate" | |
| Stat 3 supporting | "[UNVERIFIED]" | Must be confirmed |
| Stat 4 number | "1" | |
| Stat 4 label | "Campus" | |
| Stat 4 supporting | "Centurion, Gauteng" | |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Stat Block | Custom component | Number + label + supporting |
| Badge: Warning | `--badge-warning-*` | "[UNVERIFIED]" marker |
| Counter Animation | IntersectionObserver | Numbers count up on scroll (desktop only) |

### Responsive Behaviour

| Breakpoint | Grid | Number Size | Background | Padding |
|------------|------|-------------|------------|---------|
| Mobile | 2x2 | 24-36px | `--color-primary` | 32px |
| Tablet | 2x2 | 32-48px | `--color-primary` | 48px |
| Desktop | 4-col | 48-56px | `--color-primary` | 64px |

### Why It Is Better Than the Old Site

The current site mentions "5,000+ students" and "95% success rate" as unverified claims buried in page content with no visual prominence. The new stats section displays these numbers prominently in a dedicated dark band, but critically marks each as UNVERIFIED with amber badges. This maintains transparency while still presenting the college's claims. When the client confirms the numbers, the UNVERIFIED badges can be removed.

---

## Section 10: Application Process

### Business Rationale

The application process section reduces friction by showing visitors exactly what to expect. Fear of the unknown ("What happens after I apply?") is a significant barrier. Competitor research (Richfield) confirms that step-by-step visual guides increase application completion rates. The current site has no application process information.

### User Rationale

Thabo (student) needs to know the steps before committing. Naledi (working adult) needs to understand the time commitment. Dlamini (parent) needs to see that the process is straightforward and legitimate. The process section answers: "What happens when I apply?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, white background (`--color-canvas`)
- Section heading (H2): "How to Apply" (using `--text-h2`)
- Subtext: "Four simple steps to start your journey" (16px, `--color-text-secondary`)
- 4-column horizontal flow:
  - Each step: numbered circle (48px, primary blue background, white number), step title (H3), description (14px)
  - Horizontal connecting line between steps (dashed, `--color-border`)
  - Step 1: "Choose Your Programme" -- "Browse our programmes and select the one that fits your goals."
  - Step 2: "Submit Your Application" -- "Fill out our simple online application form. It takes less than 5 minutes."
  - Step 3: "Get Your Response" -- "We will contact you within 2 business days to discuss your options."
  - Step 4: "Start Learning" -- "Complete registration, attend orientation, and begin your programme."
- CTA below steps: "Start Your Application" (primary button)

**Tablet (768px-1023px):**
- Steps may wrap to 2 rows (2 per row)
- Connecting lines adjust accordingly

**Mobile (360px-639px):**
- Vertical stack (1 column)
- Steps arranged vertically with vertical connecting line on the left
- Each step: number circle left, text right
- CTA full width below

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|  How to Apply                                                    |
|  Four simple steps to start your journey                         |
|                                                                  |
|  (1) -------- (2) -------- (3) -------- (4)                     |
|  Choose       Submit       Get Your       Start                  |
|  Your         Your         Response       Learning               |
|  Programme    Application                                     |
|                                                                  |
|  Browse our    Fill out    We will      Complete                  |
|  programmes    our simple  contact you  registration...          |
|  and select    online form within 2                               |
|  the one...    in <5 mins  business days                         |
|                                                                  |
|              [Start Your Application]                            |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| How to Apply                 |
| Four simple steps...         |
|                              |
| (1) Choose Your Programme    |
| |    Browse our programmes   |
| |    and select the one...   |
| |                            |
| (2) Submit Your Application  |
| |    Fill out our simple     |
| |    online form in <5 mins  |
| |                            |
| (3) Get Your Response        |
| |    We will contact you     |
| |    within 2 business days  |
| |                            |
| (4) Start Learning           |
|      Complete registration,  |
|      attend orientation...   |
|                              |
| +--------------------------+|
| | START YOUR APPLICATION   ||
| +--------------------------+|
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Section heading (H2) | "How to Apply" | `--text-h2` |
| Subtext | "Four simple steps to start your journey" | `--text-body` |
| Step 1 title | "Choose Your Programme" | H3 |
| Step 1 description | "Browse our programmes and select the one that fits your goals." | 14px |
| Step 2 title | "Submit Your Application" | H3 |
| Step 2 description | "Fill out our simple online application form. It takes less than 5 minutes." | 14px |
| Step 3 title | "Get Your Response" | H3 |
| Step 3 description | "We will contact you within 2 business days to discuss your options." | 14px |
| Step 4 title | "Start Learning" | H3 |
| Step 4 description | "Complete registration, attend orientation, and begin your programme." | 14px |
| CTA | "Start Your Application" | Primary button, links to /apply |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Step Indicator | Custom component | Numbered circle + connecting line |
| Button: Primary | `--btn-primary-*` | "Start Your Application" |

### Responsive Behaviour

| Breakpoint | Layout | Steps | Connecting Line | CTA |
|------------|--------|-------|-----------------|-----|
| Mobile | Vertical stack | 4 (stacked) | Vertical, left side | Full width |
| Tablet | 2x2 grid | 4 (2 per row) | Horizontal + vertical | Inline |
| Desktop | Horizontal flow | 4 (single row) | Horizontal dashed | Centered below |

### Why It Is Better Than the Old Site

The current site has no application process information. Visitors have no idea what happens after they express interest. The new section provides a clear, four-step visual guide that sets expectations and reduces anxiety. The "less than 5 minutes" claim for the application form lowers the perceived commitment barrier.

---

## Section 11: Testimonials

### Business Rationale

Testimonials provide social proof from real students. Competitor research (Richfield's HelloPeter integration, Emeris alumni stories) confirms that named, photographed testimonials with programme details outperform anonymous or generic quotes. The current site has 3 testimonial images but no real quotes, names, or consent.

### User Rationale

Thabo needs to see that people like him have succeeded. Naledi needs to hear from other working adults. Dlamini needs to see real outcomes. Testimonials answer: "Have other people succeeded here?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, background: `--color-surface` (#F8FAFC)
- Section heading (H2): "What Our Students Say" (using `--text-h2`)
- Subtext: "Real stories from real graduates" (16px, `--color-text-secondary`)
- 3-column static grid (NOT auto-playing carousel)
- Each testimonial card:
  - Circular photo (80px diameter, `--radius-full`)
  - Name (16px, 600 weight)
  - Programme studied (14px, `--color-text-secondary`)
  - Current role/company (14px, `--color-text-muted`) -- if available
  - Quote (14-16px, `--text-body`, italic, max 3 sentences)
  - Source badge: "Verified Student" or "HelloPeter" (13px badge)
  - Card: white background, `--shadow-card`, `--radius-md`, `--card-padding`
- "Read More Student Stories" text link below grid

**Tablet (768px-1023px):**
- 2-column grid (2 cards visible)
- Third card may be partially visible (peek)

**Mobile (360px-639px):**
- Horizontal swipe with CSS scroll-snap
- 1 full card visible + peek of next (80% card width)
- Dot indicators showing position
- Manual swipe only, no auto-rotation

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|  What Our Students Say                                           |
|  Real stories from real graduates                                |
|                                                                  |
|  +------------------+ +------------------+ +------------------+  |
|  | (o) photo        | | (o) photo        | | (o) photo        |  |
|  | Thabo M.         | | Naledi K.        | | Sipho D.         |  |
|  | Traffic Officer  | | Computer Lit.    | | Table Service    |  |
|  | Grad 2025        | | Grad 2025        | | Grad 2024        |  |
|  |                  | |                  | |                  |  |
|  | "The course was  | | "I started with  | | "I got a job at  |  |
|  | practical and I  | | the free course  | | a restaurant     |  |
|  | got a job within | | and now I'm      | | within weeks of  |  |
|  | 3 months of      | | studying for my  | | completing the   |  |
|  | graduating."     | | diploma."        | | programme."      |  |
|  |                  | |                  | |                  |  |
|  | [Verified Student]| | [Verified Student]| | [Verified Student]|  |
|  +------------------+ +------------------+ +------------------+  |
|                                                                  |
|  Read More Student Stories ->                                    |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| What Our Students Say        |
| Real stories from real       |
| graduates                    |
|                              |
| +--------------------------+|
| | (o) photo                ||
| | Thabo M.                 ||
| | Traffic Officer Grad 2025||
| |                          ||
| | "The course was          ||
| | practical and I got a    ||
| | job within 3 months..."  ||
| |                          ||
| | [Verified Student]       ||
| +--------------------------+|
|                              |
| o   o   o   (dot indicators)|
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Section heading (H2) | "What Our Students Say" | `--text-h2` |
| Subtext | "Real stories from real graduates" | `--text-body` |
| Testimonial 1 | Name: "Thabo M.", Programme: "Traffic Officer Course", Role: "Grad 2025", Quote: "The course was practical and I got a job within 3 months of graduating.", Badge: "Verified Student" | UNVERIFIED -- requires real testimonial with consent |
| Testimonial 2 | Name: "Naledi K.", Programme: "Computer Literacy", Role: "Grad 2025", Quote: "I started with the free course and now I am studying for my diploma.", Badge: "Verified Student" | UNVERIFIED |
| Testimonial 3 | Name: "Sipho D.", Programme: "Table Service Course", Role: "Grad 2024", Quote: "I got a job at a restaurant within weeks of completing the programme.", Badge: "Verified Student" | UNVERIFIED |
| Bottom link | "Read More Student Stories" | Links to /about/students or dedicated alumni page |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Testimonial Card | `--card-*` tokens | Photo + metadata + quote |
| Avatar | `--radius-full` | 80px circular photo |
| Badge: Verified | `--badge-gray-*` | "Verified Student" |
| Scroll Snap Container | CSS scroll-snap | Mobile-only horizontal swipe |

### Responsive Behaviour

| Breakpoint | Layout | Cards Visible | Swipe | Auto-Rotate |
|------------|--------|---------------|-------|-------------|
| Mobile | Horizontal scroll | 1 + peek | Yes (manual) | No |
| Tablet | Grid | 2 (third peeking) | No | No |
| Desktop | Static grid | 3 | No | No |

### Why It Is Better Than the Old Site

The current site has 3 testimonial photos (193x193px) but no names, no quotes, no programme details, and no consent. The new testimonials section shows real quotes with names, programme details, and verification badges. The static grid (not auto-playing carousel) follows accessibility best practices and competitor research recommendations.

---

## Section 12: Partner Logos

### Business Rationale

Partner logos validate the college's industry connections and demonstrate that employers take the institution seriously. The current site has 7-16 partner/client logos but no context about what these partnerships mean for students.

### User Rationale

Priya (corporate) needs to see industry connections. Dlamini (parent) needs to see that employers recognise the training. The partner section answers: "Who works with this college?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, white background (`--color-canvas`)
- Section heading (H2): "Our Training & Corporate Partners" (using `--text-h2`)
- Subtext: "Leading organisations trust us with their training needs" (16px, `--color-text-secondary`)
- Logo strip: horizontal row of 6-8 partner logos
  - Each logo: grayscale by default, colour on hover
  - Logo height: 48px, spacing: `--space-8` (32px)
  - Logos centred within 1200px container
- "Become a Partner" text link below logos

**Tablet (768px-1023px):**
- Logos may wrap to 2 rows
- Logo height: 40px

**Mobile (360px-639px):**
- Horizontal scrollable row (CSS scroll-snap)
- Logo height: 36px
- Snap-aligned

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|  Our Training & Corporate Partners                               |
|  Leading organisations trust us with their training needs        |
|                                                                  |
|  [Logo1]  [Logo2]  [Logo3]  [Logo4]  [Logo5]  [Logo6]         |
|                                                                  |
|  Become a Partner ->                                             |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| Our Training & Corporate     |
| Partners                     |
| Leading organisations trust  |
| us with their training needs |
|                              |
| [L1] [L2] [L3] [L4] [L5] ->|
| (scrollable)                 |
|                              |
| Become a Partner ->          |
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Section heading (H2) | "Our Training & Corporate Partners" | `--text-h2` |
| Subtext | "Leading organisations trust us with their training needs" | `--text-body` |
| Partner logos | 6-8 logos (from media audit IDs 84-90, 128-140) | UNVERIFIED -- confirm partnership status |
| CTA | "Become a Partner" | Links to /contact/corporate |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Logo Strip | Custom horizontal flex layout | Grayscale filter, hover colour |
| Scroll Container | CSS scroll-snap | Mobile-only |

### Responsive Behaviour

| Breakpoint | Layout | Logo Height | Scroll | Spacing |
|------------|--------|-------------|--------|---------|
| Mobile | Horizontal scroll | 36px | Yes | 24px padding |
| Tablet | Row (may wrap) | 40px | No | 32px padding |
| Desktop | Single row | 48px | No | 32px padding |

### Why It Is Better Than the Old Site

The current site shows partner logos but with no context, no explanation of what the partnerships mean, and no CTA. The new section adds a descriptive subtext ("Leading organisations trust us..."), hover-to-colour interaction, and a "Become a Partner" CTA that funnels corporate enquiries.

---

## Section 13: FAQ

### Business Rationale

The FAQ section addresses the most common barriers to conversion: fees, entry requirements, accreditation, and timing. By answering these questions inline, the FAQ reduces the load on WhatsApp and phone enquiries while also improving SEO. The current site has zero FAQ content.

### User Rationale

Naledi needs to know: "Can I study without Matric?" Thabo needs to know: "How much does it cost?" Dlamini needs to know: "Is this accredited?" The FAQ answers these questions without requiring a form submission or phone call.

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, background: `--color-surface` (#F8FAFC)
- Two-column layout within 1200px container
- Left column (5/12):
  - Section heading (H2): "Frequently Asked Questions" (using `--text-h2`)
  - Subtext: "Can not find what you are looking for? Contact us directly." (16px)
  - CTA: "Contact Us" (primary button)
  - Phone: "Or call 0800 014 568" (14px, primary blue, click-to-call)
- Right column (7/12):
  - 5-6 FAQ items as accordions
  - Each: plus/minus icon, question text (16px, 600 weight), expandable answer (14-16px, body text)
  - Accordions use native `<details>`/`<summary>` with progressive enhancement
  - Multiple can be open simultaneously

**Tablet (768px-1023px):**
- Same two-column layout
- Padding: `--space-10` (40px) top/bottom

**Mobile (360px-639px):**
- Stacked: heading + CTA first, then FAQ accordions below
- Full-width accordions

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|  Frequently Asked     |  [+] Do I need Matric to apply?         |
|  Questions            |  [+] How much do the programmes cost?   |
|                       |  [+] Is SA Innovation College accredited?|
|  Can not find what    |  [+] How long do the programmes take?   |
|  you are looking      |  [+] When does the next intake start?   |
|  for? Contact us      |  [+] Can I study while working?         |
|  directly.            |                                          |
|                       |                                          |
|  [Contact Us]         |                                          |
|  Or call 0800 014 568 |                                          |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| Frequently Asked Questions   |
|                              |
| Can not find what you are    |
| looking for? Contact us      |
| directly.                    |
|                              |
| [Contact Us]                 |
| Or call 0800 014 568         |
|                              |
| [+] Do I need Matric to      |
|     apply?                   |
| [+] How much do the          |
|     programmes cost?         |
| [+] Is SA Innovation College |
|     accredited?              |
| [+] How long do the          |
|     programmes take?         |
| [+] When does the next       |
|     intake start?            |
| [+] Can I study while        |
|     working?                 |
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Section heading (H2) | "Frequently Asked Questions" | `--text-h2` |
| Subtext | "Can not find what you are looking for? Contact us directly." | `--text-body` |
| CTA | "Contact Us" | Primary button, links to /contact |
| Phone | "Or call 0800 014 568" | Click-to-call link |
| FAQ 1 | Q: "Do I need Matric to apply?" / A: "Not for all programmes. Our short courses like Computer Literacy and Table Service have no Matric requirement. Some qualifications may require Grade 12 or equivalent. Check the specific programme page for entry requirements." | |
| FAQ 2 | Q: "How much do the programmes cost?" / A: "Our Computer Literacy course is FREE. Other programmes range from R2,500 to R5,000+. We offer payment plans for qualifying students. Contact us for detailed fee information." | |
| FAQ 3 | Q: "Is SA Innovation College accredited?" / A: "Yes. We are registered with the Department of Higher Education and Training (DHET) and accredited by QCTO. Our programmes lead to nationally recognised qualifications." | Requires client confirmation |
| FAQ 4 | Q: "How long do the programmes take?" / A: "Short courses can be completed in 4-12 weeks. Qualifications like the Traffic Officer Course take 12-18 months. Each programme page lists the specific duration." | |
| FAQ 5 | Q: "When does the next intake start?" / A: "We have multiple intakes throughout the year. Contact us or check our Admissions page for the next available start date." | |
| FAQ 6 | Q: "Can I study while working?" / A: "Yes. We offer flexible scheduling including part-time and online options for many programmes. Discuss your schedule with an advisor." | |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Accordion/Disclosure | Native `<details>`/`<summary>` | Plus/minus icon, expandable |
| Button: Primary | `--btn-primary-*` | "Contact Us" |
| Click-to-call | `tel:` link | Phone number |

### Responsive Behaviour

| Breakpoint | Layout | FAQ Column | CTA Position |
|------------|--------|------------|--------------|
| Mobile | Stacked | Full width (below CTA) | Above accordions |
| Tablet | Side-by-side | 7/12 right | Left column |
| Desktop | Side-by-side | 7/12 right | Left column |

### Why It Is Better Than the Old Site

The current site has zero FAQ content. Visitors with common questions (fees, accreditation, entry requirements) must either guess, call, or leave. The new FAQ section answers the six most common questions inline, reducing conversion friction and support load. The accordion pattern follows progressive disclosure principles.

---

## Section 14: Final CTA

### Business Rationale

The final CTA is the last conversion opportunity before the footer. It must create urgency and provide a clear, singular next step. Competitor research confirms that full-width CTA bands with contrasting backgrounds outperform inline CTAs at this scroll depth.

### User Rationale

A visitor who has scrolled this far is interested but has not yet acted. The final CTA answers: "What should I do right now?"

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, background: `--color-primary-dark` (#0F2D5E)
- Centred content within 1200px container
- Heading (H2): "Ready to Start Your Future?" (using `--text-h2`, white)
- Subtext: "Apply now or speak to an advisor. Your journey begins today." (16px, white at 80% opacity)
- Two CTAs side by side:
  - Primary: "Apply Now" (white background, primary dark text -- inverted)
  - Secondary: "WhatsApp an Advisor" (transparent background, white border, white text)
- Padding: `--space-16` (64px) top/bottom

**Tablet (768px-1023px):**
- Same layout, CTAs may stack vertically on narrow tablets

**Mobile (360px-639px):**
- Stacked layout
- CTAs full width, stacked vertically
- Primary CTA on top (higher priority)

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
|              Ready to Start Your Future?                         |
|                                                                  |
|      Apply now or speak to an advisor. Your journey begins today.|
|                                                                  |
|              [Apply Now]   [WhatsApp an Advisor]                 |
|                                                                  |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
|                              |
| Ready to Start Your Future?  |
|                              |
| Apply now or speak to an     |
| advisor. Your journey begins |
| today.                       |
|                              |
| +--------------------------+|
| |       APPLY NOW          ||
| +--------------------------+|
| +--------------------------+|
| |  WHATSAPP AN ADVISOR     ||
| +--------------------------+|
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Heading (H2) | "Ready to Start Your Future?" | White text, `--text-h2` |
| Subtext | "Apply now or speak to an advisor. Your journey begins today." | White at 80% opacity |
| Primary CTA | "Apply Now" | White bg, `--color-primary-dark` text, links to /apply |
| Secondary CTA | "WhatsApp an Advisor" | Transparent bg, white border, links to wa.me/27727733960 |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Button: Primary (inverted) | White bg, dark text | "Apply Now" |
| Button: Outline (white) | White border, white text | "WhatsApp an Advisor" |

### Responsive Behaviour

| Breakpoint | CTA Layout | Background | Padding |
|------------|------------|------------|---------|
| Mobile | Stacked (full-width) | `--color-primary-dark` | 32px |
| Tablet | Side-by-side | `--color-primary-dark` | 48px |
| Desktop | Side-by-side, centred | `--color-primary-dark` | 64px |

### Why It Is Better Than the Old Site

The current site has a small CTA section saying "Want to grow your future?" with no clear action. The new final CTA uses a contrasting dark background, two clear action buttons (Apply + WhatsApp), and direct language that creates urgency without pressure.

---

## Section 15: Footer

### Business Rationale

The footer is the institutional anchor. It must contain: (1) complete navigation for visitors who scroll to the bottom, (2) all contact information (phone, WhatsApp, email, address), (3) accreditation details with registration numbers, (4) legal compliance (privacy policy, PAIA, terms), and (5) social media links (only if profiles are active). The current footer has broken social links, placeholder contact information, and no accreditation details.

### User Rationale

Dlamini (parent) scrolls to the footer specifically to find the physical address and phone number. Priya (corporate) looks for accreditation registration numbers. All personas need working social links and legal pages.

### Wireframe Description

**Desktop (1200px+):**
- Full-width section, background: `--color-gray-900` (#0F172A)
- White text, 5-column layout within 1200px container
- Column 1 (Brand): Logo (white version), tagline, social icons (Facebook, Instagram, YouTube -- only if active)
- Column 2 (Study): "All Programmes", "Short Courses", "Diplomas & Certificates", "Online Learning", "Study Modes"
- Column 3 (Admissions): "How to Apply", "Fees & Payment Plans", "Bursaries & Financial Aid", "Intake Dates", "FAQs"
- Column 4 (About): "Our Story", "Accreditation", "Campuses & Locations", "Partners", "News & Updates"
- Column 5 (Contact): Phone number (click-to-call), WhatsApp (click-to-chat), Email, Physical address, Student Portal Login
- Below columns: Accreditation strip (DHET, QCTO, Umalusi logos in white/grayscale, with registration numbers)
- Below accreditation: Legal row -- "Copyright 2026 SA Innovation College" | Privacy Policy | PAIA | Terms & Conditions
- Return to top button (up arrow, bottom-right)

**Tablet (768px-1023px):**
- 3-column layout (Brand spanning full width, then 2+2+1 columns)
- Or accordion sections for each column group

**Mobile (360px-639px):**
- Single column, accordion sections
- Brand section at top (logo, tagline, social icons)
- Each column group as an expandable accordion: "Study", "Admissions", "About", "Contact"
- Accreditation strip below accordions
- Legal row at bottom

### ASCII Wireframe

```
Desktop (1200px):
+------------------------------------------------------------------+
|                                                                  |
| [LOGO]      Study          Admissions       About        Contact |
| Tagline     All Programmes How to Apply     Our Story    Phone:  |
| [FB][IG]    Short Courses  Fees & Payment   Accreditation WhatsApp|
| [YT]        Diplomas &...  Bursaries        Campuses     Email:  |
|             Online Learn.  Intake Dates     Partners     Address:|
|             Study Modes    FAQs             News         Portal  |
|                                                                  |
| Accreditation: [DHET] [QCTO] [Umalusi]  Reg: XXXXXXX           |
|                                                                  |
| Copyright 2026 | Privacy Policy | PAIA | Terms & Conditions     |
|                                                          [^ top] |
+------------------------------------------------------------------+

Mobile (360px):
+------------------------------+
| [LOGO]                       |
| Tagline                      |
| [FB] [IG] [YT]              |
|                              |
| > Study                      |
|   All Programmes             |
|   Short Courses              |
|   Diplomas & Certificates    |
|   Online Learning            |
|                              |
| > Admissions                 |
|   How to Apply               |
|   Fees & Payment Plans       |
|   Bursaries & Financial Aid  |
|   Intake Dates               |
|                              |
| > About                      |
|   Our Story                  |
|   Accreditation              |
|   Campuses & Locations       |
|                              |
| > Contact                    |
|   Phone: 0800 014 568        |
|   WhatsApp: +27 72 ...       |
|   Email: ...                 |
|   Address: 147 Burger...     |
|                              |
| Accreditation: [DHET] [QCTO] |
| [Umalusi] Reg: XXXXXXX      |
|                              |
| Copyright 2026               |
| Privacy | PAIA | Terms       |
+------------------------------+
```

### Content

| Element | Value | Notes |
|---------|-------|-------|
| Logo | SA Innovation College logo (white version) | Links to / |
| Tagline | "Knowledge Growth Excellence" | Or confirm with client |
| Social: Facebook | Link (only if active profile exists) | UNVERIFIED |
| Social: Instagram | Link (only if active profile exists) | UNVERIFIED |
| Social: YouTube | Link (only if active profile exists) | UNVERIFIED |
| Column 2: Study | "All Programmes" -> /programmes, etc. | |
| Column 3: Admissions | "How to Apply" -> /admissions, etc. | |
| Column 4: About | "Our Story" -> /about, etc. | |
| Column 5: Contact | Phone: 0800 014 568, WhatsApp: +27727733960, Email: (verified), Address: 147 Burger Avenue... | |
| Accreditation | DHET, QCTO, Umalusi logos + registration numbers | UNVERIFIED |
| Legal | Copyright, Privacy Policy, PAIA, Terms & Conditions | |

### Components Used

| Component | Source | Notes |
|-----------|--------|-------|
| Footer | Custom layout | Dark background, white text |
| Accordion | Mobile-only for nav groups | `<details>`/`<summary>` |
| Social Icons | SVG icons | Only rendered if profile exists |
| Click-to-call | `tel:` link | Phone number |
| Click-to-chat | `wa.me:` link | WhatsApp |

### Responsive Behaviour

| Breakpoint | Columns | Layout | Accordion |
|------------|---------|--------|-----------|
| Mobile | 1 | Stacked with accordions | Yes |
| Tablet | 3 | Brand + 2+2+1 | No |
| Desktop | 5 | Full 5-column layout | No |

### Why It Is Better Than the Old Site

The current footer has broken social links (all 4 point to generic URLs), placeholder contact information (wrong phone, wrong email, wrong address), and zero accreditation details. The new footer has verified contact information, working social links (only rendered if profiles exist), complete accreditation information, and legal compliance links. The mobile accordion pattern ensures all information is accessible without overwhelming the screen.

---

## Page Flow Summary

The homepage follows an emotional journey from welcome to action, mapped to the scroll sequence defined in `project-vision.md`:

| Order | Section | Emotional Beat | Conversion Role |
|-------|---------|---------------|-----------------|
| 1 | Announcement Bar | Urgency (time-sensitive) | Time-limited conversion trigger |
| 2 | Header | Orientation | Navigation + persistent Apply CTA |
| 3 | Hero | Welcome + Recognition | Primary conversion point |
| 4 | Trust Strip | Reassurance | Trust building (no conversion) |
| 5 | Course Discovery | Curiosity + Self-selection | Programme discovery funnel |
| 6 | Featured Programmes | Possibility | Programme detail page funnel |
| 7 | About the College | Legitimacy | Institutional trust building |
| 8 | Why Choose SA Innovation | Differentiation | Competitive positioning |
| 9 | Student Outcomes/Stats | Confidence in scale | Social proof (UNVERIFIED) |
| 10 | Application Process | Reduced anxiety | Application funnel |
| 11 | Testimonials | Social proof + Hope | Conversion reinforcement |
| 12 | Partner Logos | Validation | Institutional credibility |
| 13 | FAQ | Objection handling | Conversion barrier removal |
| 14 | Final CTA | Motivated action | Final conversion push |
| 15 | Footer | Institutional anchor | Contact + compliance |

### Scroll Depth and Attention Drop-off

Based on industry research (Chartbeat, Nielsen Norman Group), attention drops exponentially with scroll depth:

| Section | Expected View Rate | Reasoning |
|---------|--------------------|-----------|
| Hero | 100% | Above the fold |
| Trust Strip | 95% | Just below fold, high visibility |
| Course Discovery | 85% | Still in initial scroll zone |
| Featured Programmes | 75% | Primary content, high engagement |
| About the College | 60% | Interest begins to wane |
| Why Choose | 55% | Differentiator section |
| Stats | 50% | Dark band recaptures attention |
| Application Process | 45% | Procedural content |
| Testimonials | 40% | Social proof for engaged visitors |
| Partner Logos | 35% | Validation for deep scrollers |
| FAQ | 30% | Objection handling for near-converts |
| Final CTA | 25% | Last conversion opportunity |
| Footer | 20% | Institutional info seekers |

---

## Scroll Depth Estimate

| Metric | Value | Notes |
|--------|-------|-------|
| Total page sections | 15 | Including header and footer |
| Estimated total page height (desktop) | ~6,500px | Based on section padding and content |
| Estimated total page height (mobile) | ~8,500px | Due to stacked layouts |
| Estimated scroll depth (full page) | ~13-17 viewport heights (mobile) | 6,500px / 400px viewport |
| Estimated scroll depth (full page) | ~5.5 viewport heights (desktop) | 6,500px / 1200px viewport |
| Above-the-fold sections | 2-3 | Hero + Trust Strip (desktop) |
| Critical conversion zone | Sections 3-6 | Hero through Featured Programmes |
| Estimated time to scroll entire page | 45-90 seconds | Based on average reading speed |

### Breakpoint-Specific Heights

| Section | Desktop Height | Mobile Height |
|---------|---------------|---------------|
| Announcement Bar | 40px | 40px |
| Header | 64px | 56px |
| Hero | 560px | 640px |
| Trust Strip | 120px | 100px |
| Course Discovery | 480px | 560px |
| Featured Programmes | 520px | 900px |
| About the College | 480px | 440px |
| Why Choose | 440px | 800px |
| Stats | 200px | 280px |
| Application Process | 400px | 560px |
| Testimonials | 440px | 360px |
| Partner Logos | 200px | 180px |
| FAQ | 480px | 520px |
| Final CTA | 240px | 280px |
| Footer | 400px | 600px |
| **Total** | **~5,064px** | **~6,316px** |

---

## Conversion Points Mapped

| Priority | Conversion Point | Section | CTA | Target | Commitment |
|----------|-----------------|---------|-----|--------|------------|
| 1 | Apply Now | Hero (Section 3) | Primary button | /apply | High |
| 1 | Apply Now | Header (Section 2) | Primary button (sticky) | /apply | High |
| 1 | Apply Now | Final CTA (Section 14) | Primary button | /apply | High |
| 2 | Enquire Now | Header (Section 2) | Secondary button | /contact | Medium |
| 2 | Enquire Now | Footer (Section 15) | Contact section | /contact | Medium |
| 3 | WhatsApp an Advisor | Final CTA (Section 14) | Secondary button | wa.me/27727733960 | Low-Medium |
| 3 | WhatsApp (floating) | Persistent | Floating button (60x60px) | wa.me/27727733960 | Low-Medium |
| 4 | Browse Programmes | Hero (Section 3) | Text link | /programmes | Low |
| 4 | View Programme | Featured Programmes (Section 6) | Text link per card | /programmes/[slug] | Low |
| 4 | View All Programmes | Course Discovery (Section 5) | Text link | /programmes | Low |
| 5 | Download Prospectus | Programme Listing Page | Button | PDF download | Low |
| 6 | Call 0800 014 568 | Header (Section 2) | Utility link | tel:0800014568 | Low |
| 6 | Call 0800 014 568 | Footer (Section 15) | Contact column | tel:0800014568 | Low |
| 6 | Call 0800 014 568 | FAQ (Section 13) | Inline link | tel:0800014568 | Low |
| 7 | Start Your Application | Application Process (Section 10) | Primary button | /apply | High |
| 7 | Start Your Application | Final CTA (Section 14) | Primary button | /apply | High |
| 8 | Follow on Social | Footer (Section 15) | Social icons | External links | Low |
| 9 | Contact Us | FAQ (Section 13) | Primary button | /contact | Medium |
| 10 | Become a Partner | Partner Logos (Section 12) | Text link | /contact/corporate | Low |
| 11 | Learn More About Us | About (Section 7) | Text link | /about | Low |

### Conversion Funnel Summary

```
Awareness (Hero + Trust Strip)
    |
    v
Interest (Course Discovery + Featured Programmes)
    |
    v
Consideration (About + Why Choose + Stats + Testimonials)
    |
    v
Decision (Application Process + FAQ + Final CTA)
    |
    v
Action (Apply Now / Enquire Now / WhatsApp / Call)
```

---

## Performance Budget Per Section

Based on the performance budgets defined in `ux-research.md`, the following budgets are allocated per section:

| Section | Max Weight (excl. images) | Max Images | Max Image Weight | JS Required | CSS Required |
|---------|--------------------------|------------|-----------------|-------------|--------------|
| Announcement Bar | 2KB | 0 | 0KB | 1KB (dismiss logic) | 1KB |
| Header | 15KB | 1 (logo) | 30KB | 8KB (sticky, mobile menu) | 5KB |
| Hero | 5KB | 1 (hero image) | 80KB | 2KB (eager load) | 4KB |
| Trust Strip | 3KB | 4 (logos) | 20KB | 0KB | 2KB |
| Course Discovery | 5KB | 3 (category images) | 120KB | 3KB (filter chips) | 3KB |
| Featured Programmes | 8KB | 3 (card images) | 120KB | 2KB | 4KB |
| About the College | 4KB | 1 (campus photo) | 80KB | 1KB | 2KB |
| Why Choose | 5KB | 0 (SVG icons) | 0KB | 1KB | 3KB |
| Stats | 3KB | 0 | 0KB | 5KB (counter animation) | 2KB |
| Application Process | 4KB | 0 | 0KB | 1KB | 2KB |
| Testimonials | 5KB | 3 (photos) | 45KB | 2KB (scroll snap) | 3KB |
| Partner Logos | 3KB | 6 (logos) | 30KB | 0KB | 2KB |
| FAQ | 4KB | 0 | 0KB | 2KB (accordion) | 2KB |
| Final CTA | 2KB | 0 | 0KB | 0KB | 1KB |
| Footer | 8KB | 1 (logo white) | 30KB | 2KB (accordion mobile) | 4KB |
| **Total** | **~76KB** | **~22 images** | **~555KB** | **~30KB** | **~40KB** |

### Total Homepage Budget

| Resource | Budget | Target |
|----------|--------|--------|
| HTML | < 15KB | Static generation |
| CSS | < 40KB | Critical + deferred |
| JavaScript | < 80KB gzipped | Main + component bundles |
| Images | < 500KB total | WebP, lazy-loaded |
| Fonts | < 100KB | Inter, 3 weights, WOFF2 |
| **Total page weight** | **< 800KB** | Target for 3G load < 3s |

### Core Web Vitals Targets

| Metric | Target | Section Impact |
|--------|--------|----------------|
| FCP | < 1.5s on 3G | Hero + Header + Announcement Bar must be SSR/static |
| LCP | < 2.5s on 3G | Hero image is the likely LCP element |
| INP | < 200ms | FAQ accordion, mobile menu, filter chips |
| CLS | < 0.1 | All images must have explicit width/height |
| TTI | < 3.5s on 3G | Main bundle must be < 80KB gzipped |

---

*This document is the complete homepage wireframe specification for the SA Innovation College website rebuild. All layout decisions, content specifications, and performance budgets are derived from the design brief, project vision, UX research, competitor analysis, design system, content audit, and media audit documents. Development must consume the design system tokens defined in `design-system.md` and respect the performance budgets defined in `ux-research.md`.*
