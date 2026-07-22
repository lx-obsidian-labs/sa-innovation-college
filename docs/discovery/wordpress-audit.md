# WordPress Installation Audit

**Source:** https://www.sainnovationcollege.co.za
**Crawl Date:** 2026-07-21

## Current Theme

| Property | Value |
|----------|-------|
| Name | Hello Biz |
| Version | 1.2.2 |
| Type | Child theme (Hello Elementor base) |
| Author | Elementor |
| Features | Custom Logo, Custom Menu, Header/Footer via Elementor |

## WordPress Version

| Property | Value |
|----------|-------|
| Version | 7.0.2 |
| Generator tag | `WordPress 7.0.2` |
| REST API | Available (public endpoints) |
| Authentication | Application Passwords only |

## Plugins Detected

| # | Plugin | Version | Status | Purpose |
|---|--------|---------|--------|---------|
| 1 | Elementor | 4.2.0 | Active | Page builder |
| 2 | Hello Plus | 1.7.8 | Active | Hello Biz header/footer/widgets |
| 3 | ElementsKit Lite | 3.10.02 | Active | Elementor widgets/extensions |
| 4 | Essential Addons for Elementor Lite | 6.7.0 | Active | Additional Elementor widgets |
| 5 | Premium Addons for Elementor | 4.11.87 | Active | Additional Elementor widgets |

## Post Types

| # | Post Type | Slug | Rest Base | Has Archive | Count |
|---|-----------|------|-----------|-------------|-------|
| 1 | Posts | post | /wp/v2/posts | Yes | 0 |
| 2 | Pages | page | /wp/v2/pages | No | 5 |
| 3 | Media | attachment | /wp/v2/media | No | 100 |
| 4 | Navigation Menu Items | nav_menu_item | /wp/v2/menu-items | No | — |
| 5 | Patterns | wp_block | /wp/v2/blocks | No | 0 |
| 6 | Templates | wp_template | /wp/v2/templates | No | — |
| 7 | Template Parts | wp_template_part | /wp/v2/template-parts | No | — |
| 8 | Global Styles | wp_global_styles | /wp/v2/global-styles | No | 404 |
| 9 | Navigation | wp_navigation | /wp/v2/navigation | No | 1 |
| 10 | Font Families | wp_font_family | /wp/v2/font-families | No | 401 |
| 11 | Font Faces | wp_font_face | — | No | — |
| 12 | Floating Elements | e-floating-buttons | /wp/v2/e-floating-buttons | No | 1 |
| 13 | My Templates | elementor_library | /wp/v2/elementor_library | No | 401 |
| 14 | ElementsKit Items | elementskit_content | /wp/v2/elementskit-content | No | — |
| 15 | ElementsKit Templates | elementskit_template | /wp/v2/elementskit-template | No | 0 |

## Taxonomies

| # | Taxonomy | Slug | Post Type | Count |
|---|----------|------|-----------|-------|
| 1 | Categories | category | post | 10 (all empty) |
| 2 | Tags | post_tag | post | 7 (all empty) |
| 3 | Navigation Menus | nav_menu | nav_menu_item | — |
| 4 | Pattern Categories | wp_pattern_category | wp_block | — |

## Users

| # | Username | Display Name |
|---|----------|--------------|
| 1 | sainnovation | sainnovation |

## Menus

| # | Menu | Type | Items |
|---|------|------|-------|
| 1 | Header Menu | Elementor ehp-header (ID: 63) | About, Courses, For Students, Contact |
| 2 | Footer Menu | Elementor ehp-flex-footer (ID: 60) | About, Courses, For Students, Contact |
| 3 | Navigation Block | wp_navigation (ID: 4) | About, Contact, Courses, For Students, Home |
| 4 | Floating Contact | Elementor contact-buttons (ID: 162) | Email contact CTA |

## Widgets

| # | Sidebar/Location | Widget | Source |
|---|-----------------|--------|--------|
| 1 | Header | ehp-header | Hello Plus |
| 2 | Footer | ehp-flex-footer | Hello Plus |
| 3 | Floating | contact-buttons | Elementor |

## Registered Image Sizes

Standard WordPress sizes only (no custom sizes detected):
- thumbnail (150x150)
- medium (300x200)
- medium_large (768x512)
- full (original)

## Permalinks

| Property | Value |
|----------|-------|
| Structure | Default (plain ?p=ID) |
| Category base | /category/ |
| Tag base | /tag/ |

## Customizer Options

Not accessible via REST API (requires authentication). Based on HTML inspection:
- No custom colors detected
- No custom fonts detected (using Elementor local fonts)
- Theme color: #FFFFFF

## Elementor Kit

| Property | Value |
|----------|-------|
| Kit ID | 58 |
| Global colors | Not accessible |
| Global fonts | Varela Round, Montserrat (Google Fonts via Elementor) |

## REST API Namespaces

- oembed/1.0
- elementor-hello-plus/v1
- elementor-one/v1
- elementskit/v1
- elementor-hello-biz/v1
- elementor/v1
- elementor-ai/v1
- wp/v2
- wp-site-health/v1
- wp-block-editor/v1
- wp-abilities/v1

## Key Issues

1. **Permalinks set to default** — URLs use ?p=ID format
2. **No privacy policy page** — 404 on /privacy-policy/
3. **All categories and tags empty** — no posts exist
4. **Social media links broken** — Facebook has no href, others use generic homepages
5. **Floating contact widget** — has empty href (broken link)
6. **Copyright year hardcoded** — "©2026" in footer
7. **Developer credit** — "Developed by Cyberdomain Solutions" in footer
8. **Template text not customized** — Floating widget still has default Elementor text
9. **Duplicate Strategy service** — Courses page has duplicate "Strategy" service card
