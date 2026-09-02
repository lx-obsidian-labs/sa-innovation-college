# UX Research Document -- SA Innovation College

**Document Type:** UX Research and Specifications
**Created:** July 2026
**Last Updated:** September 2026 (enhanced with WordPress homepage content analysis)
**Scope:** User personas, journeys, information architecture, mobile UX patterns, interaction patterns, accessibility requirements, and performance budgets for the SA Innovation College website redesign.

---

## 0. Homepage Content Strategy (from WordPress Source)

The original SA Innovation College WordPress homepage provides the following content structure, which informs the redesigned homepage components and IA:

### Brand Messaging
- **Tagline:** "Through Knowledge, We Grow Towards Excellence"
- **Established:** 2016
- **Dual identity:** QCTO Accredited TVET & Skills Training Centre + ICDL South Africa Centre
- **Address:** 147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157

### What We Offer (8 Service Categories)
1. QCTO Occupational Qualifications
2. TVET & Skills Development Programmes
3. ICDL International Computer Certification
4. Skills Programmes & Short Courses
5. Recognition of Prior Learning (RPL)
6. Corporate & Workplace Training
7. Workplace-Based Learning
8. Digital Skills & Computer Literacy

### Why Choose SA Innovation College (Key Differentiators)
- Established in 2016 with a proven record of educational excellence
- Accredited Learning — QCTO Accredited TVET & Skills Training Centre
- International Digital Skills — Official ICDL South Africa Centre
- Industry-Focused Training — programmes aligned with workplace needs
- Flexible study options: Full-Time, Part-Time, Distance/E-Learning/online, Saturday & Evening Classes
- Industry-experienced facilitators and assessors
- Career-focused qualifications aligned with employer needs
- Modern learning that combines knowledge, technology and innovation

### Homepage Section Order
1. Hero carousel (tagline + primary CTA)
2. What We Offer (8 service categories)
3. Featured courses (6 cards)
4. Student gallery
5. Why Choose SA Innovation College (6 differentiators)
6. Testimonials
7. Accreditation logos (QCTO, DHET, ICDL highlighted)
8. Application CTA ("Your Future Starts Here")

---

## 1. User Personas

### Persona 1: Thabo -- School Leaver

| Attribute | Detail |
|-----------|--------|
| Age | 18 |
| Background | Completed Matric in 2025 in Soshanguve, Gauteng. Lives with his mother and younger sister. First in his family to consider post-school education. |
| Motivation | Needs a practical qualification that leads to employment quickly. Cannot afford university fees and is sceptical of TVET colleges after hearing negative experiences from neighbours. |
| Tech Literacy | Low-to-moderate. Uses a smartphone daily (WhatsApp, TikTok, YouTube). Has never used a laptop for browsing. Typing long text on a phone is frustrating. |
| Device and Connection | Shares a Samsung Galaxy A14 with his mother. Connects via MTN prepaid data, roughly 2-3 GB per month. Wi-Fi available at a local internet cafe but inconvenient to visit. |
| Primary Goal | Find an affordable programme he can start soon, confirm the college is legitimate, and understand how to apply and pay fees. |
| Pain Points | Cannot distinguish legitimate colleges from fraudulent ones. Does not understand accreditation terminology (NQF, QCTO, DHET). Overwhelmed by too many options. Afraid of spending money on a qualification nobody recognises. Mobile data runs out before he finishes reading long pages. |
| What He Needs From the Website | Simple programme comparison with clear fees and durations. Trust signals visible without scrolling (accreditation logos, physical address). A way to ask questions without filling out a long form (WhatsApp). Minimal page weight so data is not wasted. Plain language, no jargon. |

### Persona 2: Naledi -- Working Adult Reskilling

| Attribute | Detail |
|-----------|--------|
| Age | 26 |
| Background | Works as a waitress in Centurion. Completed Grade 11 (no Matric). Wants to transition into office work or traffic management. Has a baby and works irregular shifts. |
| Motivation | Needs flexible programme options that fit around her work schedule. Wants to know if she qualifies without Matric. Needs to see that the investment will pay off with a better job. |
| Tech Literacy | Moderate. Owns her own phone (Huawei P30 Lite). Uses Facebook, WhatsApp, and M-Pesa regularly. Can fill out online forms but finds small text and cluttered layouts difficult. |
| Device and Connection | Own smartphone. Uses home Wi-Fi in the evenings (Vumatel fibre, 10 Mbps). During the day relies on Vodacom data bundles. |
| Primary Goal | Determine if she is eligible for a programme without Matric, understand the time commitment alongside her job, and find out about payment options or bursaries. |
| Pain Points | Frustrated by colleges that require Matric for every programme. Cannot attend daytime classes. Needs transparent pricing upfront -- hidden fees are a dealbreaker. Worried about judgement for not having Matric. Has limited time to browse and needs answers fast. |
| What She Needs From the Website | Clear entry requirements stated plainly on each programme card (e.g., "No Matric required"). Information about part-time or online study options. Fee structure with payment plan details. Bursary or financial aid information. Quick-enquiry via WhatsApp so she can ask specific questions on her own schedule. |

### Persona 3: Dlamini -- Parent/Guardian Verifier

| Attribute | Detail |
|-----------|--------|
| Age | 47 |
| Background | Municipal worker in Ekurhuleni. His 19-year-old daughter wants to study traffic management. He is cautious with money and sceptical of private education providers after a relative lost money to a fraudulent college. |
| Motivation | Needs to verify that SA Innovation College is legitimate, accredited, and will lead to his daughter getting a real job. He is not the primary applicant but is the financial decision-maker. |
| Tech Literacy | Low. Uses a basic Android phone primarily for calls and WhatsApp. Can browse websites but does not trust online forms. Prefers calling a number and speaking to a person. |
| Device and Connection | Basic Android phone on Telkom prepaid data (1-2 GB/month). Sometimes uses the library computer for longer browsing. |
| Primary Goal | Confirm the college's accreditation, check the physical address is real, and get a phone number to call and ask questions directly. |
| Pain Points | Does not understand online application processes. Distrusts sites with no physical address. Annoyed by pop-ups and chat widgets that block content. Needs a phone number that a real person answers. Alarmed by broken links or placeholder content. |
| What He Needs From the Website | Accreditation details prominently displayed with registration numbers. Physical address with a map. Click-to-call phone number (large, easy to tap). Minimal pop-ups or overlays. Information that answers his questions without requiring him to create an account or fill out a form. Footer with legal and compliance information. |

### Persona 4: Priya -- Corporate Training Coordinator

| Attribute | Detail |
|-----------|--------|
| Age | 34 |
| Background | HR and Learning Development coordinator at a mid-size logistics company in Pretoria. Responsible for upskilling 200+ employees. Has a procurement process that requires formal quotations and accreditation verification. |
| Motivation | Needs to find training programmes for employees in traffic management, computer literacy, and hospitality. Requires a formal proposal and quotation process. Needs to verify accreditation for her procurement records. |
| Tech Literacy | High. Works on a laptop daily. Comfortable with online forms, email correspondence, and digital procurement systems. Expects a professional digital experience. |
| Device and Connection | Company laptop (Windows) and personal iPhone. Office broadband connection. Not bandwidth-constrained. |
| Primary Goal | Identify relevant programmes for employee groups, request a formal quotation, and verify accreditation for procurement compliance. |
| Pain Points | Cannot find corporate training or group enrolment information on the current site. No way to request a quote. Programme information is too vague for procurement documentation. Frustrated by consumer-focused sites that ignore B2B needs. |
| What She Needs From the Website | Dedicated "Corporate Training" or "For Employers" section. Group enrolment information. Formal quotation request form (company name, number of employees, programme interest). Accreditation documentation downloadable as PDF. Professional presentation that she can share with her procurement team. Direct contact email for partnership enquiries. |

---

## 2. User Journeys

### Journey 1: Discover and Apply

**Persona:** Thabo (School Leaver)
**Goal:** Discover courses, find the right one, understand requirements, and apply.

| Step | Action | Screen | Decision Point |
|------|--------|--------|----------------|
| 1 | Arrives from Google search "traffic officer course Centurion" or from a WhatsApp link shared by a friend. | Homepage | Is this a real college? (Trust check: looks for accreditation logos, physical address, professional design within 5 seconds.) |
| 2 | Scans homepage for programme information. Sees programme cards or a "Programmes" nav link. | Homepage / Programme Listing | Which programme is relevant to me? |
| 3 | Taps on "Traffic Officer Course" or a relevant programme card. | Programme Detail Page | Can I afford this? Am I eligible? |
| 4 | Reads entry requirements, fees, duration, and career outcomes. Scrolls to find accreditation information. | Programme Detail Page | Do I want to apply? |
| 5 | Taps "Apply Now" or "Enquire Now." If not ready, taps WhatsApp floating button to ask a question. | Application Form / WhatsApp | How do I start? |
| 6 | Fills out enquiry form (name, phone, programme interest) or sends a WhatsApp message. | Enquiry Confirmation / WhatsApp | I have taken the first step. |

**Conversion Moment:** Step 5 -- the tap on "Apply Now" or "Enquire Now."
**Exit Points:** Step 1 (trust failure), Step 4 (information gap -- no fees listed), Step 5 (form too long or broken).

---

### Journey 2: Compare and Contact

**Persona:** Naledi (Working Adult)
**Goal:** Compare programmes, check accreditation, and contact admissions with specific questions.

| Step | Action | Screen | Decision Point |
|------|--------|--------|----------------|
| 1 | Arrives from Facebook ad or shared link. Lands on homepage. | Homepage | Does this college offer something I can do without Matric? |
| 2 | Navigates to "Programmes" or scrolls to programme section. | Programme Listing | Which programmes fit my situation? |
| 3 | Uses filter chips to narrow by "No Matric Required" or "Part-Time" or "Short Course." | Programme Listing (filtered) | Which of these interests me most? |
| 4 | Opens 2-3 programme detail pages in sequence. Compares entry requirements, fees, duration, and study mode. | Programme Detail Pages (multiple) | Which one gives me the best outcome for the lowest cost? |
| 5 | Checks the "Accreditation" or "About" page to verify legitimacy. | About / Accreditation Page | Is this college registered? Will my qualification be recognised? |
| 6 | Returns to the preferred programme page. Taps "WhatsApp an Advisor" to ask about payment plans and part-time scheduling. | WhatsApp (external app) | Can I afford this and fit it around my job? |
| 7 | Receives response from advisor. Returns to website to download prospectus or begin application. | Prospectus Download / Application Form | I am ready to proceed. |

**Conversion Moment:** Step 6 -- the WhatsApp conversation that answers her specific questions.
**Exit Points:** Step 2 (no clear programme categories), Step 3 (no filter for entry requirements), Step 4 (missing fee information), Step 5 (accreditation not verifiable).

---

### Journey 3: Return Visit and Re-engage

**Persona:** Thabo (returning after 2 weeks)
**Goal:** Check for updates, find new intake dates, and re-contact admissions.

| Step | Action | Screen | Decision Point |
|------|--------|--------|----------------|
| 1 | Returns via a bookmark, a WhatsApp reminder, or a Google search. | Homepage | Has anything changed since my last visit? |
| 2 | Notices the announcement bar showing "Mid-Year Intake Now Open" or a new intake date. | Announcement Bar (above nav) | Is the timing right for me to act? |
| 3 | Navigates directly to the programme page he previously viewed (saved in browser history or remembers the name). | Programme Detail Page | Are fees and dates still the same? |
| 4 | Taps "Apply Now" to begin the application, or taps WhatsApp to follow up on a previous conversation. | Application Form / WhatsApp | I am ready to commit. |

**Conversion Moment:** Step 4 -- the return visit with intent to act.
**Exit Points:** Step 1 (homepage feels unchanged, no reason to re-engage), Step 3 (information is stale or different from what was remembered).

---

### Journey 4: Parent Verification

**Persona:** Dlamini (Parent/Guardian)
**Goal:** Verify legitimacy, check accreditation, and contact the college by phone.

| Step | Action | Screen | Decision Point |
|------|--------|--------|----------------|
| 1 | His daughter shows him the website on her phone, or he searches "SA Innovation College Centurion" on his own phone. | Homepage | Does this look like a real institution? |
| 2 | Immediately looks for: physical address, phone number, accreditation logos. Does not scroll past the first screen on first visit. | Homepage (above fold) | Is there a real address and a number I can call? |
| 3 | Sees the accreditation strip below the hero. Taps on one of the accreditation logos or links to learn more. | Accreditation section / About Page | Are they registered with DHET and QCTO? |
| 4 | Scrolls to the footer to find the physical address, phone number, and company registration details. | Footer | This is a real place with a real address. |
| 5 | Taps the click-to-call phone number or writes it down to call later. | Phone app (external) | I will call and speak to someone. |
| 6 | (Optional) Returns on a desktop or library computer to read the full "About" page and download any accreditation certificates. | About Page / Downloads | I am satisfied this is legitimate. I will support my daughter's application. |

**Conversion Moment:** Step 5 -- the phone call initiated by the parent, which typically leads to the student completing an application.
**Exit Points:** Step 2 (no address or phone number visible), Step 3 (accreditation information missing or unverifiable), Step 4 (footer has broken links or placeholder data).

---

### Journey 5: Corporate Training Inquiry

**Persona:** Priya (Corporate Training Coordinator)
**Goal:** Find relevant programmes for employees and request a formal quotation.

| Step | Action | Screen | Decision Point |
|------|--------|--------|----------------|
| 1 | Arrives from a LinkedIn post, a colleague's recommendation, or a direct Google search for "corporate training Centurion." | Homepage or landing page | Does this college offer corporate/group training? |
| 2 | Looks for a "Corporate Training" or "For Employers" link in the navigation. If not present, searches the site. | Navigation / Search | Can I find B2B information quickly? |
| 3 | Finds a corporate training page listing available programmes, group enrolment options, and custom training. | Corporate Training Page | Do they have programmes relevant to my company's needs? |
| 4 | Reviews programme details, accreditation, and delivery modes (online, on-site, hybrid). | Programme Detail Pages | Can this be delivered to 50+ employees? |
| 5 | Taps "Request a Quote" and fills out a form: company name, contact details, number of employees, programme interest, preferred delivery mode. | Quote Request Form | This looks professional enough to share with procurement. |
| 6 | Receives a confirmation email. Expects a follow-up call or proposal within 48 hours. | Email confirmation | The process was smooth and professional. |

**Conversion Moment:** Step 5 -- the quote request submission.
**Exit Points:** Step 2 (no corporate training section exists), Step 3 (information too consumer-focused), Step 5 (no quote request mechanism, only a generic contact form).

---

## 3. Information Architecture

### Primary Navigation (Desktop)

```
Home | Programmes | Admissions | About | Contact | [Enquire Now] [Apply Now]
```

| Nav Item | Label | Page | Notes |
|----------|-------|------|-------|
| 1 | Home | / | Homepage |
| 2 | Programmes | /programmes | Programme listing with filters |
| 3 | Admissions | /admissions | How to apply, fees, bursaries, intake dates |
| 4 | About | /about | College story, team, campus, accreditation |
| 5 | Contact | /contact | Phone, email, WhatsApp, address, map, enquiry form |
| 6 | Enquire Now | (CTA button) | Links to /contact or opens enquiry modal |
| 7 | Apply Now | (CTA button) | Links to /apply or external application portal |

### Primary Navigation (Mobile)

```
Hamburger Menu -> Full-Screen Overlay
  Search bar (top of overlay)
  Prospective Students
    Programmes
    Admissions
    How to Apply
    Fees and Finance
    FAQs
  Current Students
    Student Portal
    Academic Calendar
    Support Services
  For Employers
    Corporate Training
    Group Enrolments
    Request a Quote
  Quick Actions
    Apply Now
    Enquire Now
    WhatsApp an Advisor
    Call 0800 014 568
```

### Secondary Navigation

Appears as a thin utility bar above the primary nav on desktop, or integrated into the hamburger overlay on mobile.

| Item | Link | Notes |
|------|------|-------|
| Student Portal | (external link) | For current students |
| Call 0800 014 568 | tel:0800014568 | Click-to-call |
| WhatsApp | wa.me/27727733960 | Opens WhatsApp |

### Footer Navigation

```
Column 1: Brand
  Logo
  Tagline
  Social icons (Facebook, Instagram, YouTube -- only if active profiles exist)

Column 2: Study
  All Programmes
  Short Courses
  Diplomas and Certificates
  Online Learning
  Study Modes

Column 3: Admissions
  How to Apply
  Fees and Payment Plans
  Bursaries and Financial Aid
  Intake Dates
  FAQs

Column 4: About Us
  Our Story
  Accreditation
  Campuses and Locations
  Partners
  News and Updates

Column 5: Contact
  Phone: 0800 014 568
  WhatsApp: +27 72 773 3960
  Email: (verified address)
  Address: 147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion 0157
  Student Portal Login
```

Below columns:
- Accreditation strip (DHET, QCTO, Umalusi logos and registration numbers)
- Legal row: Copyright | Privacy Policy | PAIA | Terms and Conditions
- Return to top button

### Page Hierarchy

```
/
├── /programmes
│   ├── /programmes/[slug]           (e.g., /programmes/traffic-officer)
│   └── /programmes/[slug]/apply     (application form for specific programme)
├── /admissions
│   ├── /admissions/how-to-apply
│   ├── /admissions/fees
│   ├── /admissions/bursaries
│   └── /admissions/intake-dates
├── /about
│   ├── /about/accreditation
│   ├── /about/campuses
│   ├── /about/partners
│   └── /about/news
├── /contact
│   └── /contact/corporate           (for B2B enquiries)
├── /apply                           (general application)
└── /[legal]
    ├── /privacy-policy
    ├── /paia
    └── /terms
```

### Cross-Linking Strategy

| From | To | Mechanism |
|------|----|-----------|
| Homepage hero | Programme listing or specific programme | Primary CTA |
| Programme cards | Programme detail pages | Card tap target |
| Programme detail pages | Application form | "Apply Now" CTA |
| Programme detail pages | Enquiry form or WhatsApp | "Enquire" CTA |
| Testimonial section | Programme pages | "Learn about [Programme Name]" link |
| Stats section | About / Accreditation page | "Learn more about our accreditation" |
| FAQ sections (any page) | Relevant detail page | Inline links within answers |
| Footer | All primary and secondary pages | Full sitemap |
| Blog / News articles | Related programme pages | Inline links |
| WhatsApp widget | WhatsApp app (external) | Deep link to wa.me |
| Announcement bar | Specific landing page (intake dates, open day) | Time-sensitive link |

### URL Conventions

- Lowercase, hyphenated slugs: `/programmes/traffic-officer-course`
- No trailing slashes except for root
- Static pages use flat paths: `/admissions`, `/about`, `/contact`
- Dynamic programme pages use Next.js dynamic routes: `/programmes/[slug]`

---

## 4. Mobile UX Patterns

### Context: South African Mobile-First Reality

The target audience accesses the internet primarily through smartphones on prepaid data. The average monthly data spend is R100-R200. Browsing sessions are short (2-5 minutes). Connection quality varies from 3G to LTE. Wi-Fi is available at home for some users but not during commute or work hours. Every kilobyte matters.

### Navigation Pattern

**Recommendation: Full-screen overlay with hamburger trigger (desktop: sticky horizontal nav)**

Rationale: A full-screen overlay eliminates the need for a bottom bar (which permanently consumes 56px of vertical space) and matches the patterns used by Richfield and Emeris in the SA market. Bottom navigation bars are better suited for app-like experiences with 4-5 equally important destinations. The SA Innovation College site has a clear hierarchy: programmes first, everything else secondary.

| Element | Specification |
|---------|---------------|
| Trigger | Hamburger icon (3 horizontal lines), top-right of header |
| Overlay background | White (#FFFFFF) or near-black (#0F172A) with white text |
| Animation | Fade-in + slide-up, 200ms ease-out |
| Menu items | Accordion-style, max 2 levels of nesting |
| Back arrow | Present on all sub-menu levels, 48px tap target |
| Search | Text input at top of overlay, full width |
| Quick actions | "Apply Now" and "Call 0800 014 568" as large buttons at bottom |
| Close | X icon top-left, tap outside overlay, or Escape key |
| Body scroll lock | Enabled when overlay is open |

### Touch Targets

| Element | Minimum Size | Recommended Size |
|---------|-------------|-----------------|
| Navigation links | 44 x 44px | 48 x 48px |
| CTA buttons | 44 x 44px | 48px height, full-width on mobile |
| Programme cards | Entire card is tappable | Min 200px height |
| Form inputs | 48px height | 52px height |
| Filter chips | 36px height | 40px height with 12px horizontal padding |
| Social icons | 44 x 44px | 48 x 48px with spacing |
| WhatsApp floating button | 56 x 56px | 60 x 60px, positioned 16px from bottom-right |

### Image Loading Strategy

| Strategy | Implementation |
|----------|---------------|
| Format | WebP with JPEG fallback (via `<picture>` element or Next.js `<Image>`) |
| Responsive srcset | 3 sizes: 480w (mobile), 768w (tablet), 1200w (desktop) |
| Lazy loading | All images below the fold use `loading="lazy"` and `decoding="async"` |
| Above-the-fold images | Eager-loaded with `fetchpriority="high"` (hero image, first programme card) |
| Placeholder | Low-quality placeholder (LQIP) or solid colour skeleton while loading |
| Alt text | Descriptive, concise (max 125 characters). Decorative images use empty alt. |
| Maximum dimensions | Hero image: max 1200w. Programme card thumbnail: max 800w. Testimonial photo: max 200w. |
| Maximum file size | Hero: 80KB. Card thumbnail: 40KB. Testimonial photo: 15KB. Icon: 2KB. |
| SVG usage | All icons and logos as SVG (inline or sprite). Accreditation logos as SVG where possible. |
| Background images | Avoid. Use `<img>` for all meaningful images to enable native lazy loading and alt text. |

### Form Design for Mobile

| Rule | Specification |
|------|---------------|
| Single column | All form fields stack vertically. No side-by-side fields on mobile. |
| Input height | Minimum 48px. Use `font-size: 16px` to prevent iOS zoom on focus. |
| Labels | Always visible above the input (not as placeholders). Floating labels acceptable as secondary pattern. |
| Keyboard type | Use appropriate `inputmode`: `numeric` for phone/ID, `email` for email, `text` for names. |
| Autocomplete | Use `autocomplete` attributes: `name`, `tel`, `email`, `postal-code`. |
| Submit button | Full-width, primary CTA style, minimum 48px height, sticky at bottom of form viewport if form is long. |
| Error messages | Inline, below the field, in red (#DC2626), with an exclamation icon. Not a pop-up. |
| Progress indicator | For multi-step forms: horizontal step indicator with labels (Step 1 of 3). |
| Field count | Enquiry form: maximum 4 fields. Application form: max 8 fields per step with multi-step wizard. |
| autofill | Enable browser autofill. Do not disable it for performance. |
| Success state | Replace form with a confirmation message. No redirect. Include next steps and contact info. |

### Content Prioritisation

On mobile, content must be prioritised because screen space is limited and attention spans are short.

**Above the fold (first screen, no scroll):**
- Announcement bar (if active)
- Header with logo and hamburger
- Hero: headline, sub-text, primary CTA, hero image

**First scroll (within 3 taps of landing):**
- Trust strip (accreditation logos)
- Stats (2x2 grid)
- First 2-3 programme cards

**Second scroll:**
- Remaining programme cards or "View All Programmes" link
- Value propositions ("Why SA Innovation College")

**Deep scroll (only if interested):**
- Testimonials
- Partners
- News
- Final CTA

**Footer (always accessible):**
- Contact information
- Accreditation details
- Legal links

### Offline and Error Handling

| Scenario | Handling |
|----------|----------|
| No network connection | Display a lightweight offline page cached by service worker. Show the college phone number and WhatsApp number prominently. Cache the homepage and programme listing pages. |
| 404 page | Custom 404 with: apology message, search bar, programme listing link, contact information, and a link back to the homepage. Never show a default framework 404. |
| 500 server error | Custom error page with: apology, "Try again" button, contact phone number, and link to homepage. Log the error server-side. |
| Slow connection (3G) | Prioritise text content. Defer non-critical images. Show skeleton loading states. Target First Contentful Paint under 1.5s even on 3G. |
| Form submission failure | Keep the form data intact. Show an inline error with "Please try again" and the contact phone number. Never clear the form on error. |

---

## 5. Interaction Patterns

### Course Filtering and Search

**Desktop:**
- Left sidebar (280px width) with filter groups: Programme Type, Duration, Entry Requirements, Study Mode, NQF Level
- Filters use checkboxes for multi-select, radio buttons for single-select
- Active filters shown as removable chips above the results grid
- Results update immediately on filter change (no "Apply" button)
- Clear all filters link

**Mobile:**
- Horizontal scrollable chip row below the page header: "All | Short Courses | Diplomas | No Matric Required | Online"
- Tap a chip to filter. Tap again to deselect.
- "Filters" button opens a bottom sheet with full filter options
- Active filter count shown on the button: "Filters (3)"
- Results update immediately

**Search:**
- Desktop: search bar in the header, 300px wide, with magnifying glass icon
- Mobile: search icon in header opens a full-width search overlay
- Search suggestions appear after 2+ characters
- Search covers programme names, descriptions, and tags
- No results state: "No programmes match your search. Try different keywords or browse all programmes." with a link to the full listing.

### FAQ Accordions

| Property | Specification |
|----------|---------------|
| Component | Disclosure / accordion (native `<details>`/`<summary>` with progressive enhancement) |
| Animation | Content expands with height transition, 200ms ease |
| Icon | Plus (+) icon rotates to minus (-) when open |
| Multiple open | Allow multiple sections to be open simultaneously |
| Accessibility | Uses `aria-expanded` on the trigger. Content is associated via `aria-controls` or wrapped in the `<details>` element. |
| Grouping | FAQs grouped by category: Admissions, Fees, Programmes, Accreditation, Student Life |
| Anchor links | Each FAQ item has a shareable anchor link (e.g., `/admissions#can-i-apply-without-matric`) |
| Mobile | Full-width cards with generous padding. Trigger text at 16px. Content at 16px with 1.6 line-height. |

### Testimonial Carousel

**Recommendation: Static grid, not auto-playing carousel.**

Rationale: Auto-playing carousels are inaccessible (screen readers cannot follow them), have low engagement (Baymard Institute research shows less than 1% of users interact with auto-rotating carousels), and consume unnecessary JavaScript. A static grid or a manually swipeable carousel with visible controls is superior.

**Desktop:**
- 3-column grid showing 3 testimonials
- Each card: circular photo (80px), name, programme, role/company, 2-3 sentence quote, source badge
- "Read more stories" link below to a dedicated alumni page

**Mobile:**
- Horizontal swipe with snap points (CSS scroll-snap)
- 1 full card visible + peek of next card (80% card width)
- Dot indicators showing current position (max 6 dots)
- Manual swipe only, no auto-rotation
- Accessibility: `aria-label` on the container, arrow key navigation on desktop

### Application Form

**Multi-step wizard pattern:**

| Step | Fields | Screen |
|------|--------|--------|
| 1 | Programme selection (dropdown or card selector), intake date | Step 1: Choose Programme |
| 2 | Personal details: full name, date of birth, phone, email, ID number | Step 2: Your Details |
| 3 | Education history: highest qualification, school name, year completed | Step 3: Education |
| 4 | Review and submit: summary of entered data, checkbox for terms, submit button | Step 4: Review |

| Property | Specification |
|----------|---------------|
| Progress indicator | Horizontal step bar at top: Step 1 (active) > Step 2 > Step 3 > Step 4 |
| Back navigation | "Back" link at top-left of each step, does not clear entered data |
| Save progress | Auto-save to localStorage. If user returns, resume from last completed step. |
| Validation | Inline validation on blur (when user leaves a field). Not on every keystroke. |
| Submit | Final step shows a summary. User confirms before submission. |
| Confirmation | Replaces form content: "Your application has been received. Reference number: SAIC-XXXXX. We will contact you within 2 business days." + contact info. |
| Email confirmation | Automated email with reference number and next steps. |

### Contact Form

| Property | Specification |
|----------|---------------|
| Fields | Full name, email, phone (optional), programme interest (dropdown), message (textarea) |
| Field count | 5 fields maximum |
| Layout | Single column, full width inputs |
| Validation | Inline on blur. Required fields marked with asterisk. |
| Submit | Primary CTA: "Send Message" |
| Success | Inline confirmation: "Thank you. We will respond within 24 hours." No redirect. |
| Alternative | Below form: WhatsApp button, phone number, campus address with map |

### Mobile Menu

| Property | Specification |
|----------|---------------|
| Trigger | Hamburger icon (3 lines), 48x48px tap target, top-right |
| Overlay | Full screen, white background, slides up from bottom (200ms) |
| Structure | Search bar at top. Accordion nav items below. Quick actions at bottom. |
| Item styling | 18px font, 600 weight, 56px row height, left-aligned with right chevron for sub-menus |
| Sub-menu | Slides in from right. Back arrow at top-left. |
| Quick actions | "Apply Now" (primary CTA, full-width) and "Call 0800 014 568" (secondary) |
| Close | X icon (top-left), tap outside, or Escape key |
| Scroll lock | `overflow: hidden` on body when open |
| Focus trap | Tab key cycles through menu items only. Focus moves to first item on open. |

### Sticky Headers

| Property | Specification |
|----------|---------------|
| Desktop | Sticky after scrolling past hero. Height: 64px. White background. Subtle bottom border (#E2E8F0). Logo shrinks slightly on scroll. |
| Mobile | Sticky at all times. Height: 56px. Logo (left), hamburger (right), optional "Apply" mini-button (right). |
| Hide on scroll down | Optional: hide sticky nav on scroll down, reveal on scroll up. Only on programme detail pages with long content. Not on homepage. |
| CTA persistence | "Apply Now" button always visible in sticky nav (desktop) or in mobile sticky bottom bar on programme pages. |

### Scroll Animations

| Property | Specification |
|----------|---------------|
| Default behaviour | Elements fade in + slide up 20px on scroll into view. 300ms ease-out. |
| Trigger point | When element enters bottom 80% of viewport. |
| Reduced motion | Respect `prefers-reduced-motion: reduce`. When active: no animations. Elements appear instantly. |
| Performance | Use CSS `opacity` and `transform` only. No `margin`, `padding`, or `width` animations. Compositor-only properties. |
| Stat counters | Numbers count up from 0 when scrolled into view. 1.5s duration. Pause on final value. Fallback: static numbers always visible (no animation dependency). |
| Stagger | Cards in a grid stagger by 100ms. Max 5 items. |
|禁用 on mobile for data | Consider disabling all scroll animations on 3G connections (detect via `navigator.connection`). |
| Testing | All animations must be tested with Lighthouse animation performance audit. No jank. |

---

## 6. Accessibility Requirements

### Standard: WCAG 2.2 Level AA

All pages must pass automated testing (Lighthouse, axe-core) and manual testing (keyboard navigation, screen reader) at WCAG 2.2 AA level.

### Keyboard Navigation

| Requirement | Specification |
|-------------|---------------|
| Tab order | Logical, follows visual reading order: header nav -> main content -> footer. |
| Skip link | "Skip to main content" link, visible on focus, first element in the tab order. |
| Focus indicators | Visible focus ring on all interactive elements: 2px solid #1B4D8E with 2px offset. Never `outline: none` without a replacement. |
| Focus trap | Modals, mobile menu overlay, and cookie consent trap focus within the component. Escape key closes and returns focus to the trigger element. |
| Arrow keys | Used within components: carousel items, menu items, radio button groups, tab panels. |
| Enter/Space | Activate buttons, links, and disclosure triggers. |
| Escape | Close modals, menus, and dropdowns. |
| No keyboard traps | User can always tab out of any component. |

### Screen Reader Support

| Requirement | Specification |
|-------------|---------------|
| Landmarks | Use semantic HTML5 landmarks: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`. Multiple `<nav>` elements labelled with `aria-label`. |
| Headings | Single H1 per page. Heading hierarchy (H1 > H2 > H3) must not skip levels. No heading used purely for styling. |
| Images | All meaningful images have descriptive `alt` text. Decorative images use `alt=""`. Complex images (charts, infographics) have long descriptions. |
| Links | Link text must be descriptive out of context. Never "Click here" or "Read more." Use "Read more about the Traffic Officer programme" or similar. |
| Forms | All inputs have visible `<label>` elements associated via `for`/`id`. Required fields announced with `aria-required="true"`. Error messages linked to inputs via `aria-describedby`. |
| Dynamic content | Live regions (`aria-live="polite"`) for: form submission confirmations, search results count, filter result changes, and toast notifications. |
| Tables | Data tables have `<caption>`, `<th>` with `scope="col"`, and `aria-describedby` for complex tables. |
| Language | `<html lang="en">` set. Content in other languages marked with `lang` attribute. |

### Focus Management

| Scenario | Behaviour |
|----------|-----------|
| Page load | Focus moves to the first heading or the skip link (user preference). |
| Modal open | Focus moves to the first focusable element in the modal. Focus is trapped. |
| Modal close | Focus returns to the element that triggered the modal. |
| Mobile menu open | Focus moves to the first menu item. Focus is trapped. |
| Mobile menu close | Focus returns to the hamburger button. |
| Form error | Focus moves to the first invalid field with an error. Screen reader announces the error. |
| Form success | Focus moves to the confirmation message. |
| Page navigation | Focus moves to the new page's main heading or skip link target. |
| SPA route change | Focus is reset to the top of the new content region. Announced via `aria-live` or focus management. |

### Colour Contrast

| Element | Minimum Ratio | Target Colours |
|---------|--------------|----------------|
| Body text on white | 4.5:1 | #475569 on #FFFFFF (7.1:1) |
| Headings on white | 3:1 (large text) | #0F172A on #FFFFFF (16.8:1) |
| CTA button text on blue | 4.5:1 | #FFFFFF on #1B4D8E (8.6:1) |
| Link text on white | 4.5:1 | #1B4D8E on #FFFFFF (8.6:1) |
| Placeholder text | 4.5:1 | Use #94A3B8 only as placeholder (not as label). Contrast: 3.3:1 -- acceptable for placeholders per WCAG. |
| Error text on white | 4.5:1 | #DC2626 on #FFFFFF (5.5:1) |
| Focus indicator | 3:1 against adjacent | #1B4D8E focus ring on any background must have 3:1 contrast against adjacent colours. |
| Border colours | 3:1 against background | #E2E8F0 on #FFFFFF -- meets 1.5:1 (not required for decorative borders). Functional borders (form inputs) use #94A3B8 or darker. |
| Disabled elements | Not required | Disabled buttons and inputs are not required to meet contrast. Visually indicate disabled state with opacity and `aria-disabled="true"`. |

### Form Labels and Error Handling

| Requirement | Specification |
|-------------|---------------|
| Visible labels | Every input has a visible label above it (not placeholder-only). |
| Label association | `<label for="fieldId">` linked to `<input id="fieldId">`. |
| Required fields | Marked with `*` and `aria-required="true"`. |
| Error identification | Errors displayed inline below the field. Icon + red text + description. |
| Error summary | For forms with 4+ fields, show an error summary at the top of the form with links to each invalid field. |
| Error message | Specific, not generic. "Please enter a valid email address" not "Invalid input." |
| ARIA | Error messages linked via `aria-describedby`. Invalid fields marked with `aria-invalid="true"`. |
| Recovery | Form data is preserved after error. User does not lose entered information. |
| Success | Confirmation message replaces form. Focus moves to confirmation. |

### Additional Accessibility Requirements

| Area | Requirement |
|------|-------------|
| Text resize | All text must reflow at 200% zoom without horizontal scrolling. |
| Reflow | Content must reflow at 320px width (equivalent to 400% zoom on 1280px). |
| Orientation | Content must work in both portrait and landscape. No orientation lock. |
| Motion | Respect `prefers-reduced-motion: reduce`. Disable all animations and auto-playing content. |
| Zoom | Do not disable pinch-to-zoom via viewport meta. `maximum-scale` must be 5 or higher. |
| Touch | Touch targets minimum 44x44px (WCAG 2.5.8). |
| Dragging | No dragging interactions as the sole input method. Provide button alternatives. |
| Timeouts | If a session times out (e.g., form), warn the user 60 seconds before and allow extension. |
| Consistent nav | Navigation must be in the same relative order on every page. |
| Link purpose | Every link's purpose must be determinable from its text alone or from the link text plus its context. |

---

## 7. Performance Budget

### Context

The target audience is on 3G to LTE connections in South Africa. A 1-second delay in page load can reduce conversions by 7%. Google reports that 53% of mobile users abandon sites that take longer than 3 seconds to load. For this project, performance is a direct business metric.

### Core Web Vitals Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint (FCP) | < 1.5s on 3G | Lighthouse, CrUX |
| Largest Contentful Paint (LCP) | < 2.5s on 3G | Lighthouse, CrUX |
| Interaction to Next Paint (INP) | < 200ms | Lighthouse, CrUX |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse, CrUX |
| Time to Interactive (TTI) | < 3.5s on 3G | Lighthouse |

### Page Weight Budgets

| Page | Total Weight Target | HTML | CSS | JavaScript | Images | Fonts |
|------|--------------------|----|-----|------------|--------|-------|
| Homepage | < 200KB (excluding images) | < 15KB | < 30KB | < 80KB | < 500KB | < 100KB |
| Programme Listing | < 180KB (excluding images) | < 12KB | < 25KB | < 70KB | < 400KB | < 100KB |
| Programme Detail | < 150KB (excluding images) | < 10KB | < 20KB | < 60KB | < 300KB | < 100KB |
| About / Accreditation | < 120KB (excluding images) | < 10KB | < 20KB | < 50KB | < 250KB | < 100KB |
| Contact | < 100KB (excluding images) | < 8KB | < 15KB | < 40KB | < 100KB | < 100KB |
| Application Form | < 120KB (excluding images) | < 10KB | < 20KB | < 60KB | < 50KB | < 100KB |
| 404 Error Page | < 50KB | < 5KB | < 10KB | < 20KB | < 20KB | < 100KB |

### Image Budget Per Page

| Page | Max Images | Max Total Image Weight | Max Individual Image |
|------|-----------|----------------------|---------------------|
| Homepage | 12-15 | 500KB | 80KB (hero) |
| Programme Listing | 8-10 (thumbnails) | 400KB | 40KB (card thumbnail) |
| Programme Detail | 5-7 | 300KB | 80Hero (header image) |
| About | 6-8 | 250KB | 80KB (campus photo) |
| Contact | 2-3 | 100KB | 50KB (campus thumbnail) |

### Font Budget

| Property | Target |
|----------|--------|
| Font families | 1 (Inter only) |
| Weights loaded | 3 (400, 600, 700) |
| Total font file weight | < 100KB |
| Format | WOFF2 |
| Strategy | `font-display: swap` for all web fonts. System font stack as fallback. |
| Subsetting | Subset to Latin characters only (SA English). Add Latin-Extended if needed for accented characters. |

### JavaScript Budget

| Bundle | Target | Contents |
|--------|--------|----------|
| Main bundle | < 60KB gzipped | Next.js framework, React, routing |
| Component bundle | < 20KB gzipped | Header, footer, navigation |
| Form bundle | < 15KB gzipped | Form validation, submission (loaded on demand) |
| Animation bundle | < 10KB gzipped | Scroll animations, transitions (loaded on demand) |
| Total (initial load) | < 80KB gzipped | Main + component only. Everything else lazy-loaded. |

### Caching Strategy

| Resource | Cache Duration | Strategy |
|----------|---------------|----------|
| HTML pages | 60 seconds (stale-while-revalidate) | ISR with Next.js |
| CSS/JS (hashed filenames) | 1 year (immutable) | Cache-Control: immutable |
| Images (Cloudinary/CDN) | 1 month | Cache-Control with ETag |
| Fonts | 1 year | Cache-Control: immutable |
| API responses | 300 seconds | stale-while-revalidate |

### Performance Monitoring

| Tool | Purpose | Frequency |
|------|---------|-----------|
| Lighthouse CI | Automated performance testing in CI/CD pipeline | Every pull request |
| Core Web Vitals (CrUX) | Real-user performance data from Chrome | Weekly review |
| Vercel Analytics | Server-side metrics: TTFB, edge performance | Continuous |
| WebPageTest | Detailed waterfall analysis on 3G throttling | Before launch, quarterly |

### Performance Anti-Patterns (Avoid)

- Auto-playing video (especially on mobile)
- Large hero images without responsive srcset
- Render-blocking CSS in the `<head>` (use `media` attribute or inline critical CSS)
- Third-party scripts (chat widgets, analytics) loaded synchronously
- Unminified CSS or JavaScript
- Web fonts loaded without `font-display: swap`
- Layout shifts caused by images without explicit width/height
- Lazy loading above-the-fold images
- Loading all programmes on a single page without pagination or virtualisation

---

*This document defines the UX research, specifications, and performance requirements for the SA Innovation College website redesign. All design and development decisions must align with the patterns and budgets defined here. When a design choice conflicts with these specifications, revisit the user personas and journeys to determine the correct approach.*
