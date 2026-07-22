# SA Innovation College — Headless CMS Content Model: Courses

> **Document Status:** Internal Planning Draft  
> **Purpose:** Define the WordPress headless CMS custom post type and field structure for Courses  
> **Date:** 2026-07-21  
> **CMS:** WordPress (Headless via REST API + WPGraphQL)  
> **Post Type:** `course`

---

## 1. Post Type Configuration

| Property | Value |
|---|---|
| Post Type Key | `course` |
| REST API Base | `/wp/v2/course` |
| Show in REST | `true` |
| REST Controller | `WP_REST_Posts_Controller` |
| Public | `true` |
| Has Archive | `true` |
| Supports | `title`, `editor`, `thumbnail`, `excerpt`, `custom-fields`, `revisions` |
| Show in GraphQL | `true` |
| GraphQL Singular Name | `Course` |
| GraphQL Plural Name | `Courses` |

---

## 2. Field Definitions

All fields are **optional** at the CMS level to accommodate incomplete course data until client verification is complete.

### 2.1 Core Fields

| Field Key | Type | Description | Example |
|---|---|---|---|
| `title` | `string` | Course display title | "Traffic Officer Course" |
| `slug` | `string` | URL-friendly identifier | `traffic-officer-course` |
| `course_code` | `string` | Internal course reference code | `SA-TO-001` |
| `programme_status` | `string` | Publication readiness flag | `draft`, `verified`, `published` |

### 2.2 Classification Fields

| Field Key | Type | Description | Allowed Values |
|---|---|---|---|
| `programme_type` | `string` | Taxonomy: programme category | See course-taxonomy.md |
| `subject_area` | `string` | Taxonomy: subject domain | See course-taxonomy.md |
| `featured` | `boolean` | Whether to feature on homepage | `true` / `false` |

### 2.3 Summary Fields

| Field Key | Type | Description |
|---|---|---|
| `short_description` | `text` | One-paragraph elevator pitch (max 300 chars) |
| `full_description` | `longtext` | Comprehensive course description (HTML allowed) |

### 2.4 Qualification and Accreditation Fields

| Field Key | Type | Description |
|---|---|---|
| `qualification_title` | `string` | Official qualification name as registered with SAQA |
| `saqa_id` | `string` | SAQA qualification ID (e.g., `123456`) |
| `nqf_level` | `integer` | NQF level (1–8) |
| `credits` | `integer` | Total SAQA credits |
| `awarding_body` | `string` | Organisation that awards the certificate |
| `accreditation_body` | `string` | Accrediting body (e.g., QCTO, SETA, ETDP SETA) |

### 2.5 Duration and Delivery Fields

| Field Key | Type | Description |
|---|---|---|
| `duration` | `string` | Human-readable duration summary |
| `duration_fulltime` | `string` | Full-time duration description |
| `duration_parttime` | `string` | Part-time duration description |
| `study_mode` | `array` | Array of study modes (see taxonomy) |
| `campus` | `string` | Physical campus location |
| `online_available` | `boolean` | Whether fully online option exists |
| `intake_dates` | `array` | Upcoming intake dates (objects with `start` and `end`) |

**Example intake_dates structure:**
```json
"intake_dates": [
  { "label": "January 2026", "start": "2026-01-15", "end": "2026-01-15" },
  { "label": "July 2026", "start": "2026-07-14", "end": "2026-07-14" }
]
```

### 2.6 Entry Requirements Fields

| Field Key | Type | Description |
|---|---|---|
| `entry_requirements` | `longtext` | Minimum academic or experience requirements |
| `recommended_knowledge` | `longtext` | Recommended prior knowledge |
| `rpl_information` | `longtext` | Recognition of Prior Learning policy |
| `required_documents` | `array` | List of documents needed for application |

**Example required_documents structure:**
```json
"required_documents": [
  "Certified copy of ID document",
  "Certified copy of Matric certificate",
  "Proof of residence"
]
```

### 2.7 Programme Content Fields

| Field Key | Type | Description |
|---|---|---|
| `programme_purpose` | `longtext` | Why this programme exists |
| `target_audience` | `longtext` | Who this programme is for |
| `learning_outcomes` | `array` | List of learning outcome statements |
| `knowledge_modules` | `array` | List of theoretical/knowledge module titles |
| `practical_modules` | `array` | List of practical module titles |
| `workplace_modules` | `array` | List of work-integrated learning module titles |

### 2.8 Assessment and Certification Fields

| Field Key | Type | Description |
|---|---|---|
| `learning_assessment` | `longtext` | Assessment methods used |
| `certification_outcome` | `longtext` | What certificate is earned on completion |
| `progression_opportunities` | `longtext` | Further study pathways |
| `career_opportunities` | `array` | List of possible career outcomes |

### 2.9 Fee Fields

| Field Key | Type | Description |
|---|---|---|
| `registration_fee` | `float` | One-time registration fee (ZAR) |
| `tuition_fee` | `float` | Total tuition fee (ZAR) |
| `monthly_payment` | `float` | Monthly instalment amount (ZAR) |
| `material_fee` | `float` | Learning materials fee (ZAR) |

### 2.10 Media and Assets Fields

| Field Key | Type | Description |
|---|---|---|
| `featured_image` | `media_id` | WordPress attachment ID for the course hero image |
| `gallery` | `array` | Array of WordPress attachment IDs |
| `brochure` | `media_id` | PDF brochure download |

### 2.11 CTAs and Enquiry Fields

| Field Key | Type | Description |
|---|---|---|
| `application_url` | `url` | External or internal URL for applications |
| `enquiry_url` | `url` | URL for the enquiry/enrolment form |
| `whatsapp_message` | `string` | Pre-populated WhatsApp message text |
| `phone_number` | `string` | Course-specific phone line (if different from main) |

### 2.12 SEO Fields

| Field Key | Type | Description |
|---|---|---|
| `seo_title` | `string` | Custom SEO title (defaults to post title) |
| `meta_description` | `text` | SEO meta description (max 160 chars) |
| `canonical_url` | `url` | Canonical URL override if syndicated |

---

## 3. REST API

### 3.1 Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/wp/v2/course` | List all courses |
| `GET` | `/wp/v2/course/<id>` | Single course by ID |
| `GET` | `/wp/v2/course?slug=<slug>` | Single course by slug |
| `POST` | `/wp/v2/course` | Create course (authenticated) |
| `PUT` | `/wp/v2/course/<id>` | Update course (authenticated) |
| `DELETE` | `/wp/v2/course/<id>` | Delete course (authenticated) |

### 3.2 JSON Response Structure

```json
{
  "id": 42,
  "title": {
    "rendered": "Traffic Officer Course",
    "raw": "Traffic Officer Course"
  },
  "slug": "traffic-officer-course",
  "excerpt": {
    "rendered": "<p>Short description here.</p>"
  },
  "meta": {
    "course_code": "SA-TO-001",
    "programme_status": "verified",
    "programme_type": "Occupational Qualification",
    "subject_area": "Occupational",
    "featured": true,
    "short_description": "Short description here.",
    "full_description": "<p>Full HTML description.</p>",
    "qualification_title": "National Certificate: Traffic Officer",
    "saqa_id": "123456",
    "nqf_level": 5,
    "credits": 120,
    "awarding_body": "QCTO",
    "accreditation_body": "SASSETA",
    "duration": "12 months",
    "duration_fulltime": "12 months",
    "duration_parttime": "18 months",
    "study_mode": ["Full-time", "Blended"],
    "campus": "147 Burger Avenue, Lyttelton Manor, Centurion",
    "online_available": false,
    "intake_dates": [
      { "label": "January 2026", "start": "2026-01-15", "end": "2026-01-15" },
      { "label": "July 2026", "start": "2026-07-14", "end": "2026-07-14" }
    ],
    "entry_requirements": "Grade 12 or equivalent",
    "recommended_knowledge": "Basic computer literacy",
    "rpl_information": "RPL applications are assessed on a case-by-case basis.",
    "required_documents": [
      "Certified copy of ID",
      "Certified copy of Matric",
      "Proof of residence"
    ],
    "programme_purpose": "To train learners in traffic law enforcement.",
    "target_audience": "Individuals seeking a career in traffic policing.",
    "learning_outcomes": [
      "Apply traffic legislation effectively",
      "Conduct vehicle inspections",
      "Manage road traffic incidents"
    ],
    "knowledge_modules": [
      "Traffic Law and Legislation",
      "Road Traffic Management",
      "Customer Service in Law Enforcement"
    ],
    "practical_modules": [
      "Vehicle Stop Procedures",
      "Traffic Control",
      "Accident Scene Management"
    ],
    "workplace_modules": [
      "Workplace Integrated Learning"
    ],
    "learning_assessment": "Formative and summative assessments, practical evaluations, portfolio of evidence.",
    "certification_outcome": "National Certificate: Traffic Officer (NQF 5)",
    "progression_opportunities": "Advancement to NQF 6 Traffic Management qualifications.",
    "career_opportunities": [
      "Traffic Officer",
      "Metro Police Officer",
      "Road Traffic Inspector"
    ],
    "registration_fee": 500.00,
    "tuition_fee": 15000.00,
    "monthly_payment": 1250.00,
    "material_fee": 750.00,
    "gallery": [101, 102, 103],
    "brochure": 104,
    "application_url": "https://sainnovation.co.za/apply",
    "enquiry_url": "https://sainnovation.co.za/enquire",
    "whatsapp_message": "Hi, I'd like more info about the Traffic Officer Course.",
    "seo_title": "Traffic Officer Course | SA Innovation College",
    "meta_description": "Study the Traffic Officer Course at SA Innovation College. NQF 5 accredited. Apply now for 2026 intake.",
    "canonical_url": "https://sainnovation.co.za/courses/traffic-officer-course"
  },
  "_links": {
    "self": [{ "href": "https://cms.sainnovation.co.za/wp-json/wp/v2/course/42" }],
    "collection": [{ "href": "https://cms.sainnovation.co.za/wp-json/wp/v2/course" }]
  }
}
```

---

## 4. Field Dependencies and Validation Rules

| Rule ID | Condition | Validation |
|---|---|---|
| V1 | `programme_status` = `published` AND `programme_type` is empty | Block publication |
| V2 | `programme_status` = `published` AND `subject_area` is empty | Block publication |
| V3 | `saqa_id` is set AND `nqf_level` is empty | Warning: SAQA ID requires NQF level |
| V4 | `nqf_level` is set AND `credits` is empty | Warning: NQF level without credits |
| V5 | `online_available` = `true` AND `study_mode` does not contain "Online" | Auto-add "Online" to study modes |
| V6 | `duration` is empty AND (`duration_fulltime` OR `duration_parttime` is empty) | Warning: at least one duration field required |
| V7 | `featured` = `true` AND `featured_image` is empty | Warning: featured courses should have an image |

---

## 5. ACF Field Group Configuration

If implementing via Advanced Custom Fields (ACF) with `acf-json` sync:

- **Field Group:** Course Details
- **Location Rule:** Post Type is equal to `course`
- **Style:** Standard (top metabox)
- **Position:** Normal
- **Show in REST API:** Yes
- **Show in GraphQL:** Yes

All fields should be grouped under the following tabs within the field group:

1. **Classification** — programme_type, subject_area, programme_status, featured
2. **Summary** — short_description, full_description
3. **Qualification** — qualification_title, saqa_id, nqf_level, credits, awarding_body, accreditation_body
4. **Delivery** — duration, duration_fulltime, duration_parttime, study_mode, campus, online_available, intake_dates
5. **Requirements** — entry_requirements, recommended_knowledge, rpl_information, required_documents
6. **Content** — programme_purpose, target_audience, learning_outcomes, knowledge_modules, practical_modules, workplace_modules
7. **Assessment** — learning_assessment, certification_outcome, progression_opportunities, career_opportunities
8. **Fees** — registration_fee, tuition_fee, monthly_payment, material_fee
9. **Media** — featured_image, gallery, brochure
10. **Enquiry** — application_url, enquiry_url, whatsapp_message, phone_number
11. **SEO** — seo_title, meta_description, canonical_url
