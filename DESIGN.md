---
name: Evans Obi
description: Portfolio and Insights of a technical architect and engineering leader.
colors:
  draftsmans-ink: "#0f172a"
  blueprint-blue: "#1e3a8a"
  folio-paper: "#f9fafb"
  production-green: "#064e3b"
  surface: "#ffffff"
  text-body: "#334155"
  text-muted: "#64748b"
  hairline: "#e2e8f0"
  rule: "#cbd5e1"
  status-building: "#92400e"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
  lead:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.05em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "9999px"
spacing:
  gutter: "24px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.draftsmans-ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.draftsmans-ink}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "28px"
  chip-filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
    height: "44px"
  chip-filter-selected:
    backgroundColor: "{colors.draftsmans-ink}"
    textColor: "{colors.surface}"
  status-live:
    backgroundColor: "#ecfdf5"
    textColor: "{colors.production-green}"
    rounded: "{rounded.sm}"
  status-building:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.status-building}"
    rounded: "{rounded.sm}"
---

# Design System: Evans Obi

## Overview

**Creative North Star: "The Architect's Folio"**

A senior practitioner's bound portfolio. The case studies and the writing carry the argument; the interface is the folio they sit in: quiet paper, confident ink, one blue for the things you can act on. Nothing on the page performs. It is senior, editorial, precise, and warm: unhurried enough to read, exact enough to trust, and human in its voice rather than its decoration.

Density is moderate and reading-first. Sections breathe (96px apart), prose holds a comfortable measure, and hierarchy comes from the serif display voice against a plain sans, not from colour, imagery, or motion. Real artefacts (product screenshots, article covers, a founder's testimonial) are the only imagery; nothing stands in for content.

**Key Characteristics:**

- Serif display headings over a sans body; one heading weight (600).
- Paper background, ink text, a single blue accent.
- Flat surfaces separated by hairlines, not shadows.
- Content visible from the first paint; motion is a single, small hero entrance.
- Every claim is evidence: status badges, real screenshots, verifiable links.

## Colors

A near-monochrome ink-on-paper palette with one working accent and two reserved status colours.

### Primary

- **Draftsman's Ink** (`draftsmans-ink`): headings, primary buttons, the selected filter chip, and the two dark surfaces (the lead capability card and the contact footer).

### Secondary

- **Blueprint Blue** (`blueprint-blue`): the accent. Links, research-area labels, the hero's "Problem → Architecture → Production" line, and 1px rules beside quoted questions and notes.

### Tertiary

- **Production Green** (`production-green`): reserved for "In production" status. Never decorative.
- **Building Amber** (`status-building`): reserved for "In active development" status, on a dashed amber outline so it never reads as equivalent to live.

### Neutral

- **Folio Paper** (`folio-paper`): the page background and alternating section bands.
- **Surface White** (`surface`): cards, buttons, panels sitting on paper.
- **Body Slate** (`text-body`): running text.
- **Muted Slate** (`text-muted`): metadata, dates, captions, small labels. The lightest text colour allowed on paper (4.55:1).
- **Hairline** (`hairline`) and **Rule** (`rule`): card borders, section dividers, table rules.

**The One Blue Rule.** Blueprint Blue marks what is navigable or classifying. It is never a background, never a gradient, never a fill larger than a badge.

**The Status Means Status Rule.** Green and amber appear only on status badges. A green that decorates makes the real "In production" claim worth less.

## Typography

**Display Font:** Source Serif 4 (with Georgia), variable with optical sizing
**Body Font:** Source Sans 3 (with system sans)
**Code Font:** Geist Mono, for code blocks and inline code only

**Character:** A designed serif/sans pair from one superfamily: the serif gives headings an author's voice, the sans keeps reading and metadata plain and fast.

### Hierarchy

- **Display** (600, 2.25rem → 3.75rem, 1.08): the hero title and page titles only. Balanced wrapping.
- **Headline** (600, 1.875rem → 2.25rem, 1.2): every section heading, identical in every section. The contact heading is the one sanctioned exception, set larger as the closing statement.
- **Title** (600, 1.25–1.875rem, 1.35): project, card, capability and role titles.
- **Lead** (400, 1.375rem, 1.6): the hero's one-sentence positioning statement only, in Body Slate so it holds its weight on laptop screens.
- **Body** (400, 1.125rem, 1.65): running text, capped at 56–60ch on the homepage and about 75 characters per line in articles (articles set at 1.25rem).
- **Label** (700, 0.875rem, 0.05em, uppercase): small block labels such as "My role" and Toolkit group names. Always the sans; a serif never appears in small caps.

**The One Weight Rule.** Headings use 600 and nothing else. Hierarchy comes from size and space, not from semibold-versus-bold.

**The Heading Speaks Rule.** No eyebrow or kicker above a heading. Classification (research area, format) sits below the title, in the byline.

## Layout

A centred 1280px container with a 24px gutter. Sections are full-width bands alternating Folio Paper and Surface White, 96px of vertical padding each. Case studies use a 12-column split (7 narrative / 5 facts) that collapses to one column below 1024px. Card grids run three columns, and a final row of two stretches to half-width so no grid ever ends on a gap. Article pages narrow to a single reading column (about 42rem) with the cover image allowed wider. Every interactive target is at least 44px.

## Elevation & Depth

Flat by default. Depth comes from tonal bands (paper against white) and hairline borders, not shadows. The only shadows are functional: the floating back-to-top button and the open mobile menu, which genuinely sit above the page.

**The Hairline Rule.** Separate with a 1px border or a change of band, never with a shadow. Hover states darken borders and shift accents to Blueprint Blue; they do not lift or cast shadows.

## Shapes

Gently rounded and consistent: 4px (`xs`) only on the 32px favicon, where it reads like 8px at full size; 8px (`sm`) on buttons, chips and badges; 12px (`md`) on cards and panels; 16px (`lg`) on large feature surfaces (the lead capability card, the featured article, the article cover); full pills only for small read-only tags. Borders are 1px. Coloured side borders thicker than 1px are not part of this system.

## Components

Refined and restrained: colour shifts and border changes, no lifts, glows, or bounces.

### Buttons

- **Shape:** gently rounded (8px).
- **Primary:** Draftsman's Ink fill, white text, 16px × 28px, semibold. Used for the single most important action in a group.
- **Secondary:** Surface White with a slate-300 hairline and ink text. Hover darkens the border and tints the fill to slate-50.
- **On dark (contact footer):** primary inverts to a white fill with ink text; secondary is a transparent fill with a slate-700 border.

### Chips

- **Filter chips:** 44px tall, 8px corners, white with a hairline; selected chips invert to Draftsman's Ink. Expose state with `aria-pressed`.
- **Tags:** small read-only pills (uppercase on case studies, sentence case in Experience), slate on white or slate-100.

### Cards / Containers

- **Corner Style:** 12px.
- **Background:** Surface White on Folio Paper.
- **Shadow Strategy:** none; see Elevation & Depth.
- **Border:** 1px hairline; hover moves to slate-400.
- **Internal Padding:** 24–28px.
- **Insight cards** lead with the article's 16:9 cover. Until a cover is added in Sanity, they show the **Blueprint Sheet**: a Draftsman's Ink panel with a faint 24px white grid (6% opacity) and the research area in the display serif. It is the only sanctioned placeholder.

### Hover Feedback
- **Capability cards:** border darkens to slate-400, the short accent bar extends (40px → 64px), the title turns Blueprint Blue. On the dark lead card the accent bar brightens to white.
- **Toolkit groups:** hovering anywhere in a group turns its rule and label Blueprint Blue; each tag darkens to a blue outline on its own.
- **Contribution items:** a Blueprint Blue rule sweeps left to right over the ink rule (500ms), and the title turns blue.
- **Timing:** 300ms ease-out (500ms for sweeps); every transition is off under reduced motion.

### Navigation

- Fixed white bar with the serif "Evans Obi" wordmark, sans links (0.875rem, medium, grey) that darken to ink on hover, icon links for LinkedIn and GitHub, and an ink Contact button. Below 1024px it collapses to a 44px menu button that opens a full-width white panel.

### Status Badge (signature)

- **Live:** Production Green text on a pale green fill with a solid dot.
- **Building:** Building Amber text on white with a dashed amber outline and an amber dot.
- The two must never look interchangeable.

### Article Body (signature)

- Serif headings inside a sans body; callouts as a full hairline panel with a coloured label (never a side stripe); quotes framed by top and bottom hairlines; tables with hairline rules and no box; code blocks on ink with a filename bar.

## Do's and Don'ts

### Do:

- **Do** keep every section heading identical: Source Serif 4, 600, 1.875rem → 2.25rem, ink.
- **Do** cap body text near 56–60ch on the homepage and about 75 characters per line in articles.
- **Do** render content visible on first paint; keep motion to the single hero entrance and respect reduced motion.
- **Do** keep text at 4.5:1 contrast or better; Muted Slate (`text-muted`) is the lightest text allowed on paper.
- **Do** make every interactive target at least 44px.
- **Do** use real artefacts (screenshots, covers, testimonials); the Blueprint Sheet is the only stand-in, and only for missing article covers.

### Don't:

- **Don't** place an eyebrow, kicker, or uppercase label above a heading.
- **Don't** use coloured side borders thicker than 1px on cards, callouts, quotes, or notes.
- **Don't** use colour gradients, glows, or decorative fills as placeholders; missing covers get the Blueprint Sheet, nothing else.
- **Don't** fade sections in from invisible or give every section the same entrance animation.
- **Don't** use Production Green or Building Amber outside status badges.
- **Don't** set small uppercase labels in the serif.
