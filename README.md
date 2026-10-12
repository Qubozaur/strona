# Portfolio

Personal portfolio site - React + Vite, deployed as a static build to GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Editing content

All text lives in `src/data/profile.js`:

- `profile` - name, role, contact links, hero tagline, about paragraphs
- `skills` - the tool chips, grouped into cards
- `projects` - one object per project card

Fill in the `TODO` placeholders (`github`, `linkedin`) and the empty `repo` /
`demo` fields. A project card hides its link icons until the matching URL is
set, so empty strings are safe to leave in place.

Set `featured: true` on a project to make its card span two columns.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open **Settings - Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the
   site and publishes `dist/`.

`vite.config.js` uses `base: './'`, so the build works both at
`username.github.io` and at `username.github.io/repo-name` without changes.

## Notes

- No CSS framework. Styles are in `src/index.css`, driven by custom properties.
- Theme follows the operating system preference and remembers a manual override
  in `localStorage`.
- Icons are inline SVG, so the site ships with no runtime dependencies beyond
  React.
