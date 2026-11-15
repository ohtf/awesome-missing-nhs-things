# Awesome Missing NHS Things [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of the software, APIs, open data, components and infrastructure that NHS and UK health and care work needs but doesn't have.

[![Licence: CC BY-SA 4.0](https://img.shields.io/badge/Licence-CC%20BY--SA%204.0-blue.svg)](LICENSE)

Read it on the site: <https://ohtf.github.io/awesome-missing-nhs-things/>

This is an un-awesome list. [awesome-healthcare](https://github.com/kakoni/awesome-healthcare) collects the good things that exist; this list records what is conspicuously absent, or exists only under a licence, paywall or closed platform that stops anyone else building on it. It is meant for developers looking for something worth building, clinicians who keep running into the same gaps, and anyone deciding what to fund. It is not policy of the [Open Health Technology Foundation](https://openhealthtechnology.org) (OHTF), although several OHTF projects started as entries here.

The list started in 2018. When a gap is filled, its entry stays, marked `solved`, with a link to whoever filled it. The OHTF website tells [the story of the list](https://openhealthtechnology.org/about/awesome-missing-nhs-things/), and how several of its entries became OHTF projects.

## Status markers

Every entry starts with one marker:

| Marker | Meaning |
| --- | --- |
| `missing` | Nothing usable exists. |
| `restricted` | It exists, but a per-use licence, paywall, registration requirement or closed platform stops it being freely reused or built on. |
| `partial` | An open or national service covers part of the need. The entry says which part is still missing. |
| `building` | An open project is working on it. |
| `solved` | It now exists openly. The entry stays as a record and credits whoever built it. |

Statuses were last checked in November 2026.

## The list

Each section is a page in [`docs/list/`](docs/list/), readable here on GitHub or on the site.

- [Clinical instruments and assessment tools](docs/list/clinical-instruments-and-assessment-tools.md): open, coded versions of scored questionnaires and rating scales, starting with ADHD.
- [Clinical calculation and decision support](docs/list/clinical-calculation-and-decision-support.md): shared, assured calculators and guidance a computer can run.
- [Medicines and prescribing](docs/list/medicines-and-prescribing.md): shortage alerts, interaction data, dosing, formularies and prescribing components.
- [Pathology, imaging and diagnostics](docs/list/pathology-imaging-and-diagnostics.md): reference ranges, imaging referral guidance and genomic test eligibility as data.
- [Guidance and patient information](docs/list/guidance-and-patient-information.md): patient information and triage content that others can adapt and reuse.
- [Care planning and end of life](docs/list/care-planning-and-end-of-life.md): a national advance care plan and a digital death certificate.
- [Health records](docs/list/health-records.md): portable and patient-held records, and patient photos.
- [Reusable interface components](docs/list/reusable-interface-components.md): a clinical interface framework, code pickers, early warning scores and diagrams.
- [Terminology and codelists](docs/list/terminology-and-codelists.md): curated, versioned codelists with an API.
- [National platform services](docs/list/national-platform-services.md): national APIs, client libraries, consent, transport booking and staff records.
- [Staff identity, registers and credentials](docs/list/staff-identity-registers-and-credentials.md): staff identity, register APIs, portfolios and portable credentials.
- [Communications](docs/list/communications.md): reaching all staff in a crisis, NHS email, instant messaging and replacing bleeps.
- [Rostering and on-call](docs/list/rostering-and-on-call.md): an API that says who is on call.
- [Organisations, locations and maps](docs/list/organisations-locations-and-maps.md): organisation codes, care home data and health map layers.
- [Operational and performance data](docs/list/operational-and-performance-data.md): live A&E status, waiting times, referral criteria and costing.
- [Data, testing and AI evaluation](docs/list/data-testing-and-ai-evaluation.md): synthetic patients, conformance tests, de-identification and test sets for AI.
- [Clinical safety and governance](docs/list/clinical-safety-and-governance.md): hazard logs, device registration data and incident reporting.
- [Interoperability](docs/list/interoperability.md): SMART on FHIR launch, virtual wards and research eligibility.
- [Public health rules as code](docs/list/public-health-rules-as-code.md): immunisation and screening schedules, and QOF rules.
- [Preservation of NHS technical documentation](docs/list/preservation-of-nhs-technical-documentation.md): rescuing specifications before they disappear.

Entries that need more than a few sentences have a longer write-up in [`docs/briefs/`](docs/briefs/).

## Contributing

Suggestions, corrections and news that something now exists are welcome as issues or pull requests. The [contributing guide](docs/contributing.md) explains what belongs on the list, how to format an entry, when to write a brief, and how to preview the site locally with `s/docs`. Sign off commits under the [Developer Certificate of Origin](https://openhealthtechnology.org/community/dco/).

Related: [awesome-healthcare](https://github.com/kakoni/awesome-healthcare) lists what exists, and the [OHTF projects page](https://openhealthtechnology.org/projects/) lists open health projects with a neutral home.

## Licence

[CC BY-SA 4.0](LICENSE), copyright Marcus Baw and contributors.
