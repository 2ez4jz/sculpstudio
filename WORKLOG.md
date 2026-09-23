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


### Visual system — aligned with the new studio interior

**Structure / Information Architecture — P1**
- Kept the current page architecture intact.
- Treated the physical studio as a visual reference system rather than adding new sections or changing page hierarchy.

**Core Functionality — P1**
- No routes, forms, pricing, enquiry flows, portfolio interactions, or responsive behaviors were removed.
- All changes are visual-system refinements only.

**Visual / Brand — P2**
- Shifted the site palette from cooler ivory/gray toward a warmer architectural palette inspired by the studio renderings:
  - warm ivory
  - sand
  - light oak
  - warm charcoal
- Reduced the sense of pure black by changing major dark accents and CTAs to a warmer charcoal.
- Warmed the frosted header so it feels closer to the studio wall tone.
- Changed placeholder/image surfaces from gray-taupe to warmer beige/oak gradients.
- Softened card and form surfaces to match the studio's cream cabinetry, light wood, and warm neutral materials.
- Added a warmer hover state based on the studio's light-wood tone.
- Added very selective architectural curves inspired by the studio's repeated arches:
  - Bridal Hero image
  - Miranda Founder image
  - About founder/work image
  - About Studio main image
- Kept most cards and layouts rectilinear so the site does not become overly decorative or literal.
- Softened divider/border tones and footer background for better continuity with the studio interior.

**Polish / Nice-to-have — P3**
- Added reduced arch radii on mobile so curved image frames stay proportionate on smaller screens.
- Added a subtle featured-pricing shadow to introduce the softer depth seen in the studio lighting.

**Pending / Next — P2**
- Review the new palette against the final built studio once real photography is available.
- Replace placeholders with real studio and beauty photography before deciding whether the arch treatment should remain on all selected images.
- Home remains intentionally provisional and should be finalized after the core pages and final photography are available.

**Reference**
- Visual direction based on the new SCULP studio design renderings: warm cream walls, light wood cabinetry, arched niches/screens, black architectural trim, soft indirect lighting, and restrained neutral materials.

**Related site commit**
- `67262547ab3cc1f3804fcd1d45bfeeab9fe6c7e2`


### Typography & positioning — research-guided commercial refinement

**Structure / Information Architecture — P1**
- Kept every page, module, route, and CTA destination unchanged.
- Focused only on typography hierarchy, readable line lengths, and content positioning within existing layouts.

**Core Functionality — P1**
- No functional behavior changed.
- Forms, portfolio dragging, responsive breakpoints, routing, pricing, and enquiry flows remain intact.

**Visual / Brand — P2**
- Rebuilt the typography scale around a clearer commercial hierarchy:
  - Body copy: 16px with 1.65 line-height.
  - Lead copy: 17–19px with tighter controlled measure.
  - Eyebrows/navigation: increased to 12px for better legibility.
  - H1: reduced from an oversized 126px ceiling to a 104px ceiling, with tighter line-height and controlled headline width.
  - H2: reduced to a 66px ceiling for better hierarchy and less visual crowding.
  - Buttons and form labels increased slightly for easier scanning and interaction.
- Constrained body text to approximately 50–75 characters per line using 62ch / 56ch / 55ch measures depending on context.
- Increased readable sizes for Team bios, notes, service context, tier pricing, captions, and form fields.
- Added context-specific maximum widths to split-layout headings, CTA headings, About closing text, pricing descriptions, and Team founder copy.
- Adjusted heading line-height and tracking to retain the editorial look without sacrificing commercial readability.
- Added text balancing for large headings where supported.
- Kept left alignment for functional/service copy, while preserving centered treatment only for intentionally editorial statement sections.

**Polish / Nice-to-have — P3**
- Increased header height slightly for a calmer navigation rhythm.
- Enlarged the BOOK pill hit area.
- Tuned mobile H1/H2 scale independently so headings remain expressive without dominating small screens.
- Standardized intro positioning across Team, About, Occasions, and Book.

**Research basis**
- Baymard readability research recommends roughly 50–75 characters per line for body text and warns that overly long lines reduce engagement.
- Nielsen Norman Group research supports generous line-height and scannable, concise web copy.
- Current premium bridal/beauty commercial sites commonly use strong editorial display typography paired with simpler, highly legible service copy and clear inquiry pathways.

**Pending / Next — P2**
- Review the deployed site at common desktop widths (1440px, 1280px) and mobile widths.
- Fine-tune only individual modules that still feel too large/small rather than changing the global scale again.
- Reassess final type scale once real photography replaces placeholders.

**Related site commit**
- `b5abeaf7b0e0008bf8c60418d8c06311feba74d9`


### Home page — curated brand and service gateway

**Structure / Information Architecture — P1**
- Rebuilt Home from a generic multi-section landing page into a focused brand gateway.
- New flow: Hero → Philosophy → Selected Work → Bridal / Occasions → Studio → Team → Trust Strip → Final Enquiry.
- Removed the previous three-way service split and simplified the service decision into Bridal vs Occasions.
- Kept Home intentionally lighter than inner pages so it introduces rather than repeats full service details.

**Core Functionality — P1**
- Hero routes users to Bridal or Portfolio.
- Selected Work routes to the full Portfolio.
- Service module routes to Bridal and Occasions.
- Studio routes to About.
- Team teaser routes to Team.
- Final conversion routes to Book.
- Added a restrained “Bridal services currently start from $290” signal without duplicating the full pricing table.
- Preserved existing navigation, routing, form, and gallery functionality.

**Visual / Brand — P2**
- Created a more image-led 35/65-style editorial Hero.
- Added a centered philosophy statement with controlled line length.
- Added a magazine-like Featured Work layout: one large image + two support images + horizontal preview strip.
- Added a two-column service architecture rather than a card-heavy service grid.
- Added a dedicated Studio teaser using the warm architectural visual language already established from the new studio design.
- Added a compact Team teaser rather than duplicating all artist profiles.
- Added a low-density trust strip for studio/location/service reassurance.
- Final CTA uses the warm light-page visual system rather than another heavy black panel.

**Polish / Nice-to-have — P3**
- Added responsive homepage layouts for featured work, services, studio, team, trust strip, and final CTA.
- Added selective arch treatment to the Hero and Studio image placements.
- Added a lightweight horizontal image preview strip on Home.

**Pending / Next — P1**
- Confirm Hero headline and positioning sentence.
- Confirm whether “Beauty that still feels like you.” should be the homepage core philosophy line.
- Select one hero image.
- Select 6–8 portfolio images for Home.
- Select one strong finished-studio image after construction is complete.
- Select one Team / artist-at-work image.
- Revisit the three trust-strip statements after owner review.
- Review whether “Bridal services currently start from $290” should remain on Home after final pricing strategy is approved.

**Related site commit**
- `5d9df3853a56f556e18f5b3f2ded65b4bd8cf73d`


### Book page — focused enquiry flow

**Structure / Information Architecture — P1**
- Reworked Book into a clearer conversion-first page.
- New flow: Intro → Service Details → Contact Details → What Happens Next → Contact Fallback.
- Kept the Promotion module as a secondary right-side element that remains hidden unless an offer is active.
- Avoided adding portfolio imagery or brand-story content so Book stays task-focused.

**Core Functionality — P1**
- Split the form into two visible groups: Service Details and Your Contact.
- Added Timing as a dedicated field.
- Added Preferred Contact so users can indicate Email, Phone, or Instagram.
- Extended the generated email payload to include the new fields.
- Preserved all current service and artist choices.
- Added a three-step “What happens next” section covering review, reply, and confirmation.
- Kept the current mailto-based submission behavior and made that limitation explicit in the form copy.

**Visual / Brand — P2**
- Added a calmer Book intro with a narrower text measure.
- Introduced understated section dividers and group headings instead of more cards.
- Added a compact three-column expectation area that collapses cleanly on mobile.
- Kept the page visually quiet and functional, consistent with the warm SCULP system.

**Fixes / Technical Maintenance — P0**
- Updated the mailto payload so Timing and Preferred Contact are not lost when the enquiry is prepared.

**Pending / Next — P1**
- Confirm the final Book headline.
- Confirm real response-time promise.
- Confirm exact booking/deposit language and what officially secures a date.
- Replace mailto with a real form submission / backend before final commercial launch if possible.
- Later consider conditional fields for Bridal, Commercial, and Education only if the form remains easy to complete.

**Related site commit**
- `3d05f79e195b9ff86180ca6df6e6c5beab677d23`


### Home page QA — fixed Hero overlap and rebalanced page rhythm

**Structure / Information Architecture — P1**
- Kept the Home page flow and section order unchanged.
- Performed a section-level QA pass focused on layout proportions rather than adding new content.

**Core Functionality — P1**
- No routes, links, CTAs, scrolling behavior, or interactions changed.
- Preserved all existing Home destinations and responsive behaviors.

**Visual / Brand — P2**
- Fixed the Hero text/image collision shown in review.
- Increased the Hero copy column from an overly narrow split to a more balanced editorial proportion.
- Reduced the Home Hero headline scale independently from the global H1 system.
- Added a safe max-width and stacking context to the Hero copy so long display words no longer intrude into the image column.
- Kept the supporting lead copy intentionally narrow for a cleaner luxury-service composition.
- Increased Hero image separation and preserved the arch treatment.
- Added Home-specific heading width constraints so later sections do not feel oversized.
- Increased Selected Work strip spacing.
- Increased separation between Bridal and Occasions service columns.

**Responsive / Technical — P0**
- Added dedicated tablet Hero stacking rules rather than relying only on the generic split breakpoint.
- Added dedicated mobile Hero sizing and spacing so the headline remains readable without colliding with imagery.
- Protected long headline words from forced breaking or overflow.

**Pending / Next — P2**
- Review Hero again after the real main image is inserted, since subject placement may change the ideal image crop.
- Continue visual QA once the selected portfolio and studio photos are available.
- Remove internal Chinese review notes before public launch.

**Related site commit**
- `e8af5e1d8a6268b57114218c68be591a10647242`


### Book form — field alignment refinement

**Visual / Brand — P2**
- Corrected the visual vertical alignment of Book form controls.
- Standardized input and select height to 54px.
- Increased horizontal field padding to 18px.
- Increased label-to-control spacing to 10px.
- Adjusted select line-height so option text sits more centrally.
- Preserved a separate, roomier textarea treatment.

**Fixes / Technical Maintenance — P0**
- Removed the older generic control padding/min-height rule that was causing select text to appear slightly low in the field.

**Related site commit**
- `5956a0e63de5bf0cabc016cf518ddd6994b33ef4`


### Sitewide detail polish — micro-interactions, rhythm, and form finish

**Structure / Information Architecture — P1**
- Kept all page structures, routes, and content hierarchy unchanged.
- Focused strictly on finish-level details rather than introducing new sections.

**Core Functionality — P1**
- Preserved all existing navigation, portfolio scrolling, pricing, Book form behavior, and enquiry routing.
- Added clearer keyboard focus states for links, buttons, and form controls.
- Hid the generic sitewide dark CTA on Home so the newly designed Home final enquiry section remains the single closing conversion point.

**Visual / Brand — P2**
- Standardized eyebrow spacing and heading/body rhythm.
- Refined text-link treatment across Home, About, and service modules with a lighter editorial underline.
- Standardized button height, vertical alignment, hover motion, and transition timing.
- Added restrained image hover scaling only when real images are present.
- Added very subtle pricing-card lift on hover.
- Tightened Home service, Studio, Team, trust-strip, and final-CTA spacing.
- Added dividers within the Home trust strip for clearer scanning.
- Refined Book form spacing, placeholders, focus state, group rhythm, and expectation-section dividers.
- Added a small footer alignment pass.

**Accessibility / Technical — P0**
- Added visible :focus-visible states for keyboard users.
- Improved input/select/textarea focus feedback without changing the warm visual system.
- Added mobile-specific full-width CTA behavior where narrow screens benefit from it.

**Pending / Next — P2**
- Continue reviewing page screenshots at 1440px, 1280px, tablet, and mobile.
- Fine-tune only local outliers from this point onward.
- Remove internal Chinese content notes before public launch.

**Related site commit**
- `bc10a1d4f9892f36752514b6ae2399a9e939c679`


### Deep polish pass — conversion clarity, page endings, and SCULP Concierge

**Structure / Information Architecture — P1**
- Completed a full pre-image review across Home, Bridal, Occasions, Portfolio, Team, About, Book, navigation, and footer.
- Removed the generic sitewide CTA because every page now has its own more context-appropriate ending.
- Simplified Occasions by removing repetitive per-card enquiry links and moving conversion actions to the section level.
- Replaced the heavy Team closing panel with a lighter editorial close consistent with About.
- Kept page responsibilities distinct: Portfolio proves the work, Team builds trust, About explains the point of view, Book converts.

**Core Functionality — P1**
- Added **SCULP Concierge**, a four-intent service finder on Home:
  - getting married
  - attending an event
  - creating images
  - learning makeup
- Concierge dynamically recommends the relevant starting point and changes both primary and secondary CTAs.
- Added Book-page query prefill, e.g. `#book?service=Bridal`, so selected services can carry into the enquiry form.
- Added real mouse / pointer drag behavior to the Portfolio strip and Home work strip; previous styling suggested dragging but did not implement it.
- Changed the navigation label from BOOK to ENQUIRE because the current flow is an enquiry form, not instant scheduling.

**Visual / Brand — P2**
- Replaced the more abstract Home Hero line “Beauty, considered.” with clearer positioning: “Beauty, shaped around you.”
- Refined Home supporting copy to connect the person, setting, and camera.
- Reworded the Home service intro to “Start with the occasion.”
- Reworked the Home trust strip to communicate studio location, range of work, and artist guidance without invented statistics.
- Removed the unfinished-sounding public line “Service details coming soon” from Occasions while keeping the internal owner note about pricing.
- Made the About studio copy more confident and aligned with the actual studio design intent.
- Clarified the footer description around bridal, event, commercial beauty, and education.

**Accessibility / Technical — P0**
- Concierge controls use native buttons, `aria-pressed`, and an `aria-live` result region.
- Added reduced-motion handling for users who prefer less animation.
- Validated the final JavaScript syntax after the update.
- Verified one Concierge instance, one Portfolio strip, Book prefill support, and removal of redundant global CTA markup.

**Research basis**
- Reviewed current premium bridal / beauty sites and adjacent luxury service experiences before this pass.
- Stronger examples consistently prioritize clear service routing, image-led editorial presentation, transparent next steps, and booking/inquiry paths that feel integrated rather than bolted on.
- The physical studio is treated as part of the premium experience rather than a background detail, which informed the continued emphasis on SCULP's Studio sections.

**Pending / Next — P1**
- Replace placeholders with final photography.
- Confirm remaining owner notes: final service names, artist titles, pricing details, response time, retainer language, and studio uses.
- Replace mailto with a real form endpoint before commercial launch.
- Remove internal Chinese content notes before publishing publicly.
- After final imagery is inserted, perform one last crop/object-position and mobile QA pass.

**Related site commit**
- `bdddb6a8ae17660175e850a350835bd3858fd969`


### SCULP Concierge — deep-link to exact service sections

**Structure / Information Architecture — P1**
- Kept the Concierge choices and recommendation logic unchanged.
- Added direct section targets so each recommendation lands on the relevant part of the destination page instead of only opening the top of that page.

**Core Functionality — P1**
- “I’m getting married” now opens Bridal and scrolls directly to Bridal Services.
- “I have an event” now opens Occasions and scrolls directly to Event Makeup.
- “I’m creating images” now opens Occasions and scrolls directly to the Commercial / image-making area.
- “I want to learn” now opens Occasions and scrolls directly to Education.
- Preserved the secondary enquiry links and existing Book service prefill behavior.

**Visual / Brand — P2**
- Added sticky-header-aware scroll spacing so the destination heading/card does not sit underneath the navigation bar.
- Uses smooth scrolling for a more polished handoff from Concierge to service detail.

**Fixes / Technical Maintenance — P0**
- Updated routing so hash query parameters can control both Book prefill and in-page section navigation.
- Revalidated JavaScript syntax and confirmed all four destination anchors and links exist.

**Related site commit**
- `f8f8bba1852dae9457f3947aa3f28252e3a0aea7`
