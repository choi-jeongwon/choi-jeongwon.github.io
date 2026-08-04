# Personal academic website — Jeongwon Choi

Plain HTML/CSS site, no build step. Open `index.html` or serve the folder with any
static server (e.g. `python3 -m http.server`).

## Structure

- `index.html` — About / home page (bio, research interests, news, contact links)
- `research.html` — publications (Korean papers listed with Korean titles), presentations
- `experience.html` — professional experience and contract research
- `teaching.html` — curriculum development and teaching experience
- `css/style.css` — all styling (light + dark mode via `prefers-color-scheme`)
- `images/` — profile photo

PDF files (CV/resume) are intentionally excluded from the site and git (`.gitignore`).

## Updating

- New paper or talk: add an `<li>` in the matching section of `research.html`.
- News: edit the News list at the bottom of `index.html`.

## Deploying to GitHub Pages

1. Create a repo named `choi-jeongwon.github.io` on GitHub.
2. Push this folder to its `main` branch.
3. The site appears at https://choi-jeongwon.github.io within a few minutes
   (Settings → Pages should show "Deploy from branch: main").
