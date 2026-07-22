# WordPress Headless CMS — Content Model & API Reference

> Target site: `sainnovationcollege.co.za`  
> WordPress: 7.0.2 | Elementor 4.2.0 | Hello Biz theme  
> Frontend: Next.js (consuming WP REST API)

---

## Table of Contents

1. [Current State Summary](#1-current-state-summary)
2. [Content Types](#2-content-types)
3. [Custom Fields Definitions](#3-custom-fields-definitions)
4. [Taxonomies](#4-taxonomies)
5. [Global Site Settings (Options API)](#5-global-site-settings-options-api)
6. [REST API Endpoints](#6-rest-api-endpoints)
7. [Plugin Recommendations](#7-plugin-recommendations)
8. [Implementation Strategy](#8-implementation-strategy)
9. [Migration Notes](#9-migration-notes)

---

## 1. Current State Summary

| Item | Status |
|---|---|
| WordPress version | 7.0.2 |
| Active theme | Hello Biz (Elementor 4.2.0) |
| Published pages | 5 — Home (67), About (95), Courses (112), Students (125), Contact (151) |
| Published posts | 0 |
| Media attachments | 105 |
| Categories | 10 (all empty) |
| Tags | 7 (all empty) |
| REST API | Accessible at `/wp-json/wp/v2/` |
| Custom post types from previous theme | `sa_course`, `sa_testimonial`, `sa_partner` — NOT registered (theme reverted to Hello Biz) |

The failed theme's CPT registrations were theme-dependent. Since the theme was reverted, those post types no longer exist in the database's `wp_posts` table under those slugs (any previously created entries may still exist as `post_type = 'sa_course'` etc. but are inaccessible without the registration code). All new content types must be registered independently of the active theme.

---

## 2. Content Types

### 2.1 Pages (existing)

| Property | Value |
|---|---|
| Slug | `page` (WordPress built-in) |
| Title support | Yes |
| Editor support | Yes (Elementor content) |
| Excerpt support | No (not needed for static pages) |
| Featured image | No |
| REST API | Yes (`/wp-json/wp/v2/pages`) |
| Taxonomies | None |

No changes needed. Pages continue to function as-is.

---

### 2.2 Courses (NEW)

| Property | Value |
|---|---|
| Slug | `sa_course` |
| Label | Course |
| Singular label | Course |
| Public | Yes |
| Show in REST API | Yes (REST base: `courses`) |
| Title support | Yes |
| Editor support | Yes (course description content) |
| Excerpt support | Yes (short description for listings) |
| Featured image | Yes (course thumbnail/banner) |
| Supports | `title`, `editor`, `excerpt`, `thumbnail`, `revisions` |
| Has archive | Yes (`/courses/`) |
| Rewrite slug | `courses` |
| Taxonomies | `course_category`, `study_mode`, `qualification_level` |

---

### 2.3 Course Categories (NEW — Taxonomy)

| Property | Value |
|---|---|
| Slug | `course_category` |
| Label | Course Categories |
| Hierarchical | Yes (like categories) |
| Show in REST API | Yes (REST base: `course-categories`) |
| Public | Yes |
| Rewrite slug | `course-categories` |
| Attached to | `sa_course` |

---

### 2.4 Study Modes (NEW — Taxonomy)

| Property | Value |
|---|---|
| Slug | `study_mode` |
| Label | Study Modes |
| Hierarchical | Yes |
| Show in REST API | Yes (REST base: `study-modes`) |
| Public | Yes |
| Rewrite slug | `study-modes` |
| Attached to | `sa_course` |

---

### 2.5 Qualification Levels (NEW — Taxonomy)

| Property | Value |
|---|---|
| Slug | `qualification_level` |
| Label | Qualification Levels |
| Hierarchical | Yes |
| Show in REST API | Yes (REST base: `qualification-levels`) |
| Public | Yes |
| Rewrite slug | `qualification-levels` |
| Attached to | `sa_course` |

---

### 2.6 Testimonials (NEW)

| Property | Value |
|---|---|
| Slug | `sa_testimonial` |
| Label | Testimonials |
| Singular label | Testimonial |
| Public | Yes |
| Show in REST API | Yes (REST base: `testimonials`) |
| Title support | Yes (used as internal reference/display name) |
| Editor support | Yes (long-form testimonial content, optional) |
| Excerpt support | Yes (short quote snippet) |
| Featured image | Yes (student photo) |
| Supports | `title`, `editor`, `excerpt`, `thumbnail`, `revisions` |
| Has archive | Yes (`/testimonials/`) |
| Rewrite slug | `testimonials` |
| Taxonomies | None |

---

### 2.7 Staff / Team (NEW)

| Property | Value |
|---|---|
| Slug | `sa_staff` |
| Label | Staff |
| Singular label | Staff Member |
| Public | Yes (read-only, no public archive by default) |
| Show in REST API | Yes (REST base: `staff`) |
| Title support | Yes (staff member name) |
| Editor support | Yes (detailed bio content) |
| Excerpt support | Yes (short bio snippet) |
| Featured image | Yes (staff headshot) |
| Supports | `title`, `editor`, `excerpt`, `thumbnail`, `revisions` |
| Has archive | Yes (`/staff/`) |
| Rewrite slug | `staff` |
| Taxonomies | None (department filtering via custom field) |

---

### 2.8 News / Blog (existing posts — restructured)

| Property | Value |
|---|---|
| Slug | `post` (WordPress built-in) |
| Title support | Yes |
| Editor support | Yes |
| Excerpt support | Yes |
| Featured image | Yes |
| REST API | Yes (`/wp-json/wp/v2/posts`) |
| Taxonomies | `category`, `post_tag` |

The existing 10 categories and 7 tags should be cleaned up. Remove empty defaults and define meaningful categories:

**Recommended blog categories:**
- News
- Events
- Student Stories
- Industry Partnerships
- Campus Updates

---

### 2.9 FAQs (NEW)

| Property | Value |
|---|---|
| Slug | `sa_faq` |
| Label | FAQs |
| Singular label | FAQ |
| Public | Yes |
| Show in REST API | Yes (REST base: `faqs`) |
| Title support | Yes (the question) |
| Editor support | Yes (the answer) |
| Excerpt support | No |
| Featured image | No |
| Supports | `title`, `editor`, `revisions` |
| Has archive | Yes (`/faqs/`) |
| Rewrite slug | `faqs` |
| Taxonomies | `faq_category` (see below) |

**Alternative approach:** If FAQs are few and only appear on the Contact page, they could be implemented as a Custom Field group on the Contact page using an ACF Repeater field instead of a separate CPT. The CPT approach is recommended if FAQs will grow or appear across multiple pages.

#### FAQ Categories (NEW — Taxonomy)

| Property | Value |
|---|---|
| Slug | `faq_category` |
| Label | FAQ Categories |
| Hierarchical | Yes |
| Show in REST API | Yes (REST base: `faq-categories`) |
| Attached to | `sa_faq` |

Suggested categories: General Admissions, Fees & Financial Aid, Academic Programmes, Student Life, Technical Support

---

### 2.10 Partners (NEW)

| Property | Value |
|---|---|
| Slug | `sa_partner` |
| Label | Partners |
| Singular label | Partner |
| Public | Yes |
| Show in REST API | Yes (REST base: `partners`) |
| Title support | Yes (partner/company name) |
| Editor support | Yes (partner description) |
| Excerpt support | Yes (short description) |
| Featured image | Yes (partner logo — primary) |
| Supports | `title`, `editor`, `excerpt`, `thumbnail`, `revisions` |
| Has archive | Yes (`/partners/`) |
| Rewrite slug | `partners` |
| Taxonomies | None |

---

### 2.11 Downloads / Documents (NEW)

| Property | Value |
|---|---|
| Slug | `sa_download` |
| Label | Downloads |
| Singular label | Download |
| Public | Yes |
| Show in REST API | Yes (REST base: `downloads`) |
| Title support | Yes (document name) |
| Editor support | Yes (document description) |
| Excerpt support | No |
| Featured image | No (icon determined by file_type field) |
| Supports | `title`, `editor`, `revisions` |
| Has archive | Yes (`/downloads/`) |
| Rewrite slug | `downloads` |
| Taxonomies | `download_category` (see below) |

#### Download Categories (NEW — Taxonomy)

| Property | Value |
|---|---|
| Slug | `download_category` |
| Label | Download Categories |
| Hierarchical | Yes |
| Show in REST API | Yes (REST base: `download-categories`) |
| Attached to | `sa_download` |

Suggested categories: Prospectuses, Application Forms, Academic Calendar, Policies, brochures

---

## 3. Custom Fields Definitions

All custom fields below are stored as post meta (`wp_postmeta`) and exposed via the REST API `_fields` or through an explicit `register_rest_field` callback.

### 3.1 Course Fields (`sa_course`)

| Field key | Label | Type | Required | Description |
|---|---|---|---|---|
| `sa_duration` | Duration | `text` | Yes | e.g. "12 Weeks", "1 Year", "2 Years" |
| `sa_mode` | Study Mode | `select` | Yes | Values: `contact`, `online`, `part_time`, `full_time`. Maps to `study_mode` taxonomy for display, but also stored as meta for query flexibility. |
| `sa_price` | Price | `number` | No | Course price in ZAR. Stored as numeric value (no currency symbol). Display formatting handled by frontend. |
| `sa_currency` | Currency | `text` | No | Default: `ZAR`. Allows future multi-currency support. |
| `sa_entry_requirements` | Entry Requirements | `textarea` | Yes | Plain text or simple HTML. Describes minimum qualifications or prerequisites. |
| `sa_accreditation` | Accreditation | `textarea` | No | Accrediting body and registration numbers. e.g. "Registered with the DHET, Accredited by the QCTO" |
| `sa_modules` | Modules | `repeater` | No | Array of module objects. Each module has: `module_name` (text), `module_description` (text). Stored as serialized array in post meta. |
| `sa_career_opportunities` | Career Opportunities | `textarea` | No | Text describing career paths after completion. |
| `sa_course_code` | Course Code | `text` | Yes | Unique identifier e.g. "SA-DS-001" |
| `sa_max_students` | Max Students | `number` | No | Maximum class size. Used for availability display. |
| `sa_is_featured` | Featured Course | `checkbox` | No | Boolean (0/1). Used to highlight on homepage. |
| `sa_sort_order` | Sort Order | `number` | No | Integer for manual ordering. |

### 3.2 Testimonial Fields (`sa_testimonial`)

| Field key | Label | Type | Required | Description |
|---|---|---|---|---|
| `sa_student_name` | Student Name | `text` | Yes | Full name of the testimonial author. |
| `sa_student_role` | Role / Position | `text` | No | Current role or status e.g. "Alumni", "Current Student", "Employer" |
| `sa_programme` | Programme | `text` | No | The programme/course the student completed or is enrolled in. |
| `sa_quote` | Quote | `textarea` | Yes | The testimonial text. Can also be stored in the excerpt field for shorter quotes. |
| `sa_rating` | Rating | `number` | No | Optional 1-5 star rating. |
| `sa_featured` | Featured | `checkbox` | No | Boolean (0/1). Controls display on homepage testimonial carousel. |

### 3.3 Staff Fields (`sa_staff`)

| Field key | Label | Type | Required | Description |
|---|---|---|---|---|
| `sa_position` | Position / Title | `text` | Yes | Job title e.g. "Head of Digital Skills", "Lecturer" |
| `sa_department` | Department | `text` | No | Department name. Could be a taxonomy but kept as text for simplicity given small team size. |
| `sa_bio` | Short Bio | `textarea` | Yes | 2-3 sentence biography. |
| `sa_qualifications` | Qualifications | `textarea` | No | List of qualifications. Stored as newline-separated text, rendered as list on frontend. |
| `sa_email` | Email | `email` | No | Staff email address (display only, not for mass collection). |
| `sa_phone` | Phone | `text` | No | Direct phone extension. |
| `sa_sort_order` | Sort Order | `number` | No | Integer for manual ordering on the staff page. |

### 3.4 Partner Fields (`sa_partner`)

| Field key | Label | Type | Required | Description |
|---|---|---|---|---|
| `sa_partner_website` | Website URL | `url` | No | Partner's website URL. Opens in new tab on frontend. |
| `sa_partner_description` | Description | `textarea` | Yes | Brief description of the partnership. |
| `sa_partner_logo` | Logo (URL) | `url` | No | Redundant if using featured image, but useful if a secondary/alternative logo URL is needed. Primary logo should use featured image. |
| `sa_partner_type` | Partner Type | `select` | No | Values: `industry`, `academic`, `government`, `ngo`. |
| `sa_is_featured` | Featured Partner | `checkbox` | No | Boolean (0/1). Controls display on homepage partner section. |
| `sa_sort_order` | Sort Order | `number` | No | Integer for manual ordering. |

### 3.5 Download Fields (`sa_download`)

| Field key | Label | Type | Required | Description |
|---|---|---|---|---|
| `sa_file_url` | File URL | `url` | Yes | URL to the uploaded file (using WP Media Library). |
| `sa_file_type` | File Type | `select` | Yes | Values: `pdf`, `doc`, `docx`, `xls`, `xlsx`, `ppt`, `pptx`, `zip`, `other`. Determines icon display on frontend. |
| `sa_file_size` | File Size | `text` | No | Human-readable file size e.g. "2.4 MB". Populated on save or manually. |
| `sa_download_count` | Download Count | `number` | No | Tracks number of downloads. Incremented via AJAX on frontend or kept manual. |

### 3.6 FAQ Fields (`sa_faq`)

| Field key | Label | Type | Required | Description |
|---|---|---|---|---|
| `sa_faq_sort_order` | Sort Order | `number` | No | Integer for ordering within category. |
| `sa_faq_is_active` | Active | `checkbox` | No | Boolean (0/1). Allows hiding FAQs without deleting. Default: 1. |

The question is stored in the post title. The answer is stored in the post content (editor field).

---

## 4. Taxonomies

### 4.1 Summary Table

| Taxonomy | Slug | Hierarchical | REST Base | Attached To |
|---|---|---|---|---|
| Course Categories | `course_category` | Yes | `course-categories` | `sa_course` |
| Study Modes | `study_mode` | Yes | `study-modes` | `sa_course` |
| Qualification Levels | `qualification_level` | Yes | `qualification-levels` | `sa_course` |
| FAQ Categories | `faq_category` | Yes | `faq-categories` | `sa_faq` |
| Download Categories | `download_category` | Yes | `download-categories` | `sa_download` |
| Blog Categories | `category` | Yes | `categories` | `post` (built-in) |
| Blog Tags | `post_tag` | No | `tags` | `post` (built-in) |

### 4.2 Course Categories — Seed Data

| Term Name | Slug | Description |
|---|---|---|
| Digital Skills | `digital-skills` | Computer literacy, software training, IT fundamentals |
| Hospitality | `hospitality` | Hotel management, culinary arts, tourism |
| Public Safety | `public-safety` | Security, firefighting, emergency response |
| Business & Management | `business-management` | Administration, entrepreneurship, financial management |
| Construction | `construction` | Building, plumbing, electrical, carpentry |
| Education & Training | `education-training` | Teaching, facilitation, assessment |
| Health & Wellness | `health-wellness` | First aid, community health, wellness |
| Automotive | `automotive` | Motor mechanics, panel beating, spray painting |
| Agriculture | `agriculture` | Farming, agri-processing, food security |
| Arts & Creative | `arts-creative` | Design, media, performing arts |

### 4.3 Study Modes — Seed Data

| Term Name | Slug | Description |
|---|---|---|
| Contact Learning | `contact-learning` | In-person classes at campus |
| Online | `online` | Fully online delivery |
| Part-Time | `part-time` | Evening/weekend schedule for working students |
| Full-Time | `full-time` | Standard daytime schedule |
| Blended | `blended` | Combination of contact and online |

### 4.4 Qualification Levels — Seed Data

| Term Name | Slug | Description |
|---|---|---|
| Short Course | `short-course` | Non-credited skills programme |
| Certificate | `certificate` | NQF Level 4-5 certificate |
| Diploma | `diploma` | NQF Level 5-6 diploma |
| Advanced Certificate | `advanced-certificate` | NQF Level 5-6 advanced certificate |
| Degree | `degree` | NQF Level 6-8 degree (if applicable) |

---

## 5. Global Site Settings (Options API)

These settings are stored in the `wp_options` table via the WordPress Options API (`get_option` / `update_option`). They are NOT post-level fields. They represent site-wide configuration consumed by the Next.js frontend.

### 5.1 Settings Group: `sa_site_settings`

All fields below are stored as a single serialized array under the option key `sa_site_settings`.

| Option Key | Label | Type | Description |
|---|---|---|---|
| `site_logo_url` | Site Logo URL | `url` | URL to the site logo image (light version). From Media Library. |
| `site_logo_dark_url` | Site Logo (Dark) | `url` | URL to the dark variant logo for dark backgrounds. |
| `favicon_url` | Favicon URL | `url` | URL to the favicon image. |
| `site_tagline` | Site Tagline | `text` | Short tagline displayed below the logo. |
| `google_analytics_id` | Google Analytics ID | `text` | GA4 measurement ID e.g. "G-XXXXXXXXXX" |

### 5.2 Settings Group: `sa_contact_settings`

Option key: `sa_contact_settings`

| Option Key | Label | Type | Description |
|---|---|---|---|
| `phone_primary` | Primary Phone | `text` | Main contact number. |
| `phone_secondary` | Secondary Phone | `text` | Alternative contact number. |
| `whatsapp_number` | WhatsApp Number | `text` | Full international format e.g. "+27XXXXXXXXX" |
| `email_main` | Main Email | `email` | General enquiries email. |
| `email_admissions` | Admissions Email | `email` | Admissions-specific email. |
| `address_street` | Street Address | `text` | Physical street address. |
| `address_suburb` | Suburb / Area | `text` | Suburb or area name. |
| `address_city` | City | `text` | City name. |
| `address_province` | Province | `text` | Province name. |
| `address_postcode` | Postal Code | `text` | Postal/ZIP code. |
| `address_country` | Country | `text` | Default: "South Africa" |
| `google_maps_url` | Google Maps URL | `url` | Full Google Maps embed or share URL. |
| `google_maps_lat` | Map Latitude | `text` | Latitude for custom map rendering. |
| `google_maps_lng` | Map Longitude | `text` | Longitude for custom map rendering. |

### 5.3 Settings Group: `sa_social_settings`

Option key: `sa_social_settings`

| Option Key | Label | Type | Description |
|---|---|---|---|
| `facebook_url` | Facebook URL | `url` | Full Facebook page URL. |
| `twitter_url` | Twitter / X URL | `url` | Full Twitter/X profile URL. |
| `instagram_url` | Instagram URL | `url` | Full Instagram profile URL. |
| `linkedin_url` | LinkedIn URL | `url` | Full LinkedIn page URL. |
| `youtube_url` | YouTube URL | `url` | Full YouTube channel URL. |
| `tiktok_url` | TikTok URL | `url` | Full TikTok profile URL. |

### 5.4 Settings Group: `sa_footer_settings`

Option key: `sa_footer_settings`

| Option Key | Label | Type | Description |
|---|---|---|---|
| `footer_text` | Footer Text | `textarea` | Copyright text and additional footer content. Supports basic HTML. |
| `operating_hours` | Operating Hours | `textarea` | Structured text e.g. "Mon-Fri: 08:00-17:00 | Sat: 09:00-13:00" |
| `privacy_policy_url` | Privacy Policy URL | `url` | Link to privacy policy page. |
| `paia_manuel_url` | PAIA Manual URL | `url` | Link to PAIA manual document. |

### 5.5 Settings Group: `sa_academics`

Option key: `sa_academics`

| Option Key | Label | Type | Description |
|---|---|---|---|
| `registration_open` | Registration Open | `checkbox` | Boolean. Controls banner/CTA display on frontend. |
| `registration_deadline` | Registration Deadline | `date` | Date string YYYY-MM-DD. |
| `current_intake` | Current Intake | `text` | e.g. "January 2026 Intake" |
| `campus_locations` | Campus Locations | `textarea` | JSON array of campus objects with `name`, `address`, `lat`, `lng` if multi-campus. |

---

## 6. REST API Endpoints

### 6.1 Built-in WordPress Endpoints (used as-is)

| Endpoint | Method | Description |
|---|---|---|
| `/wp-json/wp/v2/pages` | GET | List all published pages |
| `/wp-json/wp/v2/pages/{id}` | GET | Get single page by ID |
| `/wp-json/wp/v2/posts` | GET | List all published blog posts |
| `/wp-json/wp/v2/posts/{id}` | GET | Get single post by ID |
| `/wp-json/wp/v2/categories` | GET | List blog categories |
| `/wp-json/wp/v2/tags` | GET | List blog tags |
| `/wp-json/wp/v2/media` | GET | List media items |
| `/wp-json/wp/v2/media/{id}` | GET | Get single media item |

### 6.2 Custom Post Type Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/wp-json/wp/v2/courses` | GET | List all published courses |
| `/wp-json/wp/v2/courses?course_category={slug}` | GET | Filter courses by category |
| `/wp-json/wp/v2/courses?study_mode={slug}` | GET | Filter courses by study mode |
| `/wp-json/wp/v2/courses?qualification_level={slug}` | GET | Filter courses by qualification level |
| `/wp-json/wp/v2/courses?sa_is_featured=1` | GET | List featured courses |
| `/wp-json/wp/v2/courses/{id}` | GET | Get single course with all meta fields |
| `/wp-json/wp/v2/testimonials` | GET | List all testimonials |
| `/wp-json/wp/v2/testimonials?sa_featured=1` | GET | List featured testimonials |
| `/wp-json/wp/v2/testimonials/{id}` | GET | Get single testimonial |
| `/wp-json/wp/v2/staff` | GET | List all staff members |
| `/wp-json/wp/v2/staff?orderby=sa_sort_order` | GET | List staff ordered by sort order |
| `/wp-json/wp/v2/staff/{id}` | GET | Get single staff member |
| `/wp-json/wp/v2/partners` | GET | List all partners |
| `/wp-json/wp/v2/partners?sa_is_featured=1` | GET | List featured partners |
| `/wp-json/wp/v2/partners/{id}` | GET | Get single partner |
| `/wp-json/wp/v2/faqs` | GET | List all FAQs |
| `/wp-json/wp/v2/faqs?faq_category={slug}` | GET | Filter FAQs by category |
| `/wp-json/wp/v2/faqs?sa_faq_is_active=1` | GET | List only active FAQs |
| `/wp-json/wp/v2/faqs/{id}` | GET | Get single FAQ |
| `/wp-json/wp/v2/downloads` | GET | List all downloadable documents |
| `/wp-json/wp/v2/downloads?download_category={slug}` | GET | Filter downloads by category |
| `/wp-json/wp/v2/downloads/{id}` | GET | Get single download entry |

### 6.3 Custom Taxonomy Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/wp-json/wp/v2/course-categories` | GET | List course categories |
| `/wp-json/wp/v2/course-categories/{id}` | GET | Get single course category |
| `/wp-json/wp/v2/study-modes` | GET | List study modes |
| `/wp-json/wp/v2/qualification-levels` | GET | List qualification levels |
| `/wp-json/wp/v2/faq-categories` | GET | List FAQ categories |
| `/wp-json/wp/v2/download-categories` | GET | List download categories |

### 6.4 Custom Settings Endpoint

| Endpoint | Method | Description |
|---|---|---|
| `/wp-json/sa/v1/settings/{group}` | GET | Retrieve a settings group. `{group}` = `site`, `contact`, `social`, `footer`, `academics`. Returns the full serialized array for that group. |

This endpoint must be registered manually (see Implementation Strategy).

### 6.5 Endpoint Usage Patterns for Next.js

**Homepage data fetch:**
```
GET /wp-json/wp/v2/courses?sa_is_featured=1&per_page=6
GET /wp-json/wp/v2/testimonials?sa_featured=1&per_page=5
GET /wp-json/wp/v2/partners?sa_is_featured=1&per_page=8
GET /wp-json/sa/v1/settings/site
GET /wp-json/sa/v1/settings/contact
GET /wp-json/sa/v1/settings/social
```

**Courses listing page:**
```
GET /wp-json/wp/v2/courses?per_page=12&page={page}
GET /wp-json/wp/v2/course-categories
GET /wp-json/wp/v2/study-modes
GET /wp-json/wp/v2/qualification-levels
```

**Single course page:**
```
GET /wp-json/wp/v2/courses/{slug}?_embed
```

**Staff page:**
```
GET /wp-json/wp/v2/staff?orderby=sa_sort_order&order=asc
```

**Footer (every page):**
```
GET /wp-json/sa/v1/settings/contact
GET /wp-json/sa/v1/settings/social
GET /wp-json/sa/v1/settings/footer
```

### 6.6 Query Parameter Reference

| Parameter | Applies To | Description |
|---|---|---|
| `per_page` | All list endpoints | Number of results (max 100, default 10) |
| `page` | All list endpoints | Page number for pagination |
| `search` | All endpoints | Free-text search |
| `orderby` | All endpoints | Field to sort by. Default varies by CPT. |
| `order` | All endpoints | `asc` or `desc` |
| `_embed` | Single item endpoints | Includes embedded related resources (featured image, taxonomy terms) |
| `_fields` | All endpoints | Comma-separated list of fields to return (reduces payload) |

---

## 7. Plugin Recommendations

### 7.1 Strategy: Minimal Plugin Dependency

The goal is to register all content types and fields in code (functions.php or a must-use plugin) rather than relying on UI plugins. This ensures:
- Version control over content model definitions
- No dependency on admin UI plugins that may conflict
- Portable across environments (staging, production)
- Faster page loads in admin (no heavy plugin overhead)

### 7.2 Required Plugins

| Plugin | Purpose | Notes |
|---|---|---|
| **Custom Post Type UI** (optional) | Admin UI for managing CPTs | Only if client needs to create new CPTs without developer. Otherwise skip and register in code. |
| **Advanced Custom Fields PRO** | Custom field groups and REST API exposure | Required for repeater fields (Course modules). Free version lacks repeaters and REST API support. |
| **WP REST API – Additional Endpoints** (optional) | Extends REST API | Only needed if ACF PRO's REST API addon is insufficient. |
| **Yoast SEO** or **Rank Math** | SEO meta fields exposed via REST API | Recommended for meta titles, descriptions, Open Graph images. |
| **WP Mail SMTP** | Contact form email delivery | Ensures contact form submissions are delivered reliably. |

### 7.3 ACF REST API Exposure

ACF PRO fields are exposed to the REST API automatically when the field group is set to "Show in REST API" in the ACF field group settings. Each field group should have:

- **Show in REST API**: Yes
- **REST API Label**: Human-readable name (e.g. "Course Details")

When exposed, ACF fields appear as a nested `acf` object in the REST API response:

```json
{
  "id": 67,
  "title": { "rendered": "Introduction to Digital Skills" },
  "acf": {
    "sa_duration": "12 Weeks",
    "sa_mode": "contact",
    "sa_price": 4500,
    "sa_course_code": "SA-DS-001",
    "sa_entry_requirements": "Grade 10 or equivalent",
    "sa_modules": [
      { "module_name": "Computer Basics", "module_description": "..." },
      { "module_name": "Internet & Email", "module_description": "..." }
    ]
  }
}
```

### 7.4 Alternative: Manual Meta Boxes (No ACF)

If ACF PRO is not available, custom meta boxes can be registered in `functions.php` using `add_meta_box()` and saved with `save_post` action. REST API exposure requires `register_rest_field()` for each field. This approach is more code-heavy but has zero plugin dependency.

Recommendation: Use ACF PRO. The repeater field for Course modules alone justifies the cost, and the REST API integration saves significant development time.

---

## 8. Implementation Strategy

### 8.1 Where to Put the Code

**Option A: functions.php of Hello Biz child theme (recommended)**

Create a child theme of Hello Biz. Place all CPT and taxonomy registrations in the child theme's `functions.php`. This survives theme updates.

Structure:
```
sa-innovation-child/
  style.css
  functions.php
  inc/
    post-types.php
    taxonomies.php
    acf-fields.php
    rest-api.php
    site-settings.php
```

**Option B: Must-Use Plugin (alternative)**

Create a must-use plugin at `wp-content/mu-plugins/sa-innovation-cpt.php`. This loads before any theme and is never deactivated accidentally. Preferred if you want the CPTs to survive theme switches.

Structure:
```
wp-content/mu-plugins/
  sa-innovation-cpt.php (single file or directory with includes)
```

**Recommendation:** Use Option A (child theme) for this project since the site uses Elementor and theme-specific customizations are likely. Place CPT registration code in `inc/post-types.php` and `inc/taxonomies.php`.

### 8.2 Registration Order

1. Register all custom post types (`register_post_type`)
2. Register all custom taxonomies (`register_taxonomy`)
3. Attach taxonomies to their post types
4. Register ACF field groups (via ACF's `acf_add_local_field_group` PHP function or admin UI)
5. Register custom REST API endpoints (`register_rest_route`)
6. Register settings page (using ACF Options Pages or custom settings page)

### 8.3 Key Code Patterns

**Custom Post Type Registration Example (Courses):**

```php
function sa_register_course_cpt() {
    register_post_type('sa_course', array(
        'labels' => array(
            'name'          => 'Courses',
            'singular_name' => 'Course',
            'add_new_item'  => 'Add New Course',
            'edit_item'     => 'Edit Course',
            'all_items'     => 'All Courses',
            'search_items'  => 'Search Courses',
            'not_found'     => 'No courses found',
        ),
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,
        'rest_base'    => 'courses',
        'supports'     => array('title', 'editor', 'excerpt', 'thumbnail', 'revisions'),
        'rewrite'      => array('slug' => 'courses'),
        'menu_icon'    => 'dashicons-welcome-learn-more',
        'show_in_nav_menus' => true,
    ));
}
add_action('init', 'sa_register_course_cpt');
```

**Custom Taxonomy Registration Example (Course Categories):**

```php
function sa_register_course_category_taxonomy() {
    register_taxonomy('course_category', 'sa_course', array(
        'labels' => array(
            'name'          => 'Course Categories',
            'singular_name' => 'Course Category',
            'add_new_item'  => 'Add New Course Category',
            'edit_item'     => 'Edit Course Category',
        ),
        'hierarchical'  => true,
        'public'        => true,
        'show_in_rest'  => true,
        'rest_base'     => 'course-categories',
        'rewrite'       => array('slug' => 'course-categories'),
        'show_admin_column' => true,
    ));
}
add_action('init', 'sa_register_course_category_taxonomy');
```

**Custom Settings REST Endpoint Example:**

```php
function sa_register_settings_rest_route() {
    register_rest_route('sa/v1', '/settings/(?P<group>[a-z_]+)', array(
        'methods'  => 'GET',
        'callback' => 'sa_get_settings',
        'args' => array(
            'group' => array(
                'required'          => true,
                'sanitize_callback' => 'sanitize_text_field',
            ),
        ),
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'sa_register_settings_rest_route');

function sa_get_settings($request) {
    $group = $request->get_param('group');
    $allowed_groups = array('site', 'contact', 'social', 'footer', 'academics');

    if (!in_array($group, $allowed_groups)) {
        return new WP_Error('invalid_group', 'Invalid settings group.', array('status' => 404));
    }

    $option_key = 'sa_' . $group . '_settings';
    $settings = get_option($option_key, array());

    return rest_ensure_response($settings);
}
```

**ACF Field Group via PHP (alternative to admin UI):**

```php
function sa_register_acf_field_groups() {
    if (function_exists('acf_add_local_field_group')) {
        acf_add_local_field_group(array(
            'key'      => 'group_sa_course',
            'title'    => 'Course Details',
            'fields'   => array(
                array(
                    'key'          => 'field_sa_duration',
                    'label'        => 'Duration',
                    'name'         => 'sa_duration',
                    'type'         => 'text',
                    'required'     => 1,
                    'instructions' => 'e.g. "12 Weeks", "1 Year"',
                ),
                // ... additional fields
            ),
            'location' => array(
                array(
                    array(
                        'param'    => 'post_type',
                        'operator' => '==',
                        'value'    => 'sa_course',
                    ),
                ),
            ),
            'show_in_rest' => 1,
        ));
    }
}
add_action('acf/init', 'sa_register_acf_field_groups');
```

### 8.4 Flush Rewrite Rules

After registering new CPTs and taxonomies, rewrite rules must be flushed for the permalink structure to work. This is done once:

```php
// Add this temporarily to functions.php, load the page once, then remove:
function sa_flush_rewrite_rules() {
    sa_register_course_cpt();
    sa_register_testimonial_cpt();
    sa_register_staff_cpt();
    sa_register_partner_cpt();
    sa_register_faq_cpt();
    sa_register_download_cpt();
    flush_rewrite_rules();
}
add_action('init', 'sa_flush_rewrite_rules', 20);
```

Or via WP-CLI:
```bash
wp rewrite flush
```

### 8.5 CORS Configuration

The Next.js frontend runs on a different domain than WordPress. REST API responses must include CORS headers. Add to the child theme's `functions.php`:

```php
function sa_cors_rest_api_headers() {
    header('Access-Control-Allow-Origin: https://sainnovationcollege.co.za');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: Content-Type');
}
add_action('rest_api_init', 'sa_cors_rest_api_headers', 15);
```

Replace the origin with the actual Next.js frontend domain. For development, use `http://localhost:3000`.

### 8.6 Disable XML-RPC and Limit REST API Exposure

For security in a headless setup:

```php
// Disable XML-RPC (not needed for headless)
add_filter('xmlrpc_enabled', '__return_false');

// Optionally restrict REST API to only the post types we need
// by not exposing unused built-in endpoints
```

---

## 9. Migration Notes

### 9.1 Recovering Lost Data from Failed Theme

The previous theme registered `sa_course`, `sa_testimonial`, and `sa_partner` CPTs. If any content was created under those post types before the theme was reverted, the data still exists in `wp_posts` and `wp_postmeta` but is invisible.

To check for orphaned data:

```sql
SELECT post_type, COUNT(*) as count
FROM wp_posts
WHERE post_type IN ('sa_course', 'sa_testimonial', 'sa_partner')
AND post_status IN ('publish', 'draft', 'pending', 'trash')
GROUP BY post_type;
```

If rows are found, re-registering the CPTs with the same slugs will make the content visible again in admin. The new CPT registration code in this document uses the same slugs (`sa_course`, `sa_testimonial`, `sa_partner`) intentionally for this recovery purpose.

### 9.2 Cleanup Tasks

1. **Remove empty default categories**: Delete or rename the 10 existing empty WordPress categories
2. **Remove empty default tags**: Delete or rename the 7 existing empty tags
3. **Review 105 media attachments**: Ensure all are legitimate uploads; remove any orphans
4. **Set permalinks**: Go to Settings > Permalinks and select "Post name" (`/%postname%/`)
5. **Disable comments globally**: Settings > Discussion > uncheck "Allow people to submit comments on new posts"
6. **Disable pingbacks**: Settings > Discussion > uncheck "Allow link notifications from other blogs"
7. **Set timezone**: Settings > General > set to "Africa/Johannesburg"

### 9.3 WordPress Content Population Order

1. Global settings (contact info, social links, footer)
2. Course categories, study modes, qualification levels (taxonomies)
3. Courses (with all custom fields)
4. Staff members
5. Testimonials
6. Partners
7. FAQs
8. Downloads/Documents
9. Blog posts (if any for launch)
10. Pages (already exist, verify content)

---

*Document version: 1.0*  
*Created: 2026-07-21*
