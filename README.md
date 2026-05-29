# API Docs Theme

Single-page OpenAPI documentation theme for Baklib CMS. The home page renders an OpenAPI spec via [Stoplight Elements](https://github.com/stoplightio/elements) (`elements-api` web component).

## What it does

- **Home template** (`templates/index.liquid`): reads `api_document` (inline JSON/YAML) or `api_document_url` (remote URL) and renders the API reference UI.
- **Default spec**: `presets/baklib-api.json` (Baklib OpenAPI example), referenced as `preset:baklib-api.json` in the template schema.
- **Site seeds**: `seeds/` initializes a new site with the same default OpenAPI document.

## Development

```bash
yarn
yarn build
```

- CSS: Tailwind v4 + daisyUI (`themes: false`) → `assets/stylesheets/application.css`
- JS: Turbo + Stimulus (`element_doc` controller) → `assets/javascripts/application.js`

Runtime brand colors are injected via `snippets/_theme_runtime_colors.liquid` (platform `--theme-color-*` → daisyUI `--color-*`).

## Required runtime assets (do not remove)

- `assets/javascripts/web-components.min.js` — Stoplight Elements
- `assets/css/styles.min.css` — Elements styles

## Directory layout

```
config/settings_schema.json   Site settings (header, colors)
layout/theme.liquid           Shell: header + main
templates/index.liquid        OpenAPI renderer
snippets/_header.liquid       Site header
snippets/_theme_runtime_colors.liquid
presets/baklib-api.json       Default OpenAPI spec
seeds/                        Site initialization data
src/                          Build sources
```
