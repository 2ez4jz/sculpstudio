# SCULP Studio — Work Log

This file tracks website changes made to the SCULP Studio GitHub Pages site.

## 2026-09-23

### Initial GitHub launch
- Created the first standalone GitHub Pages-ready version from the supplied Squarespace HTML.
- Added a complete `index.html` document shell around the existing SCULP site code.
- Preserved the existing hash-based navigation for Home, Bridal, Occasions, Portfolio, Team, About, and Book.
- Prepared the site for deployment from the `main` branch / repository root.
- Initial launch commit: `0f0adce909d50fb2320a89ea16003df7df2259c5`

### Typography — first editorial pass
- Added Cormorant Garamond for large site headings.
- Applied it to H1, H2, H3 and blockquotes.
- Adjusted heading weight and tracking to feel more editorial and less template-like.
- Commit: `5f3a7093b33a8bd77dd4feadc65be994aef2a311`

### Typography — display hierarchy refinement
- Standardized large display headings to use the same visual language as the homepage hero.
- Kept smaller card/team headings in sans-serif so the site would not feel overly decorative.
- Commit: `ec292ff89d5786f564f843d25fd00440c295c55d`

### Typography — luxury beauty/editorial direction
- Added Playfair Display for primary display typography.
- Switched H1, H2, quote and CTA headings to Playfair Display.
- Added a larger italic editorial treatment for philosophy/statement copy.
- Commit: `0fb5d11aee4e2a3924856c16a6f22b42af674b92`

### Header — frosted glass and wordmark
- Reworked the sticky header into a frosted-glass navigation bar.
- Updated the SCULP STUDIO wordmark to a serif editorial treatment.
- Restyled the BOOK CTA as a rounded black pill button.
- Commit: `7f63fa070db17f8e43ad4c47ba024d966abc7591`

### Header — scroll-reactive glass
- Made the header nearly transparent at the top of the page.
- Increased blur, saturation, border visibility and shadow after scrolling.
- Added a smooth transition between top-of-page and scrolled states.
- Commit: `4cbb2eabd5d2206e564475a7cf44ded5279608ad`

### Bridal page — pricing and service architecture
- Rebuilt the Bridal page around three core service experiences:
  - Wedding Day Makeup — from $290
  - Wedding Day + Preview — from $590
  - The Half-Day Experience — from $1,190
- Added artist-level pricing for Founder / Lead Artist, Senior Artist, and SCULP Artist.
- Highlighted Wedding Day + Preview as the primary / most chosen package.
- Added a lightweight "Meet the artists" link to Team instead of forcing users to leave the pricing flow.
- Separated additional services from the three core bridal products.
- Added Preview Session, Bridesmaids & Mothers, Groom Styling, and Additional Touch-Up Time.
- Separated "What's included" from booking terms.
- Added booking notes and enquiry CTA.
- Commit: `c53b9361fda7cf2565afc902b5822cf9a37c437c`

### Header — softer glass and protected brand spacing
- Reduced the strength of the frosted effect so the header no longer feels like an opaque white overlay.
- Moved the glass effect to a separate pseudo-element so the SCULP STUDIO wordmark and navigation remain crisp above it.
- Increased safe top spacing for internal page intros.
- Added extra top breathing room to Portfolio to prevent content from colliding with the brand/header.
- Commit: `77c6e887b00d8b01b4d4e187c5aa2c8684bfeb2f`

## Logging rule going forward
For every future website modification:
1. Update the site code.
2. Add a dated entry to this `WORKLOG.md`.
3. Include the relevant Git commit SHA when available.
4. Also provide a concise work-log summary in the ChatGPT conversation.

### Occasion page — service modules
**Structure / Information Architecture — P1**
- Split Occasions into two primary service families: Makeup Services and Education.
- Added four makeup modules: Event Makeup, Personal Makeup, Commercial Beauty, and Photoshoot Makeup.
- Added two education modules: 1-on-1 Makeup Lesson and Group Makeup Class.
- Kept pricing intentionally open because package details are not finalized yet.

**Core Functionality — P1**
- Added direct enquiry CTAs for each service module.
- Commercial Beauty routes to a quote-style enquiry.
- Added a pricing-status module explaining that service details are still being finalized.

**Visual / Brand — P2**
- Reused the existing SCULP editorial card system and page hierarchy for consistency.

**Pending / Next — P1**
- Final pricing and package details.
- Final service copy, duration, inclusions, group-size rules, and any commercial usage terms.
- Real imagery for Occasion and Education sections.
