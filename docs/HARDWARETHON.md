# Hardwarethon presentation and provenance

Updated: 1 November 2026. Release: `Sprint_post02_011126`, branch `enhancement-post02`.

## Content and structure

Four localized routes share HardwarethonPage.astro and src/i18n/hardwarethon.ts. The page preserves the 2019 edition, third-place result, 48-hour challenge and coffee-production concept. The owner confirmed Texas Tech University as the venue; it appears once per localized body, without identifying it as organizer.

The outcome explains sensor-based bean monitoring and quality assessment without inventing measured variables, sensor models or accuracy. The five-person team includes software, materials and electronics engineers, integrating engineering, UX/UI and business design. The shared pipeline has three stages with regular-weight titles; major headings retain their weight.

## Concept diagram

ConceptIntegration.astro renders three engineering input blocks feeding the shared prototype, followed by UX/UI and the business model. Each block has an embedded symbol and one fine border. SVG arrows terminate at block edges and update after resizing or font loading. Desktop preserves the horizontal composition. Below 760px, three inputs occupy one row and converge into the vertically arranged stages. Theme-aware surfaces and lilac strokes follow the page palette; the light canvas is #f1eef5.

## Three animated figures

AnimatedFigure.astro provides lazy loading, localized descriptions and captions, independent click/tap or Enter/Space playback, visible keyboard focus and static reduced-motion picture sources. No visible pause text or video player is rendered. Each GIF and poster lives in public/images/library/milestones/hardwarethon/.

- teamwork.gif: 560 x 315, 85 frames, 5,339,469 bytes; first event accent, aligned left. Official source: https://assets.website-files.com/5cc760445da5ee7ebb6cac97/5cd2014d82934a589eef93cd_teamwork-transcode.mp4
- coffee-sensor.gif: 640 x 360, 59 frames, 124,875 bytes; four roasted beans in a 2 x 2 arrangement with a gentle scan. Its caption explicitly identifies an AI-generated conceptual illustration. It replaces the supplied industrial-bearing reference, not actual project hardware. The original reference was GIPHY FWnkMzJRZr3yZBObC1; the industrial asset is no longer shipped.
- prototyping.gif: 480 x 480, 32 frames, 2,164,291 bytes; placed after the pipeline, aligned left and capped at 30rem. Official archival source: https://assets.website-files.com/5cc760445da5ee7ebb6cac97/5cc88b759b8ac62c8dde95ce_HW2017_Stopmotion_03-transcode.mp4

Archival footage is not presented as the owner’s team or the 2019 edition. Converted MP4 sources, draft frames and conversion tools are not shipped.

## References and wordmark

The official website https://www.hardwarethon.com/ supports the multidisciplinary prototyping format. The gallery https://www.hardwarethon.com/galeria/ was research provenance; the visible footer contains only the official-site capsule labelled Hardwarethon 2019, without an added registered-mark character.

The original wordmark is stored as hardwarethon-logo.svg, from https://assets.website-files.com/5cc760445da5ee7ebb6cac97/5cc8b41666c4c6f5a9643072_hardwarethonlogo.svg. Its mask matches Experience logos: #c4b5fd in dark and #3b0764 in light, at 1.5rem desktop and 1.35rem below 48rem. The original vector letterforms and embedded marks are preserved; the superseded custom icon is removed.

## Closeout and continuity

Check the build, four-language content, Hardwarethon structure, contact, report navigation, simulated model controls, dependency audit and repository references before publication. Preserve the shared GoatCounter analytics. Browser and physical-device rendering remain separate pending checks following the browser tool’s Windows D: I/O failure.

Continuous-improvement branches increment enhancement-post01, enhancement-post02, enhancement-post03 and onward. The next branch is enhancement-post03.

Release validation: 32 pages built; 36 public assets and 55 reachable source files audited; all 68 local HTTP checks passed. No unused assets/modules, duplicate public files, broken internal links or empty source/public folders were found. All six regression scripts passed, git diff --check was clean, and npm audit --omit=dev reported zero vulnerabilities.
