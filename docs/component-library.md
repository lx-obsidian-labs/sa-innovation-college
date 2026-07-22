# Component Library Specification -- SA Innovation College

**Version:** 1.0
**Date:** July 2026
**Purpose:** Complete specification for every component in the SA Innovation College design system. Each component consumes design tokens defined in `design-system.md` and implements UX patterns defined in `ux-research.md`. All values reference CSS custom properties from the token system -- no hardcoded values.

---

## Conventions

### CSS Class Naming

All components use BEM naming with the component name as the block:

```
.<block>__<element>--<modifier>
```

Examples:
- `.btn--primary`, `.btn__icon--left`
- `.card--compact`, `.card__badge--accent`
- `.input--error`, `.input__helper`

### File Structure

```
src/components/
  layout/
    Container/
    Section/
    Grid/
  navigation/
    Header/
    MobileMenu/
    Footer/
    Breadcrumb/
    SkipLink/
  content/
    Button/
    ButtonGroup/
    Badge/
    Card/
    CourseCard/
    TestimonialCard/
    StatBlock/
    FeatureCard/
  media/
    Image/
    Icon/
    Logo/
    PartnerLogo/
  form/
    Input/
    Textarea/
    Select/
    Form/
    ContactForm/
    CourseSearch/
  feedback/
    Accordion/
    Alert/
    LoadingSpinner/
    ErrorState/
    EmptyState/
  sections/
    Hero/
    StatsBar/
    CourseGrid/
    ProcessSteps/
    Timeline/
    TestimonialGrid/
    PartnerStrip/
    GalleryGrid/
    FAQSection/
    CTABanner/
```

### Responsive Breakpoints (Reference)

| Token | Width | Tailwind Prefix |
|-------|-------|-----------------|
| `--breakpoint-sm` | 640px | `sm:` |
| `--breakpoint-md` | 768px | `md:` |
| `--breakpoint-lg` | 1024px | `lg:` |
| `--breakpoint-xl` | 1280px | `xl:` |
| `--breakpoint-2xl` | 1536px | `2xl:` |

### Shared TypeScript Types

```typescript
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

export type SpacingToken =
  | '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5'
  | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '12'
  | '14' | '16' | '20' | '24' | '28' | '32';

export type ColorToken =
  | 'primary' | 'primary-light' | 'primary-dark'
  | 'accent' | 'accent-light' | 'accent-dark'
  | 'white' | 'gray-50' | 'gray-100' | 'gray-200' | 'gray-300'
  | 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900'
  | 'success' | 'warning' | 'error' | 'info'
  | 'surface' | 'surface-alt' | 'surface-raised';

export type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
```

---

## 1. Layout Components

---

### 1.1 Container

**Purpose:** Centered max-width wrapper with responsive horizontal padding. All page content sits inside a Container.

#### TypeScript Interface

```typescript
interface ContainerProps {
  /** Maximum width constraint */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Render as a different HTML element */
  as?: React.ElementType;
  /** Additional CSS class names */
  className?: string;
  /** Child content */
  children: React.ReactNode;
  /** Whether to use negative margin to bleed out of parent Section */
  bleed?: boolean;
}
```

#### CSS Classes

```
.container
.container--sm          max-width: var(--container-sm)     640px
.container--md          max-width: var(--container-md)     768px
.container--lg          max-width: var(--container-lg)     1024px
.container--xl          max-width: var(--container-xl)     1200px
.container--2xl         max-width: var(--container-2xl)    1400px
.container--full        max-width: none
.container--bleed       margin-inline: calc(-1 * var(--container-padding))
```

#### Design Tokens

| Property | Token | Mobile | Tablet | Desktop |
|----------|-------|--------|--------|---------|
| Padding inline | `--container-padding` | `var(--space-4)` (16px) | `var(--space-6)` (24px) | `var(--space-8)` (32px) |
| Max width (xl default) | `--container-xl` | 100% | 100% | 1200px |

#### Responsive Behavior

- Padding adjusts at `sm` (640px) and `lg` (1024px) breakpoints.
- `size="xl"` is the default for page content.
- `size="sm"` for single-column content (forms, articles).
- `size="full"` for edge-to-edge content (hero images, partner strips).

#### Accessibility

- Semantic `<div>` by default; use `as="main"` or `as="section"` when appropriate.
- No ARIA attributes required.

#### Usage Guidelines

- **Use:** Every page wraps its content in one or more Containers.
- **Do not use:** For components that intentionally bleed full-width (hero backgrounds, partner strips). Use `size="full"` or `bleed` instead.

---

### 1.2 Section

**Purpose:** Full-width section with vertical padding and optional background. Provides visual separation between page sections.

#### TypeScript Interface

```typescript
interface SectionProps {
  /** Background treatment */
  background?: 'white' | 'surface' | 'surface-alt' | 'primary-dark' | 'primary';
  /** Vertical padding density */
  padding?: 'none' | 'compact' | 'default' | 'spacious';
  /** Whether to remove top margin (for first section after hero) */
  flush?: boolean;
  /** Render as a different HTML element */
  as?: React.ElementType;
  /** Additional CSS class names */
  className?: string;
  /** Child content */
  children: React.ReactNode;
  /** Unique ID for anchor navigation */
  id?: string;
}
```

#### CSS Classes

```
.section
.section--white            background: var(--color-canvas)
.section--surface          background: var(--color-surface)
.section--surface-alt      background: var(--color-surface-alt)
.section--primary-dark     background: var(--color-primary-dark); color: var(--color-text-inverse)
.section--primary          background: var(--color-primary); color: var(--color-text-inverse)
.section--compact          padding-block: var(--section-padding-y-compact)
.section--default          padding-block: var(--section-padding-y)
.section--spacious         padding-block: var(--space-24)
.section--flush            padding-block-start: 0
```

#### Design Tokens

| Property | Token | Mobile | Desktop |
|----------|-------|--------|---------|
| Padding block (default) | `--section-padding-y` | `var(--space-10)` (40px) | `var(--space-16)` (64px) |
| Padding block (compact) | `--section-padding-y-compact` | `var(--space-8)` (32px) | `var(--space-12)` (48px) |
| Gap between sections | `--section-gap` | `var(--space-10)` (40px) | `var(--space-16)` (64px) |

#### Responsive Behavior

- Vertical padding reduces on mobile (<768px).
- Alternating `white` and `surface` backgrounds for visual rhythm (max 2 consecutive same-background sections).

#### Accessibility

- Render as `<section>` with `aria-labelledby` when a heading is present inside.
- Ensure sufficient contrast when using `primary-dark` or `primary` backgrounds (text must be `--color-text-inverse`).

#### Usage Guidelines

- **Use:** Every distinct content block on a page.
- **Do not use:** For spacing between individual elements within a section (use spacing utilities instead).

---

### 1.3 Grid

**Purpose:** Responsive CSS Grid system supporting 1-4 columns with consistent gap.

#### TypeScript Interface

```typescript
interface GridProps {
  /** Number of columns at different breakpoints */
  columns?: ResponsiveValue<1 | 2 | 3 | 4>;
  /** Gap between grid items */
  gap?: ResponsiveValue<SpacingToken>;
  /** Vertical alignment */
  align?: 'start' | 'center' | 'stretch';
  /** Additional CSS class names */
  className?: string;
  /** Child content (should be GridItem or equivalent) */
  children: React.ReactNode;
  /** Render as a different HTML element */
  as?: React.ElementType;
}
```

#### CSS Classes

```
.grid
.grid--cols-1              grid-template-columns: 1fr
.grid--cols-2              grid-template-columns: repeat(2, 1fr)
.grid--cols-3              grid-template-columns: repeat(3, 1fr)
.grid--cols-4              grid-template-columns: repeat(4, 1fr)
.grid--gap-{token}         gap: var(--space-{token})
.grid--align-start         align-items: start
.grid--align-center        align-items: center
```

#### Design Tokens

| Property | Token | Mobile | Tablet | Desktop |
|----------|-------|--------|--------|---------|
| Default columns | -- | 1 | 2 | 3 or 4 |
| Gap | `--grid-gap` | `var(--space-4)` (16px) | `var(--space-4)` (16px) | `var(--space-6)` (24px) |

#### Responsive Behavior

- 1 column on mobile (<640px).
- 2 columns on tablet (640px-1023px).
- 3 or 4 columns on desktop (1024px+).
- Items stack naturally at lower breakpoints.

#### Accessibility

- Use semantic HTML for grid items (e.g., `<article>`, `<li>`).
- No ARIA attributes required on the grid container itself.

#### Usage Guidelines

- **Use:** For card grids, feature layouts, footer columns, stats rows.
- **Do not use:** For page-level layout (use CSS Grid or Flexbox directly). For simple two-column layouts, prefer Flexbox.

---

## 2. Navigation Components

---

### 2.1 Header

**Purpose:** Sticky site header with logo, navigation links, CTA buttons, and mobile menu trigger.

#### TypeScript Interface

```typescript
interface HeaderProps {
  /** Whether the header has scrolled past the hero (triggers compact style) */
  scrolled?: boolean;
  /** Whether the mobile menu is open */
  mobileMenuOpen?: boolean;
  /** Callback when mobile menu trigger is clicked */
  onMobileMenuToggle?: () => void;
  /** Navigation items */
  navItems?: Array<{
    label: string;
    href: string;
    children?: Array<{ label: string; href: string }>;
  }>;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.header
.header--scrolled          backdrop-filter: var(--nav-bg-blur); box-shadow: var(--nav-shadow)
.header__logo
.header__logo-img
.header__nav               (desktop nav container)
.header__nav-link
.header__nav-link--active  color: var(--nav-link-color-active)
.header__cta-group         (desktop CTA buttons)
.header__mobile-trigger    (hamburger button)
.header__mobile-trigger--open  (transform hamburger to X)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height (desktop) | `--nav-height` | 64px |
| Height (mobile) | `--nav-height-mobile` | 56px |
| Background | `--nav-bg` | `rgba(255, 255, 255, 0.9)` |
| Backdrop blur | `--nav-bg-blur` | `blur(12px)` |
| Shadow | `--nav-shadow` | `var(--shadow-sm)` |
| Bottom border | `--nav-border-bottom` | `1px solid var(--color-border)` |
| Z-index | `--nav-z-index` | `var(--z-sticky)` (1020) |
| Link font size | `--nav-link-font-size` | 0.9375rem (15px) |
| Link font weight | `--nav-link-font-weight` | `var(--font-weight-medium)` |
| Link color | `--nav-link-color` | `var(--color-text-primary)` |
| Link hover color | `--nav-link-color-hover` | `var(--color-primary)` |
| Link active color | `--nav-link-color-active` | `var(--color-primary)` |

#### Responsive Behavior

- **Desktop (1024px+):** Full horizontal nav with all links, CTAs visible, hamburger hidden.
- **Tablet (768px-1023px):** Logo + hamburger + "Apply Now" CTA only.
- **Mobile (<768px):** Logo + hamburger. Compact height (56px).
- Sticky at all breakpoints. Appears after scrolling past hero on desktop (optional).
- Logo may shrink slightly when `scrolled` is true.

#### Accessibility

- Semantic `<header>` element.
- `role="banner"` implied by `<header>`.
- Logo link: `<a>` with `aria-label="SA Innovation College -- Home"`.
- Desktop nav: `<nav aria-label="Primary navigation">`.
- Hamburger trigger: `<button aria-expanded={mobileMenuOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu">`.
- Focus visible on all interactive elements: 2px solid `var(--color-border-focus)` with 2px offset.
- Tab order: logo -> nav links -> CTAs -> hamburger.

#### Usage Guidelines

- **Use:** Present on every page as the primary navigation element.
- **Do not use:** For section-specific navigation (use Breadcrumb or Tab components instead).

---

### 2.2 MobileMenu

**Purpose:** Full-screen overlay navigation for mobile viewports. Contains accordion-based navigation, search, and quick-action CTAs.

#### TypeScript Interface

```typescript
interface MobileMenuProps {
  /** Whether the menu is visible */
  isOpen: boolean;
  /** Callback when menu is closed */
  onClose: () => void;
  /** Navigation structure */
  navItems?: Array<{
    label: string;
    href?: string;
    children?: Array<{ label: string; href: string }>;
  }>;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.mobile-menu
.mobile-menu--open                (visible state)
.mobile-menu__overlay             background: var(--mobile-overlay-bg)
.mobile-menu__panel               background: var(--mobile-menu-bg); width: var(--mobile-menu-width)
.mobile-menu__header              (close button + search)
.mobile-menu__close               (X icon, top-left)
.mobile-menu__search              (search input)
.mobile-menu__nav                 (navigation list)
.mobile-menu__item
.mobile-menu__link
.mobile-menu__link--has-children  (shows chevron right)
.mobile-menu__sub-menu            (slides in from right)
.mobile-menu__sub-menu-header     (back arrow + parent label)
.mobile-menu__quick-actions       (sticky bottom CTAs)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Overlay background | `--mobile-overlay-bg` | `rgba(15, 23, 42, 0.6)` |
| Menu background | `--mobile-menu-bg` | `var(--color-white)` |
| Menu width | `--mobile-menu-width` | 100% |
| Z-index | `--mobile-menu-z-index` | `var(--z-modal)` (1050) |
| Link font size | -- | `var(--text-nav-mobile)` (18px, 500 weight) |
| Item height | -- | 56px |
| Animation | -- | `var(--transition-slow)` (300ms) slide-up + fade-in |

#### Responsive Behavior

- Only rendered on viewports below `lg` breakpoint (1024px).
- Full viewport height and width.
- Sub-menus slide in from the right edge.
- Body scroll is locked when open (`overflow: hidden` on `<body>`).

#### Accessibility

- `<div role="dialog" aria-modal="true" aria-label="Navigation menu">`.
- Focus trap: Tab cycles through focusable elements within the menu only.
- On open: focus moves to first focusable element (close button or first link).
- On close: focus returns to hamburger trigger button.
- Close triggers: X button, `Escape` key, tap on overlay background.
- Each accordion item: `<button aria-expanded="true|false" aria-controls="submenu-{id}">`.
- Sub-menu back button: `<button aria-label="Back to main menu">`.
- Quick action links: descriptive text, not just icons.

#### Usage Guidelines

- **Use:** On mobile viewports as the primary navigation method.
- **Do not use:** On desktop viewports. Desktop uses inline Header navigation.
- **Important:** Always include "Apply Now" and "Call 0800 014 568" as quick actions at the bottom.

---

### 2.3 Footer

**Purpose:** Multi-column site footer with brand, navigation links, contact information, social links, accreditation strip, and legal links.

#### TypeScript Interface

```typescript
interface FooterProps {
  /** Footer navigation columns */
  columns?: Array<{
    heading: string;
    links: Array<{ label: string; href: string }>;
  }>;
  /** Social media links */
  socialLinks?: Array<{
    platform: 'facebook' | 'instagram' | 'youtube';
    href: string;
    label: string;
  }>;
  /** Accreditation information */
  accreditation?: Array<{
    name: string;
    logo?: string;
    registrationNumber?: string;
  }>;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.footer
.footer__brand              (logo + tagline column)
.footer__columns            (multi-column link grid)
.footer__column
.footer__column-heading
.footer__link-list
.footer__link
.footer__contact            (phone, email, address)
.footer__social             (social icon row)
.footer__accreditation      (accreditation logos strip)
.footer__legal              (copyright, privacy, PAIA, terms)
.footer__legal-link
.footer__back-to-top
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Background | -- | `var(--color-gray-900)` |
| Text color | -- | `var(--color-text-inverse)` |
| Link color | -- | `var(--color-gray-300)` |
| Link hover color | -- | `var(--color-white)` |
| Heading color | -- | `var(--color-white)` |
| Border top | -- | `1px solid var(--color-gray-700)` |
| Padding block | -- | `var(--space-16)` (64px) top, `var(--space-8)` (32px) bottom |
| Column gap | -- | `var(--space-8)` (32px) |
| Accreditation strip background | -- | `var(--color-gray-800)` |
| Legal row background | -- | `var(--color-black)` |

#### Responsive Behavior

- **Desktop (1024px+):** 5-column layout (Brand + 4 link columns).
- **Tablet (768px-1023px):** 2-column layout, links wrap into 2 rows.
- **Mobile (<768px):** Single column, accordion-style collapsing sections.

#### Accessibility

- Semantic `<footer>` element with `role="contentinfo"`.
- Each column heading: `<h2>` or `<h3>` (depending on heading hierarchy).
- Social links: `<a aria-label="Facebook" href="...">` with visible SVG icon.
- Accreditation logos: `<img alt="DHET Accredited">` with meaningful alt text.
- Click-to-call: `<a href="tel:0800014568">0800 014 568</a>`.
- Address: `<address>` element.
- Back-to-top: `<button aria-label="Back to top">`.

#### Usage Guidelines

- **Use:** Present on every page as the site footer.
- **Do not use:** For section-specific supplementary links (use inline links or card links).

---

### 2.4 Breadcrumb

**Purpose:** Page hierarchy navigation showing the current page position within the site structure.

#### TypeScript Interface

```typescript
interface BreadcrumbProps {
  /** Array of breadcrumb items (last item is the current page) */
  items: Array<{
    label: string;
    href: string;
  }>;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.breadcrumb
.breadcrumb__list           (ordered list)
.breadcrumb__item           (list item)
.breadcrumb__link           (anchor, not on current page)
.breadcrumb__separator      (chevron or slash separator)
.breadcrumb__current        (current page, non-interactive)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Font size | -- | `var(--text-body-sm)` (14-15px) |
| Text color (links) | -- | `var(--color-text-secondary)` |
| Text color (current) | -- | `var(--color-text-primary)` |
| Separator color | -- | `var(--color-text-muted)` |
| Spacing between items | -- | `var(--space-2)` (8px) |

#### Responsive Behavior

- Truncation on mobile: show first item + ellipsis + current page.
- Full breadcrumb trail on desktop.

#### Accessibility

- `<nav aria-label="Breadcrumb">`.
- `<ol>` list (implies order).
- Current page: `<span aria-current="page">` (not a link).
- Separators: `aria-hidden="true"` (decorative).

#### Usage Guidelines

- **Use:** On all interior pages except the homepage. Programmes listing, programme detail, admissions, about, contact.
- **Do not use:** On the homepage (no parent). In the mobile menu (navigation handles hierarchy).

---

### 2.5 SkipLink

**Purpose:** Accessibility skip link that allows keyboard users to bypass the header navigation and jump directly to main content.

#### TypeScript Interface

```typescript
interface SkipLinkProps {
  /** Target ID to skip to */
  targetId?: string;
  /** Link text */
  label?: string;
}
```

#### CSS Classes

```
.skip-link                 position: absolute; top: -100%; left: var(--space-4); z-index: var(--z-tooltip)
.skip-link:focus           top: var(--space-4); (visible on focus)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Background | -- | `var(--color-primary)` |
| Text color | -- | `var(--color-text-inverse)` |
| Padding | -- | `var(--space-3) var(--space-4)` |
| Border radius | -- | `var(--radius-md)` |
| Font weight | -- | `var(--font-weight-semibold)` |

#### Accessibility

- First focusable element on the page.
- Visually hidden until focused.
- Target: `id="main-content"` on `<main>`.
- On activation, focus moves to the target element.

#### Usage Guidelines

- **Use:** Present on every page. Required for WCAG 2.2 AA compliance.
- **Do not remove or hide permanently.**

---

## 3. Content Components

---

### 3.1 Button

**Purpose:** Interactive button element with variant, size, and state support. The primary interaction element for CTAs throughout the site.

#### TypeScript Interface

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Render as a link element */
  href?: string;
  /** Render as a different element */
  as?: React.ElementType;
  /** Icon to display before the label */
  iconLeft?: React.ReactNode;
  /** Icon to display after the label */
  iconRight?: React.ReactNode;
  /** Full-width button */
  fullWidth?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Disabled state */
  isDisabled?: boolean;
  /** Button content */
  children: React.ReactNode;
}
```

#### CSS Classes

```
.btn
.btn--primary              bg: var(--btn-primary-bg); color: var(--btn-primary-text); border: var(--btn-primary-border)
.btn--secondary            bg: var(--btn-secondary-bg); color: var(--btn-secondary-text); border: var(--btn-secondary-border)
.btn--accent               bg: var(--btn-accent-bg); color: var(--btn-accent-text); border: var(--btn-accent-border)
.btn--ghost                bg: var(--btn-ghost-bg); color: var(--btn-ghost-text); border: var(--btn-ghost-border)
.btn--outline              bg: var(--btn-outline-bg); color: var(--btn-outline-text); border: var(--btn-outline-border)
.btn--sm
.btn--md
.btn--lg
.btn--xl
.btn--full-width           width: 100%
.btn--loading              pointer-events: none; opacity: 0.7
.btn__icon--left
.btn__icon--right
.btn__spinner              (loading spinner replacing content)
```

#### Design Tokens

| Property | Token | SM | MD | LG | XL |
|----------|-------|----|----|----|----|
| Height | `--btn-height-*` | 32px | 40px | 48px | 56px |
| Padding X | `--btn-padding-x-*` | 12px | 20px | 24px | 32px |
| Padding Y | `--btn-padding-y-*` | 4px | 8px | 12px | 14px |
| Font size | `--btn-font-size-*` | 13px | 14px | 16px | 18px |
| Border radius | `--btn-radius` | `var(--radius-md)` (8px) | same | same | same |
| Font weight | `--btn-font-weight` | `var(--font-weight-semibold)` | same | same | same |
| Text transform | `--btn-text-transform` | uppercase | same | same | same |
| Letter spacing | `--btn-letter-spacing` | `var(--letter-spacing-wide)` | same | same | same |

#### States

| State | Visual Change | Token Reference |
|-------|--------------|-----------------|
| Default | Base appearance | Per variant |
| Hover | Background darken, subtle shadow | `--btn-primary-bg-hover`, `--btn-primary-shadow-hover` |
| Focus | 2px solid `var(--color-border-focus)` ring with 2px offset | `--color-border-focus` |
| Active/Pressed | Further darken background | `--btn-primary-bg-hover` (shared) |
| Disabled | 50% opacity, `cursor: not-allowed` | -- |
| Loading | Spinner replaces text, `pointer-events: none` | -- |

#### Responsive Behavior

- Default size: `md` on all breakpoints.
- Mobile: CTAs should use `lg` or `xl` for touch target compliance (min 44x44px).
- `fullWidth` on mobile for primary CTAs; inline on desktop.

#### Accessibility

- Native `<button>` element (or `<a>` when `href` is provided).
- Focus visible ring on keyboard focus.
- Loading state: `aria-busy="true"` and `aria-label="Loading..."`.
- Disabled: `aria-disabled="true"` and `tabindex="-1"` when rendered as `<a>`.
- Icon-only buttons (no children): must have `aria-label`.
- Touch target: minimum 44x44px at all sizes.

#### Usage Guidelines

- **Use:** For all interactive actions -- CTAs, form submissions, navigation triggers.
- **primary:** Main CTA per page (max 1 per visible section). "Apply Now", "Enquire Now".
- **secondary:** Secondary actions. "Learn More", "View All Programmes".
- **accent:** High-emphasis promotional CTA. "Start Free Course".
- **ghost:** Tertiary actions, in-page navigation. "Skip to content", filter chips.
- **outline:** Alternative emphasis. "Download Prospectus".
- **Do not use:** More than one `primary` button per section. For inline text links, use `<a>` with link styles.

---

### 3.2 ButtonGroup

**Purpose:** Groups related CTA buttons with consistent spacing and alignment.

#### TypeScript Interface

```typescript
interface ButtonGroupProps {
  /** Alignment of buttons */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Direction of button flow */
  direction?: 'row' | 'column';
  /** Spacing between buttons */
  spacing?: SpacingToken;
  /** Additional CSS class names */
  className?: string;
  /** Child Button components */
  children: React.ReactNode;
}
```

#### CSS Classes

```
.btn-group
.btn-group--row             flex-direction: row
.btn-group--column          flex-direction: column
.btn-group--align-start     justify-content: flex-start
.btn-group--align-center    justify-content: center
.btn-group--align-end       justify-content: flex-end
.btn-group--align-stretch   > * { flex: 1 }
.btn-group--gap-{token}     gap: var(--space-{token})
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Default gap | -- | `var(--space-3)` (12px) |
| Mobile direction | -- | `column` (stacked full-width) |
| Desktop direction | -- | `row` (side by side) |

#### Responsive Behavior

- Stacks vertically on mobile (<640px).
- Horizontal row on desktop (640px+).

#### Accessibility

- Group with `<div role="group" aria-label="...">`.
- Each button retains its own focus ring.

#### Usage Guidelines

- **Use:** When a section has 2-3 related CTAs (e.g., "Apply Now" + "Enquire Now").
- **Do not use:** For single buttons. For more than 3 buttons, reconsider the action hierarchy.

---

### 3.3 Badge

**Purpose:** Small label for status, category, or metadata indicators.

#### TypeScript Interface

```typescript
interface BadgeProps {
  /** Visual variant */
  variant?: 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'gray';
  /** Badge content */
  children: React.ReactNode;
  /** Optional icon before text */
  icon?: React.ReactNode;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.badge
.badge--primary             bg: var(--badge-primary-bg); color: var(--badge-primary-text)
.badge--accent              bg: var(--badge-accent-bg); color: var(--badge-accent-text)
.badge--success             bg: var(--badge-success-bg); color: var(--badge-success-text)
.badge--warning             bg: var(--badge-warning-bg); color: var(--badge-warning-text)
.badge--error               bg: var(--badge-error-bg); color: var(--badge-error-text)
.badge--gray                bg: var(--badge-gray-bg); color: var(--badge-gray-text)
.badge__icon
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height | `--badge-height` | 1.5rem (24px) |
| Padding X | `--badge-padding-x` | `var(--space-2)` (8px) |
| Border radius | `--badge-radius` | `var(--radius-full)` (pill) |
| Font size | `--badge-font-size` | 0.75rem (12px) |
| Font weight | `--badge-font-weight` | `var(--font-weight-semibold)` |
| Letter spacing | `--badge-letter-spacing` | `var(--letter-spacing-wide)` (0.025em) |

#### States

- Default: static, no interaction.
- No hover, focus, or active states (badges are not interactive unless wrapped in a link).

#### Responsive Behavior

- No size changes across breakpoints.
- Wraps naturally within its parent container.

#### Accessibility

- `<span>` element.
- If badge conveys status, add `role="status"` or `aria-label`.
- Decorative badges (purely visual categorisation) do not need ARIA.

#### Usage Guidelines

- **Use:** Programme type labels ("Short Course", "Free"), status indicators, category tags.
- **accent variant:** Use for "Free" programme tags (high visibility).
- **Do not use:** For interactive elements (use Button instead). For long text content.

---

### 3.4 Card

**Purpose:** Generic content container for grouping related information with consistent padding, background, and optional border/shadow.

#### TypeScript Interface

```typescript
interface CardProps {
  /** Visual variant */
  variant?: 'default' | 'compact' | 'bordered' | 'elevated';
  /** Whether the card is clickable (wraps in <a> or <button>) */
  href?: string;
  /** Click handler (when card is interactive) */
  onClick?: () => void;
  /** Background color override */
  background?: 'white' | 'surface';
  /** Padding density */
  padding?: SpacingToken;
  /** Border radius override */
  radius?: RadiusToken;
  /** Additional CSS class names */
  className?: string;
  /** Child content */
  children: React.ReactNode;
}
```

#### CSS Classes

```
.card
.card--default             background: var(--card-bg); box-shadow: var(--card-shadow); border: var(--card-border)
.card--compact             padding: var(--card-padding-compact)
.card--bordered            border: var(--card-border); box-shadow: none
.card--elevated            box-shadow: var(--shadow-lg); border: none
.card--interactive         cursor: pointer; transition: box-shadow var(--transition-base), transform var(--transition-base)
.card--interactive:hover   box-shadow: var(--card-shadow-hover); transform: translateY(-2px)
.card--bg-white            background: var(--color-white)
.card--bg-surface          background: var(--color-surface)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Padding (default) | `--card-padding` | `var(--space-6)` (24px) |
| Padding (compact) | `--card-padding-compact` | `var(--space-4)` (16px) |
| Border radius | `--card-radius` | `var(--radius-md)` (8px) |
| Shadow | `--card-shadow` | `var(--shadow-card)` |
| Shadow (hover) | `--card-shadow-hover` | `var(--shadow-card-hover)` |
| Background | `--card-bg` | `var(--color-surface-raised)` (white) |
| Border | `--card-border` | `1px solid var(--color-border)` |

#### States

| State | Visual Change |
|-------|--------------|
| Default | Base shadow and background |
| Hover (interactive) | Elevated shadow, slight translateY(-2px) |
| Focus (interactive) | Focus ring: 2px solid `var(--color-border-focus)` |
| Active (interactive) | Return to base shadow |

#### Responsive Behavior

- Padding reduces on mobile (<640px): 24px to 16px.
- Cards in a Grid stack 1-per-row on mobile.

#### Accessibility

- When interactive (`href` or `onClick`): render as `<a>` or `<button>` with full card as click target.
- Focus ring visible around the entire card.
- Non-interactive cards: `<div>` or `<article>`.
- If card has a heading, associate with `aria-labelledby`.

#### Usage Guidelines

- **Use:** As a generic container for testimonials, features, blog posts, or any grouped content.
- **Do not use:** For simple text that does not need visual grouping. For programme-specific content, use CourseCard.

---

### 3.5 CourseCard

**Purpose:** Programme-specific card displaying course image, title, metadata (duration, fees, entry requirements), and action CTA. Optimised for the programme listing grid.

#### TypeScript Interface

```typescript
interface CourseCardProps {
  /** Programme title */
  title: string;
  /** Programme description (truncated) */
  description: string;
  /** Programme image URL */
  image?: string;
  /** Image alt text */
  imageAlt: string;
  /** Programme URL */
  href: string;
  /** Duration label */
  duration?: string;
  /** Fee information */
  fee?: string;
  /** Entry requirement summary */
  entryRequirement?: string;
  /** Programme type badge */
  badge?: string;
  /** Badge variant */
  badgeVariant?: BadgeProps['variant'];
  /** NQF Level */
  nqfLevel?: string;
  /** Study mode (e.g., "Full-Time", "Part-Time", "Online") */
  studyMode?: string;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.course-card
.course-card__image-wrapper   (aspect-ratio: 16/9; overflow: hidden)
.course-card__image           (object-fit: cover; transition: transform var(--transition-slow))
.course-card--interactive:hover .course-card__image  transform: scale(1.05)
.course-card__body            (padding area)
.course-card__badge           (positioned absolute top-left of image)
.course-card__title           (font: var(--text-h4); color: var(--color-text-primary))
.course-card__description     (font: var(--text-body-sm); color: var(--color-text-secondary))
.course-card__meta            (row of metadata items)
.course-card__meta-item       (icon + text)
.course-card__meta-icon
.course-card__meta-text
.course-card__cta             (footer with CTA link)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Card padding | `--card-padding` | `var(--space-6)` (24px) |
| Card background | `--card-bg` | `var(--color-surface-raised)` |
| Card shadow | `--card-shadow` | `var(--shadow-card)` |
| Card border radius | `--card-radius` | `var(--radius-md)` |
| Title font | -- | `var(--text-h4)` |
| Description font | -- | `var(--text-body-sm)` |
| Meta font | -- | `var(--text-caption)` |
| Meta icon color | -- | `var(--color-primary)` |
| Image aspect ratio | -- | 16/9 |
| Badge position | -- | top-left of image, `var(--space-3)` offset |

#### States

| State | Visual Change |
|-------|--------------|
| Default | Base card with shadow |
| Hover (interactive) | Elevated shadow, image scales 1.05x |
| Focus | Focus ring around entire card |
| Active | Return to base |

#### Responsive Behavior

- Full-width single column on mobile.
- 2 columns on tablet.
- 3 columns on desktop.
- Image aspect ratio maintained at all sizes.
- Metadata items wrap to second line on narrow cards.

#### Accessibility

- Render as `<article>` (semantic) or `<a>` if entire card is clickable.
- Image: `<img>` with descriptive `alt` text.
- Title: `<h3>` or `<h4>` (depends on page heading hierarchy).
- Badge: `<span>` with `aria-label` if meaning is not conveyed by text.
- Card link: entire card is one large tap target; title also wrapped in `<a>` for keyboard access.
- Focus ring around the whole card.

#### Usage Guidelines

- **Use:** Programme listing pages, "Featured Programmes" on homepage, related programmes on detail pages.
- **Do not use:** For non-programme content (use Card). For detailed programme information (use Programme Detail page).

---

### 3.6 TestimonialCard

**Purpose:** Quote card displaying a student testimonial with photo, attribution, and source context.

#### TypeScript Interface

```typescript
interface TestimonialCardProps {
  /** Student or graduate name */
  name: string;
  /** Programme studied */
  programme: string;
  /** Current role or outcome (e.g., "Traffic Officer, City of Tshwane") */
  role?: string;
  /** Testimonial quote text */
  quote: string;
  /** Photo URL */
  photo?: string;
  /** Photo alt text */
  photoAlt?: string;
  /** Source of the testimonial (e.g., "Google Reviews", "Alumni") */
  source?: string;
  /** Star rating (1-5) */
  rating?: number;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.testimonial-card
.testimonial-card__photo       (circular image, 80px diameter)
.testimonial-card__stars       (star rating row)
.testimonial-card__star        (filled star SVG)
.testimonial-card__star--empty (empty star SVG)
.testimonial-card__quote       (quotation mark + text)
.testimonial-card__name        (font: var(--text-body); font-weight: 600)
.testimonial-card__role        (font: var(--text-caption); color: var(--color-text-secondary))
.testimonial-card__source      (badge or label for source)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Photo size | -- | 80px diameter |
| Photo border | -- | `3px solid var(--color-primary)` |
| Quote font | -- | `var(--text-body)` |
| Quote color | -- | `var(--color-text-primary)` |
| Name font | -- | `var(--text-body)` |
| Name weight | -- | `var(--font-weight-semibold)` |
| Role font | -- | `var(--text-caption)` |
| Role color | -- | `var(--color-text-secondary)` |
| Card padding | -- | `var(--space-6)` (24px) |
| Card background | -- | `var(--color-white)` |
| Card shadow | -- | `var(--shadow-card)` |
| Star color | -- | `var(--color-accent)` |
| Quote mark color | -- | `var(--color-primary)` (large, decorative) |

#### States

- Static, non-interactive.
- No hover or active states unless card is wrapped in a link.

#### Responsive Behavior

- Full-width on mobile.
- 2 or 3 columns in a grid on desktop.
- Photo remains 80px at all breakpoints.

#### Accessibility

- `<figure>` with `<blockquote>` for semantic quote.
- Photo: `<img>` with alt text (name + programme).
- Star rating: `aria-label="5 out of 5 stars"`.
- Source label: `<cite>` element.

#### Usage Guidelines

- **Use:** Testimonial grids, homepage social proof section, programme detail pages.
- **Do not use:** Without a real name and consent. Do not fabricate testimonials. If real testimonials are unavailable, use EmptyState.

---

### 3.7 StatBlock

**Purpose:** Single statistic display with a large number and descriptive label. Used in stats sections and counters.

#### TypeScript Interface

```typescript
interface StatBlockProps {
  /** The statistic value (number or text) */
  value: string | number;
  /** Descriptive label below the number */
  label: string;
  /** Optional suffix (e.g., "+", "%") */
  suffix?: string;
  /** Whether to animate the number counting up on scroll */
  animate?: boolean;
  /** Color variant */
  variant?: 'default' | 'light' | 'accent';
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.stat-block
.stat-block__value            (font: var(--text-stat); font-weight: 700)
.stat-block__suffix            (font: var(--text-h3); color: var(--color-accent))
.stat-block__label             (font: var(--text-body); color: var(--color-text-secondary))
.stat-block--light             (white text for dark backgrounds)
.stat-block--accent            (accent color value)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Value font | `--text-stat` | `clamp(2rem, 1.5rem + 2vw, 3.5rem)` |
| Value weight | -- | `var(--font-weight-bold)` (700) |
| Value line height | -- | `var(--line-height-none)` (1) |
| Value color (default) | -- | `var(--color-primary)` |
| Suffix color | -- | `var(--color-accent)` |
| Label font | -- | `var(--text-body)` |
| Label color | -- | `var(--color-text-secondary)` |
| Label weight | -- | `var(--font-weight-regular)` |
| Spacing between value and label | -- | `var(--space-2)` (8px) |
| Light variant value color | -- | `var(--color-white)` |
| Light variant label color | -- | `var(--color-gray-300)` |

#### States

- Static by default.
- Animated count-up on scroll into view when `animate` is true (1.5s duration).
- Reduced motion: displays final number immediately.

#### Responsive Behavior

- Value font scales via `clamp()`.
- Label wraps naturally.
- 2x2 grid on mobile, 4 across on desktop (when used in StatsBar).

#### Accessibility

- `<div>` with `aria-label="{value} {label}"`.
- Animated numbers: `aria-live="polite"` announced on completion.
- Reduced motion: no animation, value displayed statically.

#### Usage Guidelines

- **Use:** Homepage stats section, programme statistics, about page metrics.
- **Do not use:** For non-numerical content. All values must be verifiable and factual (design brief: "prove outcomes").

---

### 3.8 FeatureCard

**Purpose:** Icon + title + description card for displaying features, benefits, or value propositions.

#### TypeScript Interface

```typescript
interface FeatureCardProps {
  /** Icon component or SVG */
  icon: React.ReactNode;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Optional link destination */
  href?: string;
  /** Icon background variant */
  iconVariant?: 'primary' | 'accent' | 'light' | 'none';
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.feature-card
.feature-card__icon-wrapper    (circular or rounded-square background for icon)
.feature-card__icon-wrapper--primary   bg: var(--color-primary); color: white
.feature-card__icon-wrapper--accent    bg: var(--color-accent); color: var(--color-gray-900)
.feature-card__icon-wrapper--light     bg: var(--color-gray-100); color: var(--color-primary)
.feature-card__icon-wrapper--none      background: none
.feature-card__icon             (SVG, 24px or 32px)
.feature-card__title            (font: var(--text-h4))
.feature-card__description      (font: var(--text-body); color: var(--color-text-secondary))
.feature-card--interactive      cursor: pointer
.feature-card--interactive:hover  box-shadow: var(--shadow-card-hover)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Icon wrapper size | -- | 48px (small) or 64px (large) |
| Icon wrapper border radius | -- | `var(--radius-lg)` (12px) |
| Icon size | -- | 24px (in 48px wrapper) or 32px (in 64px wrapper) |
| Title font | -- | `var(--text-h4)` |
| Description font | -- | `var(--text-body)` |
| Spacing icon-to-title | -- | `var(--space-4)` (16px) |
| Spacing title-to-description | -- | `var(--space-2)` (8px) |
| Card padding | -- | `var(--space-6)` (24px) |

#### Responsive Behavior

- Full-width on mobile.
- 2 columns on tablet.
- 3 or 4 columns on desktop.
- Icon wrapper size may reduce on mobile.

#### Accessibility

- `<article>` or `<div>` with appropriate heading.
- Title: `<h3>` or `<h4>`.
- Icon: `<aria-hidden="true">` (decorative when title is present).
- If interactive: `<a>` wrapping entire card with `aria-label`.

#### Usage Guidelines

- **Use:** "Why Choose Us" sections, feature comparisons, value proposition grids.
- **Do not use:** For complex content that needs more than icon + title + description (use Card).

---

## 4. Media Components

---

### 4.1 Image

**Purpose:** Optimised image component with lazy loading, responsive srcset, format fallbacks, and placeholder support.

#### TypeScript Interface

```typescript
interface ImageProps {
  /** Image source URL */
  src: string;
  /** Alt text (required for meaningful images) */
  alt: string;
  /** Image width (required for CLS prevention) */
  width: number;
  /** Image height (required for CLS prevention) */
  height: number;
  /** Responsive srcset sizes */
  sizes?: string;
  /** Priority loading (above the fold) */
  priority?: boolean;
  /** Aspect ratio override (e.g., "16/9", "1/1") */
  aspectRatio?: string;
  /** Object fit behavior */
  objectFit?: 'cover' | 'contain' | 'fill';
  /** Placeholder strategy */
  placeholder?: 'blur' | 'empty' | 'skeleton';
  /** Blur placeholder data URL (LQIP) */
  blurDataURL?: string;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.image-wrapper                (relative container for aspect ratio)
.image-wrapper--16-9          aspect-ratio: 16/9
.image-wrapper--1-1           aspect-ratio: 1/1
.image-wrapper--4-3           aspect-ratio: 4/3
.image                        (width: 100%; height: 100%; object-fit: cover)
.image--loading               (opacity: 0 or skeleton)
.image--loaded                (opacity: 1; transition: opacity var(--transition-base))
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Transition on load | -- | `var(--transition-base)` (200ms) |
| Placeholder background | -- | `var(--color-gray-100)` |
| Border radius (when in card) | -- | Inherited from parent |

#### Responsive Behavior

- Uses Next.js `<Image>` with automatic `srcset` generation.
- Sizes: 480w (mobile), 768w (tablet), 1200w (desktop).
- Below-fold images: `loading="lazy"` and `decoding="async"`.
- Above-fold images: `loading="eager"` and `fetchpriority="high"`.
- Format: WebP with JPEG fallback via `<picture>`.

#### Accessibility

- `<img>` element (not CSS background image).
- Meaningful images: descriptive `alt` text (max 125 characters).
- Decorative images: `alt=""`.
- Complex images: `aria-describedby` pointing to a longer description.
- Never use `alt` text that starts with "Image of" or "Photo of" (redundant for screen readers).

#### Usage Guidelines

- **Use:** All images throughout the site. Never use CSS background images for meaningful content.
- **Priority loading:** Hero images, first programme card image only.
- **Max file sizes:** Hero 80KB, card thumbnail 40KB, testimonial photo 15KB.

---

### 4.2 Icon

**Purpose:** SVG icon component for consistent iconography throughout the site.

#### TypeScript Interface

```typescript
interface IconProps {
  /** Icon name or SVG element */
  name: string;
  /** Icon size */
  size?: 16 | 20 | 24 | 32;
  /** Icon color (defaults to currentColor) */
  color?: string;
  /** Additional CSS class names */
  className?: string;
  /** Accessible label (if icon is standalone) */
  'aria-label'?: string;
  /** Hide from screen readers (when icon is decorative alongside text) */
  'aria-hidden'?: boolean;
}
```

#### CSS Classes

```
.icon
.icon--16                    width: 16px; height: 16px
.icon--20                    width: 20px; height: 20px
.icon--24                    width: 24px; height: 24px (default)
.icon--32                    width: 32px; height: 32px
.icon svg                     width: 100%; height: 100%; fill: currentColor
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Default size | -- | 24px |
| Default color | -- | `currentColor` (inherits from parent) |
| Transition (for animated icons) | -- | `var(--transition-fast)` (150ms) |

#### Responsive Behavior

- Fixed pixel sizes, no responsive scaling.
- Select appropriate size based on context (24px for buttons, 16px for inline, 32px for feature cards).

#### Accessibility

- When icon is the only content in a button/link: must have `aria-label`.
- When icon accompanies text: `aria-hidden="true"` (text provides the label).
- SVGs should have `fill="currentColor"` to inherit text color.

#### Usage Guidelines

- **Use:** Navigation arrows, form field icons, feature card icons, social media icons.
- **Do not use:** For complex illustrations (use Image component). For logos (use Logo or PartnerLogo).

---

### 4.3 Logo

**Purpose:** Site logo with fallback to text. Renders the SA Innovation College logo with appropriate sizing and link behavior.

#### TypeScript Interface

```typescript
interface LogoProps {
  /** Logo image source */
  src?: string;
  /** Alt text for logo */
  alt?: string;
  /** Fallback text when no image */
  fallbackText?: string;
  /** Logo height */
  height?: number;
  /** Whether logo links to home */
  linked?: boolean;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.logo
.logo__image                (height controlled; width auto)
.logo__fallback             (font: var(--text-h3); font-weight: 700; color: var(--color-primary))
.logo--scrolled             (reduced height for scrolled header state)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Default height | -- | 40px |
| Scrolled height | -- | 32px |
| Fallback font | -- | `var(--text-h3)` |
| Fallback color | -- | `var(--color-primary)` |
| Transition | -- | `var(--transition-base)` (200ms) |

#### Responsive Behavior

- Height may reduce slightly on mobile (40px to 32px).
- Width scales proportionally.

#### Accessibility

- When linked: `<a aria-label="SA Innovation College -- Home">`.
- Logo image: `<img alt="SA Innovation College">`.
- Fallback text: visually styled as the brand name.

#### Usage Guidelines

- **Use:** Header (every page), footer.
- **Do not use:** As a standalone element outside header/footer.

---

### 4.4 PartnerLogo

**Purpose:** Partner or accreditation logo displayed in grayscale by default, transitioning to full color on hover. Used for partner strips and accreditation sections.

#### TypeScript Interface

```typescript
interface PartnerLogoProps {
  /** Logo image source */
  src: string;
  /** Partner name */
  alt: string;
  /** Optional link destination */
  href?: string;
  /** Logo height (constrained) */
  height?: number;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.partner-logo
.partner-logo__image          filter: grayscale(100%) opacity(60%); transition: var(--transition-base)
.partner-logo:hover .partner-logo__image  filter: grayscale(0%) opacity(100%)
.partner-logo--accreditation  (always full color for accreditation logos)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Grayscale filter | -- | `grayscale(100%) opacity(60%)` |
| Hover filter | -- | `grayscale(0%) opacity(100%)` |
| Default height | -- | 40px |
| Max width | -- | 120px |
| Transition | -- | `var(--transition-base)` (200ms) |

#### Responsive Behavior

- Fixed height, width scales proportionally.
- Wraps naturally in a flex or grid container.

#### Accessibility

- `<img>` with `alt` text of the partner name.
- When linked: `<a>` with `aria-label="Visit {partner name} website"`.
- Accreditation logos should always be in color (not grayscale).

#### Usage Guidelines

- **Use:** Partner strip on homepage, about page partners section, footer accreditation.
- **Do not use:** For SA Innovation College's own branding (use Logo). For programme-specific logos.
- **Important:** Only display logos with confirmed permission from the partner.

---

## 5. Form Components

---

### 5.1 Input

**Purpose:** Text input field with label, error state, helper text, and optional icons.

#### TypeScript Interface

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input label (always visible above input) */
  label: string;
  /** Error message */
  error?: string;
  /** Helper text below input */
  helper?: string;
  /** Whether the field is required */
  isRequired?: boolean;
  /** Left icon */
  iconLeft?: React.ReactNode;
  /** Right icon */
  iconRight?: React.ReactNode;
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Full width */
  fullWidth?: boolean;
}
```

#### CSS Classes

```
.input
.input--sm                   height: var(--input-height-sm) (32px)
.input--md                   height: var(--input-height-md) (40px, default)
.input--lg                   height: var(--input-height-lg) (48px)
.input--error                border-color: var(--input-border-error); box-shadow: var(--input-shadow-error)
.input--disabled             background: var(--input-bg-disabled); cursor: not-allowed
.input__label                (font: var(--text-body-sm); font-weight: 500; color: var(--input-label))
.input__label--required      (append red asterisk)
.input__field                (font-size: var(--input-font-size); border: var(--input-border-width) solid var(--input-border-color))
.input__field--has-icon-left  padding-left: var(--space-10)
.input__field--has-icon-right padding-right: var(--space-10)
.input__field::placeholder    color: var(--input-placeholder)
.input__field:focus           border-color: var(--input-border-focus); box-shadow: var(--input-shadow-focus)
.input__error                (font: var(--text-caption); color: var(--input-error))
.input__helper               (font: var(--text-caption); color: var(--input-helper))
.input__icon-left
.input__icon-right
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height (md) | `--input-height-md` | 40px |
| Padding X | `--input-padding-x` | `var(--space-3)` (12px) |
| Padding Y | `--input-padding-y` | `var(--space-2)` (8px) |
| Font size | `--input-font-size` | 1rem (16px, prevents iOS zoom) |
| Border color | `--input-border-color` | `var(--color-border)` |
| Border focus | `--input-border-focus` | `var(--color-primary)` |
| Border error | `--input-border-error` | `var(--color-error)` |
| Background | `--input-bg` | `var(--color-white)` |
| Background disabled | `--input-bg-disabled` | `var(--color-gray-100)` |
| Border radius | `--input-radius` | `var(--radius-md)` (8px) |
| Shadow focus | `--input-shadow-focus` | `0 0 0 3px rgba(27, 77, 142, 0.1)` |
| Shadow error | `--input-shadow-error` | `0 0 0 3px rgba(220, 38, 38, 0.1)` |

#### States

| State | Visual Change | ARIA |
|-------|--------------|------|
| Default | Base border and background | -- |
| Focus | Blue border, blue focus ring | `aria-invalid` not present |
| Error | Red border, red focus ring, error message below | `aria-invalid="true"`, error linked via `aria-describedby` |
| Disabled | Gray background, 50% opacity, no interaction | `aria-disabled="true"` |
| Read-only | Gray background, no border change | `aria-readonly="true"` |

#### Responsive Behavior

- Default size `md` on all breakpoints.
- Use `size="lg"` on mobile for improved touch targets.
- Font size 16px minimum to prevent iOS zoom on focus.

#### Accessibility

- Visible `<label>` always displayed above input (not placeholder-only).
- Label association: `<label for="inputId">` + `<input id="inputId">`.
- Required: `aria-required="true"` + visible asterisk `*`.
- Error: `aria-invalid="true"` + `aria-describedby` pointing to error message element.
- Helper text: `aria-describedby` pointing to helper element.
- `inputmode` attribute: `numeric` for phone/ID fields, `email` for email.
- `autocomplete` attribute: `name`, `tel`, `email`, `postal-code` as appropriate.

#### Usage Guidelines

- **Use:** All single-line text input scenarios -- name, email, phone, search, ID number.
- **Do not use:** For multi-line input (use Textarea). For dropdown selection (use Select).

---

### 5.2 Textarea

**Purpose:** Multi-line text input with label, error, and helper text.

#### TypeScript Interface

```typescript
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label (always visible) */
  label: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helper?: string;
  /** Required indicator */
  isRequired?: boolean;
  /** Minimum visible rows */
  rows?: number;
  /** Enable auto-resize */
  autoResize?: boolean;
  /** Full width */
  fullWidth?: boolean;
}
```

#### CSS Classes

```
.textarea
.textarea__label             (same as input label)
.textarea__field             (min-height: 120px; resize: vertical)
.textarea__field--error      (same as input error state)
.textarea__error             (same as input error)
.textarea__helper            (same as input helper)
.textarea__char-count        (font: var(--text-caption); text-align: right)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Min height | -- | 120px (3 rows) |
| Font size | -- | `var(--input-font-size)` (16px) |
| Padding | -- | `var(--input-padding-x)` x `var(--input-padding-y)` |
| Border | -- | Same as Input |
| Border radius | -- | `var(--input-radius)` |

#### States

- Same as Input component.

#### Responsive Behavior

- Full-width at all breakpoints.
- Min-height maintained on mobile.

#### Accessibility

- Same as Input: visible `<label>`, `aria-required`, `aria-invalid`, `aria-describedby`.

#### Usage Guidelines

- **Use:** Message fields, enquiry forms, any multi-line text input.
- **Do not use:** For single-line input (use Input). For rich text editing.

---

### 5.3 Select

**Purpose:** Dropdown selection input with label, error, and custom styling.

#### TypeScript Interface

```typescript
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label (always visible) */
  label: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helper?: string;
  /** Required indicator */
  isRequired?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Options list */
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  /** Full width */
  fullWidth?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
}
```

#### CSS Classes

```
.select
.select__label              (same as input label)
.select__wrapper            (position: relative for custom arrow)
.select__field              (same as input field + appearance: none + padding-right for arrow)
.select__field--error       (same as input error)
.select__arrow              (chevron-down icon, positioned absolute right)
.select__error              (same as input error)
.select__helper             (same as input helper)
```

#### Design Tokens

- Same as Input component for all sizing, colors, borders, and states.

#### Responsive Behavior

- Same as Input component.
- Font size 16px minimum to prevent iOS zoom.

#### Accessibility

- Visible `<label>` always displayed.
- Native `<select>` element (not a custom div replacement) for maximum compatibility.
- Error/helper: `aria-describedby` and `aria-invalid`.
- Required: `aria-required="true"`.
- Options: `<option>` elements with clear labels.

#### Usage Guidelines

- **Use:** Programme selection in forms, filter dropdowns, any selection from a predefined list.
- **Do not use:** For free-text input (use Input). For multi-select with more than 10 options (consider a searchable component).

---

### 5.4 Form

**Purpose:** Form wrapper providing validation context, error summary, and submission handling.

#### TypeScript Interface

```typescript
interface FormProps {
  /** Form submission handler */
  onSubmit: (data: Record<string, unknown>) => void | Promise<void>;
  /** Initial form values */
  initialValues?: Record<string, unknown>;
  /** Validation schema (Zod or similar) */
  validationSchema?: unknown;
  /** Whether to show error summary */
  showErrorSummary?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Child form elements */
  children: React.ReactNode;
  /** Submit button label */
  submitLabel?: string;
  /** Whether the form is currently submitting */
  isSubmitting?: boolean;
}
```

#### CSS Classes

```
.form
.form__error-summary         (red-tinted box at top of form with linked errors)
.form__error-summary-title   (font: var(--text-h4); color: var(--color-error))
.form__error-summary-list    (list of error links)
.form__error-summary-link    (links to each invalid field)
.form__row                  (vertical spacing between fields)
.form__actions              (submit button container)
.form__success              (confirmation message, replaces form)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Error summary background | -- | `rgba(220, 38, 38, 0.05)` |
| Error summary border | -- | `1px solid var(--color-error)` |
| Error summary border radius | -- | `var(--radius-md)` |
| Field spacing | -- | `var(--space-5)` (20px) |
| Actions spacing from fields | -- | `var(--space-6)` (24px) |

#### States

| State | Visual Change |
|-------|--------------|
| Default | All fields in base state |
| Error | Error summary appears at top; invalid fields show red border |
| Submitting | Submit button shows loading spinner, form disabled |
| Success | Form content replaced with confirmation message |

#### Responsive Behavior

- Single column layout at all breakpoints.
- Fields stack vertically.
- Submit button full-width on mobile.

#### Accessibility

- `<form>` element with `noValidate` (custom validation, not browser).
- Error summary: `<div role="alert" aria-live="assertive">`.
- Error links: `<a href="#fieldId">` for each error, moves focus to the field.
- Submitting state: `aria-busy="true"` on the form.
- Success: `<div role="status" aria-live="polite">`.

#### Usage Guidelines

- **Use:** All form scenarios -- contact, application, enquiry, quote request.
- **Do not use:** For search (use CourseSearch). For simple single-field inputs.

---

### 5.5 ContactForm

**Purpose:** Complete contact form with name, email, phone, programme interest, and message fields. Pre-configured for the /contact page.

#### TypeScript Interface

```typescript
interface ContactFormProps {
  /** Pre-selected programme interest */
  defaultProgramme?: string;
  /** Available programmes for the dropdown */
  programmes?: Array<{ value: string; label: string }>;
  /** Submit handler */
  onSubmit?: (data: ContactFormData) => void | Promise<void>;
  /** Additional CSS class names */
  className?: string;
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  programmeInterest: string;
  message: string;
}
```

#### CSS Classes

```
.contact-form
.contact-form__success       (confirmation message)
.contact-form__success-title  (font: var(--text-h3))
.contact-form__success-body   (font: var(--text-body); color: var(--color-text-secondary))
.contact-form__alt-contact    (below form: WhatsApp, phone, address)
```

#### Design Tokens

- Inherits all tokens from Form, Input, Textarea, Select, and Button components.

#### Responsive Behavior

- Single column, full-width fields at all breakpoints.
- Below the form on mobile: alternative contact methods (WhatsApp, phone, address).
- On desktop: alternative contact in a sidebar or below the form.

#### Accessibility

- All accessibility requirements from Form, Input, Textarea, Select.
- Maximum 5 fields (per UX spec).
- Field count enforced: fullName (required), email (required), phone (optional), programmeInterest (required), message (required).

#### Usage Guidelines

- **Use:** /contact page, "Enquire Now" modals, programme detail page enquiry section.
- **Do not use:** For application forms (use multi-step Application Form). For quote requests (create CorporateQuoteForm).
- **Important:** Success state must show "Thank you. We will respond within 24 hours." and include contact alternatives.

---

### 5.6 CourseSearch

**Purpose:** Course search and filter interface for the programme listing page. Combines a search input with filter chips and a results grid.

#### TypeScript Interface

```typescript
interface CourseSearchProps {
  /** Available programmes to search/filter */
  programmes: Array<{
    id: string;
    title: string;
    description: string;
    type: string;
    duration: string;
    entryRequirement: string;
    studyMode: string;
    nqfLevel?: string;
    fee?: string;
    slug: string;
    image?: string;
  }>;
  /** Available filter categories */
  filters?: {
    types?: string[];
    durations?: string[];
    entryRequirements?: string[];
    studyModes?: string[];
  };
  /** Callback when filters change */
  onFilterChange?: (filters: Record<string, string[]>) => void;
  /** Callback when search query changes */
  onSearchChange?: (query: string) => void;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.course-search
.course-search__input-wrapper    (search input with icon)
.course-search__input            (same as Input component)
.course-search__chips             (horizontal scrollable chip row)
.course-search__chip              (filter chip button)
.course-search__chip--active      (selected state)
.course-search__chip-count        (active filter count badge)
.course-search__results-info      ("Showing X programmes")
.course-search__results-grid      (Grid component)
.course-search__empty             (EmptyState when no results)
.course-search__mobile-filters    (bottom sheet trigger on mobile)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Search input height | -- | `var(--input-height-lg)` (48px) |
| Chip height | -- | 40px |
| Chip padding | -- | `var(--space-3)` horizontal |
| Chip border radius | -- | `var(--radius-full)` |
| Chip font | -- | `var(--text-body-sm)` |
| Chip active background | -- | `var(--color-primary)` |
| Chip active text | -- | `var(--color-text-inverse)` |
| Chip default background | -- | `var(--color-gray-100)` |
| Chip default text | -- | `var(--color-text-primary)` |

#### Responsive Behavior

- **Desktop (1024px+):** Left sidebar (280px) with full filter options + results grid.
- **Tablet (768px-1023px):** Horizontal chip row + results grid (2 columns).
- **Mobile (<768px):** Horizontal scrollable chip row + "Filters" button opening bottom sheet + results grid (1 column).
- Active filter count shown on the "Filters" button on mobile.

#### Accessibility

- Search input: `<input type="search" aria-label="Search programmes">`.
- Filter chips: `<button role="checkbox" aria-checked="true|false">` or `<button>` with toggle behavior.
- Results count: `aria-live="polite"` region announcing "Showing X programmes".
- Empty state: announced to screen readers.
- Keyboard: Tab through chips, Enter/Space to toggle.

#### Usage Guidelines

- **Use:** /programmes listing page.
- **Do not use:** For site-wide search (use a simpler search input in the header). For single programme lookup.

---

## 6. Feedback Components

---

### 6.1 Accordion

**Purpose:** Expandable content panel for FAQs and progressive disclosure. Supports single or multiple open panels.

#### TypeScript Interface

```typescript
interface AccordionProps {
  /** Accordion items */
  items: Array<{
    id: string;
    heading: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
  }>;
  /** Allow multiple panels open simultaneously */
  allowMultiple?: boolean;
  /** Additional CSS class names */
  className?: string;
}

interface AccordionItemProps {
  id: string;
  heading: string;
  content: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}
```

#### CSS Classes

```
.accordion
.accordion__item
.accordion__trigger           (button, full-width)
.accordion__trigger--open     (aria-expanded="true")
.accordion__icon              (plus/minus icon, rotates on open)
.accordion__heading           (font: var(--text-body); font-weight: 600)
.accordion__content           (expandable container)
.accordion__content--open     (visible state)
.accordion__content-inner     (padding inside expanded content)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Trigger font | -- | `var(--text-body)` (16px) |
| Trigger weight | -- | `var(--font-weight-semibold)` (600) |
| Trigger height (mobile) | -- | 56px min-height |
| Trigger padding | -- | `var(--space-4) var(--space-6)` |
| Content padding | -- | `var(--space-4) var(--space-6) var(--space-6)` |
| Border bottom | -- | `1px solid var(--color-border)` |
| Icon rotation | -- | 0deg (closed) to 45deg (open), `var(--transition-base)` |
| Content max-height transition | -- | `var(--transition-slow)` (300ms) |

#### States

| State | Visual Change |
|-------|--------------|
| Closed | Plus icon, content hidden |
| Open | Minus icon (plus rotated 45deg), content visible |
| Focus (trigger) | Focus ring on trigger button |

#### Responsive Behavior

- Full-width at all breakpoints.
- Trigger text: `var(--text-body)` (16px) on mobile to prevent iOS zoom.
- Content text: `var(--text-body)` (16px) with `var(--line-height-relaxed)` (1.6).

#### Accessibility

- Trigger: `<button aria-expanded="true|false" aria-controls="accordion-panel-{id}">`.
- Panel: `<div id="accordion-panel-{id}" role="region" aria-labelledby="accordion-trigger-{id}">`.
- Keyboard: Enter/Space to toggle. Tab moves to next trigger.
- Multiple open: allowed by default (per UX spec for FAQs).
- Anchor links: each item should have an `id` for shareable URLs.

#### Usage Guidelines

- **Use:** FAQ sections (FAQSection component wraps this), programme detail page "What You'll Learn" sections.
- **Do not use:** For navigation menus (use MobileMenu). For content that must always be visible.

---

### 6.2 Alert

**Purpose:** Inline status message for success, error, warning, or informational feedback.

#### TypeScript Interface

```typescript
interface AlertProps {
  /** Alert variant */
  variant: 'success' | 'error' | 'warning' | 'info';
  /** Alert title */
  title?: string;
  /** Alert message content */
  children: React.ReactNode;
  /** Whether the alert is dismissible */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Optional action button */
  action?: { label: string; onClick: () => void };
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.alert
.alert--success              border-color: var(--color-success); background: rgba(var(--color-success-rgb), 0.05)
.alert--error                border-color: var(--color-error); background: rgba(var(--color-error-rgb), 0.05)
.alert--warning              border-color: var(--color-warning); background: rgba(var(--color-warning-rgb), 0.05)
.alert--info                 border-color: var(--color-info); background: rgba(var(--color-info-rgb), 0.05)
.alert__icon                 (left icon, 20px, matches variant color)
.alert__content              (flex: 1)
.alert__title                (font: var(--text-body); font-weight: 600)
.alert__message              (font: var(--text-body-sm))
.alert__dismiss              (X button, 32x32px)
.alert__action               (inline button)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Padding | -- | `var(--space-4)` (16px) |
| Border radius | -- | `var(--radius-md)` (8px) |
| Border left width | -- | 4px |
| Icon color (success) | -- | `var(--color-success)` |
| Icon color (error) | -- | `var(--color-error)` |
| Icon color (warning) | -- | `var(--color-warning)` |
| Icon color (info) | -- | `var(--color-info)` |
| Title color | -- | `var(--color-text-primary)` |
| Message color | -- | `var(--color-text-secondary)` |

#### States

- Default: visible with icon, title, message.
- Dismissed: hidden (removed from DOM or `display: none`).

#### Responsive Behavior

- Full-width at all breakpoints.
- Wraps content naturally.

#### Accessibility

- `<div role="alert">` for error alerts (assertive).
- `<div role="status">` for success/info alerts (polite).
- Dismiss button: `<button aria-label="Dismiss alert">`.
- Icon: `aria-hidden="true"` (title/message convey meaning).

#### Usage Guidelines

- **Use:** Form submission success/error, system notifications, important notices.
- **Do not use:** For content that is not time-sensitive (use Card). For navigation or promotion.

---

### 6.3 LoadingSpinner

**Purpose:** Visual indicator that a process is ongoing.

#### TypeScript Interface

```typescript
interface LoadingSpinnerProps {
  /** Spinner size */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  color?: 'primary' | 'white' | 'gray';
  /** Accessible label */
  label?: string;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.loading-spinner
.loading-spinner--sm          width: 16px; height: 16px
.loading-spinner--md          width: 24px; height: 24px
.loading-spinner--lg          width: 40px; height: 40px
.loading-spinner--primary     border-color: var(--color-primary)
.loading-spinner--white       border-color: var(--color-white)
.loading-spinner--gray        border-color: var(--color-gray-400)
.loading-spinner svg           animation: spin 1s linear infinite
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Border width (circle variant) | -- | 3px |
| Animation | -- | `rotate 1s linear infinite` |
| Exempt from reduced-motion | -- | Yes (communicates ongoing process) |

#### Accessibility

- `<div role="status" aria-label="Loading">` or `aria-label={label}`.
- Screen readers announce "Loading" when spinner appears.
- Exempt from `prefers-reduced-motion` (spinning communicates ongoing process, not decoration).

#### Usage Guidelines

- **Use:** Button loading states, page-level loading, data fetching indicators.
- **Do not use:** For decorative purposes. For estimated wait times (use a progress bar).

---

### 6.4 ErrorState

**Purpose:** Error boundary fallback UI displayed when a component or page fails to render.

#### TypeScript Interface

```typescript
interface ErrorStateProps {
  /** Error title */
  title?: string;
  /** Error description */
  description?: string;
  /** Retry callback */
  onRetry?: () => void;
  /** Contact information */
  contactInfo?: { phone: string; whatsapp: string };
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.error-state
.error-state__icon           (error icon, 64px, var(--color-error))
.error-state__title          (font: var(--text-h3); color: var(--color-text-primary))
.error-state__description    (font: var(--text-body); color: var(--color-text-secondary))
.error-state__actions        (button row)
.error-state__contact        (contact info row)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Icon size | -- | 64px |
| Icon color | -- | `var(--color-error)` |
| Title font | -- | `var(--text-h3)` |
| Description font | -- | `var(--text-body)` |
| Container padding | -- | `var(--space-12)` (48px) |
| Alignment | -- | center |

#### Responsive Behavior

- Centered content at all breakpoints.
- Full-width on mobile, max-width 480px on desktop.

#### Accessibility

- `<div role="alert">`.
- Retry button: standard button accessibility.
- Contact phone: `<a href="tel:...">`.

#### Usage Guidelines

- **Use:** Error boundary fallback, failed data loading, broken page states.
- **Do not use:** For form validation errors (use Alert). For expected empty states (use EmptyState).
- **Important:** Always include the college phone number (0800 014 568) and WhatsApp as fallback contact options.

---

### 6.5 EmptyState

**Purpose:** Displayed when no content is available -- no search results, no programmes matching filters, or content not yet created.

#### TypeScript Interface

```typescript
interface EmptyStateProps {
  /** Icon or illustration */
  icon?: React.ReactNode;
  /** Title */
  title: string;
  /** Description */
  description: string;
  /** Optional action button */
  action?: { label: string; href?: string; onClick?: () => void };
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.empty-state
.empty-state__icon           (muted icon, 48px)
.empty-state__title          (font: var(--text-h4); color: var(--color-text-primary))
.empty-state__description    (font: var(--text-body); color: var(--color-text-secondary))
.empty-state__action         (button or link)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Icon size | -- | 48px |
| Icon color | -- | `var(--color-text-muted)` |
| Container padding | -- | `var(--space-12)` (48px) |
| Text alignment | -- | center |

#### Responsive Behavior

- Centered at all breakpoints.
- Full-width on mobile.

#### Accessibility

- `<div>` with heading and description.
- Action button: standard accessibility.

#### Usage Guidelines

- **Use:** No search results, no programmes matching filters, content not yet loaded.
- **Do not use:** For error states (use ErrorState). For loading states (use LoadingSpinner).

---

## 7. Section Components (Homepage-Specific)

---

### 7.1 Hero

**Purpose:** Primary hero section for the homepage with headline, subtext, CTA buttons, and optional background image/visual.

#### TypeScript Interface

```typescript
interface HeroProps {
  /** Main headline */
  headline: string;
  /** Supporting text */
  subtext?: string;
  /** Primary CTA */
  primaryCta?: { label: string; href: string };
  /** Secondary CTA */
  secondaryCta?: { label: string; href: string };
  /** Hero background image */
  backgroundImage?: string;
  /** Hero image (right side on desktop) */
  image?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Background variant */
  variant?: 'image-left' | 'image-right' | 'full-bg' | 'no-image';
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.hero
.hero--image-left            (content left, image right)
.hero--image-right           (image left, content right)
.hero--full-bg               (full background image with overlay)
.hero--no-image              (centered text, no visual)
.hero__content               (text column)
.hero__overline              (font: var(--text-overline); color: var(--color-accent); text-transform: uppercase)
.hero__headline              (font: var(--text-display); color: var(--color-text-primary))
.hero__subtext               (font: var(--text-body-lg); color: var(--color-text-secondary))
.hero__cta-group             (ButtonGroup)
.hero__image                 (object-fit: cover)
.hero__image-wrapper         (aspect-ratio maintained)
.hero__accreditation         (below hero: partner/accreditation logos strip)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Padding block | -- | `var(--space-20)` (80px) desktop, `var(--space-10)` (40px) mobile |
| Headline font | `--text-display` | `clamp(2.25rem, 1.75rem + 2vw, 3.5rem)` |
| Headline weight | -- | `var(--font-weight-bold)` (700) |
| Headline line height | -- | `var(--line-height-tight)` (1.2) |
| Subtext font | `--text-body-lg` | `clamp(1rem, 0.9375rem + 0.25vw, 1.125rem)` |
| Overline font | `--text-overline` | 0.75rem (12px, uppercase, letter-spacing: 0.1em) |
| Overline color | -- | `var(--color-accent)` |
| Spacing overline-to-headline | -- | `var(--space-4)` (16px) |
| Spacing headline-to-subtext | -- | `var(--space-4)` (16px) |
| Spacing subtext-to-cta | -- | `var(--space-6)` (24px) |
| Image border radius | -- | `var(--radius-lg)` (12px) |

#### Responsive Behavior

- **Mobile (<768px):** Single column, text above image (or full-bg variant). Image may be hidden on smallest screens.
- **Tablet (768px-1023px):** Two column, reduced image size.
- **Desktop (1024px+):** Two column with generous spacing.
- Full-bg variant: overlay gradient for text legibility.
- Headline scales via `clamp()`.

#### Accessibility

- Semantic `<section>` with `aria-labelledby` pointing to the headline.
- Headline: `<h1>` (single H1 per page, only on homepage hero).
- Image: `<img>` with descriptive alt text.
- CTA buttons: standard Button accessibility.
- Full-bg: ensure text contrast over image (use overlay gradient).

#### Usage Guidelines

- **Use:** Homepage only. One hero per page maximum.
- **Do not use:** On interior pages (use a simpler page header). For secondary sections.

---

### 7.2 StatsBar

**Purpose:** Horizontal statistics display with animated counters. Typically placed below the hero on the homepage.

#### TypeScript Interface

```typescript
interface StatsBarProps {
  /** Array of statistics */
  stats: Array<{
    value: number;
    suffix?: string;
    label: string;
  }>;
  /** Background variant */
  background?: 'primary-dark' | 'primary' | 'surface';
  /** Whether to animate the count-up */
  animate?: boolean;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.stats-bar
.stats-bar__grid             (Grid component, 2x2 mobile, 4-col desktop)
.stats-bar--primary-dark     (dark background, white text)
.stats-bar--primary          (primary blue background, white text)
.stats-bar--surface          (gray-50 background)
.stats-bar__divider          (vertical line between stats, desktop only)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Background (primary-dark) | -- | `var(--color-primary-dark)` |
| Text color (on dark) | -- | `var(--color-white)` |
| Label color (on dark) | -- | `var(--color-gray-300)` |
| Padding block | -- | `var(--space-10)` (40px) |
| Divider color | -- | `var(--color-gray-600)` (on dark bg) |
| Divider height | -- | 48px |

#### Responsive Behavior

- 2x2 grid on mobile (<640px).
- 4 columns on desktop (1024px+).
- Vertical dividers between columns on desktop.
- Numbers use `clamp()` via `--text-stat` token.

#### Accessibility

- `<section aria-label="Key statistics">`.
- Each stat: `aria-label="{value} {label}"`.
- Animated numbers: `aria-live="polite"` on completion.
- Reduced motion: display final numbers immediately.

#### Usage Guidelines

- **Use:** Homepage below hero. Maximum 4 statistics.
- **Do not use:** For more than 4 stats. For detailed programme data.
- **Important:** All statistics must be verifiable and factual. Do not fabricate numbers.

---

### 7.3 CourseGrid

**Purpose:** Grid display of CourseCard components with optional heading and "View All" link.

#### TypeScript Interface

```typescript
interface CourseGridProps {
  /** Section heading */
  heading?: string;
  /** Section subtext */
  subtext?: string;
  /** Programme data */
  courses: Array<CourseCardProps>;
  /** Number of columns */
  columns?: 1 | 2 | 3 | 4;
  /** Maximum number of courses to show */
  limit?: number;
  /** "View All" link */
  viewAllHref?: string;
  /** View all link label */
  viewAllLabel?: string;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.course-grid
.course-grid__header         (heading + subtext row)
.course-grid__heading        (font: var(--text-h2))
.course-grid__subtext        (font: var(--text-body-lg); color: var(--color-text-secondary))
.course-grid__grid           (Grid component)
.course-grid__footer        (view all link row)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Heading font | `--text-h2` | `clamp(1.5rem, 1.25rem + 1vw, 2.25rem)` |
| Subtext font | `--text-body-lg` | `clamp(1rem, 0.9375rem + 0.25vw, 1.125rem)` |
| Spacing heading-to-grid | -- | `var(--space-8)` (32px) |
| Spacing grid-to-footer | -- | `var(--space-8)` (32px) |

#### Responsive Behavior

- Inherits responsive behavior from Grid and CourseCard.
- Default: 1 column mobile, 2 tablet, 3 desktop.
- `limit` controls how many cards are shown (e.g., 3 on homepage, all on listing page).

#### Accessibility

- `<section>` with heading.
- Heading: `<h2>`.
- Grid: standard Grid accessibility.
- "View All" link: descriptive text ("View all programmes" not "View all").

#### Usage Guidelines

- **Use:** Homepage featured programmes, programme listing page.
- **Do not use:** For non-programme content (use Grid with Card).

---

### 7.4 ProcessSteps

**Purpose:** Numbered step-by-step process display, showing how to apply or enrol.

#### TypeScript Interface

```typescript
interface ProcessStepsProps {
  /** Section heading */
  heading?: string;
  /** Steps array */
  steps: Array<{
    number: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  /** Layout direction */
  orientation?: 'horizontal' | 'vertical';
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.process-steps
.process-steps__heading       (font: var(--text-h2))
.process-steps__list           (step items container)
.process-steps--horizontal     (flex-direction: row)
.process-steps--vertical       (flex-direction: column)
.process-step
.process-step__number          (circle with number, background: var(--color-primary))
.process-step__connector       (line connecting steps, horizontal or vertical)
.process-step__title           (font: var(--text-h4))
.process-step__description     (font: var(--text-body); color: var(--color-text-secondary))
.process-step__icon            (optional icon)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Number circle size | -- | 48px |
| Number circle background | -- | `var(--color-primary)` |
| Number text color | -- | `var(--color-text-inverse)` |
| Number font | -- | `var(--text-h4)` |
| Connector color | -- | `var(--color-border-strong)` |
| Connector thickness | -- | 2px |
| Step spacing (horizontal) | -- | `var(--space-8)` (32px) |
| Step spacing (vertical) | -- | `var(--space-6)` (24px) |
| Title font | -- | `var(--text-h4)` |
| Description font | -- | `var(--text-body)` |

#### Responsive Behavior

- **Desktop (1024px+):** Horizontal layout with connecting lines.
- **Mobile (<768px):** Vertical layout, steps stack.
- Number circle reduces to 40px on mobile.

#### Accessibility

- `<ol>` (ordered list implies sequence).
- Each step: `<li>` with heading and description.
- Number circle: decorative (number is also in the heading text or `aria-label`).

#### Usage Guidelines

- **Use:** "How to Apply" sections, enrolment process, application steps.
- **Do not use:** For timelines (use Timeline). For non-sequential information.

---

### 7.5 Timeline

**Purpose:** Chronological timeline display for events, history, or milestones.

#### TypeScript Interface

```typescript
interface TimelineProps {
  /** Section heading */
  heading?: string;
  /** Timeline events */
  events: Array<{
    date: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  /** Layout variant */
  variant?: 'vertical' | 'alternating';
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.timeline
.timeline__heading
.timeline__list
.timeline__item
.timeline__item--left          (alternating: left-aligned)
.timeline__item--right         (alternating: right-aligned)
.timeline__marker              (dot on the timeline line)
.timeline__date                (font: var(--text-overline); color: var(--color-primary))
.timeline__title               (font: var(--text-h4))
.timeline__description         (font: var(--text-body); color: var(--color-text-secondary))
.timeline__line                (vertical line connecting markers)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Marker size | -- | 16px |
| Marker background | -- | `var(--color-primary)` |
| Line color | -- | `var(--color-border-strong)` |
| Line width | -- | 2px |
| Date font | -- | `var(--text-overline)` |
| Date color | -- | `var(--color-primary)` |
| Content padding | -- | `var(--space-6)` (24px) |
| Spacing between items | -- | `var(--space-8)` (32px) |

#### Responsive Behavior

- **Desktop (1024px+):** Alternating left/right layout.
- **Mobile (<768px):** Vertical, all items on one side.

#### Accessibility

- `<ol>` (ordered list implies chronological order).
- Each event: `<li>` with date, heading, description.
- Timeline line and markers: `aria-hidden="true"` (decorative).

#### Usage Guidelines

- **Use:** College history, intake dates timeline, campus milestones.
- **Do not use:** For process steps (use ProcessSteps). For non-chronological content.

---

### 7.6 TestimonialGrid

**Purpose:** Grid or swipeable display of TestimonialCard components.

#### TypeScript Interface

```typescript
interface TestimonialGridProps {
  /** Section heading */
  heading?: string;
  /** Testimonial data */
  testimonials: Array<TestimonialCardProps>;
  /** Layout variant */
  variant?: 'grid' | 'carousel';
  /** Number of visible items */
  visibleCount?: number;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.testimonial-grid
.testimonial-grid__heading    (font: var(--text-h2))
.testimonial-grid__grid       (Grid component, 3-col desktop)
.testimonial-grid__carousel   (horizontal scroll with CSS snap)
.testimonial-grid__track      (flex container for carousel)
.testimonial-grid__dots       (dot indicators, carousel only)
.testimonial-grid__dot        (dot button)
.testimonial-grid__dot--active (filled dot)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Heading font | `--text-h2` | `clamp(1.5rem, 1.25rem + 1vw, 2.25rem)` |
| Grid gap | -- | `var(--space-6)` (24px) |
| Carousel snap | -- | `scroll-snap-type: x mandatory` |
| Card snap point | -- | `scroll-snap-align: start` |
| Carousel card width (mobile) | -- | 80% of viewport |
| Dot size | -- | 8px |
| Dot active color | -- | `var(--color-primary)` |
| Dot inactive color | -- | `var(--color-gray-300)` |

#### Responsive Behavior

- **Desktop (1024px+):** 3-column static grid (variant="grid").
- **Mobile (<768px):** Horizontal swipe carousel (variant="carousel"), 1 card + peek of next (80% width).
- Dot indicators on carousel only, max 6 dots.
- Manual swipe only, no auto-rotation (per UX spec).

#### Accessibility

- `<section aria-label="Student testimonials">`.
- Heading: `<h2>`.
- Grid variant: standard grid accessibility.
- Carousel variant:
  - `<div role="region" aria-label="Testimonials carousel" aria-roledescription="carousel">`.
  - Each card: `aria-roledescription="slide"`.
  - Dot navigation: `<button aria-label="Go to slide {n}">`.
  - Arrow key navigation on desktop.
  - No auto-rotation.

#### Usage Guidelines

- **Use:** Homepage social proof section, programme detail page testimonials.
- **Do not use:** Auto-playing carousels (forbidden per UX spec). For single testimonials (use TestimonialCard directly).

---

### 7.7 PartnerStrip

**Purpose:** Horizontally scrolling or wrapping strip of partner logos. Grayscale by default, color on hover.

#### TypeScript Interface

```typescript
interface PartnerStripProps {
  /** Section heading */
  heading?: string;
  /** Partner data */
  partners: Array<{
    name: string;
    logo: string;
    href?: string;
  }>;
  /** Scrolling behavior */
  variant?: 'scroll' | 'wrap';
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.partner-strip
.partner-strip__heading
.partner-strip__track         (flex container)
.partner-strip--wrap          (flex-wrap: wrap; justify-content: center)
.partner-strip--scroll        (overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch)
.partner-strip__item          (flex: 0 0 auto)
.partner-strip__logo          (PartnerLogo component)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Padding block | -- | `var(--space-10)` (40px) |
| Logo height | -- | 40px |
| Logo max-width | -- | 120px |
| Gap between logos | -- | `var(--space-8)` (32px) |
| Scroll snap | -- | `scroll-snap-align: center` |

#### Responsive Behavior

- **Mobile:** Horizontal scroll with snap (variant="scroll").
- **Desktop:** Wrap layout, centered (variant="wrap").
- Scrollbar hidden on mobile via CSS.

#### Accessibility

- `<section aria-label="Partner organisations">`.
- Each logo: `<img alt="{partner name}">`.
- When linked: `<a aria-label="Visit {partner name}">`.
- Scroll container: `tabindex="0"` and `role="region"` for keyboard scroll access.

#### Usage Guidelines

- **Use:** Homepage partner section, about page partners/accreditation.
- **Do not use:** For SA Innovation College's own branding. For more than 12 partners (consider pagination).

---

### 7.8 GalleryGrid

**Purpose:** Responsive image gallery grid with lightbox capability.

#### TypeScript Interface

```typescript
interface GalleryGridProps {
  /** Section heading */
  heading?: string;
  /** Gallery images */
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  /** Grid layout variant */
  variant?: 'uniform' | 'masonry';
  /** Number of columns */
  columns?: 2 | 3 | 4;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.gallery-grid
.gallery-grid__heading
.gallery-grid__grid
.gallery-grid__item           (cursor: pointer; overflow: hidden)
.gallery-grid__image          (object-fit: cover; transition: transform var(--transition-slow))
.gallery-grid__item:hover .gallery-grid__image  transform: scale(1.05)
.gallery-grid__caption        (overlay on hover)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Gap | -- | `var(--space-2)` (8px) tight, or `var(--space-4)` (16px) standard |
| Image aspect ratio (uniform) | -- | 1/1 or 4/3 |
| Border radius | -- | `var(--radius-sm)` (4px) |
| Caption background | -- | `rgba(15, 23, 42, 0.7)` |
| Caption text color | -- | `var(--color-white)` |
| Hover scale | -- | 1.05 |
| Transition | -- | `var(--transition-slow)` |

#### Responsive Behavior

- **Mobile (<640px):** 2 columns.
- **Tablet (640px-1023px):** 3 columns.
- **Desktop (1024px+):** 3 or 4 columns.
- Uniform variant: consistent aspect ratio.
- Masonry variant: varied heights, CSS columns.

#### Accessibility

- Each image: `<img>` with `alt` text.
- Clickable images: `<button aria-label="View {image description}">`.
- Lightbox: when implemented, use `role="dialog"` with focus trap.
- Reduced motion: no scale animation on hover.

#### Usage Guidelines

- **Use:** Campus gallery on about page, event photos.
- **Do not use:** For programme images (use CourseCard). For hero images (use Image).

---

### 7.9 FAQSection

**Purpose:** FAQ section wrapping Accordion components with category headings and optional search.

#### TypeScript Interface

```typescript
interface FAQSectionProps {
  /** Section heading */
  heading?: string;
  /** FAQ items */
  items: Array<{
    id: string;
    question: string;
    answer: React.ReactNode;
    category?: string;
  }>;
  /** Whether to group by category */
  groupByCategory?: boolean;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.faq-section
.faq-section__heading         (font: var(--text-h2))
.faq-section__category         (font: var(--text-h3); margin between groups)
.faq-section__accordion        (Accordion component)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Heading font | `--text-h2` | `clamp(1.5rem, 1.25rem + 1vw, 2.25rem)` |
| Category font | `--text-h3` | `clamp(1.25rem, 1.125rem + 0.5vw, 1.5rem)` |
| Category spacing | -- | `var(--space-8)` (32px) above, `var(--space-4)` (16px) below |
| Accordion spacing | -- | `var(--space-6)` (24px) |

#### Responsive Behavior

- Single column at all breakpoints.
- Full-width accordion items.

#### Accessibility

- `<section aria-labelledby>` with heading.
- Heading: `<h2>`.
- Category headings: `<h3>`.
- Inherits Accordion accessibility.

#### Usage Guidelines

- **Use:** /admissions FAQ, programme detail page FAQs, general FAQ page.
- **Do not use:** For non-Q&A content. For fewer than 3 items (display inline instead).

---

### 7.10 CTABanner

**Purpose:** Full-width call-to-action banner with heading, description, and action button. Placed at strategic points to drive conversions.

#### TypeScript Interface

```typescript
interface CTABannerProps {
  /** Banner heading */
  heading: string;
  /** Supporting text */
  description?: string;
  /** Primary CTA */
  cta: { label: string; href: string };
  /** Secondary CTA (optional) */
  secondaryCta?: { label: string; href: string };
  /** Background variant */
  variant?: 'primary' | 'primary-dark' | 'accent';
  /** Background image */
  backgroundImage?: string;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.cta-banner
.cta-banner--primary          background: var(--color-primary); color: var(--color-text-inverse)
.cta-banner--primary-dark     background: var(--color-primary-dark); color: var(--color-text-inverse)
.cta-banner--accent           background: var(--color-accent); color: var(--color-gray-900)
.cta-banner--has-bg           background-image with overlay
.cta-banner__content          (text container, centered)
.cta-banner__heading          (font: var(--text-h2); color: inherit)
.cta-banner__description      (font: var(--text-body-lg); opacity: 0.9)
.cta-banner__actions          (ButtonGroup)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Padding block | -- | `var(--space-16)` (64px) desktop, `var(--space-10)` (40px) mobile |
| Heading font | `--text-h2` | `clamp(1.5rem, 1.25rem + 1vw, 2.25rem)` |
| Heading color | -- | `var(--color-text-inverse)` |
| Description font | -- | `var(--text-body-lg)` |
| Description color | -- | `var(--color-text-inverse)` at 90% opacity |
| CTA button (primary variant) | -- | accent or outline variant |
| CTA button (accent variant) | -- | primary-dark or outline variant |
| Background overlay (with image) | -- | `rgba(15, 23, 42, 0.7)` |
| Text alignment | -- | center |
| Max content width | -- | `var(--container-md)` (768px) |

#### Responsive Behavior

- Full-width at all breakpoints.
- Content centered with max-width constraint.
- CTA buttons stack vertically on mobile, horizontal on desktop.

#### Accessibility

- `<section aria-labelledby>` with heading.
- Heading: `<h2>`.
- CTA buttons: standard Button accessibility.
- Background image: decorative (`aria-hidden="true"` on background element), overlay ensures text contrast.

#### Usage Guidelines

- **Use:** Homepage final CTA, programme detail page "Ready to Apply?", after FAQ sections.
- **Do not use:** More than 2 CTABanners per page (diminishes impact). For non-conversion content.
- **Important:** Always pair with a clear, singular action. "Apply Now" or "Enquire Now", not "Learn More".

---

### 7.11 AnnouncementBar

**Purpose:** Thin, dismissible banner above the header for time-sensitive announcements (new intakes, open days, deadlines).

#### TypeScript Interface

```typescript
interface AnnouncementBarProps {
  /** Announcement text */
  message: string;
  /** CTA link within the announcement */
  cta?: { label: string; href: string };
  /** Background color */
  variant?: 'primary' | 'accent' | 'success';
  /** Whether the bar is visible */
  isVisible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Additional CSS class names */
  className?: string;
}
```

#### CSS Classes

```
.announcement-bar
.announcement-bar--primary     background: var(--color-primary); color: var(--color-text-inverse)
.announcement-bar--accent      background: var(--color-accent); color: var(--color-gray-900)
.announcement-bar--success     background: var(--color-success); color: var(--color-text-inverse)
.announcement-bar__content     (centered text + optional CTA)
.announcement-bar__message     (font: var(--text-body-sm); font-weight: 500)
.announcement-bar__cta         (underline link)
.announcement-bar__dismiss     (close button, right-aligned)
```

#### Design Tokens

| Property | Token | Value |
|----------|-------|-------|
| Height | -- | 40px |
| Padding | -- | `var(--space-2) var(--space-4)` |
| Font size | -- | `var(--text-body-sm)` (14-15px) |
| Font weight | -- | `var(--font-weight-medium)` (500) |
| CTA link style | -- | underline, inherit color |
| Dismiss button | -- | 32x32px tap target |

#### Responsive Behavior

- Full-width at all breakpoints.
- Text truncates on very small screens if too long.
- Dismiss button always visible.

#### Accessibility

- `<div role="banner">` or `<div role="status" aria-live="polite">`.
- Dismiss button: `<button aria-label="Dismiss announcement">`.
- CTA link: standard link accessibility.

#### Usage Guidelines

- **Use:** "Mid-Year Intake Now Open", open day announcements, deadline reminders.
- **Do not use:** For permanent content (use hero or CTABanner). For non-time-sensitive information.
- **Important:** Must be dismissible. State persisted in localStorage so it does not reappear after dismissal.

---

## Appendix A: Component Dependency Matrix

| Component | Depends On |
|-----------|-----------|
| Header | Logo, Button |
| MobileMenu | Icon |
| Footer | Logo, Icon |
| CourseCard | Badge, Image, Icon |
| TestimonialCard | Icon (star) |
| StatsBar | StatBlock, Grid |
| CourseGrid | CourseCard, Grid, Button |
| TestimonialGrid | TestimonialCard, Grid |
| PartnerStrip | PartnerLogo |
| FAQSection | Accordion |
| CTABanner | Button, ButtonGroup |
| ContactForm | Form, Input, Textarea, Select, Button |
| CourseSearch | Input, Badge, Grid, EmptyState |
| Hero | Button, ButtonGroup, Image |
| ProcessSteps | Icon |
| GalleryGrid | Image |
| Section | Container (optional) |

## Appendix B: Design Token Quick Reference

All components must consume tokens from `design-system.md`. The most commonly used tokens:

| Category | Most Used Tokens |
|----------|-----------------|
| Colors | `--color-primary`, `--color-accent`, `--color-text-primary`, `--color-text-secondary`, `--color-border`, `--color-surface`, `--color-surface-raised` |
| Spacing | `--space-4` (16px), `--space-6` (24px), `--space-8` (32px), `--space-10` (40px), `--space-16` (64px) |
| Typography | `--text-h2`, `--text-h3`, `--text-h4`, `--text-body`, `--text-body-sm`, `--text-caption`, `--text-overline` |
| Radius | `--radius-md` (8px), `--radius-lg` (12px), `--radius-full` (pill) |
| Shadow | `--shadow-card`, `--shadow-card-hover`, `--shadow-sm` |
| Transition | `--transition-fast` (150ms), `--transition-base` (200ms), `--transition-slow` (300ms) |
| Z-index | `--z-sticky` (1020), `--z-modal` (1050) |

## Appendix C: Accessibility Checklist Per Component

| Requirement | Components Affected |
|-------------|-------------------|
| Visible focus ring | Button, Input, Textarea, Select, Accordion trigger, Card (interactive), SkipLink |
| `aria-label` | SkipLink, Logo, MobileMenu trigger, icon-only buttons, partner logos |
| `aria-expanded` | Accordion, MobileMenu trigger |
| `aria-invalid` + `aria-describedby` | Input, Textarea, Select (error states) |
| `aria-live` | StatsBar (counter completion), Alert, CourseSearch (results count) |
| `role="dialog"` + focus trap | MobileMenu |
| `role="alert"` | Alert (error variant), ErrorState |
| `role="status"` | LoadingSpinner, Alert (success/info) |
| `aria-current="page"` | Breadcrumb (current item) |
| `aria-hidden="true"` | Decorative icons, decorative images, separator characters |
| `prefers-reduced-motion` | All animated components (Hero entrance, StatBlock counter, Gallery hover, Accordion expand) |

---

*Component library specification v1.0 compiled July 2026. All components consume tokens from design-system.md and implement UX patterns from ux-research.md. Update this document as components are built, refined, or added.*
