# Component Library — Live Site Audit

**Source:** https://www.sainnovationcollege.co.za
**Crawl Date:** 2026-07-21

## Elementor Widgets Used

| # | Widget Type | CSS Prefix | Used On | Count |
|---|-------------|------------|---------|-------|
| 1 | `ehp-header.default` | `ehp-header` | All pages | 1 (global) |
| 2 | `flex-hero.default` | `ehp-flex-hero` | Home | 1 |
| 3 | `cta.default` | `ehp-cta` | Home, About, Courses, Students, Contact | 8 |
| 4 | `icon-box.default` | `elementor-image-box` | Home (3), Courses (9), Contact (3) | 15 |
| 5 | `button.default` | `ehp-button` | Home (4), About (4), Courses (10), Students (2), Contact (1) | 21 |
| 6 | `heading.default` | `elementor-heading-title` | All pages | ~40 |
| 7 | `text-editor.default` | `elementor-widget-container` | All pages | ~10 |
| 8 | `image-carousel.default` | `elementor-image-carousel` | Home (1), About (1), Students (4) | 6 |
| 9 | `image.default` | `wp-image` | Home (1), About (10), Courses (2), Students (4), Contact (1) | 18 |
| 10 | `zigzag.default` | `ehp-zigzag` | About | 1 |
| 11 | `image-box.default` | `elementor-image-box` | About (9 team) | 9 |
| 12 | `toggle.default` | `elementor-toggle` | Courses (FAQ) | 1 |
| 13 | `testimonial.default` | `elementor-testimonial` | Students (3) | 1 |
| 14 | `menu-anchor.default` | `elementor-menu-anchor` | About (#team) | 1 |
| 15 | `ehp-form.default` | `ehp-form` | Contact | 1 |
| 16 | `ehp-flex-footer.default` | `ehp-flex-footer` | All pages | 1 (global) |
| 17 | `contact-buttons.default` | `e-contact-buttons` | All pages | 1 (global) |

## Dynamic Behaviors Detected

| # | Behavior | Type | Pages | Notes |
|---|----------|------|-------|-------|
| 1 | Sticky header | CSS/JS | All | Scale logo on scroll, blur background |
| 2 | Mobile hamburger menu | JS | All | Toggle button with open/close states |
| 3 | Image carousel autoplay | Swiper.js | Home, About, Students | 5000ms interval, infinite loop, 500ms speed |
| 4 | FAQ accordions | JS | Courses | Toggle open/close with arrow icons |
| 5 | Fade-in-up animation | CSS | Home (hero) | `elementor-animation-fadeInUp` |
| 6 | Grow animation | CSS | Courses (buttons) | `elementor-animation-grow` on hover |
| 7 | Shape dividers (waves) | SVG | Home, About, Courses, Students, Contact | Top/bottom wave patterns |
| 8 | Floating contact widget | JS | All | Email platform, grow animation |
| 9 | Scroll behavior | JS | Header | `data-scroll-behavior: always` |
| 10 | Lazy loading | Browser | All images | `loading="lazy"` on most images |
| 11 | Speculation rules (prefetch) | Browser | All | Conservative prefetch for navigation |

## Animations

| # | Animation | CSS Class | Element | Trigger |
|---|-----------|-----------|---------|---------|
| 1 | fadeInUp | `elementor-animation-fadeInUp` | Home hero | Page load |
| 2 | Grow | `elementor-animation-grow` | Course "Learn More" buttons | Hover |
| 3 | Grow | `elementor-animation-grow` | Floating contact button | Hover |
| 4 | Grow | `elementor-animation-grow` | Entrance animation on floating widget | Page load |

## Responsive Breakpoints

| Breakpoint | Width | Source |
|------------|-------|--------|
| Desktop | >1024px | Default |
| Tablet | 768-1024px | Elementor |
| Mobile | <768px | Elementor |

Elementor additional custom breakpoints enabled via `e_font_icon_svg, additional_custom_breakpoints`.

## Icons Used

### Font Icons (Elementor)
- `e-fas-bars` (hamburger)
- `e-eicon-close` (close)
- `e-fas-map-marker-alt` (maps)
- `e-fab-whatsapp` (WhatsApp)
- `e-fas-phone-alt` (phone)
- `e-fas-arrow-down` (arrow down)
- `e-fas-arrow-right` (arrow right)
- `e-fas-arrow-up` (arrow up)
- `e-fas-envelope` (email)
- `e-fab-instagram` (Instagram)
- `e-fab-x-twitter` (Twitter)
- `e-fab-tiktok` (TikTok)

### Font Icons (ElementsKit)
- `icon icon-Computer` (course card)
- `icon icon-dinner` (course card)
- `icon icon-car-1` (course card)
- `icon icon-facebook` (footer social)

### Inline SVGs
- Service icons (Social Media, SEO, PPC, Strategy, Web Design, Content Marketing, Graphic Design, Research)
- Shape dividers (waves)
- Contact card icons (phone, location, email)

## CSS/JS Libraries Loaded

### CSS (34 stylesheets)
- Hello Biz theme (2)
- Elementor core (12)
- Hello Plus (10)
- ElementsKit Lite (3)
- Essential Addons (1)
- Google Fonts (2): Varela Round, Montserrat
- Elementor Icons (2)

### JavaScript (14 scripts)
- jQuery Core 3.7.1
- jQuery Migrate 3.4.1
- jQuery UI Core 1.13.3
- Elementor Frontend (3)
- Swiper 8.4.5
- Hello Plus (2)
- ElementsKit Lite (1)
- Essential Addons (1)
- Premium Addons (1)
- WP Emoji (1)
