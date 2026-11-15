# Contributing

Suggestions, corrections and news that something now exists are all welcome. You don't need permission to start: open an issue or a pull request.

## What belongs on the list

An entry belongs here when:

- people working in NHS or UK health and care need it, and you can say who and why;
- it doesn't exist, or exists only under a per-use licence, paywall, registration requirement or closed platform that stops it being reused, or in pieces that don't join up;
- it is something that can be built and shared: software, an API, open data, a reusable component, a standard turned into code, or a register.

A general complaint such as "the NHS should be better at X" is not enough. Say what would fix it, for example "an open API for X".

Things that already exist openly belong in [awesome-healthcare](https://github.com/kakoni/awesome-healthcare). When something on this list starts to exist, change its status and link to it rather than deleting it, so the list keeps a record of what was missing and who built it.

## Entry format

Each entry is one list item in the right section of [README.md](README.md):

```markdown
- `missing` Short name: what is missing and who needs it, in one to three sentences. Link to anything that partly exists, and to anyone building it. [Brief](briefs/short-name.md)
```

Start each entry with exactly one status marker:

| Marker | Meaning |
| --- | --- |
| `missing` | Nothing usable exists. |
| `restricted` | It exists, but a per-use licence, paywall, registration requirement or closed platform stops it being freely reused or built on. |
| `partial` | An open or national service covers part of the need. The entry says which part is still missing. |
| `building` | An open project is working on it. The entry links to it. |
| `solved` | It now exists openly. The entry stays as a record and credits whoever built it. |

Keep entries short. If one needs more than a few sentences of explanation, evidence or requirements, write a brief in `briefs/<slug>.md`, named after the entry in lowercase with hyphens, and link to it from the entry. A brief describes the gap, what exists today and what would close it, with sources.

## Writing style

- Cite a source for every claim about what exists, who runs it, how it is licensed or what it costs. If you are not sure, say so.
- Say plainly what is missing and why. Criticise systems and incentives, not named suppliers, individual staff or people with less power than the system you are describing.
- Write about projects in the third person, including your own.
- Use British English and hyphens rather than em dashes, and write each paragraph on one line (no hard wrapping).

## Checks

Run `s/lint` before committing. If you have [lychee](https://lychee.cli.rs/) installed, run `s/check-links` too. CI runs both.

## Sign-off and conduct

Sign off your commits under the [Developer Certificate of Origin](https://openhealthtechnology.org/community/dco/) with `git commit -s`, and follow the [Open Health Technology Foundation code of conduct](https://github.com/ohtf/.github/blob/main/CODE_OF_CONDUCT.md). Never include real patient data in an issue, pull request or brief.

Contributions are licensed under [CC BY-SA 4.0](LICENSE), like the rest of the list.
