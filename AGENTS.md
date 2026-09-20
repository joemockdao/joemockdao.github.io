# Repository Guidelines

## Project Structure & Module Organization

This repository is a dependency-free static portfolio deployed from the repository root through GitHub Pages.

- `index.html`: semantic page structure, content, metadata, and `data-i18n` hooks.
- `css/style.css`: responsive layout, theme variables, components, and animations.
- `js/main.js`: Italian/English translations and all client-side behavior, including theme, navigation, filters, scroll spy, and clipboard actions.
- `assets/`: optimized WebP profile images used by the page.
- `CNAME`: custom-domain mapping for `giovannitrenta.it`; preserve it during deployment changes.
- `README.md` and `STORICO_PROGETTO.md`: public overview and project history/operational notes.

There is no generated output directory, package manager, or application framework.

## Build, Test, and Development Commands

No build or dependency installation is required. Run a local preview from the repository root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`. Check JavaScript syntax with:

```bash
node --check js/main.js
```

Use `git diff --check` before committing to detect whitespace errors. On the documented macOS setup, prefer `PATH="/usr/bin:$PATH" git status` to select the native Git binary.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript. Follow the existing vanilla JavaScript style: `const`/`let`, single-quoted strings in behavior code, semicolons, and camelCase function names such as `initProjectFilters`. Use kebab-case for CSS classes and IDs. Reuse CSS custom properties from `:root` instead of duplicating colors, spacing, or transitions.

Keep Italian and English translation keys synchronized in `js/main.js`. When adding visible text, connect it through a descriptive snake_case `data-i18n` key where localization applies. Preserve semantic HTML, accessible labels, and external-link safeguards (`target="_blank"` with `rel="noopener noreferrer"`).

## Testing Guidelines

There is currently no automated test framework or coverage requirement. Manually verify both languages, dark/light themes, mobile navigation, project filters, anchor scrolling, email copy behavior, and responsive layouts. Also confirm that the browser console is error-free and that image and external links resolve.

## Commit & Pull Request Guidelines

The limited history uses a concise, imperative summary (`Initial release: ...`). Continue with focused messages such as `Update project links` or `Improve mobile navigation`. Keep each commit scoped to one logical change.

Pull requests should explain the user-visible impact, list manual checks performed, and link relevant issues. Include before/after screenshots for layout or styling changes, covering desktop and mobile when responsive behavior is affected. Preview all changes locally before requesting review or publishing to `main`.
