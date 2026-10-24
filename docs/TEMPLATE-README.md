# Qudra Labs invitation studio

A fictional bilingual English/Arabic digital invitation demo, built with Vite and React. Includes a creator, colour palettes, a live invitation, countdown, Google Maps link, gallery, local RSVP form, and guest-note summary. LICENSE is retained from the original template.

## Run

Use Node.js 20.19+ (Node.js 22 recommended).

```sh
npm install
cp .env.example .env
npm run dev
```

Optionally set `GEMINI_API_KEY` in `.env`. Never prefix this secret with `VITE_`. Without it, the server returns labeled canned demo responses. `npm run build` creates the static application in `dist`; `npm run preview` previews that build. Generation requires the Vite dev server or deployed serverless endpoint. Static-only hosting still renders the demo, invitation, themes and local RSVP; generation reports an error when the API is unavailable.

## Deployment and data

Deploy on Vercel as a Vite app, output directory `dist`; `api/invitation.ts` supplies the serverless API. Configure `GEMINI_API_KEY` only as a server environment variable. The Google GenAI SDK and key are used server-side only, with model `gemini-2.5-flash`.

RSVPs stay in this browser's localStorage under `qudra-rsvps`; they are not shared between devices. The host dashboard is a local demo, not an authenticated production dashboard. Guest notes are sent to Gemini only when the host requests a summary. No Firebase setup is required. Event details, venue and names are fictional; the map link searches the demo city for garden venues rather than claiming a real venue. Wedding inspiration photography is hosted by Unsplash.

Before public production use, add authenticated host access, shared RSVP storage and API rate limiting. The existing LICENSE remains applicable.
