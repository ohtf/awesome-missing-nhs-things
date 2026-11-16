---
description: The software, APIs, open data, components and infrastructure that NHS and UK health and care work needs but doesn't have.
---

# Awesome Missing NHS Things [![Awesome](https://awesome.re/badge.svg)](https://awesome.re){ .amnt-awesome-badge }

A curated list of the software, APIs, open data, components and infrastructure that NHS and UK health and care work needs but doesn't have.

This is an un-awesome list. [awesome-healthcare](https://github.com/kakoni/awesome-healthcare) collects the good things that exist; this list records what is conspicuously absent, or exists only under a licence, paywall or closed platform that stops anyone else building on it. It is meant for developers looking for something worth building, clinicians who keep running into the same gaps, and anyone deciding what to fund. It is not policy of the [Open Health Technology Foundation](https://openhealthtechnology.org) (OHTF), although several OHTF projects started as entries here.

<!-- markdownlint-disable MD046 - admonition bodies are indented, not code -->

??? note "What is an awesome list, and why an un-awesome one?"

    Awesome lists are a GitHub tradition that Sindre Sorhus started in 2014 with [sindresorhus/awesome](https://github.com/sindresorhus/awesome): curated lists of the best tools and resources on a subject, marked with the sunglasses badge. There are now awesome lists on most programming subjects and many others, including [awesome-healthcare](https://github.com/kakoni/awesome-healthcare).

    Marcus Baw started this one in 2018 as a partner to awesome-healthcare, turned inside out. That list already covered what exists. In NHS IT the gaps are at least as instructive: things nobody has built, and things that exist but can't be reused. So this list collects those instead, and keeps the sunglasses.

<!-- markdownlint-enable MD046 -->

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

Statuses were last checked in November 2026. The [Health Bill introduced in 2026](https://www.gov.uk/government/publications/health-bill-role-and-functions-of-the-restructured-dhsc-fact-sheet/health-bill-role-and-functions-of-the-restructured-dhsc-fact-sheet) moves NHS England's functions into the Department of Health and Social Care, so some `england.nhs.uk` and `digital.nhs.uk` links will probably move.

## The list

- [Clinical instruments and assessment tools](list/clinical-instruments-and-assessment-tools.md): open, coded versions of scored questionnaires and rating scales, starting with ADHD.
- [Clinical calculation and decision support](list/clinical-calculation-and-decision-support.md): shared, assured calculators and guidance a computer can run.
- [Medicines and prescribing](list/medicines-and-prescribing.md): shortage alerts, interaction data, dosing, formularies and prescribing components.
- [Pathology, imaging and diagnostics](list/pathology-imaging-and-diagnostics.md): reference ranges, imaging referral guidance and genomic test eligibility as data.
- [Guidance and patient information](list/guidance-and-patient-information.md): patient information and triage content that others can adapt and reuse.
- [Care planning and end of life](list/care-planning-and-end-of-life.md): a national advance care plan and a digital death certificate.
- [Health records](list/health-records.md): portable and patient-held records, and patient photos.
- [Reusable interface components](list/reusable-interface-components.md): a clinical interface framework, code pickers, early warning scores and diagrams.
- [Terminology and codelists](list/terminology-and-codelists.md): curated, versioned codelists with an API.
- [National platform services](list/national-platform-services.md): national APIs, client libraries, consent, transport booking and staff records.
- [Staff identity, registers and credentials](list/staff-identity-registers-and-credentials.md): staff identity, register APIs, portfolios and portable credentials.
- [Communications](list/communications.md): reaching all staff in a crisis, NHS email, instant messaging and replacing bleeps.
- [Rostering and on-call](list/rostering-and-on-call.md): an API that says who is on call.
- [Organisations, locations and maps](list/organisations-locations-and-maps.md): organisation codes, care home data and health map layers.
- [Operational and performance data](list/operational-and-performance-data.md): live A&E status, waiting times, referral criteria and costing.
- [Data, testing and AI evaluation](list/data-testing-and-ai-evaluation.md): synthetic patients, conformance tests, de-identification and test sets for AI.
- [Clinical safety and governance](list/clinical-safety-and-governance.md): hazard logs, device registration data and incident reporting.
- [Interoperability](list/interoperability.md): SMART on FHIR launch, virtual wards and research eligibility.
- [Public health rules as code](list/public-health-rules-as-code.md): immunisation and screening schedules, and QOF rules.
- [Preservation of NHS technical documentation](list/preservation-of-nhs-technical-documentation.md): rescuing specifications before they disappear.

Some entries need more than a few sentences. Those have a longer write-up in [Briefs](briefs/index.md).

## Contributing

Suggestions, corrections and news that something now exists are welcome as [issues](https://github.com/ohtf/awesome-missing-nhs-things/issues) or pull requests. [Contributing](contributing.md) explains what belongs on the list, how to format an entry and when to write a brief.

## Licence

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), copyright Marcus Baw and contributors.
