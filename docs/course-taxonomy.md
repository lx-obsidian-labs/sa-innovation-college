# SA Innovation College — Course Taxonomy

> **Document Status:** Internal Planning Draft  
> **Purpose:** Define the classification system for all course content  
> **Date:** 2026-07-21

---

## 1. Overview

This document defines the taxonomy used to classify, organise, and retrieve courses across the SA Innovation College headless CMS. Every course in the system will be assigned one value from each taxonomy dimension.

### Taxonomy Dimensions

| Dimension | Description | Cardinality |
|---|---|---|
| Programme Type | The structural category of the offering | Single-value |
| Subject Area | The academic or skills domain | Single-value |
| Study Mode | How the course is delivered | Single-value or Multi-value |
| NQF Level | The South African National Qualifications Framework level | Optional, where applicable |

---

## 2. Programme Types

Programme types categorise courses by their structural and regulatory nature. This dimension determines how the course is framed to prospective learners and how it appears in filtering.

### Full Qualification

A complete registered qualification on the NQF, typically 120+ credits, leading to a full certificate or diploma.

**Examples:** Software Developer NQF 5, Early Childhood Development NQF 4  
**SAQA registered:** Yes  
**Credit range:** 120–360  
**Typical duration:** 1–3 years

### Occupational Qualification

A qualification focused on a specific occupation, registered on the Occupational Qualifications Framework (OQSF).

**Examples:** Traffic Officer Course  
**SAQA registered:** Yes  
**Credit range:** 40–120  
**Typical duration:** 6–18 months

### Skills Programme

A short, credit-bearing programme comprising a subset of unit standards from a full qualification. Often used for upskilling or partial completion.

**Examples:** Basic Bookkeeping, Basic Health and Safety  
**SAQA registered:** Yes (unit standards)  
**Credit range:** 5–40  
**Typical duration:** 1–6 months

### Short Course

A non-credit-bearing or institution-specific certificate course. Not registered on the NQF but may have industry recognition.

**Examples:** Table Service Course, Receptionist Course, Customer Service Skills  
**SAQA registered:** No  
**Credit range:** N/A  
**Typical duration:** 1 day – 3 months

### Computer and Digital Skills

Non-credit digital skills training, typically short-duration and practical. May include free offerings.

**Examples:** FREE Computer Literacy, Website Design  
**SAQA registered:** Typically no  
**Credit range:** N/A  
**Typical duration:** 1 day – 6 weeks

### Corporate Training

Custom training solutions designed for businesses. Often adapted from existing courses and delivered on-site or online.

**Examples:** Business Communication Skills, Conflict Management NQF 5  
**SAQA registered:** Varies  
**Credit range:** Varies  
**Typical duration:** Varies by client agreement

---

## 3. Subject Areas

Subject areas represent the academic or vocational domain of a course. Each course is assigned exactly one subject area.

| Subject Area | Description | Example Courses |
|---|---|---|
| Business and Administration | Office management, administration, communication, and general business skills | Office Administration NQF 3, General Administration NQF 4, Receptionist Course, Project Management, Business Communication Skills, Customer Service Skills, Basic Marketing NQF 2, Conflict Management NQF 5 |
| Computer and Digital Skills | Foundational digital literacy, web design, and general computing | FREE Computer Literacy, Basic Computer Literacy, Advanced Computer Literacy, Website Design |
| Microsoft Office | Suite-specific training in Microsoft Office applications | MS Word, MS Excel, MS PowerPoint, MS Access, MS Outlook, MS Project |
| Finance and Bookkeeping | Financial record-keeping, accounting fundamentals, and financial management | Basic Bookkeeping, Basic Financial Management |
| Entrepreneurship and Small Business | Business start-up, small business management, and entrepreneurial skills | Entrepreneurship (ESB), New Venture Creation NQF 2 |
| Education and Training Development | Trainer and facilitator development, assessment, and learning design | Facilitator NQF 5, Assessor Course, T&D Practitioner NQF 5, SDF Practitioner NQF 5, L&D Practitioner NQF 6, Work Based Learning Practitioner NQF 5 |
| Early Childhood Development | Practitioner training for early childhood education and care | Early Childhood Development NQF 4, Early Childhood Caregiver NQF 1 |
| Health and Safety | Workplace safety, first aid, and occupational health | Basic Health and Safety, Health and Safety Assistant NQF 4, First Aid (Basic/Inter/Advanced) |
| Design and Technology | Software development, design, and technical skills | Software Developer NQF 5 |
| Occupational | Occupation-specific training with regulatory pathways | Traffic Officer Course |
| Hospitality | Service industry training for hospitality roles | Table Service Course |

---

## 4. Study Modes

Study modes describe how learners engage with the course content. A course may support multiple study modes.

| Study Mode | Description | Delivery |
|---|---|---|
| Full-time | Traditional classroom-based learning, typically 5 days per week | On-campus |
| Part-time | Reduced schedule, typically evenings or weekends | On-campus |
| Online | Fully remote digital learning via LMS or virtual classroom | Remote |
| Blended | Hybrid model combining online theory with in-person practical sessions | Mixed |
| On-Campus | Physical attendance at the Centurion campus address | 147 Burger Avenue, Lyttelton Manor |

### Mapping Notes

- **Full Qualification and Occupational Qualification** programmes typically offer Full-time, Part-time, and Blended modes.
- **Short Courses and Skills Programmes** are more likely to offer Part-time, Online, or On-Campus options.
- **Computer and Digital Skills** courses are strong candidates for fully Online delivery.
- **Corporate Training** is delivered at client premises or On-Campus.

---

## 5. NQF Levels

The South African National Qualifications Framework (NQF) levels are applied where the course is credit-bearing and registered with SAQA.

| NQF Level | Equivalent | Typical Entry Requirement |
|---|---|---|
| 1 | Grade 9 / General Education and Training Certificate (GETC) | No formal qualification |
| 2 | Grade 10 / National Certificate | ABET Level 4 or NQF 1 |
| 3 | Grade 11 / National Certificate | NQF Level 2 |
| 4 | Grade 12 / National Senior Certificate (Matric) | NQF Level 3 |
| 5 | Higher Certificate | NQF Level 4 or equivalent |
| 6 | Diploma / Advanced Certificate | NQF Level 5 |
| 7 | Bachelor's Degree / Advanced Diploma | NQF Level 6 |
| 8 | Honours / Postgraduate Diploma | NQF Level 7 |

### Courses by NQF Level (Proposed)

| NQF Level | Courses |
|---|---|
| 1 | Early Childhood Caregiver NQF 1 |
| 2 | Basic Marketing NQF 2, New Venture Creation NQF 2 |
| 3 | Office Administration NQF 3 |
| 4 | General Administration NQF 4, Early Childhood Development NQF 4, Health and Safety Assistant NQF 4 |
| 5 | Software Developer NQF 5, Facilitator NQF 5, T&D Practitioner NQF 5, SDF Practitioner NQF 5, Work Based Learning Practitioner NQF 5, Conflict Management NQF 5 |
| 6 | L&D Practitioner NQF 6 |
| 7–8 | None currently proposed |

> **Note:** All NQF level assignments above are based on course titles only and have **NOT** been verified against SAQA registration records. Verification against the SAQA database is required before publication.

---

## 6. Taxonomy Application Rules

1. **Every course must have exactly one Programme Type** — this is the primary classification.
2. **Every course must have exactly one Subject Area** — use the mapping table above.
3. **Every course must have at least one Study Mode** — Online mode is the default fallback.
4. **NQF Level is optional** — only populate for credit-bearing, SAQA-registered courses.
5. **NQF Level must be omitted for Short Courses, Computer and Digital Skills, and Corporate Training** unless the client confirms SAQA registration.

### Inheritance and Defaults

- If a course has no explicit study modes, inherit: `["Online", "On-Campus"]`
- If a non-NQF course accidentally receives an NQF level, the system should flag a validation warning.
- Programme Type `Short Course` should default to `subject_area: "Business and Administration"` unless otherwise specified.

---

## 7. Future-Proofing

The taxonomy is designed to be extensible:

- **New Programme Types** can be added if the client introduces apprenticeships or learnerships.
- **New Subject Areas** (e.g., "Logistics and Supply Chain", "Hospitality and Tourism") can be added as the course catalogue grows.
- **NQF Levels** already support 1–8; Levels 7 and 8 are reserved for future qualifications.
- **Study Modes** can be extended with "Distance Learning" or "Block Release" if needed.

---

## 8. Taxonomy Summary Table

| Field | Type | Required | Values |
|---|---|---|---|
| programme_type | Enum | Yes | Full Qualification, Occupational Qualification, Skills Programme, Short Course, Computer and Digital Skills, Corporate Training |
| subject_area | Enum | Yes | Business and Administration, Computer and Digital Skills, Microsoft Office, Finance and Bookkeeping, Entrepreneurship and Small Business, Education and Training Development, Early Childhood Development, Health and Safety, Design and Technology |
| study_mode | Enum[] | Yes | Full-time, Part-time, Online, Blended, On-Campus |
| nqf_level | Integer | No | 1, 2, 3, 4, 5, 6, 7, 8 |
