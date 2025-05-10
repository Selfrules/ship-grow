# Selfrules Website

A personal website built with [Astro](https://astro.build), based on the Astro Cactus theme.

## Key Features

- Built with Astro v5 
- Tailwind v4 for styling
- Dark & Light mode
- MD & MDX posts & notes support
- Responsive & SEO-friendly
- Auto-generated:
  - Open Graph images
  - Sitemap
  - RSS feeds
  - Webmentions integration
- Pagefind search functionality 

## Commands

| Command          | Action                                                        |
| :--------------- | :------------------------------------------------------------ |
| `pnpm install`   | Installs dependencies                                         |
| `pnpm dev`       | Starts local dev server at `localhost:3000`                   |
| `pnpm build`     | Build your production site to `./dist/`                       |
| `pnpm postbuild` | Pagefind script to build the static search                    |
| `pnpm preview`   | Preview your build locally, before deploying                  |

## Project Structure

The website follows the standard Astro project structure:

- `public/` - Static assets including images
- `src/content/` - Blog posts and notes in markdown format
- `src/components/` - UI components
- `src/layouts/` - Page layouts
- `src/pages/` - Routes and pages
- `src/styles/` - CSS styles
- `src/utils/` - Utility functions

## License

MIT
