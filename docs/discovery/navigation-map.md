# Navigation Audit

**Source:** https://www.sainnovationcollege.co.za
**Crawl Date:** 2026-07-21

## Header Navigation

**Type:** Elementor Hello Plus Header (`ehp-header`)
**Template ID:** 63
**Sticky:** Yes (with blur background)
**Logo Shape:** Sharp
**Primary Button Shape:** Round

### Menu Items (4)

| # | Label | URL | Has Submenu | Active On |
|---|-------|-----|-------------|-----------|
| 1 | About | /about/ | No | /about/ |
| 2 | Courses | /courses/ | No | /courses/ |
| 3 | For Students | /students/ | No | /students/ |
| 4 | Contact | /contact/ | No | /contact/ |

### Header Contact CTAs (3)

| # | Label | URL | Icon | Target |
|---|-------|-----|------|--------|
| 1 | Visit | https://maps.app.goo.gl/V4LqhhDbZeSUgGN37 | e-fas-map-marker-alt | _self |
| 2 | WhatsApp | https://wa.me/+27727733960 | e-fab-whatsapp | _blank |
| 3 | 0800 014 568 | tel:+27800%20014%20568 | e-fas-phone-alt | _self |

**Note:** Header CTAs appear TWICE in the DOM (desktop and mobile versions).

### Mobile Menu

- Toggle button: `ehp-header__button-toggle`
- Open icon: `e-fas-bars` (hamburger)
- Close icon: `e-eicon-close` (X)
- All 4 menu items visible in mobile menu

## Footer Navigation

**Type:** Elementor Hello Plus Footer (`ehp-flex-footer`)
**Template ID:** 60
**Preset:** Quick Reference

### Navigation Links (4)

| # | Label | URL |
|---|-------|-----|
| 1 | About | /about/ |
| 2 | Courses | /courses/ |
| 3 | For Students | /students/ |
| 4 | Contact | /contact/ |

### Social Links (4)

| # | Platform | URL | Icon | Status |
|---|----------|-----|------|--------|
| 1 | Facebook | (empty) | icon-facebook | BROKEN |
| 2 | Instagram | https://www.instagram.com/ | e-fab-instagram | GENERIC URL |
| 3 | X (Twitter) | https://www.twitter.com/ | e-fab-x-twitter | GENERIC URL |
| 4 | TikTok | https://www.tiktok.com/ | e-fab-tiktok | GENERIC URL |

### Footer Business Info

- **Title:** SA INNOVATION
- **Description:** "Using smart strategies, modern technology, and creative ideas to open opportunities, grow skills, and create real results for our students."
- **Address:** 147 Burger Avenue, 1st Floor Barclays Centre, Lyttelton Manor, Centurion 0157
- **Copyright:** ©2026. Developed by Cyberdomain Solutions

## WordPress Navigation Block

| Property | Value |
|----------|-------|
| ID | 4 |
| Title | Navigation |
| Items | About, Contact, Courses, For Students, Home |

**Note:** This navigation block exists but is NOT used on the frontend. The site uses Elementor's header template instead.

## Floating Contact Widget

**Type:** Elementor Contact Buttons
**Template ID:** 162
**Platform:** Email
**Position:** Bottom-left

| Property | Value |
|----------|-------|
| Profile Image | Team-9-300x209.png |
| Profile Name | Kiara Foster |
| Profile Title | Head of Content |
| Chat Bubble Name | Kiara |
| Chat Bubble Text | Edit this chat template from WP Admin > Templates > Floating Elements |
| CTA Text | Send us a message |
| CTA URL | (empty — broken) |
| Animation | Grow |
| Powered By | Elementor |

## All Internal Links (Complete)

| # | Source Page | Link Text | URL | Type |
|---|-------------|-----------|-----|------|
| 1 | All pages | Logo | / | Internal |
| 2 | All pages | About | /about/ | Internal |
| 3 | All pages | Courses | /courses/ | Internal |
| 4 | All pages | For Students | /students/ | Internal |
| 5 | All pages | Contact | /contact/ | Internal |
| 6 | All pages | SA INNOVATION (footer) | / | Internal |
| 7 | All pages | 0800 014 568 | tel:+27800%20014%20568 | Phone |
| 8 | All pages | Visit | https://maps.app.goo.gl/V4LqhhDbZeSUgGN37 | External |
| 9 | All pages | WhatsApp | https://wa.me/+27727733960 | External |
| 10 | About | Learn More | https://library.elementor.com/.../about/ | External (template) |
| 11 | About | Meet the team | https://library.elementor.com/.../about/ | External (template) |
| 12 | About | Our services | https://library.elementor.com/.../services/ | External (template) |
| 13 | About | Contact us | https://library.elementor.com/.../contact-us/ | External (template) |
| 14 | Home | Explore our Courses | https://library.elementor.com/.../services/ | External (template) |
| 15 | Courses | Meet our clients | https://library.elementor.com/.../clients/ | External (template) |
| 16 | Students | Contact Us | https://library.elementor.com/.../contact-us/ | External (template) |
| 17 | Students | About us | https://library.elementor.com/.../about/ | External (template) |
| 18 | Contact | Our services | https://library.elementor.com/.../services/ | External (template) |

**Critical Issue:** Multiple CTA buttons link to Elementor library template URLs (library.elementor.com), not to actual pages on the site.
