# Repository Guidelines

## Project Structure & Module Organization
- `src/components`: React UI blocks such as `Header`, `Intro`, and `LatestProjects`; compose pages via `App.tsx`.
- `src/data/projects.json`: Source of portfolio cards—treat as the single place to add/edit project metadata.
- `src/utils/common.ts`: Shared helpers (formatting, data guards). Keep utilities pure so they remain tree-shakeable.
- `public` holds static assets referenced via absolute paths; `dist` is Vite’s build output and should never be edited manually.
- Global styling lives in `src/index.css` with Tailwind layers configured in `tailwind.config.js`.

## Build, Test, and Development Commands
- `pnpm install`: Sync dependencies defined in `package.json` / `pnpm-lock.yaml`.
- `pnpm dev`: Launch Vite dev server with React Fast Refresh.
- `pnpm build`: Run `tsc` type-checking, then create a production bundle in `dist/`.
- `pnpm preview`: Serve the built assets locally to verify deploy readiness.
- `pnpm lint`: Execute ESLint with the TypeScript + React ruleset; the build pipeline assumes a clean lint run.

## Coding Style & Naming Conventions
- TypeScript + JSX with 2-space indentation, single quotes for imports, and functional components.
- Prefer PascalCase for components (`GradientBackdrop`), camelCase for hooks/utilities, and kebab-case for file names outside React components.
- Tailwind classes should be ordered from layout → spacing → color for readability; co-locate complex class lists with `clsx`.
- Run `pnpm lint` or configure your editor with the repo ESLint settings before pushing.

## Testing Guidelines
- No dedicated test runner is configured yet; rely on `pnpm lint` plus `pnpm preview` walkthroughs.
- When fixing bugs, describe the manual steps taken (browser, viewport, interaction) inside the PR to document coverage.
- If you introduce Jest/RTL or Playwright tests, place them next to the component (e.g., `LatestProjects.test.tsx`) and mirror the component structure.

## Commit & Pull Request Guidelines
- Follow the existing short, imperative commit style (`change html title`, `mvp with dummy data`). Keep messages under 72 characters and focus on intent.
- Each PR should describe scope, highlight UI or data changes, and link any tracked issue.
- Include before/after screenshots or GIFs for visible updates, plus steps to reproduce for bugfixes.
- Ensure PRs pass `pnpm lint` and include updated `projects.json` entries or assets when relevant.
