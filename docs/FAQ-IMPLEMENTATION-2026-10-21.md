# SCULP Studio — FAQ & Bridal Guide V1.0

Date: 2026-10-21 (Toronto)

## Scope and design

The user authorized direct publication after the original test-only brief. Add a standalone `/faq/` page and link it in the existing main navigation and footer. Keep the existing SCULP editorial identity: ivory, charcoal, Playfair Display headings, Arial/Helvetica body, calm spacing and readable answers. This is a reading surface, with the four-stage Bridal Journey as its one featured motion interaction.

Consulted `Leonxlnx/taste-skill` and `pbakaus/impeccable`, as requested. Applied their hierarchy, responsive, interaction, reduced-motion and rendered-review principles within the fixed brief. No random direction draw, image-generation concept round, framework migration or unrelated restyle. Brand/footer navigation, functional accordion dividers and journey numbering are intentional brief/brand choices where generic style detectors flag them. Small functional text identified by the detector was raised to 11px or above. These are design references, not a claim that every optional workflow or stylistic gate was run.

The future design-reference preference is recorded in `AGENTS.md`.

## Changed files

- `faq/index.html`: generated, crawlable English page; one H1, five category H2s, 20 answers, metadata, canonical and FAQPage JSON-LD.
- `faq/faq.css`: responsive page and brand shell; sticky categories, native accordion styling, journey line and 400ms panel transition, visible focus and reduced-motion rules.
- `faq/faq.js`: multi-word search, result and category counts, no-result recovery, deep links, categories, menu and keyboard-accessible journey tabs; analytics hooks.
- `faq/content.json`: all 20 supplied English/Chinese questions and four journey stages; no prices, deposits or cancellation rules invented.
- `scripts/build-faq.py`: Python standard-library renderer. Reuses the current header/footer markup and emits the static page plus bilingual review copy.
- `docs/FAQ-BILINGUAL-2026-10-21.md`: complete question/answer copy and English/Chinese page, CTA and journey content for review.
- `index.html`: only main navigation and footer FAQ links.
- `sitemap.xml`: adds the canonical FAQ URL.
- `AGENTS.md`: future design references.
- `WORK_LOG.md`: this change, verification and limits.

To edit content, update `faq/content.json`, run `python3 scripts/build-faq.py`, and commit the source and generated page/copy together. If header/footer changes later, rerun the generator to sync the FAQ shell. No dependency installation or framework build is required for the static page.

## Follow-up — consistent typography

The FAQ now uses two font families with fixed roles: Playfair Display for all display/section/stage headings, and Arial/Helvetica for body, lists, answers and controls. Display headings use upright 600 weight throughout. Removed the secondary Cormorant Garamond family and the hero/closing italic treatments. The headline text is unchanged.

| Role | Desktop | Phone |
| --- | --- | --- |
| Main/closing headings | Responsive display scale, up to 62px | 30–36px |
| Section headings | 34–44px | 28px |
| Category/stage headings | 28–36px | 26px |
| Body, lists and answers | 16px / 1.7 | 15px / 1.7 |
| Page controls | 13px | 12px |
| Supporting metadata | 12px | 12px |

The masthead/logo retain their compact brand sizing. CSS typography variables now control the scale. Actual rendered font families, 600 heading weight, 16px/27.2px desktop body and 15px/25.5px phone body were inspected in Chromium. Rechecked 375, 390, 430, 1000 and 1440px iframe viewports: no document overflow, all journey steps fit, and the phone headline stays on two lines. Also inspected an expanded FAQ answer. Text, IDs, schema, region order and the main site are unchanged. This was a typography pass, without another full interaction regression or physical Safari test.

## Follow-up — journey first and dedicated phone layout

The order is now compact introduction → Bridal Journey → dedicated FAQ/search section → closing enquiry. The introduction keeps the requested headline and description, with a visible “Find an answer” jump to the FAQ. The secondary decorative introduction was removed. FAQ questions and policies are unchanged.

Phones have four simultaneously visible journey steps with shorter visible labels and full accessible names, compact typography and spacing, and a single-column stage description/checklist. No sideways scrolling is needed for the journey. FAQ categories remain horizontally scrollable and sticky. Fixed-header padding and anchor margins are coordinated, so a question lands beneath the header/category bar rather than adding duplicate offsets. There are still no share/copy controls.

Rechecked actual Chromium iframe viewports at 375, 390, 430, 1000 and 1440px: no document overflow; all four journey targets fit, without label overflow. At 375px the introduction measured about 309px and the journey about 562px. On 390px, click selects Trial, End selects Wedding Day, the stage link opens its corresponding question at 150px from the top, and “Find an answer” lands the FAQ at 84px. Search finds and opens the allergies answer, Escape clears search, and Enter opens a native question. Render/JS syntax, original 20 question IDs/text, local links, schema and source consistency checked. These are browser viewport tests; physical Safari and OS-level reduced-motion emulation were not performed.

## Follow-up — sharing controls removed

Removed every “Link to this answer” and “Copy link” control at the user’s request, together with clipboard code, status announcements, unused styles and bilingual labels. Question IDs and direct anchor URLs remain. Relevant service/enquiry links stay in the answers. Checks: renderer, JS syntax, all 20 question IDs, content and existing CTA links; sharing controls absent from generated HTML and JS. No full browser regression run for this narrow removal.

## Verification

| Check | Result |
| --- | --- |
| Static render and JS syntax | `python3 scripts/build-faq.py` and `node --check faq/faq.js` pass. |
| Content and structural checks | All 20 English answers match the supplied source; all 20 Chinese entries present; unique IDs, valid local anchors and 20 JSON-LD answers. |
| 1440px layout | Checked in a real Chromium browser using a 1440px iframe; no horizontal overflow. |
| 375 / 390 / 430px layout | Checked using respective iframe viewport widths. Fixed category-grid minimum-width overflow; final document fits all widths. These are browser width tests, not physical iPhone/Safari tests. |
| Main navigation at 1000px | No horizontal overflow after adding the guide link. |
| Search | `allergies` gives one matching expanded answer; mixed-case `WEDDING date` gives three expanded matches; no-result query shows recovery; clearing restores all 20. |
| Categories | Native category links and `#trials` navigation verified; desktop sticky/sidebar and mobile horizontal FAQ categories inspected. |
| Accordion and keyboard | Multiple native details can remain open. Enter opens a question; Space collapses it. |
| Shareable anchors | Direct `/faq/#bring-to-trial` opens its answer; reload preserves link behavior. |
| Journey | Click switching, ArrowRight and End keyboard controls verified; active tab and panel match; all four mobile stages are now simultaneously visible after the journey-first follow-up. |
| No JavaScript | Script-disabled iframe retains 20 native accordions and four readable journey panels, with inactive search controls hidden; native answer opening works; no mobile overflow. |
| Enquiry CTA | Closing CTA opens the existing `/#book` route and shows `#sculp-form`; no second form. No test enquiry sent. |
| Existing pages and form logic | Original `<main>` content and complete inline application/form script are byte-identical to pre-change `eb79edb`; only outside navigation/footer markup changes. |
| Reduced motion | CSS removes transitions/animations and smooth scrolling; JavaScript reads the preference for tab/anchor scrolling. Source-verified; OS-level media emulation was not available in this browser API. |
| Accessibility | Native details, labels, headings, skip link, keyboard tabs, focus, Escape menu closure, ARIA tab/panel relations and live search results checked. No full screen-reader or automated WCAG certification claimed. |
| SEO | Dedicated title/description, canonical `/faq/`, index/follow, five categories, crawlable HTML, FAQPage JSON-LD and sitemap entry. Search-engine discovery/indexing is not verified. |

## Analytics

No GA4, Clarity or other collector was found in the current tracked website. No new tracking script or property was installed. The page dispatches `sculp:analytics` custom events and calls existing `gtag` / `clarity` only if present. Nothing is persisted as a substitute for a collector.

Events: `faq_view`, `faq_search`, `faq_search_no_results`, `faq_open`, `faq_enquiry_click`, `bridal_journey_stage`. Search terms are restricted to known guide keywords; arbitrary text and personal data are not sent. No-result counts remain available even when the entered words are not allowlisted. A real analytics property still needs configuration before reports are available.

## Content still requiring team confirmation

The public text stays general until Miranda confirms trial contents/duration, Half Day/Full Day inclusions, artist selection rules, deposits/payment, cancellation/refund/rescheduling, travel/parking/overtime, look changes and sensitive-skin arrangements. This publication does not add any specific commercial policy. Q5 retains the supplied “Bridal Trial, Half Day and Full Day” wording; the exact current package naming can be aligned during that review.

## Publication

Target: existing `2ez4jz/sculpstudio` main branch and its existing GitHub Pages deployment, serving `https://sculpstudio.ca/faq/`. Deployment outcome is reported after the matching Pages workflow completes.
