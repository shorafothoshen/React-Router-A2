# 🎬 Movie Explorer

A simple movie/show explorer built with React, React Router and Tailwind CSS. You can browse shows, search for a title, and click into a modal to see more details — rating, genre, release year, overview, all that. Data comes from the [API](https://www.tvmaze.com/api), which is free and doesn't need an API key.

This was built as part of an assignment, so it's kept fairly simple on purpose — no state management library, no TypeScript, just plain React with hooks.

## Live Link

🔗 [https://movie-explorer-silk-nine.vercel.app/]

## Screenshots

*(add a screenshot or two of the home page and the movie grid here)*

## Tech Stack

- **React** – UI
- **React Router v7** – routing (`/` for home, `/movies` for the listing page)
- **Tailwind CSS** – styling, no custom CSS files

## Getting Started

Clone the repo and install dependencies:

```bash
git clone <https://github.com/shorafothoshen/React-Router-A2>
cd movie-explorer
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open whatever URL Vite prints (usually `http://localhost:5173`).

Routing happens once, at the top level, in `App.jsx`. Every page renders inside `MainLayout`, so the navbar doesn't need to be re-imported into every page — it's already there.

## Features

- Home page with a hero section and a CTA button into the listing page
- Search bar that filters shows by title (debounced, so it's not firing a request on every keystroke)
- Responsive grid — 1 column on mobile, up to 4 columns on bigger screens
- Details modal — closes on the ✕ button, the Close button, clicking outside, or pressing Escape

## Known limitations

- TVMaze is mostly TV shows, not movies, so results won't always be "movies" in the strictest sense — but the API and data shape is what the assignment asked us to work with.
- No pagination — `/shows` returns a decent chunk of data on its own, which is enough for this assignment.
- No loading skeletons, just a plain "Loading..." text.
