# SA Innovation College -- Competitor Research

> Research compiled for the headless redesign project. All patterns synthesised from
> multiple sources into original recommendations. No single site is replicated.

---

## 1. Sites Analysed

### South African Private Colleges & TVET Colleges

| Site | Type | Key Takeaway |
|------|------|-------------|
| [Richfield](https://www.richfield.ac.za/) | Private higher education (IT/Business) | Mobile-first rebuild; Sanity CMS; programme finder; partner logo carousel; HelloPeter testimonial integration |
| [Emeris](https://www.emeris.ac.za/) | Private higher education (IIE group) | Unified brand from Varsity College/MSA/Vega; strong stats display (34 years, 90+ programmes, 60k+ alumni); teal accent |
| [Rosebank College](https://www.rosebankcollege.co.za/) | Private higher education (IIE) | Qualification Wizard interactive tool; Umbraco CMS; WhatsApp integration |
| [Milt College](https://www.miltcollege.co.za/) | Private college (career-focused) | Clean single-purpose site; parent + student dual-audience |
| [Tshwane South TVET](https://tsc.edu.za/) | Public TVET | Government-mandated structure; bursary emphasis |
| [Majuba TVET](https://www.majuba.edu.za/) | Public TVET | Campus-first layout; online LMS integration |
| [Ekurhuleni West TVET](https://www.ewc.edu.za/) | Public TVET | Industry-ready messaging; campus grid |
| [Elangeni TVET](https://www.elangeni.edu.za/) | Public TVET | Principal welcome message; campus showcase |

### International Technical Training & Online Learning Platforms

| Site | Type | Key Takeaway |
|------|------|-------------|
| [Coursera](https://www.coursera.org/) | Online learning marketplace | Navy + voltage blue (#0056d2); Source Sans Pro; modular "Why-How-Proof" content blocks; 8px button radius; pill category chips |
| [Udemy](https://www.udemy.com/) | Online course marketplace | Violet (#6d28d2) outlined CTAs; cool-gray canvas (#e9eaf2); 3D illustration vocabulary; minimal top nav with search bar |
| [Domestika](https://domestika.org/) | Creative course platform | Cinematic hero; premium visual storytelling; curated instructor profiles |
| [MasterClass](https://masterclass.com/) | Premium education | Dark hero sections; celebrity-grade production; luxury typography |
| [Skillshare](https://skillshare.com/) | Community learning | Student-first discoverability; category-based navigation; lesson previews |
| [edX](https://www.edx.org/) | University-level courses | Serious/structured UI; layered navigation; institutional credibility |

### Design System References

| Reference | Key Pattern |
|-----------|-------------|
| [Coursera DESIGN.md](https://www.shadcn.io/design/coursera) | Voltage blue primary; navy callout bands; 8px/50px radius vocabulary; Source Sans Pro single-family |
| [Udemy Design System](https://styles.refero.design/style/c03afcbd-96ed-4b7f-8d0a-277fc0042ba7) | Outlined actions; 8/16/1000px radii; single-family type; cool instructional tone |
| [Inflearn Design System](https://oh-my-design.kr/design-systems/inflearn) | Mint-green (#00C471) single accent; 65px sticky GNB; borderless course tiles; Mantine primitives |
| [Absorb Modern Learner UI](https://support.absorblms.com/) | Left-side navigation; 16:9 course cards; filter panels; mobile bottom nav bar |

---

## 2. Navigation Structure & Mobile Menus

### Best Patterns Found

**Mega-menu with audience segmentation** (Richfield, Emeris)
- Top-level nav splits by user type: Study, Admissions, Student Life, Campuses
- Secondary nav bar for quick actions: Enquire Now, Apply, Student Portal
- On mobile: full-screen overlay with accordion sub-menus and back arrows

**Search-first minimal nav** (Coursera, Udemy, Inflearn)
- Sticky white bar, 65px height, no shadow, no border
- Single search field as primary interaction
- CTA button as the only coloured accent in the nav

**Dual-audience navigation** (Emeris, Richfield)
- Prospective students see programme discovery paths
- Current students see portal/LMS login shortcuts
- Parents get dedicated info section (Richfield has explicit "Parent INFO" link)

### Recommended for SA Innovation College

```
Sticky header (desktop)
  Logo | Study | Admissions | Student Life | Campuses | [Enquire Now] [Apply]
  
Mobile
  Hamburger -> Full-screen overlay
    Audience groups: Prospective Students | Current Students | Parents
    Quick links: Apply Now | Contact | Student Portal
    Search bar at top of overlay
```

- Use a dual-bar pattern: primary nav for browsing, secondary utility bar for portal login / apply
- Mobile: full-screen overlay preferred over slide-out drawer (matches 2026 trend)
- Include WhatsApp chat button as persistent floating CTA (Richfield pattern)

### Patterns to Avoid
- Hamburger menu with more than 3 levels of nesting
- Nav items that are purely departmental names (use task-oriented labels)
- Hover-only dropdowns (invisible on mobile)
- Sticky nav that covers content without adequate height offset

---

## 3. Hero Section Design

### Best Patterns Found

**Outcome-first headline with proof below** (Coursera, bootcamp pattern)
- Headline states transformation: "Start, switch, or advance your career"
- Sub-line names the audience and removes the biggest objection
- One primary CTA + one secondary "browse" link
- Trust strip of partner/employer logos immediately below

**Image + text split** (Richfield, Emeris)
- Left: bold headline with supporting text
- Right: hero image (student/campus photography)
- CTA buttons below the text block
- 2026 mid-year intake / open day banners overlaid as time-sensitive elements

**Announcement bar above hero** (Richfield, Emeris)
- Thin full-width banner: "2026 Mid-year intake OPEN" or "Open Day -- Saturday 1 August"
- Creates urgency without cluttering the hero

### Recommended for SA Innovation College

- **Primary hero**: Outcome headline + sub-line naming the learner type + single CTA + secondary browse link
- **Announcement bar**: Time-sensitive (intake dates, bursary deadlines) -- thin strip above nav or below nav
- **Trust strip**: Partner/accreditation logos in greyscale, immediately below hero fold
- Hero image: real campus/student photography, not stock -- authentic South African context
- Mobile hero: stacked layout, headline + CTA + image; CTA button minimum 48px tall

### Patterns to Avoid
- Rotating hero carousels (low engagement, poor mobile UX)
- Generic motivational copy ("Unlock your potential")
- Hero with more than 2 CTA buttons
- Heavy hero with video background (slow on SA mobile networks)

---

## 4. Course Discovery & Card Layouts

### Best Patterns Found

**Filter + card grid** (Coursera, Udemy, Absorb)
- Left-side filter panel on desktop (category, duration, level, mode)
- Horizontal filter chips on mobile (scrollable row)
- Cards: 16:9 thumbnail, title, provider/instructor, rating, price or "Free"
- 24px card padding, 16px gap between elements

**Programme level hierarchy** (Richfield, Emeris)
- Cards grouped by qualification type: Degrees, Diplomas, Higher Certificates, Short Courses
- Each card shows: programme name, faculty, duration, campus/online badge
- Click-through to detailed programme page with entry requirements, fees, modules

**Qualification Wizard** (Rosebank College)
- Interactive tool that asks questions and recommends programmes
- Reduces decision fatigue for first-time applicants
- Strong conversion driver

**Category pill navigation** (Coursera, Inflearn)
- 50px pill chips for topic filtering
- Single accent colour for active state
- Horizontal scroll on mobile

### Recommended for SA Innovation College

- **Homepage programme section**: Group by study mode (Online vs On-Campus) or by faculty
- **Programme cards**: Thumbnail, programme name, qualification level badge, duration, campus location
- **Programme listing page**: Sidebar filters (faculty, mode, duration, NQF level) on desktop; chip row on mobile
- **Programme detail page**: Entry requirements, fees, modules, application CTA, campus info
- Consider a "Find Your Programme" quiz or wizard for first-time applicants (Rosebank pattern)

**Card dimensions** (synthesised):
- Desktop: 3-column grid, ~350px cards
- Tablet: 2-column
- Mobile: single column, full-width cards
- Thumbnail ratio: 16:9
- Card radius: 8px (Coursera/Udemy standard)
- Card padding: 24px below thumbnail

### Patterns to Avoid
- Dense course catalogues with 6+ filters visible at once on mobile
- Cards without clear qualification level or duration
- No visual distinction between programme types
- Horizontal scroll carousels for primary content discovery (poor accessibility)

---

## 5. Trust Indicators & Accreditation Display

### Best Patterns Found

**Partner logo carousel** (Richfield)
- Greyscale logos of industry partners: Microsoft, Salesforce, AWS, CISCO, Oracle, CIMA, SAICA
- Auto-scrolling or static row below hero
- "Global Industry Badges" section with explanation link

**Accreditation block in footer** (Emeris, Richfield)
- Registration number with DHET, Umalusi, QCTO references
- Link to view certificate PDF
- Company registration number
- Copyright notice

**Stats as trust anchors** (Emeris, Richfield)
- "34 Years" / "90+ Programmes" / "60k+ Alumni"
- Displayed as large numbers with labels in a horizontal strip
- Placed between hero and programme sections

**Third-party review integration** (Richfield)
- HelloPeter reviews embedded directly on homepage
- Individual review cards with name, date, logo
- Mix of verified and student-submitted reviews

### Recommended for SA Innovation College

1. **Accreditation strip** below hero: DHET registration, QCTO accreditation, Umalusi -- with links to certificates
2. **Partner logos**: greyscale row with hover-to-colour; explain the value of each partnership
3. **Stats section**: 3-4 key numbers (years operating, graduates, programme count, campus count)
4. **Reviews**: integrate HelloPeter or Google Reviews widget; show 4-6 recent reviews
5. **Footer accreditation**: full legal text with registration numbers and certificate links

### Patterns to Avoid
- Accreditation badges buried in an "About" sub-page only
- Generic stock-photo testimonials without names or roles
- Stats without context ("1000+" -- of what?)
- Partner logos without explaining what the partnership means for students

---

## 6. Application / Enrollment Journey

### Best Patterns Found

**Multi-step online application** (Richfield)
- Dedicated "How to Apply" page with step-by-step visual guide
- External application portal (application.richfield.ac.za)
- "Start Your Application" CTA prominent in nav and hero
- Supporting page with fees, payment methods, FAQs

**Qualification Wizard to application** (Rosebank College)
- Interactive assessment -> recommended programmes -> direct application
- Reduces drop-off by pre-qualifying interest

**Dual CTA pattern** (Richfield, Emeris)
- "Enquire Now" (low commitment) + "Apply" (high commitment)
- Enquiry form: name, email, programme interest
- Application: full form on external portal

**WhatsApp integration** (Emeris, Rosebank)
- WhatsApp Business button for instant advisor contact
- Chatbot for initial screening
- Particularly relevant for SA mobile-first audience

### Recommended for SA Innovation College

```
Enrollment funnel:

1. Awareness: Browse programmes (homepage / programme listing)
2. Interest: Programme detail page -> "Enquire Now" or "Download Prospectus"
3. Consideration: "Speak to an Advisor" (WhatsApp or form)
4. Decision: "Start Application" (external portal or embedded form)
5. Confirmation: Application received + next steps email
```

- Primary CTA: "Apply Now" (always visible in sticky nav)
- Secondary CTA: "Enquire Now" (lower commitment)
- Tertiary CTA: "Download Prospectus" (PDF capture for lead gen)
- WhatsApp floating button for real-time advisor chat
- Keep enquiry form to 3-4 fields maximum (name, email, programme, phone)
- Mobile: sticky CTA bar at bottom of screen on programme pages

### Patterns to Avoid
- Requiring account creation before browsing programmes
- Forms with 10+ fields for initial enquiry
- No progress indicator in multi-step applications
- Application process that breaks or is unusable on mobile

---

## 7. Testimonial & Social Proof Patterns

### Best Patterns Found

**Verified review integration** (Richfield)
- HelloPeter widget showing star ratings and individual reviews
- Reviewer name, date, and profile photo
- Mixed positive and constructive reviews (builds authenticity)

**Alumni success stories** (Emeris)
- Professional photo, name, job title, company
- Quote about how education contributed to career
- Links to alumni network

**Stats-based social proof** (Coursera)
- "91% of learners report career benefit"
- "77% of learners experience career impact within 6 months"
- Displayed in navy callout band with large numbers

**Student video testimonials** (bootcamp pattern)
- Short (30-60 second) video clips
- Before/after career narrative
- Placed near application CTA

### Recommended for SA Innovation College

1. **Homepage testimonials section**: 4-6 review cards in a grid or carousel
2. **Alumni stories page**: dedicated section with career outcomes
3. **Stats strip**: employment rate, graduate satisfaction, programme completion
4. **Review source**: integrate HelloPeter, Google Reviews, or Trustpilot widget
5. **Video testimonials**: 2-3 short clips of graduates discussing career impact

**Testimonial card structure**:
- Photo (circular, 80px)
- Full name
- Programme studied / qualification obtained
- Current role and company (if applicable)
- Quote (2-3 sentences max)
- Source badge (HelloPeter, Google, etc.)

### Patterns to Avoid
- Anonymous testimonials ("A student from Gauteng")
- All testimonials sounding identical or overly polished
- Testimonials without any identifying details
- No mechanism for new students to leave reviews

---

## 8. Footer Design

### Best Patterns Found

**Multi-column mega footer** (Richfield, Emeris)
- 5-6 columns: Study, Why Us, Student Life, Admissions, Student Portal, Contact
- Each column has 4-6 links
- Social media icons row
- App download badges (App Store, Google Play, Huawei AppGallery)
- Legal text: copyright, privacy policy, terms, PAIA
- Accreditation registration numbers

**Simplified footer** (Coursera, Udemy)
- 4 columns: About, Community, Business, Government
- Newsletter signup
- Language selector
- Social icons
- Legal links in single row

### Recommended for SA Innovation College

```
Footer layout (5 columns):

Column 1: Logo + brief tagline + social icons + app badges
Column 2: Study (programmes by level, by faculty, online, on-campus)
Column 3: Admissions (how to apply, fees, bursaries, FAQs)
Column 4: Student Life (campuses, support, alumni, news)
Column 5: Contact (phone, email, WhatsApp, address, student portal link)

Below columns:
- Accreditation strip: DHET, QCTO, Umalusi logos + registration numbers
- Legal row: Copyright | Privacy Policy | PAIA | Terms & Conditions
- "Return to top" button
```

- Include WhatsApp contact in footer
- All three app store badges (Richfield pattern -- relevant for SA market)
- Student portal / LMS login links
- Emergency contact number

### Patterns to Avoid
- Footer with only social icons and copyright
- Broken links to old CMS pages
- No accreditation information in footer
- Footer that doesn't collapse cleanly on mobile (use accordion sections)

---

## 9. Mobile UX Patterns

### Best Patterns Found

**Full-screen mobile overlay menu** (Emeris, Richfield)
- Hamburger triggers full-screen dark overlay
- Accordion sub-menus with back arrows
- CTA buttons (Apply, Enquire) at bottom of overlay
- Search icon prominent

**Sticky mobile CTA bar** (bootcamp pattern, Coursera)
- Fixed bottom bar with primary CTA button
- Visible at all scroll positions
- Height ~56px, not obstructing content
- "Apply Now" or "Enquire Now"

**Thumb-friendly navigation** (Inflearn, Absorb)
- Bottom navigation bar on mobile (Home, Programmes, Search, Contact)
- Key actions within thumb reach (bottom 40% of screen)
- Minimum tap target: 48x48px (WCAG 2.2)

**Progressive disclosure** (all good examples)
- Show summary first, details on tap
- Accordion sections for FAQs, module lists
- "Read more" / "Show all" for long content

**Bandwidth-conscious design** (Richfield)
- Explicit consideration for SA data costs
- Optimised images with lazy loading
- No auto-playing video on mobile
- Light page weight priority

### Recommended for SA Innovation College

- **Mobile nav**: Full-screen overlay with accordion menus
- **Sticky CTA**: "Apply Now" bar fixed at bottom on programme and landing pages
- **Touch targets**: minimum 48px for all interactive elements
- **Page speed**: target < 3s load on 3G connection
- **Image strategy**: WebP with fallbacks, lazy loading, responsive srcset
- **Form design**: single-column, large input fields, minimal fields
- **Video**: tap-to-play only, with poster image; offer lower quality options
- **Offline consideration**: service worker for caching key pages (programme info, contact)

### Mobile-Specific Metrics to Track
- Mobile bounce rate vs desktop
- Mobile form completion rate
- Mobile page load time (target < 3s on 3G)
- Mobile CTA tap rate
- Mobile menu open rate and drop-off within menu

### Patterns to Avoid
- Desktop site simply scaled down (not mobile-first)
- Horizontal scroll for primary content
- Tiny text requiring pinch-to-zoom
- Forms with auto-zoom on input focus
- Pop-ups that are difficult to dismiss on mobile
- Carousels that don't support swipe gestures

---

## 10. Typography Choices

### Patterns from Analysed Sites

| Site | Primary Font | Weight Scale | Notes |
|------|-------------|-------------|-------|
| Coursera | Source Sans Pro | 400/600/700 | Single family; weight 600 for all display |
| Udemy | Udemy Sans / Inter | 400/500/700 | Humanist x-height; instructional tone |
| Inflearn | Pretendard (system stack) | 400/600/700 | No bundled web font; OS fallback |
| Richfield | Custom (geometric sans) | 400/600/700 | Bold headlines, clean body |
| Emeris | Custom sans-serif | 400/500/700 | Professional, academic tone |

### Recommended for SA Innovation College

**Font stack** (single family approach):
```
Primary: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

**Weight scale**:
- 700 (Bold): H1, H2, section headlines
- 600 (Semi-bold): H3, H4, nav labels, button text
- 400 (Regular): body text, descriptions, pricing

**Type scale** (mobile-first):
- H1: 32px / 1.2 line-height (mobile) -> 48px (desktop)
- H2: 24px / 1.3 (mobile) -> 36px (desktop)
- H3: 20px / 1.4 (mobile) -> 24px (desktop)
- Body: 16px / 1.6
- Small/Caption: 14px / 1.5
- Button: 14-16px / 600 weight / uppercase with letter-spacing

**Rationale**: Inter is freely available, optimised for screens, supports all SA languages, and has excellent readability at small sizes. Single-family approach reduces load time and maintains consistency.

### Patterns to Avoid
- More than 2 font families on the site
- Decorative/display fonts for body text
- Font sizes below 14px for body content
- Inconsistent heading scales across pages
- Custom fonts without proper fallback stacks (SA bandwidth consideration)

---

## 11. Colour Usage

### Patterns from Analysed Sites

| Site | Primary | Secondary | Canvas | Ink | Approach |
|------|---------|-----------|--------|-----|----------|
| Coursera | #0056d2 (blue) | #002761 (navy) | #ffffff | #0f1114 | Single saturated blue + navy callout |
| Udemy | #6d28d2 (violet) | #c4710d (orange) | #ffffff / #e9eaf2 | #2a2b3f | Outlined violet, not filled |
| Inflearn | #00C471 (mint) | -- | #ffffff | #212529 | Single green accent, nothing else |
| Richfield | Custom blue | White | White | Dark grey | Traditional institutional |
| Emeris | Teal | Yellow accent | White | Dark | Dual accent, energetic |

### Recommended for SA Innovation College

**Colour system** (single primary approach):
```
Primary:        #1B4D8E  (deep institutional blue -- trust, credibility)
Primary-light:  #2563EB  (brighter blue -- CTAs, links, active states)
Primary-dark:   #0F2D5E  (hover/pressed state)
Accent:         #F59E0B  (warm amber -- urgency, highlights, badges)

Canvas:         #FFFFFF
Surface:        #F8FAFC
Surface-alt:    #F1F5F9
Border:         #E2E8F0

Ink:            #0F172A  (near-black, never pure #000)
Ink-soft:       #475569  (body text)
Ink-muted:      #94A3B8  (captions, metadata)

Success:        #16A34A
Warning:        #F59E0B
Error:          #DC2626
Info:           #0EA5E9
```

**Usage rules**:
- Primary blue for all CTAs, active states, links
- Amber accent used sparingly: badges, urgency indicators, highlights
- Never use accent colour for body text
- Near-black (#0F172A) for headings; soft-ink (#475569) for body
- White canvas with #F8FAFC sections for visual separation
- Greyscale for partner logos (colour on hover)

### Patterns to Avoid
- Multiple competing accent colours
- Pure #000000 for text (use near-black instead)
- Pure #FFFFFF text on light backgrounds (contrast issues)
- Low-contrast text for accessibility failures
- Using accent colour for large backgrounds
- More than 2 chromatic hues in the palette

---

## 12. Spacing & Visual Hierarchy

### Patterns from Analysed Sites

**Spacing scale** (synthesised from Coursera/Udemy/Inflearn):
```
4px   -- inline element spacing
8px   -- tight gaps (icon to text, chip internal)
12px  -- small component gaps
16px  -- card internal padding, list item gaps
24px  -- card padding, section element gaps
32px  -- between related sections
48px  -- between major sections
64px  -- between page sections
80px  -- hero section padding
112px -- maximum section separator
```

**Content width**: max 1200px centred, with 16px horizontal padding on mobile

**Visual hierarchy approach** (Coursera "Why-How-Proof" arc):
1. Section headline (H2, 36px, bold, ink colour)
2. Supporting text (body, 16px, ink-soft)
3. Content cards / evidence
4. CTA

### Recommended for SA Innovation College

- Use an 8px base grid for all spacing
- Consistent vertical rhythm: 48-64px between major sections on desktop
- Card gap: 24px on desktop, 16px on mobile
- Section padding: 64px top/bottom (desktop), 32-48px (mobile)
- Content max-width: 1200px centred
- Sidebar width (programme listing): 280px

**Visual hierarchy by section**:
- Hero: large headline + supporting text + CTA (clear 3-tier hierarchy)
- Programme cards: thumbnail -> title -> metadata -> CTA (image-led)
- Testimonials: photo -> name/role -> quote (person-led)
- Stats: number (large) -> label (small, muted) (data-led)

### Patterns to Avoid
- Inconsistent spacing between sections
- Cards with different internal padding across pages
- Sections with no clear visual separation (rely on spacing, not just colour)
- Walls of text without visual hierarchy breaks

---

## 13. CTA Design

### Patterns from Analysed Sites

| Site | Primary CTA Style | Secondary CTA | Notes |
|------|-------------------|---------------|-------|
| Coursera | Filled blue, 8px radius, 36px height | Text link | Uppercase, tracked label |
| Udemy | Outlined violet, 1.5px border, 8px radius | Filled dark | Brand speaks through outline |
| Inflearn | Filled mint green, pill shape | Text link | Single accent does all work |
| Richfield | Filled blue, rounded | Ghost button | Dual CTA: Apply + Enquire |
| Emeris | Filled teal, uppercase | Outlined teal | Bold, imperative verbs |

### Recommended for SA Innovation College

**Primary CTA**:
```
Background: #1B4D8E (primary blue)
Text: #FFFFFF
Radius: 8px
Height: 44-48px (minimum for touch)
Padding: 12px 24px
Font: 14-16px / 600 weight / uppercase / 0.05em letter-spacing
Hover: #0F2D5E (primary dark) with subtle lift shadow
```

**Secondary CTA**:
```
Background: transparent
Border: 1.5px #1B4D8E
Text: #1B4D8E
Same dimensions as primary
Hover: #F8FAFC background
```

**Tertiary/Text CTA**:
```
Text: #1B4D8E with underline on hover
Used for "Browse all programmes", "Learn more", "Read more"
```

**CTA placement rules**:
- Hero: primary + secondary side by side
- Programme cards: tertiary "View Programme" link
- Sticky nav: primary "Apply Now" always visible
- Mobile sticky bar: single primary CTA
- After testimonials: primary CTA matching context ("Join [X] Students")
- Footer: primary CTA + enquiry link

**CTA copy by section** (progressive commitment):
- Hero: "Apply Now" or "Start Your Journey"
- Programme listing: "View Programme" / "Enquire About This Programme"
- After stats/trust: "Join [X] Graduates"
- Footer: "Enquire Now" / "Apply Today"

### Patterns to Avoid
- More than 2 CTA buttons in a single viewport
- CTA text that is vague ("Click Here", "Submit")
- Small touch targets (< 44px)
- CTAs that blend into the background (low contrast)
- Inconsistent CTA styling across pages

---

## 14. Stats / Numbers Display

### Best Patterns Found

**Large number + label** (Emeris, Richfield)
```
  34          90+         60k+
 Years    Programmes     Alumni
```
- Numbers at 48-64px, bold
- Labels at 14-16px, muted colour
- Horizontal row with equal spacing
- Placed between hero and programme sections

**Stat callout bands** (Coursera)
```
┌─────────────────────────────────────────┐
│  91%  of learners report career benefit │
│  after completing a course              │
└─────────────────────────────────────────┘
```
- Navy background (#002761)
- Large white number
- Supporting text in lighter weight
- Full-width band separating sections

**Counter animation** (various)
- Numbers count up on scroll into view
- Subtle animation, 1-2 seconds
- Pause at final value
- Works well on desktop; skip on mobile for performance

### Recommended for SA Innovation College

**Homepage stats section** (4 numbers):
- Years of Operation
- Programmes Offered
- Graduates / Alumni
- Campuses / Study Centres

**Programme detail page** (2-3 numbers):
- Programme Duration
- NQF Level
- Annual Fees (or "From R__")

**Design**:
- Number: 48px (mobile) / 64px (desktop), bold, primary blue
- Label: 14px, ink-muted, uppercase with letter-spacing
- Optional supporting line: 16px, ink-soft, italic
- Layout: horizontal row (4-col grid desktop, 2x2 grid mobile)
- Background: white or #F8FAFC

### Patterns to Avoid
- Stats without clear labels or units
- Too many numbers (> 5) competing for attention
- Stats buried deep in the page (place above the fold or just below)
- Animated counters without a static fallback
- Made-up or vague statistics ("Thousands of students")

---

## 15. Overall Recommended Page Structure

### Homepage (Desktop)

```
1. Announcement Bar        (time-sensitive: intake dates, bursary deadlines)
2. Sticky Navigation        (logo, nav links, Apply + Enquire CTAs)
3. Hero Section             (outcome headline, sub-text, dual CTA, hero image)
4. Trust Strip              (accreditation logos, greyscale)
5. Stats Row                (4 key numbers)
6. Programme Section        (grouped by faculty or mode, card grid)
7. "Why [Institution]?"     (3-4 value propositions with icons)
8. Partners / Industry      (partner logo carousel)
9. Testimonials             (4-6 review cards)
10. News / Events           (2-3 latest items)
11. Application CTA Block   (full-width, primary CTA)
12. Footer                  (5-column, accreditation, legal)
```

### Homepage (Mobile)

```
1. Announcement Bar        (scrollable if multiple)
2. Sticky Header           (logo, hamburger, Apply button)
3. Hero                    (stacked: headline, sub-text, CTA, image)
4. Trust Strip             (horizontal scroll logos)
5. Stats                   (2x2 grid)
6. Programmes              (single column cards)
7. Value Props             (stacked cards)
8. Partners                (logo grid)
9. Testimonials            (horizontal swipe cards)
10. CTA Block              (full-width button)
11. Footer                 (accordion sections)
```

---

## 16. Summary: Top 10 Recommendations for SA Innovation College

1. **Mobile-first, bandwidth-conscious**: Design for 3G, optimise for data costs, lazy-load images, no auto-play video. This is non-negotiable for the SA market.

2. **Single primary colour + one accent**: Deep blue for trust, warm amber for emphasis. Avoid multi-colour palettes that dilute brand recognition.

3. **Outcome-led hero**: Headline states transformation, not features. One CTA + one browse link. Partner logos immediately below.

4. **Programme cards with clear metadata**: Thumbnail, title, qualification level, duration, mode (online/campus). Filter on desktop, chips on mobile.

5. **Dual CTA strategy**: "Apply Now" (high commitment) + "Enquire Now" (low commitment). WhatsApp as a third channel.

6. **Accreditation front-and-centre**: DHET, QCTO, Umalusi visible on homepage and footer. Link to certificates.

7. **Testimonials from real students**: HelloPeter or Google Reviews integration. Authentic, named, with programme details.

8. **Full-screen mobile menu overlay**: Not a slide-out drawer. Accordion sub-menus with search and CTAs.

9. **Sticky Apply CTA on mobile**: Fixed bottom bar on programme and landing pages. Minimum 48px height.

10. **Single font family (Inter)**: One family, three weights. Reduces load, maintains consistency, supports all SA languages.

---

*Research compiled July 2026. Sources include live site analysis, published case studies (So Interactive, Bluegrass Digital, Switch Cloud Studio), design system documentation (shadcn.io, Refero Styles), and industry best practice guides.*
