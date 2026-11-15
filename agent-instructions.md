# Agent Instructions

Awesome Missing NHS Things is a curated list of the software, APIs, open data, components and infrastructure that NHS and UK health and care work needs but does not have, or has only under a licence, paywall or closed platform that stops others building on it. The repository holds Markdown prose and links, published as a [Zensical](https://zensical.org) site in the OHTF theme; the only code is the site's small stylesheet and status-marker script. Things that already exist openly belong in [awesome-healthcare](https://github.com/kakoni/awesome-healthcare), and the list is not OHTF policy.

This file is the entry point for AI coding agents. Read it before changing anything.

## Read First

- [README.md](README.md) - the GitHub front page: introduction, status legend and the list of sections.
- [docs/contributing.md](docs/contributing.md) - entry format, what qualifies, when to write a brief, and how to add a section. The root `CONTRIBUTING.md` is a short pointer to it.
- [docs/list/](docs/list/) - the list itself, one page per section. This is the source of truth for entries.
- [docs/briefs/](docs/briefs/) - long-form write-ups for entries that need more than a few sentences.
- [mkdocs.yml](mkdocs.yml) - site configuration and the `nav`.
- [pacharanero/house-style](https://github.com/pacharanero/house-style) - cross-repo standards, especially `docs.md`, `repo-presentation.md`, `ci.md` and `commits.md`.
- The OHTF website's [agent instructions](https://github.com/ohtf/openhealthtechnology.org-website/blob/main/agent-instructions.md) - the voice rules and how OHTF projects are labelled.

## Core Invariants

- Every entry carries exactly one status marker from the legend (`missing`, `restricted`, `partial`, `building`, `solved`) as inline code at the very start of the list item; the site's script styles markers only in that position. When something now exists, update its status and link it; do not silently delete it. Remove an entry only when it is fully, openly solved, and then say so in the commit message.
- Claims about what exists, who runs it and what it costs or how it is licensed must cite a source. Do not invent programmes, APIs or licence terms; where a position is uncertain, say so in the entry.
- Voice: say plainly what is missing and which structures or incentives keep it missing. Never criticise named suppliers, individual staff or anyone with less power than the system being described, and write nothing a cautious NHS reader would see as a reputational risk.
- Avoid machine-sounding prose, following Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) and the [humanizer skill](https://github.com/blader/humanizer): no "not X but Y" contrasts, one-line closers, forced triads, inflated significance, stock words (crucial, robust, landscape, pivotal, key), or bold labels on every list item. Preserve Marcus Baw's own phrasing where it survives from earlier versions.
- Write about projects neutrally, in the third person. OHTF Foundation Projects link to `github.com/ohtf`; candidate projects are labelled as candidates and link to their current home. Never present a candidate as owned or maintained by OHTF. Check the website's [projects page](https://openhealthtechnology.org/projects/) when in doubt.
- Never include real patient data, credentials or confidential planning material (partner negotiations, procurement documents, unpublished OHTF decisions).
- Entries stay short: a status marker, a plain name and colon, then one to three sentences or a short sub-list. Anything longer becomes a brief under `docs/briefs/<slug>.md`, linked from the entry, linking back to its section, and listed on `docs/briefs/index.md`.
- Every page under `docs/` is in the `nav` in `mkdocs.yml`. The list of sections appears in three places, which must stay in step: the `nav`, the home page (`docs/index.md`) and the README.
- Nested lists are indented four spaces, which both GitHub and the site render; two spaces render flat on the site.
- The site's colours come only from the OHTF Surgical Green tint scale in `docs/stylesheets/extra.css`, copied from the openhealthtechnology.org website. Do not add accent colours. The header logo (`docs/assets/ohtf-mark-green.svg`, with `ohtf-mark-white.svg` for the dark scheme) and the favicon (`ohtf-avatar.svg`) are unaltered copies of the authoritative files in the OHTF planning material's `logo-graphics/`; replace them only with fresh copies from there, never redraw or recolour them.
- British English, hyphens not em dashes, no hard-wrapped Markdown, slug-case filenames.
- The Awesome badge beside the README title is a deliberate exception to house-style's rule against decorative badges, because it marks this as an awesome-style list. Keep it.

## Workflow

- `s/docs` - serve the site with live reload on the first free port in 8000-8030 and open the browser (`--no-open` to skip it). One-off setup: `python3 -m venv .venv && ./.venv/bin/pip install -r requirements.txt`.
- `s/build` - build the site into `site/`, as CI does. Pass `--strict` to fail on warnings.
- `s/check-docs-nav` - fail on pages missing from the nav, or nav entries with no page.
- `s/up` - preview the Markdown roughly as GitHub renders it, on a free local port, with the browser opened and live reload (`--no-open` to skip the browser, `PORT=` to fix the port).
- `s/lint` - Markdown lint with markdownlint-cli2 (needs Node.js).
- `s/check-links` - external and internal link check with lychee (needs `lychee` on `PATH`).

## Before Every Commit

```sh
s/lint
s/check-docs-nav
s/build --strict
```

Run `s/check-links` when adding or changing links. CI runs all of these, plus zizmor over the workflows. For changes to the site's look, inspect it at phone (390x844), tablet (768x1024) and desktop (1440x900) widths in light and dark schemes.

## Git Workflow

- Commit each validated, coherent change with a conventional commit message (`docs(list):`, `docs(briefs):`, `docs(site):`, `ci:`, `chore:`), signed off under the DCO (`git commit -s`).
- Pull with `git pull --rebase` before committing; other agents may be working in this repository at the same time.
- Do not push unless the user asks. Pushes that touch `docs/`, `mkdocs.yml` or `requirements.txt` redeploy the site.
- PR descriptions: a two-or-three-line visible summary, then detail folded in `<details><summary>` (see [house-style](https://github.com/pacharanero/house-style/blob/main/commits.md#pull-request-descriptions)).

## Assurance

- Before committing research output, open each cited page and check that it says what the entry claims.
- Follow the house-style [class-wide fix directive](https://github.com/pacharanero/house-style/blob/main/agents.md#fix-the-class-not-just-the-instance): when one entry turns out to be stale, check its neighbours for the same staleness (renamed bodies, retired services, moved URLs).

## Approval Required

Ask before pushing, opening issues or PRs, transferring or renaming the repository, changing its default branch or settings, or contacting any organisation named in the list.
