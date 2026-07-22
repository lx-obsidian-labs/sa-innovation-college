# Reference Alignment Analysis

## Genius Business College → SA Innovation College

### Utility Bar
- **Reference**: 36px height, dark bg (#0F2D5E), phone icon+number left, WhatsApp icon+text, hours, Apply Now button right
- **Current**: 40px height, same colors, matches closely but needs height adjustment to 36px
- **Action**: Reduce h-10 to h-9, align spacing exactly

### Header
- **Reference**: White bg, logo left, nav center (Home, About Us, Courses[dropdown], Students, News, Contact), Apply Now CTA right
- **Current**: Matches well. Logo left, nav center, CTA right. Dropdown on Courses.
- **Action**: Minor refinements only

### Hero Carousel — CRITICAL RESTRUCTURE
- **Reference**: 
  - 3 slides with 7s autoplay
  - Image fills full width/height
  - Overlay gradient (10-20% opacity, not heavy)
  - **Left-aligned content** (not centered): tag badge, h1 title+highlight, tagline, description, CTA buttons
  - **Glass benefit cards** (3 cards) positioned at bottom-right or below text
  - Cards have icon + title + description with backdrop-blur
  - Navigation dots at bottom center
  - Left/right arrow controls (visible on hover/desktop)
- **Current**: Centered text, no benefit cards, heavy overlay gradient
- **Action**: Full restructure to left-aligned with glass benefit cards

### Featured Courses (Learner Success / Programmes)
- **Reference**: Section with heading, grid of course cards, gradient top border on each card
- **Current**: Already close. 6 cards in 3-col grid, gradient headers, badges.
- **Action**: Minor visual refinements

### StatsBar (missing from reference)
- **Reference**: No equivalent section exists
- **Action**: Remove from homepage section order

### Student Gallery / Learner Success
- **Reference**: Dynamic learner success section with images
- **Current**: 6-image grid with hover zoom. Close to reference.
- **Action**: Minor refinements

### Why Choose Us
- **Reference**: 4-card grid with icons, numbered or icon-based
- **Current**: 4 cards with icons, hover effects. Matches well.
- **Action**: Minor refinements, ensure icon alignment

### Application CTA
- **Reference**: Gradient overlay section, large heading, 4-step process (01-04)
- **Current**: Matches well. Gradient bg, numbered steps, CTA buttons.
- **Action**: Minor refinements

### Accreditation Logos
- **Reference**: Grid of partner logos, grayscale hover to color
- **Current**: 12 logos in 6-col grid, grayscale→color hover. Matches.
- **Action**: Minor refinements

### WhatsApp Support
- **Reference**: Floating widget, bottom-right, click-to-chat
- **Current**: Two implementations (WhatsAppSupport and WhatsAppFloat). Should verify only one is active.

### Footer
- **Reference**: Dark bg, 4-column grid: Brand+social, Quick Links, Programmes, Contact
- **Current**: 4-column grid with newsletter, brand, links, programmes, contact. Matches well.
- **Action**: Minor refinements, remove standalone newsletter bar (integrate into brand column)

---

## Section Order (Reference)
1. UtilityBar
2. Header
3. HeroCarousel (with benefit cards)
4. Featured Courses
5. Learner Success (StudentGallery)
6. Why Choose Us
7. Application CTA (with process steps)
8. Accreditation Logos
9. Footer
10. WhatsApp Float

## Section Order (Current — needs update)
1. UtilityBar ✓
2. Header ✓
3. HeroCarousel (needs major restructure)
4. **StatsBar (REMOVE - not in reference)**
5. FeaturedCourses ✓
6. StudentGallery ✓
7. WhyChooseUs ✓
8. Testimonials (consider position)
9. AccreditationLogos ✓
10. NewsPreview (consider position)
11. ApplicationCTA ✓

## Action Plan
1. Restructure HeroCarousel: left-aligned + glass benefit cards
2. Update page.tsx: remove StatsBar, reorder sections
3. Refine UtilityBar: height to 36px
4. Minor refinements to other components
