# NewTunes - Your Spotify Stats

Discover your top tracks, artists, and recent listens from Spotify. Filter by last month, six months, or all time and share your profile with friends. No server-side storage - your access token stays in a cookie on your device.

## Features

- Top tracks and artists with quick time-range filters (4 weeks, 6 months, all-time)
- Recent listens view
- Clean, responsive UI built with Tailwind
- Private by default — no database, no persistent user storage

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Headless UI + Heroicons
- Spotify Web API (implicit grant flow)

## Quick Start

1. Prerequisites

- Node.js 22+ and npm
- A Spotify Developer application (https://developer.spotify.com/dashboard)

2. Configure your Spotify app

- In your Spotify app settings, add a redirect URI for development: `http://localhost:3000/auth`
- Scopes required: `user-top-read user-read-recently-played`

3. Environment variables

Create a `.env.local` in the project root:

```bash
# Spotify app credentials
NEXT_PUBLIC_CLIENT_ID=your_spotify_client_id
CLIENT_SECRET=your_spotify_client_secret

# Where Spotify should send users after auth (must match your app settings)
# For local dev you can omit this — the app defaults to window.origin + /auth
NEXT_PUBLIC_REDIRECT_URL=http://localhost:3000/auth
```

Notes:

- `NEXT_PUBLIC_CLIENT_ID` and `NEXT_PUBLIC_REDIRECT_URL` are used by the client during the implicit grant redirect.
- `CLIENT_SECRET` is only needed when constructing the SDK server-side; no refresh tokens are stored.

4. Install and run

```bash
npm install
npm run dev
# Visit http://localhost:3000
```
