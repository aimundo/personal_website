# Quarto academic website migration

Migrated from the supplied `personal_website-main.zip` (Hugo Apéro). This version includes **all seven authored blog posts** and **three talks**. Starter theme example content is excluded.

## Appearance
- Quarto `spacelab` theme in `_quarto.yml`
- IBM Plex Sans and IBM Plex Mono in `styles.scss`
- ORCID, Google Scholar, Bluesky, GitHub and LinkedIn in the right navbar
- No top-left site title or bottom Connect section

## Preview
Install Quarto and run `quarto preview` in the project root. Quarto was not available in the build environment, so please test rendering locally.

## R Markdown conversion
Each post/talk has an `index.qmd` and an `original.Rmd` archival copy. R chunks are **not executed by default** (`execute: eval: false`) to prevent old package/data dependencies from blocking builds. To regenerate R figures or widgets, restore execution selectively and test dependencies. Static images and supporting datasets were copied from the original source. Original rendered HTML and auto-generated `*_files` libraries were not republished. Check interactive JavaScript content and figures against the old site before deploying.

## URL preservation
All posts are placed under `/blog/<original-slug>/`. Validate legacy URLs and redirects on Netlify before merging into production.

## Netlify
See `netlify.toml` and `scripts/netlify-build.sh`. Verify that Netlify installs the pinned Quarto version and any needed R dependencies.

## Resume
The source repository's `Resume_Ariel_Mundo_Nov13.pdf` was copied; replace it with your latest CV if needed.


## Original R Markdown source archives

Original Hugo `.Rmd` files are preserved as `original.Rmd.txt` beside the converted `index.qmd` pages. The `.txt` extension prevents Quarto from treating Hugo-specific YAML (including nested `image` metadata) as a website page. Rename a copy to `.Rmd` if you need to work with the original source outside this website project.
