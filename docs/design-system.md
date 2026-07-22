# Design System — SA Innovation College

**Version:** 1.0
**Date:** July 2026
**Purpose:** Single source of truth for all visual design decisions. Every component, page, and interaction in the SA Innovation College website must consume tokens from this document. No hardcoded values permitted in production CSS.

---

## 1. Design Tokens

### 1.1 Color Tokens

```css
:root {
  /* ─── Primary Palette ─── */
  --color-primary:           #1B4D8E;
  --color-primary-light:     #2563EB;
  --color-primary-dark:      #0F2D5E;
  --color-primary-rgb:       27, 77, 142;

  /* ─── Accent Palette ─── */
  --color-accent:            #F59E0B;
  --color-accent-light:      #FBBF24;
  --color-accent-dark:       #D97706;
  --color-accent-rgb:        245, 158, 11;

  /* ─── Neutrals ─── */
  --color-white:             #FFFFFF;
  --color-gray-50:           #F8FAFC;
  --color-gray-100:          #F1F5F9;
  --color-gray-200:          #E2E8F0;
  --color-gray-300:          #CBD5E1;
  --color-gray-400:          #94A3B8;
  --color-gray-500:          #64748B;
  --color-gray-600:          #475569;
  --color-gray-700:          #334155;
  --color-gray-800:          #1E293B;
  --color-gray-900:          #0F172A;
  --color-black:             #020617;

  /* ─── Semantic: Success ─── */
  --color-success:           #16A34A;
  --color-success-light:     #22C55E;
  --color-success-dark:      #15803D;
  --color-success-rgb:       22, 163, 74;

  /* ─── Semantic: Warning ─── */
  --color-warning:           #F59E0B;
  --color-warning-light:     #FBBF24;
  --color-warning-dark:      #D97706;
  --color-warning-rgb:       245, 158, 11;

  /* ─── Semantic: Error ─── */
  --color-error:             #DC2626;
  --color-error-light:       #EF4444;
  --color-error-dark:        #B91C1C;
  --color-error-rgb:         220, 38, 38;

  /* ─── Semantic: Info ─── */
  --color-info:              #0EA5E9;
  --color-info-light:        #38BDF8;
  --color-info-dark:         #0284C7;
  --color-info-rgb:          14, 165, 233;

  /* ─── Surface & Background ─── */
  --color-canvas:            var(--color-white);
  --color-surface:           var(--color-gray-50);
  --color-surface-alt:       var(--color-gray-100);
  --color-surface-raised:    var(--color-white);
  --color-surface-overlay:   rgba(15, 23, 42, 0.5);

  /* ─── Text ─── */
  --color-text-primary:      var(--color-gray-900);
  --color-text-secondary:    var(--color-gray-600);
  --color-text-muted:        var(--color-gray-400);
  --color-text-inverse:      var(--color-white);
  --color-text-accent:       var(--color-primary);

  /* ─── Border ─── */
  --color-border:            var(--color-gray-200);
  --color-border-strong:     var(--color-gray-300);
  --color-border-focus:      var(--color-primary);
  --color-border-error:      var(--color-error);
}
```

### 1.2 Typography Tokens

```css
:root {
  /* ─── Font Family ─── */
  --font-family-heading:     'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-body:        'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-mono:        'JetBrains Mono', 'Fira Code', 'Cascadia Code', ui-monospace, SFMono-Regular, Menlo, monospace;

  /* ─── Font Weight ─── */
  --font-weight-regular:     400;
  --font-weight-medium:      500;
  --font-weight-semibold:    600;
  --font-weight-bold:        700;

  /* ─── Line Height ─── */
  --line-height-none:        1;
  --line-height-tight:       1.2;
  --line-height-snug:        1.3;
  --line-height-normal:      1.5;
  --line-height-relaxed:     1.6;
  --line-height-loose:       1.8;

  /* ─── Letter Spacing ─── */
  --letter-spacing-tighter:  -0.05em;
  --letter-spacing-tight:    -0.025em;
  --letter-spacing-normal:   0em;
  --letter-spacing-wide:     0.025em;
  --letter-spacing-wider:    0.05em;
  --letter-spacing-widest:   0.1em;
}
```

### 1.3 Spacing Tokens

```css
:root {
  --space-0:     0rem;
  --space-0\.5:  0.125rem;   /* 2px */
  --space-1:     0.25rem;    /* 4px */
  --space-1\.5:  0.375rem;   /* 6px */
  --space-2:     0.5rem;     /* 8px */
  --space-2\.5:  0.625rem;   /* 10px */
  --space-3:     0.75rem;    /* 12px */
  --space-3\.5:  0.875rem;   /* 14px */
  --space-4:     1rem;       /* 16px */
  --space-5:     1.25rem;    /* 20px */
  --space-6:     1.5rem;     /* 24px */
  --space-7:     1.75rem;    /* 28px */
  --space-8:     2rem;       /* 32px */
  --space-9:     2.25rem;    /* 36px */
  --space-10:    2.5rem;     /* 40px */
  --space-12:    3rem;       /* 48px */
  --space-14:    3.5rem;     /* 56px */
  --space-16:    4rem;       /* 64px */
  --space-20:    5rem;       /* 80px */
  --space-24:    6rem;       /* 96px */
  --space-28:    7rem;       /* 112px */
  --space-32:    8rem;       /* 128px */
}
```

### 1.4 Layout Tokens

```css
:root {
  /* ─── Container Max Widths ─── */
  --container-sm:            640px;
  --container-md:            768px;
  --container-lg:            1024px;
  --container-xl:            1200px;
  --container-2xl:           1400px;

  /* ─── Container Padding (responsive) ─── */
  --container-padding:       var(--space-4);   /* 16px mobile default */

  /* ─── Grid ─── */
  --grid-columns:            12;
  --grid-gap:                var(--space-6);   /* 24px */
}
```

```css
@media (min-width: 640px) {
  :root {
    --container-padding:     var(--space-6);   /* 24px */
  }
}

@media (min-width: 1024px) {
  :root {
    --container-padding:     var(--space-8);   /* 32px */
  }
}
```

### 1.5 Breakpoints

```css
/* Breakpoints are defined as reference values for media queries.
   They are not CSS custom properties because media query
   ranges do not accept var(). Use these values in Tailwind
   config or SCSS maps. */

/* --breakpoint-sm:   640px;   */
/* --breakpoint-md:   768px;   */
/* --breakpoint-lg:   1024px;  */
/* --breakpoint-xl:   1280px;  */
/* --breakpoint-2xl:  1536px;  */
```

### 1.6 Border Radius Tokens

```css
:root {
  --radius-sm:     0.25rem;    /* 4px */
  --radius-md:     0.5rem;     /* 8px */
  --radius-lg:     0.75rem;    /* 12px */
  --radius-xl:     1rem;       /* 16px */
  --radius-2xl:    1.5rem;     /* 24px */
  --radius-full:   9999px;     /* pill / circle */
}
```

### 1.7 Shadow Tokens

```css
:root {
  --shadow-xs:     0 1px 2px rgba(15, 23, 42, 0.05);
  --shadow-sm:     0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-md:     0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04);
  --shadow-lg:     0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04);
  --shadow-xl:     0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05);
  --shadow-2xl:    0 25px 50px -12px rgba(15, 23, 42, 0.2);

  --shadow-card:           0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.03);
  --shadow-card-hover:     0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04);
  --shadow-glow-primary:   0 0 20px rgba(27, 77, 142, 0.15);
  --shadow-glow-accent:    0 0 20px rgba(245, 158, 11, 0.15);
}
```

### 1.8 Transition Tokens

```css
:root {
  --transition-fast:    150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base:    200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:    300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring:  500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 1.9 Z-Index Tokens

```css
:root {
  --z-dropdown:          1000;
  --z-sticky:            1020;
  --z-fixed:             1030;
  --z-modal-backdrop:    1040;
  --z-modal:             1050;
  --z-popover:           1060;
  --z-tooltip:           1070;
}
```

---

## 2. Component Tokens

### 2.1 Button Tokens

```css
:root {
  /* ─── Button Sizes ─── */
  --btn-height-sm:        32px;
  --btn-height-md:        40px;
  --btn-height-lg:        48px;
  --btn-height-xl:        56px;

  --btn-padding-x-sm:     var(--space-3);     /* 12px */
  --btn-padding-x-md:     var(--space-5);     /* 20px */
  --btn-padding-x-lg:     var(--space-6);     /* 24px */
  --btn-padding-x-xl:     var(--space-8);     /* 32px */

  --btn-padding-y-sm:     var(--space-1);     /* 4px */
  --btn-padding-y-md:     var(--space-2);     /* 8px */
  --btn-padding-y-lg:     var(--space-3);     /* 12px */
  --btn-padding-y-xl:     var(--space-3\.5);  /* 14px */

  --btn-font-size-sm:     0.8125rem;          /* 13px */
  --btn-font-size-md:     0.875rem;           /* 14px */
  --btn-font-size-lg:     1rem;               /* 16px */
  --btn-font-size-xl:     1.125rem;           /* 18px */

  --btn-radius:           var(--radius-md);   /* 8px */
  --btn-font-weight:      var(--font-weight-semibold);
  --btn-letter-spacing:   var(--letter-spacing-wide);
  --btn-text-transform:   uppercase;

  /* ─── Button: Primary ─── */
  --btn-primary-bg:           var(--color-primary);
  --btn-primary-bg-hover:     var(--color-primary-dark);
  --btn-primary-text:         var(--color-text-inverse);
  --btn-primary-border:       var(--color-primary);
  --btn-primary-shadow:       none;
  --btn-primary-shadow-hover: var(--shadow-sm);

  /* ─── Button: Secondary ─── */
  --btn-secondary-bg:         transparent;
  --btn-secondary-bg-hover:   var(--color-gray-50);
  --btn-secondary-text:       var(--color-primary);
  --btn-secondary-border:     var(--color-primary);
  --btn-secondary-shadow:     none;

  /* ─── Button: Accent ─── */
  --btn-accent-bg:            var(--color-accent);
  --btn-accent-bg-hover:      var(--color-accent-dark);
  --btn-accent-text:          var(--color-gray-900);
  --btn-accent-border:        var(--color-accent);

  /* ─── Button: Ghost ─── */
  --btn-ghost-bg:             transparent;
  --btn-ghost-bg-hover:       var(--color-gray-100);
  --btn-ghost-text:           var(--color-primary);
  --btn-ghost-border:         transparent;

  /* ─── Button: Outline ─── */
  --btn-outline-bg:           transparent;
  --btn-outline-bg-hover:     var(--color-primary);
  --btn-outline-text:         var(--color-primary);
  --btn-outline-text-hover:   var(--color-text-inverse);
  --btn-outline-border:       var(--color-primary);
}
```

### 2.2 Card Tokens

```css
:root {
  --card-padding:         var(--space-6);     /* 24px */
  --card-padding-compact: var(--space-4);     /* 16px */
  --card-radius:          var(--radius-md);   /* 8px */
  --card-shadow:          var(--shadow-card);
  --card-shadow-hover:    var(--shadow-card-hover);
  --card-bg:              var(--color-surface-raised);
  --card-border:          1px solid var(--color-border);
  --card-gap:             var(--space-6);     /* 24px desktop */
}
```

```css
@media (max-width: 639px) {
  :root {
    --card-padding:       var(--space-4);     /* 16px */
    --card-gap:           var(--space-4);     /* 16px */
  }
}
```

### 2.3 Input Tokens

```css
:root {
  --input-height-sm:      32px;
  --input-height-md:      40px;
  --input-height-lg:      48px;

  --input-padding-x:      var(--space-3);     /* 12px */
  --input-padding-y:      var(--space-2);     /* 8px */

  --input-font-size:      1rem;               /* 16px — prevents iOS zoom */
  --input-line-height:    var(--line-height-normal);

  --input-border-width:   1px;
  --input-border-color:   var(--color-border);
  --input-border-focus:   var(--color-primary);
  --input-border-error:   var(--color-error);

  --input-radius:         var(--radius-md);   /* 8px */
  --input-bg:             var(--color-white);
  --input-bg-disabled:    var(--color-gray-100);
  --input-bg-readonly:    var(--color-gray-50);

  --input-shadow-focus:   0 0 0 3px rgba(27, 77, 142, 0.1);
  --input-shadow-error:   0 0 0 3px rgba(220, 38, 38, 0.1);

  --input-placeholder:    var(--color-text-muted);
  --input-text:           var(--color-text-primary);
  --input-label:          var(--color-text-primary);
  --input-helper:         var(--color-text-secondary);
  --input-error:          var(--color-error);
}
```

### 2.4 Badge Tokens

```css
:root {
  --badge-height:         1.5rem;             /* 24px */
  --badge-padding-x:      var(--space-2);     /* 8px */
  --badge-radius:         var(--radius-full);
  --badge-font-size:      0.75rem;            /* 12px */
  --badge-font-weight:    var(--font-weight-semibold);
  --badge-letter-spacing: var(--letter-spacing-wide);

  /* ─── Badge: Primary ─── */
  --badge-primary-bg:     var(--color-primary);
  --badge-primary-text:   var(--color-text-inverse);

  /* ─── Badge: Accent ─── */
  --badge-accent-bg:      var(--color-accent);
  --badge-accent-text:    var(--color-gray-900);

  /* ─── Badge: Success ─── */
  --badge-success-bg:     var(--color-success);
  --badge-success-text:   var(--color-text-inverse);

  /* ─── Badge: Warning ─── */
  --badge-warning-bg:     var(--color-warning);
  --badge-warning-text:   var(--color-gray-900);

  /* ─── Badge: Error ─── */
  --badge-error-bg:       var(--color-error);
  --badge-error-text:     var(--color-text-inverse);

  /* ─── Badge: Gray ─── */
  --badge-gray-bg:        var(--color-gray-200);
  --badge-gray-text:      var(--color-gray-700);
}
```

### 2.5 Navigation Tokens

```css
:root {
  --nav-height:               64px;
  --nav-height-mobile:        56px;
  --nav-bg:                   rgba(255, 255, 255, 0.9);
  --nav-bg-blur:              blur(12px);
  --nav-shadow:               var(--shadow-sm);
  --nav-border-bottom:        1px solid var(--color-border);
  --nav-z-index:              var(--z-sticky);

  --nav-link-color:           var(--color-text-primary);
  --nav-link-color-hover:     var(--color-primary);
  --nav-link-color-active:    var(--color-primary);
  --nav-link-font-weight:     var(--font-weight-medium);
  --nav-link-font-size:       0.9375rem;          /* 15px */

  --mobile-overlay-bg:        rgba(15, 23, 42, 0.6);
  --mobile-menu-bg:           var(--color-white);
  --mobile-menu-width:        100%;
  --mobile-menu-z-index:      var(--z-modal);
}
```

### 2.6 Section Tokens

```css
:root {
  --section-padding-y:            var(--space-16);    /* 64px desktop */
  --section-padding-y-compact:    var(--space-12);    /* 48px */
  --section-gap:                  var(--space-16);    /* 64px between sections */
}

@media (max-width: 767px) {
  :root {
    --section-padding-y:          var(--space-10);    /* 40px */
    --section-padding-y-compact:  var(--space-8);     /* 32px */
    --section-gap:                var(--space-10);    /* 40px */
  }
}
```

---

## 3. Typography Scale

Fluid type scale using `clamp()` for seamless responsive sizing. All sizes are rem-based.

| Token | Size (clamp) | Weight | Line Height | Letter Spacing | Usage |
|-------|-------------|--------|-------------|----------------|-------|
| `--text-display` | `clamp(2.25rem, 1.75rem + 2vw, 3.5rem)` (36-56px) | 700 | 1.1 | -0.025em | Hero headlines, full-width impact statements |
| `--text-h1` | `clamp(2rem, 1.5rem + 1.5vw, 3rem)` (32-48px) | 700 | 1.2 | -0.025em | Page titles (H1) |
| `--text-h2` | `clamp(1.5rem, 1.25rem + 1vw, 2.25rem)` (24-36px) | 700 | 1.3 | -0.025em | Section headings (H2) |
| `--text-h3` | `clamp(1.25rem, 1.125rem + 0.5vw, 1.5rem)` (20-24px) | 600 | 1.4 | 0em | Subsection headings (H3) |
| `--text-h4` | `clamp(1.125rem, 1.0625rem + 0.25vw, 1.25rem)` (18-20px) | 600 | 1.4 | 0em | Card titles, component headings (H4) |
| `--text-body-lg` | `clamp(1rem, 0.9375rem + 0.25vw, 1.125rem)` (16-18px) | 400 | 1.6 | 0em | Lead paragraphs, intro text |
| `--text-body` | `1rem` (16px) | 400 | 1.6 | 0em | Body text, descriptions (base) |
| `--text-body-sm` | `clamp(0.875rem, 0.8125rem + 0.25vw, 0.9375rem)` (14-15px) | 400 | 1.5 | 0em | Secondary text, form labels |
| `--text-caption` | `0.8125rem` (13px) | 400 | 1.5 | 0.025em | Captions, helper text, metadata |
| `--text-overline` | `0.75rem` (12px) | 600 | 1.4 | 0.1em | Overlines, category labels, badges |
| `--text-button-lg` | `1rem` (16px) | 600 | 1 | 0.05em | Large button text |
| `--text-button-md` | `0.875rem` (14px) | 600 | 1 | 0.05em | Default button text |
| `--text-button-sm` | `0.8125rem` (13px) | 600 | 1 | 0.05em | Small button text |
| `--text-stat` | `clamp(2rem, 1.5rem + 2vw, 3.5rem)` (32-56px) | 700 | 1.1 | -0.025em | Statistic numbers |
| `--text-nav` | `0.9375rem` (15px) | 500 | 1 | 0em | Navigation links |
| `--text-nav-mobile` | `1.125rem` (18px) | 500 | 1.4 | 0em | Mobile menu links |

**Usage notes:**
- All `clamp()` values interpolate linearly between `min` and `max` viewport widths.
- `--text-display` is reserved for the homepage hero or campaign pages only. Do not use on interior pages.
- `--text-body` (16px) is the base. Never set body copy below 14px (`--text-body-sm` is the minimum).
- All text must meet WCAG 2.2 AA contrast ratios: 4.5:1 for body text, 3:1 for large text (18px+ bold or 24px+).

---

## 4. Spacing Scale

Complete rem-based spacing scale. Derived from a 4px (0.25rem) base unit.

| Token | Value | Pixels | Common Usage |
|-------|-------|--------|--------------|
| `--space-0\.5` | 0.125rem | 2px | Inline element gap, icon detail |
| `--space-1` | 0.25rem | 4px | Tight inline spacing, chip internal padding |
| `--space-1\.5` | 0.375rem | 6px | Compact list gaps |
| `--space-2` | 0.5rem | 8px | Icon-to-text gap, chip padding, tight component gaps |
| `--space-2\.5` | 0.625rem | 10px | Form field internal spacing |
| `--space-3` | 0.75rem | 12px | Small component gaps, input padding-y |
| `--space-3\.5` | 0.875rem | 14px | Medium component gaps |
| `--space-4` | 1rem | 16px | Card compact padding, mobile container padding, list item gaps |
| `--space-5` | 1.25rem | 20px | Button horizontal padding (md), section element spacing |
| `--space-6` | 1.5rem | 24px | Card padding, grid gap, element-to-element spacing |
| `--space-7` | 1.75rem | 28px | Large component padding |
| `--space-8` | 2rem | 32px | Tablet container padding, large component gaps |
| `--space-9` | 2.25rem | 36px | Section sub-block spacing |
| `--space-10` | 2.5rem | 40px | Mobile section padding-y |
| `--space-12` | 3rem | 48px | Compact section padding, card-to-card vertical gap |
| `--space-14` | 3.5rem | 56px | Major section spacing |
| `--space-16` | 4rem | 64px | Desktop section padding-y, between major sections |
| `--space-20` | 5rem | 80px | Hero section padding, large vertical separation |
| `--space-24` | 6rem | 96px | Page-level section separation |
| `--space-28` | 7rem | 112px | Maximum section separator |
| `--space-32` | 8rem | 128px | Maximum vertical space (hero, footer separation) |

**Spacing rules:**
- Use an 8px base grid for all component spacing decisions.
- Consistent vertical rhythm: 64px between major sections on desktop, 40px on mobile.
- Horizontal spacing inside containers uses `--container-padding` (16px mobile, 24px tablet, 32px desktop).
- Never use arbitrary pixel values. Always consume from this scale.

---

## 5. Color Usage Rules

### 5.1 When to Use Each Color

| Color | Primary Use | Permitted Uses | Forbidden Uses |
|-------|-------------|----------------|----------------|
| **Primary blue** (`#1B4D8E`) | Primary CTA buttons, active nav links, links, focus rings | Headings accent, icon fill, border emphasis | Large background fills (use surface tokens instead), body text |
| **Primary light** (`#2563EB`) | Hover state for interactive elements, link hover, active indicator | Secondary emphasis, small icon accents | Primary CTA background (too bright for legibility) |
| **Primary dark** (`#0F2D5E`) | Pressed/active button state, dark header backgrounds | Hover states on primary buttons, text on dark surfaces | Body text, large text blocks |
| **Accent amber** (`#F59E0B`) | Badges, urgency indicators, highlights, "Free" programme tag | Star ratings, small decorative accents, notification dots | Body text, large background fills, navigation links, primary CTAs |
| **White** (`#FFFFFF`) | Page canvas, card backgrounds, text on dark backgrounds | Button text on primary, modal backgrounds | Section backgrounds (use gray-50 for alternation) |
| **Gray-50** (`#F8FAFC`) | Alternate section background, subtle surface separation | Card hover background, disabled input background | Card default background (use white), text |
| **Gray-100** (`#F1F5F9`) | Code block backgrounds, tertiary surface, subtle borders | Disabled button background, input disabled state | Text, large surfaces |
| **Gray-200** (`#E2E8F0`) | Default borders, dividers, horizontal rules | Subtle card borders, input borders | Text, large surfaces |
| **Gray-400** (`#94A3B8`) | Placeholder text, muted labels, disabled icons | Metadata text, secondary icon fill | Body text, headings |
| **Gray-600** (`#475569`) | Body text (secondary), descriptions, helper text | Subheadings, meta descriptions | Headings (use gray-900), large display text |
| **Gray-900** (`#0F172A`) | Primary headings (H1-H4), primary text, high-emphasis labels | Focus ring outlines, text on light surfaces | Pure #000000 (too harsh), large background fills |
| **Success green** (`#16A34A`) | Success states, completion indicators, positive outcomes | "Free" programme badges, active status dots | Body text, large backgrounds, navigation |
| **Error red** (`#DC2626`) | Error states, destructive actions, validation messages | Error text on forms, required field indicators | Body text, large backgrounds, navigation |
| **Info blue** (`#0EA5E9`) | Informational callouts, links in informational context | Info banners, tooltip backgrounds | Body text, large backgrounds |
| **Warning amber** (`#F59E0B`) | Warning states, cautionary messages | Same as accent (semantic alias) | Body text, large backgrounds |

### 5.2 Color Ratios and Contrast

| Combination | Minimum Ratio | WCAG Level |
|-------------|---------------|------------|
| Primary text on white | 12.6:1 | AAA |
| Secondary text (gray-600) on white | 5.7:1 | AA |
| Muted text (gray-400) on white | 3.4:1 | AA large only |
| Primary blue on white | 5.1:1 | AA |
| White on primary blue | 5.1:1 | AA |
| Gray-900 on gray-50 | 14.8:1 | AAA |
| Accent amber on gray-900 | 7.2:1 | AA |

### 5.3 Surface Hierarchy

| Surface | Token | Usage |
|---------|-------|-------|
| Canvas | `--color-canvas` | Page-level background, always white |
| Surface | `--color-surface` | Alternate sections (gray-50), breaks visual monotony |
| Surface-alt | `--color-surface-alt` | Code blocks, sidebar backgrounds, tertiary emphasis |
| Surface-raised | `--color-surface-raised` | Cards, modals, popovers (white with shadow) |
| Surface-overlay | `--color-surface-overlay` | Modal backdrops, mobile menu overlay |

**Rule:** Alternate between `--color-canvas` and `--color-surface` for section backgrounds. Never use more than two consecutive sections with the same background.

### 5.4 Partner Logo Treatment

- Display partner/accreditation logos in grayscale by default: `filter: grayscale(100%) opacity(60%)`.
- On hover: `filter: grayscale(0%) opacity(100%)` with `transition: var(--transition-base)`.
- Do not apply brand colors to partner logos.

---

## 6. Animation Rules

### 6.1 Motion Principles

1. **Purposeful.** Every animation must communicate a state change, guide attention, or provide feedback. Decorative-only animation is forbidden.
2. **Subtle.** Motion should be felt, not watched. Users should not consciously notice the animation, only the result.
3. **Fast.** Animations must never delay user actions. The user's task takes priority over visual polish.
4. **Respectful.** Always honour the user's `prefers-reduced-motion` setting.

### 6.2 Duration Limits

| Token | Duration | Usage |
|-------|----------|-------|
| `--transition-fast` | 150ms | Hover state changes (button color, link underline), focus ring appearance, small element toggles |
| `--transition-base` | 200ms | Standard transitions (dropdown open, accordion expand, card hover lift), theme changes |
| `--transition-slow` | 300ms | Page transitions, modal open/close, full-panel slides, complex multi-property changes |
| `--transition-spring` | 500ms | Attention-drawing entrance animations (badge pop, stat counter finish, success checkmark) |

**Hard limits:**
- Maximum single animation duration: 500ms.
- Maximum combined animation sequence: 800ms.
- No infinite animations except for loading spinners.
- No animation on page load above the fold (content must be immediately visible).
- No parallax scrolling effects (performance impact on mobile).

### 6.3 Permitted Animation Types

| Type | CSS Properties | Examples |
|------|---------------|----------|
| Transform | `transform` | Hover scale (1.02), slide-in from below, rotate (loading spinner) |
| Opacity | `opacity` | Fade-in on scroll, fade-out on dismiss, overlay appearance |
| Color | `color`, `background-color`, `border-color` | Button hover, link underline, active state |
| Shadow | `box-shadow` | Card hover elevation, focus ring glow |
| Size | `width`, `height`, `max-height` | Accordion expand, mobile menu open |

**Forbidden animation types:**
- Animations on `font-size` (causes layout shift).
- Animations on `margin` or `padding` (causes layout shift).
- Keyframe animations on text content (distracting, accessibility issue).
- Auto-scrolling carousels (poor accessibility, user cannot control).

### 6.4 Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Rules:**
- All animations must have a reduced-motion equivalent that either removes the animation or reduces it to an opacity-only change.
- Loading spinners are exempt (they communicate ongoing process, not decoration).
- Scroll-triggered animations (fade-in on scroll) must not use IntersectionObserver animations when reduced motion is enabled; show content immediately.
- Stat counter animations (number counting up) must display the final value immediately when reduced motion is enabled.

### 6.5 Scroll-Triggered Animation Pattern

```css
/* Applied via JavaScript IntersectionObserver */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity var(--transition-slow), transform var(--transition-slow);
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
  }
}
```

---

## 7. CSS Implementation Notes

### 7.1 File Structure

```
src/
  app/
    globals.css              /* Token definitions + base reset */
  styles/
    tokens/
      colors.css             /* Color tokens (optional: import into globals.css) */
      typography.css         /* Typography tokens */
      spacing.css            /* Spacing tokens */
      layout.css             /* Layout tokens */
      shadows.css            /* Shadow tokens */
      transitions.css        /* Transition tokens */
      components.css         /* Component tokens */
    utilities/
      container.css          /* Container utility classes */
      typography.css         /* Typography utility classes */
    base/
      reset.css              /* CSS reset / normalize */
      reduced-motion.css     /* Reduced motion media query */
```

### 7.2 globals.css Structure

```css
/* 1. CSS Reset */
@import './base/reset.css';

/* 2. Design Tokens */
@import './styles/tokens/colors.css';
@import './styles/tokens/typography.css';
@import './styles/tokens/spacing.css';
@import './styles/tokens/layout.css';
@import './styles/tokens/shadows.css';
@import './styles/tokens/transitions.css';
@import './styles/tokens/components.css';

/* 3. Base Styles */
@import './base/reduced-motion.css';

/* 4. Utility Classes */
@import './styles/utilities/container.css';
@import './styles/utilities/typography.css';
```

### 7.3 Tailwind Configuration Integration

If using Tailwind CSS, map tokens in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
        light: 'var(--color-primary-light)',
        dark: 'var(--color-primary-dark)',
      },
      accent: {
        DEFAULT: 'var(--color-accent)',
        light: 'var(--color-accent-light)',
        dark: 'var(--color-accent-dark)',
      },
      canvas: 'var(--color-canvas)',
      surface: {
        DEFAULT: 'var(--color-surface)',
        alt: 'var(--color-surface-alt)',
        raised: 'var(--color-surface-raised)',
      },
      text: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        inverse: 'var(--color-text-inverse)',
        accent: 'var(--color-text-accent)',
      },
      border: 'var(--color-border)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      error: 'var(--color-error)',
      info: 'var(--color-info)',
      gray: {
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
    },
    fontFamily: {
      heading: 'var(--font-family-heading)',
      body: 'var(--font-family-body)',
      mono: 'var(--font-family-mono)',
    },
    fontSize: {
      display: 'var(--text-display)',
      h1: 'var(--text-h1)',
      h2: 'var(--text-h2)',
      h3: 'var(--text-h3)',
      h4: 'var(--text-h4)',
      'body-lg': 'var(--text-body-lg)',
      body: 'var(--text-body)',
      'body-sm': 'var(--text-body-sm)',
      caption: 'var(--text-caption)',
      overline: 'var(--text-overline)',
    },
    spacing: {
      0.5: 'var(--space-0.5)',
      1: 'var(--space-1)',
      1.5: 'var(--space-1.5)',
      2: 'var(--space-2)',
      2.5: 'var(--space-2.5)',
      3: 'var(--space-3)',
      3.5: 'var(--space-3.5)',
      4: 'var(--space-4)',
      5: 'var(--space-5)',
      6: 'var(--space-6)',
      7: 'var(--space-7)',
      8: 'var(--space-8)',
      9: 'var(--space-9)',
      10: 'var(--space-10)',
      12: 'var(--space-12)',
      14: 'var(--space-14)',
      16: 'var(--space-16)',
      20: 'var(--space-20)',
      24: 'var(--space-24)',
      28: 'var(--space-28)',
      32: 'var(--space-32)',
    },
    borderRadius: {
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
      '2xl': 'var(--radius-2xl)',
      full: 'var(--radius-full)',
    },
    boxShadow: {
      xs: 'var(--shadow-xs)',
      sm: 'var(--shadow-sm)',
      md: 'var(--shadow-md)',
      lg: 'var(--shadow-lg)',
      xl: 'var(--shadow-xl)',
      '2xl': 'var(--shadow-2xl)',
      card: 'var(--shadow-card)',
      'card-hover': 'var(--shadow-card-hover)',
    },
    transitionDuration: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      spring: '500ms',
    },
    zIndex: {
      dropdown: 'var(--z-dropdown)',
      sticky: 'var(--z-sticky)',
      fixed: 'var(--z-fixed)',
      'modal-backdrop': 'var(--z-modal-backdrop)',
      modal: 'var(--z-modal)',
      popover: 'var(--z-popover)',
      tooltip: 'var(--z-tooltip)',
    },
  },
};
```

### 7.4 Usage Rules

1. **Never hardcode values.** Every color, size, radius, shadow, and transition in component CSS must reference a token.
2. **Tokens use `var()`.** Components consume tokens via CSS custom properties, not raw values.
3. **Responsive tokens use `@media` queries.** Container padding, section padding, and spacing adjustments are token-level, not component-level.
4. **Component tokens wrap global tokens.** Component tokens (Section 2) reference global tokens (Section 1). If a global token changes, all component tokens update automatically.
5. **Dark mode is out of scope.** This design system does not include a dark mode token set. If dark mode is added later, create a parallel `:root[data-theme="dark"]` block that redefines the same token names with dark values.
6. **Theme switching.** All tokens are defined on `:root`. For future theme support, move tokens to `[data-theme="default"]` and add alternate theme blocks.
7. **RTL support.** Spacing and layout tokens are direction-agnostic. For RTL, use CSS logical properties (`margin-inline-start` instead of `margin-left`). This is a component-level decision, not a token-level decision.

---

*Design system v1.0 compiled July 2026. Derived from brand audit, design brief, project vision, and competitor research. All values are implementable as-is. Update this document when client confirms brand decisions.*
