# Template Mapping — WordPress Theme Files

**Source:** https://www.sainnovationcollege.co.za
**Crawl Date:** 2026-07-21

## Current WordPress Setup

| Property | Value |
|----------|-------|
| Theme | Hello Biz 1.2.2 |
| Page Template | elementor_header_footer |
| Header Template | Elementor (ID: 63) |
| Footer Template | Elementor (ID: 60) |
| Kit ID | 58 |

## Required Template Files for New Theme

### Core Templates

| # | File | Purpose | Source Data |
|---|------|---------|-------------|
| 1 | `header.php` | Site header | Elementor ID: 63 |
| 2 | `footer.php` | Site footer | Elementor ID: 60 |
| 3 | `front-page.php` | Homepage | Elementor ID: 67 |
| 4 | `index.php` | Fallback template | Default |
| 5 | `single.php` | Single post | Not needed (0 posts) |
| 6 | `page.php` | Default page | Elementor pages |
| 7 | `archive.php` | Archive pages | Empty archives |
| 8 | `search.php` | Search results | Search template |
| 9 | `404.php` | 404 error | Custom 404 |
| 10 | `sidebar.php` | Sidebar | Not used |

### Page Templates

| # | File | Purpose | Elementor ID |
|---|------|---------|--------------|
| 1 | `template-about.php` | About page | 95 |
| 2 | `template-courses.php` | Courses page | 112 |
| 3 | `template-students.php` | Students page | 125 |
| 4 | `template-contact.php` | Contact page | 151 |

### Template Parts

| # | File | Purpose | Used On |
|---|------|---------|---------|
| 1 | `template-parts/home/hero.php` | Hero section | Homepage |
| 2 | `template-parts/home/about.php` | About CTA | Homepage |
| 3 | `template-parts/home/courses.php` | Course cards | Homepage |
| 4 | `template-parts/home/partners.php` | Partner logos | Homepage |
| 5 | `template-parts/home/cta.php` | CTA section | Homepage |
| 6 | `template-parts/about/hero.php` | Hero section | About |
| 7 | `template-parts/about/zigzag.php` | Zigzag content | About |
| 8 | `template-parts/about/values.php` | Values grid | About |
| 9 | `template-parts/about/team.php` | Team members | About |
| 10 | `template-parts/about/clients.php` | Client logos | About |
| 11 | `template-parts/courses/hero.php` | Hero section | Courses |
| 12 | `template-parts/courses/services.php` | Service cards | Courses |
| 13 | `template-parts/courses/faq.php` | FAQ accordion | Courses |
| 14 | `template-parts/students/hero.php` | Hero section | Students |
| 15 | `template-parts/students/clients.php` | Client logos | Students |
| 16 | `template-parts/students/testimonials.php` | Testimonials | Students |
| 17 | `template-parts/contact/hero.php` | Hero section | Contact |
| 18 | `template-parts/contact/form.php` | Contact form | Contact |
| 19 | `template-parts/contact/cards.php` | Contact cards | Contact |

### Include Files

| # | File | Purpose |
|---|------|---------|
| 1 | `functions.php` | Theme setup, enqueues, CPTs |
| 2 | `inc/customizer.php` | Customizer settings |
| 3 | `inc/menus.php` | Menu registration |
| 4 | `inc/widgets.php` | Widget areas |
| 5 | `inc/seo.php` | SEO functions |
| 6 | `inc/helpers.php` | Helper functions |
| 7 | `inc/post-types.php` | Custom post types |
| 8 | `inc/cpt-course.php` | Course CPT |
| 9 | `inc/cpt-testimonial.php` | Testimonial CPT |
| 10 | `inc/cpt-partner.php` | Partner CPT |

### Asset Files

| # | File | Purpose |
|---|------|---------|
| 1 | `assets/css/main.css` | Main stylesheet entry |
| 2 | `assets/css/base/` | Base styles |
| 3 | `assets/css/components/` | Component styles |
| 4 | `assets/css/sections/` | Section styles |
| 5 | `assets/css/layouts/` | Layout styles |
| 6 | `assets/css/utilities/` | Utility classes |
| 7 | `assets/js/app.js` | Main JavaScript |
| 8 | `assets/js/modules/` | JS modules |
| 9 | `assets/images/` | Theme images |

## WordPress Configuration

### Permalinks (To Set)

```
/%category%/%postname%/
```

### Theme Support (To Add)

```php
add_theme_support('title-tag');
add_theme_support('post-thumbnails');
add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
add_theme_support('custom-logo', ['height' => 60, 'width' => 200, 'flex-height' => true, 'flex-width' => true]);
add_theme_support('customize-selective-refresh-widgets');
```

### Menus (To Register)

```php
register_nav_menus([
    'primary' => 'Primary Navigation',
    'footer' => 'Footer Navigation',
]);
```

### Image Sizes (To Register)

```php
add_image_size('hero', 1920, 1080, true);
add_image_size('team-member', 380, 265, true);
add_image_size('testimonial-avatar', 193, 193, true);
add_image_size('client-logo', 200, 100, false);
add_image_size('cta-image', 539, 539, true);
```

### Widget Areas (To Register)

```php
register_sidebar([
    'name' => 'Footer Column 1',
    'id' => 'footer-1',
]);
register_sidebar([
    'name' => 'Footer Column 2',
    'id' => 'footer-2',
]);
register_sidebar([
    'name' => 'Footer Column 3',
    'id' => 'footer-3',
]);
register_sidebar([
    'name' => 'Footer Column 4',
    'id' => 'footer-4',
]);
```

## Elementor Compatibility

If maintaining Elementor compatibility:

| Property | Value |
|----------|-------|
| Template | elementor_header_footer |
| Kit ID | 58 |
| Header ID | 63 |
| Footer ID | 60 |
| Page IDs | 67, 95, 112, 125, 151 |

**Recommendation:** Keep `elementor_header_footer` template support to allow Elementor editing of page content.
