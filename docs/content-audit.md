# Content Audit — SA Innovation College Headless Redesign

**Date:** July 2026  
**Purpose:** Audit of all content sources for the headless Next.js rebuild of the SA Innovation College website.

---

## 1. WordPress REST API Content

### Pages (5 published)

| ID | Title    | Slug     | Status      | Notes                                          |
|----|----------|----------|-------------|-------------------------------------------------|
| 67 | Home     | home     | Published   | Template placeholder — not SA Innovation content |
| 95 | About    | about    | Published   | Template placeholder — not SA Innovation content |
| 112| Courses  | courses  | Published   | Template placeholder — not SA Innovation content |
| 125| Students | students | Published   | Template placeholder — not SA Innovation content |
| 151| Contact  | contact  | Published   | Template placeholder — not SA Innovation content |

### Posts

- **Published posts:** 0
- **No blog/news content available via the REST API.**

### Categories (10 total, all with 0 posts)

| Category        | Post Count |
|-----------------|------------|
| Beyond News     | 0          |
| Events          | 0          |
| Experts         | 0          |
| Hybrid Events   | 0          |
| Management      | 0          |
| Meetups         | 0          |
| Startups        | 0          |
| Uncategorized   | 0          |
| Users           | 0          |
| Virtual         | 0          |

All categories originate from a "Beyond" digital marketing agency template and have no relation to SA Innovation College.

### Tags (7 total, all with 0 posts)

- All tags are template artifacts with no SA Innovation content.

### API Content Verdict

The WordPress page body fields for all 5 pages contain **template placeholder content from a digital marketing agency called "Beyond"**. This content is **not SA Innovation College content** and must not be used in the new site. The real content is rendered by Elementor and is not exposed through the standard WordPress REST API page body field.

---

## 2. Content from Live Site (via Elementor)

The actual SA Innovation College content is rendered server-side by Elementor and is **not available through the WordPress REST API**. To obtain it, the live site HTML must be parsed and extracted. The following content has been identified from the live site.

### Homepage Sections

| # | Section             | Content Summary                                                                                   |
|---|---------------------|---------------------------------------------------------------------------------------------------|
| 1 | Hero                | "Through Knowledge, We Grow Towards Excellence" / "Your future in education is ready to take off" |
| 2 | CTA                 | "We provide innovative education that shapes your future"                                         |
| 3 | Courses             | FREE Computer Literacy, Table Service Course, Traffic Officer Course                              |
| 4 | Partners            | "Meet our Training & Corporate Partners" / "They believe in us"                                   |
| 5 | CTA                 | "Want to grow your future?"                                                                        |
| 6 | Contact Form        | Embedded contact form section                                                                     |
| 7 | Footer              | WhatsApp link, phone, email, physical address                                                     |

### Verified Contact Information

| Field       | Value                                                                      |
|-------------|---------------------------------------------------------------------------|
| Phone       | 0800 014 568                                                               |
| WhatsApp    | +27727733960                                                              |
| Address     | 147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157 |
| Google Maps | https://maps.app.goo.gl/V4LqhhDbZeSUgGN37                                 |

### Courses Mentioned on Live Site

| Course                                           | Category         |
|--------------------------------------------------|------------------|
| FREE Computer Literacy                            | Short Course     |
| Table Service Course                              | Short Course     |
| Traffic Officer Course (National Certificate in Tactical Road Traffic Operations) | Qualification |
| Hospitality and tourism programmes                | Programme Area   |

### Content Classification

| Status        | Content                                                                          |
|---------------|----------------------------------------------------------------------------------|
| CONFIRMED     | Contact information (phone, WhatsApp, address, maps link)                       |
| CONFIRMED     | Page structure and section ordering on homepage                                  |
| CONFIRMED     | Course names as listed on the live site                                          |
| UNVERIFIED    | "5,000+ students" claim                                                         |
| UNVERIFIED    | "15+ programmes" claim                                                          |
| UNVERIFIED    | "95% success/graduation rate" claim                                             |
| UNVERIFIED    | Accreditation details and body                                                  |
| UNVERIFIED    | Course fees and durations                                                        |
| UNVERIFIED    | Entry requirements for each programme                                            |
| UNVERIFIED    | Staff information and headshots                                                  |
| UNVERIFIED    | Student testimonials                                                             |
| PLACEHOLDER   | About page body content                                                          |
| PLACEHOLDER   | Courses page body content                                                        |
| PLACEHOLDER   | Students page body content                                                       |
| PLACEHOLDER   | Contact page body content                                                        |
| MISSING       | News/blog posts (none in API)                                                   |
| MISSING       | Course detail pages via API                                                      |
| MISSING       | Testimonials via API                                                             |
| MISSING       | Staff profiles via API                                                           |

### Content Requiring Client Confirmation

The following claims and data points must be confirmed directly with SA Innovation College before being published on the new site:

- **Statistics:** 5,000+ students, 15+ programmes, 95% success/graduation rate
- **Accreditation:** Full accreditation body names, accreditation numbers, SETA affiliations
- **Course details:** Fees, durations, intake dates, entry requirements, NQF levels
- **Staff:** Names, titles, qualifications, headshot photos, biographies
- **Testimonials:** Real student names, quotes, photos, consent to publish
- **Partners:** Official partner names and logos, co-branding permissions

---

## 3. Archive Reference

| Item                                     | Path                                                         |
|------------------------------------------|--------------------------------------------------------------|
| Previous WordPress theme build (failed)  | `../archive/sa-innovation-theme-failed/`                     |
| Discovery files                          | `docs/discovery/`                                            |

The previous WordPress theme attempt was archived due to scope issues. Discovery files from the initial audit are preserved for reference.

---

## 4. Recommendations

1. **Extract live site content via HTML scraping** — the Elementor-rendered content is the source of truth and is not available through the WP REST API.
2. **Obtain client sign-off on all unverified claims** before building content components.
3. **Create structured JSON content files** for each page once content is confirmed.
4. **Design course detail pages** as a standalone content type since the API provides no course data.
5. **Plan for a news/blog section** — currently zero posts exist; decide whether to populate before launch.
