# AGENTS.md

Doel: korte, project-specifieke instructies voor Codex en anderen die in deze repo werken.

## Snelle commando's
- Install: `npm install`
- Dev server: `npm run dev` (standaard op `http://localhost:4321`)
- Build: `npm run build`
- Preview build: `npm run preview`

## Project structuur (Astro)
- Pagina's: `src/pages/` (bestandsnaam = route)
- Componenten: `src/components/`
- Statische assets: `public/`
- Build output: `dist/`

## Werkafspraken
- Houd edits klein en gericht; liever meerdere kleine commits dan 1 grote.
- Gebruik bestaande layout en componenten als basis.
- Houd teksten beknopt en consistent met de bestaande tone of voice.
- Voeg alleen nieuwe dependencies toe als het echt nodig is.

## Deploy notities
- Zie `DEPLOY_IDEX.md` voor de server deploy stappen.
- In de README staan ook push/deploy stappen die soms gebruikt worden.

## Tests
- Geen tests aanwezig; valideer wijzigingen met `npm run dev` of `npm run build`.
