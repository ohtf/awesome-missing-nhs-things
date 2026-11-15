# Agent Instructions

Awesome Missing NHS Things is a curated list of the software, APIs, open data, components and infrastructure that NHS and UK health and care work needs but does not have, or has only under a licence, paywall or closed platform that stops others building on it. The repository holds Markdown prose and links, and no code. Things that already exist openly belong in [awesome-healthcare](https://github.com/kakoni/awesome-healthcare), and the list is not OHTF policy.

This file is the entry point for AI coding agents. Read it before changing anything.

## Read First

- [README.md](README.md) - the list itself, its status legend and section order.
- [CONTRIBUTING.md](CONTRIBUTING.md) - entry format, what qualifies, and when to write a brief.
- [briefs/](briefs/) - long-form write-ups for entries that need more than a few lines.
- [pacharanero/house-style](https://github.com/pacharanero/house-style) - cross-repo standards, especially `repo-presentation.md`, `ci.md` and `commits.md`.
- The OHTF website's [agent instructions](https://github.com/ohtf/openhealthtechnology.org-website/blob/main/agent-instructions.md) - the voice rules and how OHTF projects are labelled.

## Core Invariants

- Every entry carries exactly one status marker from the README legend. When something now exists, update its status and link it; do not silently delete it. Remove an entry only when it is fully, openly solved, and then say so in the commit message.
- Claims about what exists, who runs it and what it costs or how it is licensed must cite a source. Do not invent programmes, APIs or licence terms; where a position is uncertain, say so in the entry.
- Voice: say plainly what is missing and which structures or incentives keep it missing. Never criticise named suppliers, individual staff or anyone with less power than the system being described, and write nothing a cautious NHS reader would see as a reputational risk.
- Avoid machine-sounding prose, following Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) and the [humanizer skill](https://github.com/blader/humanizer): no "not X but Y" contrasts, one-line closers, forced triads, inflated significance, stock words (crucial, robust, landscape, pivotal, key), or bold labels on every list item. Preserve Marcus Baw's own phrasing where it survives from earlier versions.
- Write about projects neutrally, in the third person. OHTF Foundation Projects link to `github.com/ohtf`; candidate projects are labelled as candidates and link to their current home. Never present a candidate as owned or maintained by OHTF. Check the website's [projects page](https://openhealthtechnology.org/projects/) when in doubt.
- Never include real patient data, credentials or confidential planning material (partner negotiations, procurement documents, unpublished OHTF decisions).
- README entries stay short: a status marker, a plain name and colon, then one to three sentences or a short sub-list. Anything longer becomes a brief under `briefs/<slug>.md`, linked from the entry.
- British English, hyphens not em dashes, no hard-wrapped Markdown, slug-case filenames.

## Workflow

- `s/lint` - Markdown lint with markdownlint-cli2 (needs Node.js).
- `s/check-links` - external and internal link check with lychee (needs `lychee` on `PATH`).

## Before Every Commit

```sh
s/lint
```

Run `s/check-links` when adding or changing links. CI runs both, plus zizmor over the workflows.

## Git Workflow

- Commit each validated, coherent change with a conventional commit message (`docs(list):`, `docs(briefs):`, `ci:`, `chore:`), signed off under the DCO (`git commit -s`).
- Do not push unless the user asks.
- PR descriptions: a two-or-three-line visible summary, then detail folded in `<details><summary>` (see [house-style](https://github.com/pacharanero/house-style/blob/main/commits.md#pull-request-descriptions)).

## Assurance

- Before committing research output, open each cited page and check that it says what the entry claims.
- Follow the house-style [class-wide fix directive](https://github.com/pacharanero/house-style/blob/main/agents.md#fix-the-class-not-just-the-instance): when one entry turns out to be stale, check its neighbours for the same staleness (renamed bodies, retired services, moved URLs).

## Approval Required

Ask before pushing, opening issues or PRs, transferring or renaming the repository, changing its default branch or settings, or contacting any organisation named in the list.
