# Capital Study

An interactive, full-stack course for reading Karl Marx’s *Capital* from the ground up. The course combines guided explanations, original chapter links, knowledge checks, economic models, flashcards, notes, bookmarks, and progress tracking.

## What is included

- 24 lessons across six levels, from method and commodities to crisis, politics, and open debates.
- A source library linking to all 106 chapters across the three volumes, plus four companion texts.
- Four interactive labs: surplus value, the circuit of capital, social reproduction, and profit/turnover.
- Two-question knowledge checks for every lesson, with explanations and saved best scores.
- A searchable 41-term glossary and flashcard review mode.
- Lesson notes, bookmarks, a notebook, and previous/next reading navigation.
- Responsive desktop and mobile layouts, keyboard-accessible controls, reduced-motion support, and installable PWA metadata.

The course is a structured introduction and advanced reading map, not a claim to settle every Marxist interpretation or controversy. Lesson text distinguishes Marx’s arguments, later traditions, and unresolved criticisms. The labs are simplified teaching models, not empirical forecasts.

## Running locally

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`. The complete course works in guest mode without configuration. To enable optional cloud synchronization, copy `.env.example` to `.env`, provide your own MySQL and Kimi OAuth credentials, then run `npm run db:push`.

```bash
npm run check   # TypeScript project check
npm run build   # Frontend production build and bundled server
npm start       # Production server
```

## Accounts and persistence

The whole course works without an account. Guest progress and notes are stored only in the current browser using local storage; they are not a cloud backup and are not automatically migrated after sign-in.

Optional Kimi sign-in enables user-specific progress and notes through the Hono/tRPC API and Drizzle ORM with MySQL. Authentication credentials and database access remain server-side. See `.env.example` for variable names, not working credentials.

## Main project areas

- `src/data/`: lessons, glossary, and primary-source catalogue.
- `src/pages/`: course, reading, labs, library, glossary, and notebook views.
- `src/providers/learning.tsx`: guest and authenticated learning state.
- `api/learning-router.ts` and `api/queries/learning.ts`: validated learning API and persistence.
- `db/schema.ts`: user, lesson progress, and lesson note tables.
- `vite.config.ts`: frontend, development server, and PWA configuration.

## Primary sources and editions

Chapter links point to the Marxists Internet Archive:

- [Capital, Volume I](https://www.marxists.org/archive/marx/works/1867-c1/): Moore–Aveling English translation edited by Engels; first published in German in 1867, English edition in 1887.
- [Capital, Volume II](https://www.marxists.org/archive/marx/works/1885-c2/): edited by Engels from Marx’s manuscripts; first published in 1885.
- [Capital, Volume III](https://www.marxists.org/archive/marx/works/1894-c3/): edited by Engels from Marx’s manuscripts; first published in 1894.
- Companion works: *Manifesto of the Communist Party*, the 1859 Preface to *A Contribution to the Critique of Political Economy*, *Critique of the Gotha Programme*, and *Theses on Feuerbach*.

The archive supplies transcription and proofing notes for its editions. External texts remain on their source site; this project does not redistribute the book files.

## Fonts and visual assets

Archivo Variable, Newsreader Variable, and IBM Plex Mono are self-hosted through Fontsource. Their SIL Open Font License texts are included in the corresponding installed packages. Interface icons are from Lucide. The book sculpture, diagrams, and PWA icon were created for this project.
