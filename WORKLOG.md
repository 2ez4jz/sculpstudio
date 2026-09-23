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


### Book page — future-ready promotion module

**Structure / Information Architecture — P1**
- Reworked the Book page into a two-column enquiry layout on desktop.
- Reserved a dedicated right-side module for future promotions without mixing promotional content into the core enquiry form.

**Core Functionality — P1**
- Added a reusable promotion module controlled by a single `data-active` flag.
- The promotion can be turned on by changing `data-active="false"` to `data-active="true"`, then updating its title, copy, optional offer code and CTA.
- Updated the Book service selector to match the current service architecture: Bridal, Event Makeup, Personal Makeup, Commercial Beauty, Photoshoot Makeup, 1-on-1 Makeup Lesson, and Group Makeup Class.
- Added Senior Artist to the artist preference selector.

**Visual / Brand — P2**
- Promotion card uses a light frosted treatment and sticky positioning so it can remain visible beside the enquiry form without overpowering the page.
- Mobile layout automatically stacks the promotion beneath the enquiry content.

**Polish / Nice-to-have — P3**
- Added a soft shadow, restrained glass blur and full-width offer CTA inside the promotion module.

**Pending / Next — P1**
- No promotion is active by default.
- When a real promotion is available, replace the placeholder copy and activate the module.

**Related site commit**
- `d55bb50ba06d0e1409fc1834578d51a766ff68eb`


### Bridal page — structure-first refinement and content-gap markers

**Structure / Information Architecture — P1**
- Rebuilt the Bridal hero into a 40/60 editorial split: message and CTA on the left, primary image on the right.
- Kept the page flow focused on: Hero → Bridal Approach → Core Bridal Experiences → Artist Level → Additional Services → What's Included → Booking Notes → Final Enquiry.
- Preserved the three core Bridal products and current pricing structure.

**Core Functionality — P1**
- Added a secondary Bridal-work CTA from the hero to Portfolio.
- Kept all pricing, artist-tier links, booking CTA and service information connected to the existing site routes.
- Updated Bridesmaids & Mothers to show the currently known $200 / $180 / $160 tier values while explicitly marking the quantity mapping as awaiting confirmation.

**Visual / Brand — P2**
- Introduced a stronger editorial Bridal hero with a larger image area and restrained copy.
- Added a dedicated staging-note style so missing content can be clearly marked in Chinese without confusing it with final brand copy.
- Updated Bridal copy toward the current brand direction: considered, personal, refined, and camera-aware.

**Fixes / Technical Maintenance — P0**
- Added responsive behavior for the new Bridal hero so it collapses cleanly to one column on mobile.

**Pending / Next — P1**
- Hero image.
- Bridal Approach image.
- Final owner approval for hero headline and brand sentence.
- Final decision on whether “Still entirely you.” is the Bridal core philosophy line.
- Final English names for artist tiers.
- Confirm Bridesmaids & Mothers quantity-to-price mapping.
- Confirm accessory deposit/return details.
- Confirm formal booking / cancellation / rescheduling / non-refundable wording.

**Related site commit**
- `5371a897e2d0187cacc95938b4f9c819a2529f65`


### Team page — hierarchy, real profiles, and shared-standard module

**Structure / Information Architecture — P1**
- Rebuilt Team around a clear hierarchy: Team Hero → Founder Spotlight → Senior Makeup Artists → Makeup Artists → SCULP Standard → Enquiry CTA.
- Separated Miranda from the grid so the founder/creative lead has a stronger editorial presence.
- Grouped Yuki and Mira as Senior Makeup Artists.
- Grouped Angelina, Elaine, Emily, and Giselle as Makeup Artists.
- Added a dedicated “SCULP Standard” section to explain how different artist styles can still sit within one studio standard.

**Core Functionality — P1**
- Replaced placeholder team profiles with the real names, roles, backgrounds, and specialties currently published on the existing SCULP Team page.
- Added portfolio and enquiry pathways so Team supports artist selection without becoming a dead-end profile page.
- Added a clear message that clients can enquire without already knowing which artist to choose.

**Visual / Brand — P2**
- Introduced a large founder spotlight layout rather than treating every artist as an equal card.
- Added 2-column Senior and 4-column Makeup Artist layouts on desktop, with responsive stacking on smaller screens.
- Added compact specialty lines to make artist differences easier to scan.

**Fixes / Technical Maintenance — P0**
- Added responsive Team layouts for tablet and mobile.
- Preserved the existing Chinese staging-note system so missing assets and owner decisions are visible during internal review.

**Pending / Next — P1**
- Upload one approved portrait for each artist.
- Confirm final Team-page headline.
- Reconcile public Team role names with Bridal pricing names (Founder / Creative Makeup Director vs Founder / Lead Artist; Senior Makeup Artist vs Senior Artist; Makeup Artist vs SCULP Artist).
- Decide whether Miranda needs a more personal founder story in addition to the current career biography.
- Confirm the actual studio-wide standards that should appear under “The SCULP Standard”.
- Optional: decide whether individual artist portfolio filtering will be supported later.

**Related site commit**
- `778290aa1799021cc06730d3cbc55f6c167fa4a3`


### Portfolio page — featured images + draggable horizontal strip

**Structure / Information Architecture — P1**
- Simplified Portfolio into a curated showcase instead of a heavy multi-category gallery.
- New flow: Portfolio Intro → 3 Featured Images → Horizontal Scroll/Drag Strip → Enquiry CTA.
- Removed the previous visible filter controls from the page structure because the current image library is relatively small.

**Core Functionality — P1**
- Added a horizontal thumbnail strip that can be scrolled normally or dragged with the mouse on desktop.
- Added touch-friendly horizontal scrolling for mobile/tablet.
- Kept category labels aligned with the existing portfolio structure: Bridal, Commercial, Fashion / Runway, Celebrity / Events.
- Added an enquiry CTA directly after the gallery.

**Visual / Brand — P2**
- Added a magazine-style featured composition: one large hero image plus two smaller supporting images.
- The lower image strip uses smaller cards to create a clear visual hierarchy between hero work and the broader portfolio.
- Added scroll snapping and hidden scrollbars for a cleaner editorial feel.

**Polish / Nice-to-have — P3**
- Added grab / grabbing cursor states during desktop drag interaction.
- Added a subtle “Drag or scroll to explore” hint.

**Pending / Next — P1**
- Select the 3 strongest existing images for the featured composition.
- Insert the actual existing portfolio images into the horizontal strip.
- Decide whether category labels should remain visible under thumbnails or become hover-only later.

**Related site commit**
- `20d73a81418ef9ac85d89431ca937ada21e23ac7`


### Occasions page — owner review markers and decision points

**Structure / Information Architecture — P1**
- Kept Occasions as the combined non-bridal hub for Makeup Services + Education.
- Preserved the current makeup structure: Event Makeup, Personal Makeup, Commercial Beauty, Photoshoot Makeup.
- Preserved the education structure: 1-on-1 Makeup Lesson + Group Makeup Class.
- Added clear Chinese internal review markers above each major section and service so owner decisions can be made directly in context.

**Core Functionality — P1**
- Marked which services require business-rule confirmation before launch.
- Flagged Commercial Beauty for quote-based pricing and business terms rather than a simple fixed-price card.
- Flagged education modules for class duration, format, group size, venue, inclusions and pricing model.
- Kept all current enquiry CTAs active.

**Visual / Brand — P2**
- Reused the same Chinese staging-note system already established on Bridal and Team so internal review remains consistent across the site.

**Pending / Next — P1**
- Confirm Occasions page headline and positioning.
- Confirm whether all four makeup categories are real ongoing services.
- Confirm Event Makeup scope.
- Confirm whether Personal Makeup is a standalone service.
- Define Commercial pricing model and project terms.
- Define Photoshoot vs Commercial boundaries.
- Confirm whether Education remains inside Occasions or gets a standalone Course/Education page later.
- Define 1-on-1 duration, inclusions and target audience.
- Define Group Class minimum/maximum size, duration, venue and quote method.
- Decide which services show fixed price / starting from / request a quote.
- Supply 4–6 suitable Occasions / Education images or decide on a more selective editorial-image approach.

**Related site commit**
- `287f96060baa096ef09e5bfa77539655d6dbc69f`


### About page — brand philosophy structure

**Structure / Information Architecture — P1**
- Rebuilt About as a brand-philosophy page rather than a founder-story page.
- New flow: About Hero → Our Philosophy → Our Approach → The SCULP Standard → Final CTA.
- Avoided inventing a founder origin story that does not exist.

**Core Functionality — P1**
- Added clear pathways from About to Team, Portfolio, and Book.
- Structured the page to explain SCULP's point of view before sending users deeper into services or artist profiles.

**Visual / Brand — P2**
- Introduced the working headline “Beauty, with intention.”
- Added the working philosophy line “Beauty should still feel like you.”
- Added a three-part approach section for Bridal, Commercial & Portrait, and Personal Beauty.
- Added the brand statement: “We do not believe every client should look the same. We do believe every client should feel understood.”

**Pending / Next — P1**
- Confirm the About hero headline.
- Confirm whether “Beauty should still feel like you.” should become a core SCULP line.
- Confirm the SCULP Standard language reflects the owner's real brand values.
- Supply one strong About / founder-at-work / backstage image.

**Related site commit**
- `d8ba90090148c7f2dfaaf1d3e26e74c76d4aa05f`


### New studio imagery — reserved placements across the site

**Structure / Information Architecture — P1**
- Added a dedicated “The Studio” section to About as the primary home for new studio photography.
- Kept Home untouched for now because Home is intentionally being designed last.
- Added supporting studio-image placeholders to Team and Education rather than turning those pages into space galleries.

**Core Functionality — P1**
- Reserved About for one main interior image plus two supporting detail images.
- Added an owner-confirmation note asking which services will actually be hosted in the studio (Bridal Preview, 1-on-1, Group Class, Personal Makeup, etc.).
- Added a Team-page placeholder for one natural in-studio working image.
- Added an Education placeholder for 1–2 real teaching-in-studio images if classes are held there.

**Visual / Brand — P2**
- Built an editorial studio gallery layout: one larger space image with two smaller detail images.
- The section is designed to present the studio as part of the SCULP brand experience rather than as a real-estate gallery.
- Responsive stacking added for tablet and mobile.

**Pending / Next — P1**
- Photograph the completed studio.
- Select: 1 strong overall interior, 2 detail images, 1 team-working image, and 1–2 education/action images.
- Confirm which client-facing services actually happen in the studio before finalizing copy.
- Home may later use 1–2 of the strongest studio images when its final design begins.

**Related site commit**
- `1339c2e694d12d5e34c0f966b63007a0b052bf59`


### About page — lighter closing CTA for visual consistency

**Structure / Information Architecture — P1**
- Kept the About content flow unchanged.
- Replaced the heavy final CTA block with a lighter editorial navigation close.
- The page now ends with one clear continuation area instead of feeling like it has two separate endings after “The SCULP Standard”.

**Core Functionality — P1**
- Preserved the same three destinations: Team, Portfolio, and Book.
- Changed them from button-style actions into lighter text links so About remains a brand/idea page rather than a hard-conversion page.

**Visual / Brand — P2**
- Added a simple top border, left-aligned editorial copy, and understated link row.
- Removed the large centered CTA treatment to better match the tone of the About page and reduce template-like repetition across the site.

**Pending / Next — P2**
- Revisit the exact final line after owner review of the About copy.
- Keep About as a light-conversion page; avoid adding another strong CTA unless the page role changes.

**Related site commit**
- `346a95501192671a66fe4e13eafa5e37709f2c9f`


### Global spacing pass — more editorial breathing room

**Structure / Information Architecture — P1**
- Kept all page structures and content hierarchy unchanged.
- Standardized the spacing system across sections so large content blocks feel less compressed against the page edges.

**Core Functionality — P1**
- No interaction or navigation behavior changed.
- Preserved all existing CTA destinations, forms, portfolio dragging, responsive layouts, and page routing.

**Visual / Brand — P2**
- Increased global left/right shell padding on desktop for more generous page-edge whitespace.
- Increased intro and section vertical rhythm so large headings and image blocks have more room to breathe.
- Increased split-layout gaps to reduce the cramped feeling between imagery and copy.
- Increased internal padding in pricing cards.
- Increased spacing in Bridal hero and Team founder layouts.
- Refined About's light closing section with a larger editorial gap.
- Reworked dark CTA spacing:
  - Full-width CTAs now have deeper vertical padding and wider internal side padding.
  - Inset `.shell.cta` panels now have dedicated inner padding so text no longer sits too close to black-panel edges.
  - CTA text line length is constrained for a calmer composition.
- Added tighter but still comfortable mobile spacing rules.

**Fixes / Technical Maintenance — P0**
- Fixed a malformed Home hero CSS declaration where `align-items:center` and `padding-top` had been accidentally merged.

**Pending / Next — P2**
- Review the updated site on desktop and mobile after deployment.
- If any single section still feels too tight or too loose, adjust locally rather than increasing global spacing again.
- Home remains intentionally provisional until the final homepage design phase.

**Related site commit**
- `2c30e9fc2c8ced2c8f56c32ce284462f4d06cd78`
