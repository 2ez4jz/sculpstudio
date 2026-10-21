# SCULP Studio — FAQ & Bridal Guide V1.0

Date: 2026-10-21 (Toronto)

## Scope and design

The user authorized direct publication after the original test-only brief. Add a standalone `/faq/` page and link it in the existing main navigation and footer. Keep the existing SCULP editorial identity: ivory, charcoal, Playfair Display, Cormorant Garamond, calm spacing and readable answers. This is a reading surface, with the four-stage Bridal Journey as its one featured motion interaction.

Consulted `Leonxlnx/taste-skill` and `pbakaus/impeccable`, as requested. Applied their hierarchy, responsive, interaction, reduced-motion and rendered-review principles within the fixed brief. No random direction draw, image-generation concept round, framework migration or unrelated restyle. Brand/footer navigation, functional accordion dividers and journey numbering are intentional brief/brand choices where generic style detectors flag them. Small functional text identified by the detector was raised to 11px or above. These are design references, not a claim that every optional workflow or stylistic gate was run.

The future design-reference preference is recorded in `AGENTS.md`.

## Changed files

- `faq/index.html`: generated, crawlable English page; one H1, five category H2s, 20 answers, metadata, canonical and FAQPage JSON-LD.
- `faq/faq.css`: responsive page and brand shell; sticky categories, native accordion styling, journey line and 400ms panel transition, visible focus and reduced-motion rules.
- `faq/faq.js`: multi-word search, result and category counts, no-result recovery, deep links, clipboard enhancement, categories, menu and keyboard-accessible journey tabs; analytics hooks.
- `faq/content.json`: all 20 supplied English/Chinese questions and four journey stages; no prices, deposits or cancellation rules invented.
- `scripts/build-faq.py`: Python standard-library renderer. Reuses the current header/footer markup and emits the static page plus bilingual review copy.
- `docs/FAQ-BILINGUAL-2026-10-21.md`: complete question/answer copy and English/Chinese page, CTA and journey content for review.
- `index.html`: only main navigation and footer FAQ links.
- `sitemap.xml`: adds the canonical FAQ URL.
- `AGENTS.md`: future design references.
- `WORK_LOG.md`: this change, verification and limits.

To edit content, update `faq/content.json`, run `python3 scripts/build-faq.py`, and commit the source and generated page/copy together. If header/footer changes later, rerun the generator to sync the FAQ shell. No dependency installation or framework build is required for the static page.

## Verification

| Check | Result |
| --- | --- |
| Static render and JS syntax | `python3 scripts/build-faq.py` and `node --check faq/faq.js` pass. |
| Content and structural checks | All 20 English answers match the supplied source; all 20 Chinese entries present; unique IDs, valid local anchors and 20 JSON-LD answers. |
| 1440px layout | Checked in a real Chromium browser using a 1440px iframe; no horizontal overflow. |
| 375 / 390 / 430px layout | Checked using respective iframe viewport widths. Fixed category-grid minimum-width overflow; final document fits all widths. These are browser width tests, not physical iPhone/Safari tests. |
| Main navigation at 1000px | No horizontal overflow after adding the guide link. |
| Search | `allergies` gives one matching expanded answer; mixed-case `WEDDING date` gives three expanded matches; no-result query shows recovery; clearing restores all 20. |
| Categories | Native category links and `#trials` navigation verified; desktop sticky/sidebar and mobile horizontal navigation inspected. |
| Accordion and keyboard | Multiple native details can remain open. Enter opens a question; Space collapses it. |
| Shareable anchors | Direct `/faq/#bring-to-trial` opens its answer; reload preserves link behavior. |
| Journey | Click switching, ArrowRight and End keyboard controls verified; active tab and panel match; mobile last stage scrolls into view. |
| No JavaScript | Script-disabled iframe retains 20 native accordions and four readable journey panels, with inactive search controls hidden; native answer opening works; no mobile overflow. |
| Enquiry CTA | Closing CTA opens the existing `/#book` route and shows `#sculp-form`; no second form. No test enquiry sent. |
| Existing pages and form logic | Original `<main>` content and complete inline application/form script are byte-identical to pre-change `eb79edb`; only outside navigation/footer markup changes. |
| Reduced motion | CSS removes transitions/animations and smooth scrolling; JavaScript reads the preference for tab/anchor scrolling. Source-verified; OS-level media emulation was not available in this browser API. |
| Accessibility | Native details, labels, headings, skip link, keyboard tabs, focus, Escape menu closure, ARIA tab/panel relations and live search results checked. No full screen-reader or automated WCAG certification claimed. |
| SEO | Dedicated title/description, canonical `/faq/`, index/follow, five categories, crawlable HTML, FAQPage JSON-LD and sitemap entry. Search-engine discovery/indexing is not verified. |

## Analytics

No GA4, Clarity or other collector was found in the current tracked website. No new tracking script or property was installed. The page dispatches `sculp:analytics` custom events and calls existing `gtag` / `clarity` only if present. Nothing is persisted as a substitute for a collector.

Events: `faq_view`, `faq_search`, `faq_search_no_results`, `faq_open`, `faq_copy_link`, `faq_enquiry_click`, `bridal_journey_stage`. Search terms are restricted to known guide keywords; arbitrary text and personal data are not sent. No-result counts remain available even when the entered words are not allowlisted. A real analytics property still needs configuration before reports are available.

## Content still requiring team confirmation

The public text stays general until Miranda confirms trial contents/duration, Half Day/Full Day inclusions, artist selection rules, deposits/payment, cancellation/refund/rescheduling, travel/parking/overtime, look changes and sensitive-skin arrangements. This publication does not add any specific commercial policy. Q5 retains the supplied “Bridal Trial, Half Day and Full Day” wording; the exact current package naming can be aligned during that review.

## Publication

Target: existing `2ez4jz/sculpstudio` main branch and its existing GitHub Pages deployment, serving `https://sculpstudio.ca/faq/`. Deployment outcome is reported after the matching Pages workflow completes.
