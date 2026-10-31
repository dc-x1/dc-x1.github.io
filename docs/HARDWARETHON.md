# Hardwarethon editorial and presentation notes

Updated: 1 November 2026. Branch: `enhancement-post01`.

## Scope

The four milestone routes share `HardwarethonPage.astro` and localized copy in `src/i18n/hardwarethon.ts`. Titles, metadata and homepage navigation use Hardwarethon without a country suffix. The established year, third-place result, 48-hour challenge and coffee-production concept are retained.

The page adds three concise summary figures and a three-step pipeline: design, prototype and outcome. Short paragraphs retain the core message; the steps do not invent sensor models, technical measurements, commercial deployment or an individual's precise contribution.

The pipeline's original project CSS is shared through `src/styles/pipeline.css`, including circle sizes, connectors, icons, spacing, mobile breakpoint and reduced-motion behaviour. Existing global light-theme treatments and regular-weight pipeline titles apply to the milestone too. Major headings retain their established weight.

## Sources and attribution

- [Hardwarethon website](https://www.hardwarethon.com/): multidisciplinary teams, hardware/software prototyping, business considerations and the 48-hour format. The current page describes a later edition; its dates, bootcamp length and cumulative statistics are not attributed to 2019.
- [Official gallery](https://www.hardwarethon.com/galeria/): includes an event section and video for 2019. The gallery was consulted as a source; its footer link has been removed. No gallery image is presented as a photograph of Diego or his team.
- The owner confirmed on 31 October 2026 that Texas Tech University hosted his 2019 edition. It is mentioned once in each localized body. The page does not claim that the university organized the competition or confuse it with the University of Texas.
- The third-place result and coffee-production concept come from the existing portfolio record, not the event's general homepage.

## Single animated accent

The overhead teamwork clip is converted to a real animated GIF (560 x 315, 85 frames, approximately 14.2 seconds, 5,339,469 bytes). Original source: `https://assets.website-files.com/5cc760445da5ee7ebb6cac97/5cd2014d82934a589eef93cd_teamwork-transcode.mp4`. The GIF and the matching official static poster are stored under `public/images/library/milestones/hardwarethon/`; the local MP4 is removed.

Only one animation appears per milestone route, aligned left and lazy-loaded. It is general event footage, not identified as Diego's team or the 2019 edition. A localized, discreet pause/play button switches between the GIF and its poster. A picture source selects the static poster for reduced motion, including without JavaScript. There is no video element or video playback bar.

## Concept integration and team

The owner confirmed a five-person multidisciplinary team including software, materials and electronics engineers. The copy does not assign headcounts to individual disciplines or invent the remaining roles. A responsive HTML/SVG conceptual diagram connects these engineering inputs to the shared prototype, UX/UI and the business model. It does not assert particular sensing hardware, networking, data processing algorithms or deployment results. Transparent theme-aware surfaces preserve the page canvas; the three inputs form a compact row above a vertical flow below 760px. Chip, code, material-layer, prototype, interface and business-value symbols replace the earlier boxes. Thin curved SVG arrows recalculate from actual element positions after resizing or font loading. The GIF aligns with the left content edge on desktop.

## Branch convention

Continuous-improvement sprints use `enhancement-post01`, `enhancement-post02`, `enhancement-post03` and so on. Inspect existing branches before choosing the next integer; do not reset the sequence or reuse an existing branch name. Work remains local until publication is requested.

## Post 01 closeout - 1 November 2026

Release: Sprint_post01_011126 on enhancement-post01. The visible event-reference footer contains only one link to https://www.hardwarethon.com/, labelled Hardwarethon 2019. The user confirmed omission of the unverified registered-mark symbol. hardwarethon-icon.svg is an original reusable hardware/H pictogram stored beside the GIF and poster; it is not the official event logo. The gallery is retained here as research provenance, but removed from the page footer.

Closeout validation: 32 pages built; 32 public assets and 54 source files checked; all 64 local route/asset HTTP responses passed. No unused assets or modules, byte-identical public duplicates, empty source/public directories or broken internal links were found. Hardwarethon, translations, French routing, contact, report navigation and simulated 3D controls passed; the production dependency audit reported zero vulnerabilities. The GIF conversion tools and draft closeout script were removed from ignored tmp/. Browser and physical-device visual QA remain pending as documented in ROADMAP.md.
