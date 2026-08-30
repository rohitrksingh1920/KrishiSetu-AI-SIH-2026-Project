# KrishiSetu — SIH Prototype

A multilingual, offline-first plot intelligence and agricultural assistance
platform prototype: weekly action briefings, crop & sugarcane-ratoon
planning, preliminary crop-image diagnosis, an insurance evidence generator,
WhatsApp/IVR channel simulation, and an officer/admin dashboard — built as a
real, runnable Vite + React app.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production
bundle in `dist/`.

## Folder structure

```
index.html                  Vite HTML entry
vite.config.js               Vite + React plugin config
tailwind.config.js            Tailwind content paths
postcss.config.js             Tailwind/Autoprefixer pipeline
src/
  main.jsx                    React root, mounts <App />
  index.css                   Fonts, design tokens (CSS vars), animations
  App.jsx                     Top-level state: role (farmer/officer),
                               language (en/hi), active tab
  theme/
    tokens.js                 Color palette (source of truth for JS-side
                               colors used in charts/gradients)
  data/
    translations.js           EN/HI copy dictionary
    mockData.js                Briefing actions, NDVI/rainfall chart data,
                               farmers, escalations, claims, IVR script
    nav.js                     Farmer + officer navigation config
  components/
    layout/
      Header.jsx               Brand bar, language toggle, role switch
      Sidebar.jsx               Desktop nav for the farmer app
      MobileNav.jsx             Bottom tab bar on small screens
    primitives/
      ConfidenceDial.jsx        Rain-gauge-style confidence indicator
      SourceChip.jsx            Citation chip (IMD, ICAR, Sentinel-2, ...)
      SectionEyebrow.jsx        Small uppercase section label
      ValidatorFooter.jsx       Recurring confidence/sources/escalation
                                 disclosure, used everywhere AI output
                                 is shown
    farmer/
      BriefingView.jsx          Weekly Action Briefing (home screen)
      PlotView.jsx               Kisan-card-styled plot profile
      PlannerView.jsx             Crop calendar + ratoon regrowth + rotation
      DiagnoseView.jsx            Crop image diagnosis (vision model)
      ClaimView.jsx                Insurance evidence report generator
      ChannelsView.jsx             WhatsApp preview + IVR call simulation
    officer/
      OfficerApp.jsx              Officer/admin dashboard (separate mode)
```

## Design notes

- Palette is a deliberate "soil / monsoon / almanac" set (`src/theme/tokens.js`)
  — not the cream+terracotta or dark+neon defaults common to AI-generated UI.
- Typography: Fraunces (display), IBM Plex Sans (body — has real Devanagari
  support), IBM Plex Mono (data readouts).
- Every AI-derived output (briefing actions, diagnosis, ratoon trend) is
  followed by the same `ValidatorFooter` — confidence, sources, escalation —
  matching the project plan's non-negotiable safety rules.
- All data in `src/data/mockData.js` and `translations.js` is illustrative;
  wire real IMD/Bhashini/Sentinel-2/Supabase calls in behind the same
  component props to move from prototype to production.
