# Media Audit — SA Innovation College Headless Redesign

**Date:** July 2026  
**Purpose:** Audit of the WordPress media library for the headless Next.js rebuild.

---

## 1. Library Overview

| Metric          | Value  |
|-----------------|--------|
| Total Attachments| 105   |
| JPEG            | 26     |
| WebP            | 5      |
| PNG             | 63     |
| SVG             | 11     |
| PDF / Documents | 0      |

---

## 2. Key Reusable Assets (CLASSIFY: REUSE)

These assets are confirmed SA Innovation College branding and photography. They should be migrated to the new Next.js project.

| ID  | Description                    | Format | Dimensions   | Size   | Filename                                |
|-----|--------------------------------|--------|--------------|--------|-----------------------------------------|
| 190 | SA INNOVATION COLLEGE logo     | WebP   | 618 x 618    | 29 KB  | `SA-INNOVATION-COLLEGE.webp`            |
| 191 | Favicon                        | WebP   | 512 x 512    | 48 KB  | `Favicon.webp`                          |
| 214 | Hero image                     | WebP   | 2560 x 2168  | 188 KB | `SA-INNOVATION-COLLEGE-2-scaled.webp`   |
| 213 | Hero image (alt)               | WebP   | 2560 x 2168  | 217 KB | `SA-INNOVATION-COLLEGE-1-scaled.webp`   |
| 210 | Graduate photo                 | JPEG   | 2560 x 1709  | 259 KB | (id:210)                                |
| 206 | Graduate female photo          | JPEG   | 2560 x 1709  | 236 KB | (id:206)                                |
| 221 | Graduation photo               | WebP   | 600 x 400    | 54 KB  | (id:221)                                |

**Action:** Copy these to the Next.js `public/assets/` directory. Generate optimised sizes for `<Image>` component use.

---

## 3. Partner Logos (CLASSIFY: REUSE)

Small PNG partner logos, approximately 256 x 56 each.

| ID Range | Count | Filenames          |
|----------|-------|--------------------|
| 84 - 90  | 7     | `1.png` through `7.png` |
| 128 - 140| 13    | `8.png` through `16.png` (plus extras) |

**Action:** Migrate all partner logos. Confirm current partnership status with client before display.

---

## 4. Team / Staff Photos (CLASSIFY: REQUIRES CONFIRMATION)

| ID Range | Count | Description               | Dimensions  |
|----------|-------|---------------------------|-------------|
| 79 - 80  | 2     | Team-1, Team-2            | 380 x 265   |
| 101 - 107| 7     | Team-3 through Team-9     | 380 x 265   |

**Total:** 9 team photos

**Action:** These may be stock photos or outdated. Confirm with client which staff members are current and whether new headshots are needed.

---

## 5. Background / Decorative Images (CLASSIFY: REUSE WITH CAUTION)

| Prefix   | Description                          | Notes                                    |
|----------|--------------------------------------|------------------------------------------|
| `BG-*.png` | Hero backgrounds, section backgrounds | Decorative Elementor artifacts          |

These background images are tied to the Elementor page builder layout and may not be needed in a headless rebuild. Review each in context before migrating.

**Action:** Audit each background image against the new site design. Most will likely be replaced by CSS or redesigned components.

---

## 6. Contact Page Assets (CLASSIFY: REUSE)

### SVG Icons

| Filename        | Description        |
|-----------------|--------------------|
| `Mail.svg`      | Email icon         |
| `Location.svg`  | Location pin icon  |
| `iphone.svg`    | Phone icon         |

### PNG Assets

| Filename                  | Description              |
|---------------------------|--------------------------|
| `BG-contact-hero-New.png` | Contact page hero bg     |
| `BG-Form-Contact-Us.png`  | Contact form background  |
| `BG-contact-info.png`     | Contact info bg          |
| `CTA-contact-us-new.png`  | CTA banner               |

**Action:** SVGs are generic (not SA Innovation branded) and should be replaced with a consistent icon library (e.g., Lucide, Heroicons). PNGs should be reviewed against new design.

---

## 7. Testimonial Images (CLASSIFY: REQUIRES CONFIRMATION)

| Filename              | Dimensions |
|-----------------------|------------|
| `Testimonial-1.png`  | 193 x 193  |
| `Testimonial-2.png`  | 193 x 193  |
| `Testimonial-3-1.png`| 193 x 193  |

**Action:** Confirm whether these depict real students. Obtain consent before publishing. If stock photos, replace with real testimonials or remove.

---

## 8. Older Template Images (CLASSIFY: REPLACE / UNUSED)

| ID Range | Count | Description                                       |
|----------|-------|---------------------------------------------------|
| 6 - 24   | 19    | Generic template images (events, blogs, teams, testimonials) from the "Beyond" digital marketing agency template |

These images have no connection to SA Innovation College and must not be used on the new site.

**Action:** Do not migrate. Archive or delete.

---

## 9. Missing Assets — New Photography / Design Required

The following content categories have no suitable imagery in the current media library:

| Category                        | Needed For                                    |
|---------------------------------|-----------------------------------------------|
| Computer Literacy               | Course detail page, homepage course card       |
| Table Service Course            | Course detail page, homepage course card       |
| Traffic Officer Course          | Course detail page, homepage course card       |
| Campus interior / exterior      | About page, general branding                   |
| Student life                    | Homepage, testimonials, social proof           |
| Staff headshots                 | About page, team section                       |
| Hero imagery (diverse options)  | Homepage, internal page heroes                 |

**Action:** Brief a photographer or source licensed stock photography. Prioritise course-specific imagery and campus photos.

---

## 10. Accessibility Notes

- **Alt text:** Most images in the library lack alt text. This is a critical accessibility gap that must be addressed during migration.
- **Image formats:** The library contains a mix of JPEG, PNG, WebP, and SVG. Standardise on WebP for raster images and SVG for icons in the Next.js build.
- **Responsive sizing:** Current images are served at original resolution via Elementor. The Next.js build should use `<Image>` with proper `sizes` and `srcset` for performance.

---

## 11. Migration Checklist

- [ ] Export all REUSE assets from WordPress media library
- [ ] Generate Next.js-optimised sizes (thumb, medium, large, hero)
- [ ] Add alt text to all migrated images
- [ ] Confirm team photos with client
- [ ] Confirm testimonial photos with client
- [ ] Confirm partner logo permissions with client
- [ ] Replace generic SVG icons with consistent icon library
- [ ] Source new photography for missing categories
- [ ] Archive UNUSED / REPLACE template images
- [ ] Remove all "Beyond" template assets from production
