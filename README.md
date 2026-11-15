# Awesome Missing NHS Things [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of the software, APIs, open data, components and infrastructure that NHS and UK health and care work needs but doesn't have.

[![Licence: CC BY-SA 4.0](https://img.shields.io/badge/Licence-CC%20BY--SA%204.0-blue.svg)](LICENSE)

This is an un-awesome list. [awesome-healthcare](https://github.com/kakoni/awesome-healthcare) collects the good things that exist; this list records what is conspicuously absent, or exists only under a licence, paywall or closed platform that stops anyone else building on it. It is meant for developers looking for something worth building, clinicians who keep running into the same gaps, and anyone deciding what to fund. It is not policy of the [Open Health Technology Foundation](https://openhealthtechnology.org) (OHTF), although several OHTF projects started as entries here.

The list started in 2018. When a gap is filled, its entry stays, marked `solved`, with a link to whoever filled it.

## Status markers

Every entry starts with one marker:

| Marker | Meaning |
| --- | --- |
| `missing` | Nothing usable exists. |
| `restricted` | It exists, but a per-use licence, paywall, registration requirement or closed platform stops it being freely reused or built on. |
| `partial` | An open or national service covers part of the need. The entry says which part is still missing. |
| `building` | An open project is working on it. |
| `solved` | It now exists openly. The entry stays as a record and credits whoever built it. |

Entries with a Brief link have a longer write-up in [`briefs/`](briefs/). Statuses were last checked in November 2026. The [Health Bill introduced in 2026](https://www.gov.uk/government/publications/health-bill-role-and-functions-of-the-restructured-dhsc-fact-sheet/health-bill-role-and-functions-of-the-restructured-dhsc-fact-sheet) moves NHS England's functions into the Department of Health and Social Care, so some `england.nhs.uk` and `digital.nhs.uk` links will probably move.

To add an entry, or to report that something now exists, see [contributing](#contributing).

## Contents

- [Clinical instruments and assessment tools](#clinical-instruments-and-assessment-tools)
- [Clinical calculation and decision support](#clinical-calculation-and-decision-support)
- [Medicines and prescribing](#medicines-and-prescribing)
- [Pathology, imaging and diagnostics](#pathology-imaging-and-diagnostics)
- [Guidance and patient information](#guidance-and-patient-information)
- [Care planning and end of life](#care-planning-and-end-of-life)
- [Health records](#health-records)
- [Reusable interface components](#reusable-interface-components)
- [Terminology and codelists](#terminology-and-codelists)
- [National platform services](#national-platform-services)
- [Staff identity, registers and credentials](#staff-identity-registers-and-credentials)
- [Communications](#communications)
- [Rostering and on-call](#rostering-and-on-call)
- [Organisations, locations and maps](#organisations-locations-and-maps)
- [Operational and performance data](#operational-and-performance-data)
- [Data, testing and AI evaluation](#data-testing-and-ai-evaluation)
- [Clinical safety and governance](#clinical-safety-and-governance)
- [Interoperability](#interoperability)
- [Public health rules as code](#public-health-rules-as-code)
- [Preservation of NHS technical documentation](#preservation-of-nhs-technical-documentation)

## Clinical instruments and assessment tools

Clinicians use scored questionnaires, screening tools and rating scales every day. Most are free to use on paper, but very few can be published as reusable open code. [Brief](briefs/open-clinical-instruments.md)

- `missing` Open ADHD assessment tool, delivered as code: a permissively licensed JavaScript and HTML component for adult ADHD screening and structured assessment that any service can drop into its own pathway. Waits for adult ADHD assessment now run to years. The [ASRS v1.1 six-question screener](https://license.tov.med.nyu.edu/product/asrs6Qscreener) may be coded freely, yet nobody maintains a reviewed version built for embedding, and the diagnostic interview most UK adult services use prohibits open or adapted versions.
- `missing` Open adult ADHD diagnostic interview: a semi-structured interview mapped to DSM-5 and ICD-11, validated in UK services and openly licensed, so that per-use licence fees do not limit how many assessments a service can do.
- `restricted` Open childhood ADHD diagnosis and monitoring tool: the scales used to diagnose ADHD in children and track their treatment response, the [NICHQ Vanderbilt Assessment Scales](https://nichq.org/downloadable/nichq-vanderbilt-assessment-scales/), the SNAP-IV and the Conners parent and teacher forms, are free for at most one clinician's own paper use. None permits building an open, embeddable electronic version without the rights holder's separate permission, and the current, DSM-5-aligned Vanderbilt edition is sold outright through the American Academy of Pediatrics.
- `partial` Embeddable instrument library: versioned web components with tested scoring, UK Core FHIR Questionnaire output and SNOMED CT and LOINC bindings, starting with instruments that are already openly licensed (PHQ-9, GAD-7, K10, the ASRS screener, [4AT](https://www.the4at.com/4at-faq) and RAND-36). [CamCOPS](https://camcops.readthedocs.io/) and [LHC-Forms](https://loinc.org/lhc-forms/) have done much of the groundwork, but neither offers components a UK system can embed directly.
- `missing` Public register of instrument licences: for each instrument, who holds the rights, whether electronic and commercial use is allowed, what it costs, what training it requires, which translations are approved, and when someone last checked.
- `restricted` Open national licence for common instruments: NHS England's [National Clinical Content Repository](https://digital.nhs.uk/services/national-clinical-content-repository-copyright-licensing-service) negotiates sub-licences for around a hundred tools, but each organisation has to register and request each one, and open redistribution is not allowed. The NHS could buy out the rights to the most-used instruments and release them under CC BY, as the 4AT's authors have done.
- `missing` Open, UK-validated cognitive screening test: the best-known cognitive screens are commercially licensed or require certification, and their rights holders have had derived tools taken down. An open alternative would need to be designed from scratch and validated in the UK.
- `restricted` Open electronic Frailty Index: eFI2 was publicly funded and is built into GP systems, but its equation and code lists are [available on request for research use](https://www.bgs.org.uk/electronic-frailty-index-2-efi2) rather than published.
- `restricted` Open, validated translations of instruments: validated translations exist, but behind registration and separate permissions.
- `missing` Open patient-reported outcome collection: the national PROMs programme [covers only hip and knee replacement](https://digital.nhs.uk/data-and-information/data-tools-and-services/data-services/patient-reported-outcome-measures-proms), so services that want to collect outcomes for anything else build or buy their own tools.

## Clinical calculation and decision support

- `building` Clinically assured clinical calculation APIs: there are thousands of scores and calculations that clinicians use to make decisions, and every system implements them separately, repeatedly and at great expense. Published behind validated, openly licensed APIs, they become a library that developers can add to an application without repeating the clinical and technical assurance. (How many websites had maps before Google Maps? How easy is it to add a map now?) The eventual payer for health technology is the patient, as a taxpayer or directly, and doing this work once and sharing it is better value. Open projects: [`clincalc`](https://github.com/ohtf/clincalc), an OHTF Foundation Project with citation-backed calculators available as a CLI, API and MCP tool; the [RCPCH Digital Growth Charts API](https://growth.rcpch.ac.uk/); and [Digital PEWS](https://github.com/ohtf/digital-pews), also an OHTF Foundation Project.
- `restricted` Computable NICE guidance: the [NICE syndication API](https://www.nice.org.uk/reusing-our-content/nice-syndication-api) delivers guidance as licensed prose. NICE has explored computable guidance, but has not published guidance in a format a decision support system can run.
- `missing` National clinical decision support service: there is no national CDS service or CDS Hooks profile, so every EPR supplier builds or buys its own rules.

## Medicines and prescribing

- `partial` Medicine shortage alerts at the point of prescribing: prescribing systems do not natively warn that a drug is subject to a current Medicine Supply Notification or Serious Shortage Protocol, or that the suggested alternative is short too. The data exists, but behind a login and as HTML pages and PDFs, with no API and no public shortage list. [Brief](briefs/medicine-shortages-at-the-point-of-prescribing.md)
- `restricted` Open drug-drug interaction dataset: interaction checks at the point of prescribing depend on commercial drug knowledge bases. [BNF interactions](https://bnf.nice.org.uk/interactions/) are free to read, but NICE's open content licence excludes the BNF, and no openly licensed interaction dataset is mapped to dm+d.
- `restricted` Open, computable paediatric dosing: there is no machine-readable dataset of doses by weight and age band that EPRs, calculators and electronic prescribing systems could reuse. The authoritative source is licensed.
- `restricted` dm+d without a login: dm+d is published under the Open Government Licence, but downloading it needs a [TRUD](https://isd.digital.nhs.uk/trud/) account. A public mirror or API would make life easier for small developers and researchers. [wardle/dmd](https://github.com/wardle/dmd) already provides open tooling.
- `missing` Machine-readable local formularies: each ICB and trust publishes its formulary as a website with no common data format or API, so prescribing systems cannot show whether a drug is on the local formulary at the moment it is chosen.
- `missing` Portable, open format for antimicrobial guidelines: most acute trusts publish antimicrobial guidance through licensed app platforms ([one platform was licensed to 91 of 152 acute trusts in England in 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8496772/)). With an open, structured format, a trust could move its guidance between platforms and check it against local resistance data.
- `missing` Embeddable e-prescribing component: an open prescribing interface with dm+d and dose syntax built in, tested for usability and safety, that any clinical application could use instead of building its own.
- `missing` Open medicines reconciliation component: an embeddable interface for reconciling the medication lists in GP records and discharge summaries with what the patient says they take. [PRSB guidance](https://theprsb.org/projects/digitalmedicationinformation/) defines the data, but there is no component.
- `restricted` TOXBASE as an API: the National Poisons Information Service's [TOXBASE](https://www.toxbase.org/) is available to registered professionals on the web and as an app. There is no API for embedding poisons advice in clinical systems.

## Pathology, imaging and diagnostics

- `partial` Open, machine-readable reference intervals: [Pathology Harmony](https://labmed.org.uk/resource/pathology-harmony---biochemistry.html) agreed common adult ranges, but they are published as documents rather than as a versioned dataset by analyte, age, sex and method. Test codes now exist under the [DAPB4101 pathology standard](https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/dapb4101-pathology-and-laboratory-medicine-reporting-information-standard), but nobody publishes the ranges centrally.
- `restricted` Open imaging referral guidance: evidence-based imaging referral guidance ([iRefer](https://www.rcr.ac.uk/our-services/irefer/)) is licensed organisation by organisation, so whether a requesting clinician gets decision support depends on which trust they work in.
- `missing` Computable genomic test directory: the eligibility criteria in the [National Genomic Test Directory](https://www.england.nhs.uk/publication/national-genomic-test-directories/) are documents, not rules that an order communications system can check.

## Guidance and patient information

- `restricted` Openly licensed, adaptable patient information: the [NHS Website Content API](https://digital.nhs.uk/developer/api-catalogue/nhs-website-content) is free, but its terms limit adapting and mixing the content. There is no permissively licensed, clinically reviewed collection that services can adapt, translate and simplify.
- `partial` Open library of translated and easy-read health information: good material is spread across [NHS easy read guides](https://library.nhs.uk/easy-read-for-health/), charities and trust leaflet libraries, with no single openly licensed, versioned and reviewed collection.
- `restricted` Openly licensed triage content: urgent care triage content is licensed, and [NHS Pathways is a Class 1 medical device](https://digital.nhs.uk/services/nhs-pathways/nhs-pathways-is-a-class-1-medical-device). Open triage content that others could inspect and reuse would need the same clinical governance and regulatory work.

## Care planning and end of life

- `partial` National, interoperable advance care plan: advance care plans, including ReSPECT forms and DNACPR decisions, are still held region by region, for example in London's [Universal Care Plan](https://ucp.onelondon.online/about/). No single open record exists that every setting, including ambulance services and out-of-hours care, can read and update.
- `missing` Digital medical certificate of cause of death: MCCDs are still paper forms [ordered from NHSBSA](https://www.gov.uk/guidance/ordering-and-retaining-medical-certificates-of-cause-of-death-mccds), even as death registration moves to electronic registers.

## Health records

- `building` Patient-centric, portable health record: no health record centred on the patient has been built at NHS scale. Instead, organisation-centred records (GP, hospital, mental health) are stitched together after the fact by summary and sharing standards. The government plans a [single patient record](https://www.gov.uk/government/news/better-patient-care-as-nhs-set-to-introduce-single-patient-record) through the 2026 Health Bill. Open project: [GitEHR](https://github.com/gitehr/gitehr), a Git-based, decentralised record that many contributors can write to, and an OHTF candidate project.
- `partial` Patient- and parent-held record: a record that people own and control, and that survives a change of GP, trust or country. The paper Red Book has no national digital successor. [eRedbook](https://www.eredbook.org.uk/) runs only where regions and trusts have signed up, and in 2026 the RCPCH [signed a memorandum of understanding](https://www.rcpch.ac.uk/news-events/news/2026-08/rcpch-harlow-printing-sign-agreement-explore-digital-future-red-book) to explore a digital Personal Child Health Record.
- `missing` 'Gravatar' for patient photos: a [consented patient photo service](https://github.com/pacharanero/awesome-missing-nhs-things/issues/1) that clinical systems could look up to help prevent wrong-patient errors. No national service gives clinical systems a patient's photo.

## Reusable interface components

- `partial` Clinical interface framework: a CSS and component framework that gives new or existing clinical applications an interface already tested for clinical safety, usability and accessibility: a "Twitter Bootstrap of Medicine". The [NHS design system](https://github.com/nhsuk/nhsuk-frontend) shows how this works for public-facing websites, and NHS England has [decided to extend it with staff-facing components](https://digital.nhs.uk/blog/design-matters/2026/one-design-system-is-better-than-2) rather than build a separate clinical design system. The older NHS Common User Interface was withdrawn in 2019, and has since been [rescued into Markdown](https://github.com/pacharanero/nhs-cui).
- `missing` Embeddable SNOMED CT code picker: an open, accessible picker backed by a terminology server, so applications stop building their own.
- `building` Embeddable early warning score components: NEWS2, PEWS and maternity early warning scores as open, tested components. [Digital PEWS](https://github.com/ohtf/digital-pews), an OHTF Foundation Project, covers the national paediatric chart. NEWS2 and the maternity score have no open equivalent.
- `missing` Interactive anatomical diagrams with terminology bindings: body and anatomy diagrams that clinical systems can embed, where clicking a structure selects its SNOMED CT body structure code (or the equivalent in another terminology).
- `partial` Family trees in a text format: clinical pedigrees and genograms written as text and rendered as diagrams. [SchemaTex](https://github.com/SchemaTex/SchemaTex) is an open-source text format for pedigrees and genograms. There is no agreed clinical standard and no EPR integration yet.
- `missing` Open clinical photography capture: an open capture component that records consent and metadata and saves images to the EPR as DICOM or FHIR, following [Institute of Medical Illustrators guidance](https://www.imi.org.uk/wp-content/uploads/2019/10/NG_Mobile_Devices_2_0.pdf).

## Terminology and codelists

- `partial` Open, curated, versioned codelists: SNOMED CT is the NHS's standard terminology, and there are open terminology servers such as [hermes](https://github.com/wardle/hermes). To use the codes for anything, though, you need open, shareable, versioned and clinically validated lists of the codes that identify, for example, patients with hypertension. [OpenCodelists](https://www.opencodelists.org/) shares the codelists used in OpenSAFELY research, and the [Primary Care Domain reference sets](https://digital.nhs.uk/data-and-information/data-collections-and-data-sets/data-collections/primary-care-business-rules/quality-and-outcome-framework-qof-business-rules/primary-care-domain-reference-set-portal) are published, but there is no national codelist service with an API. Open project: [`sct`](https://github.com/pacharanero/sct), a local-first SNOMED CT and codelist toolchain and an OHTF candidate project.

## National platform services

- `partial` Simple, well-documented national APIs: the NHS [API and integration catalogue](https://digital.nhs.uk/developer/api-catalogue) now includes FHIR APIs for e-Referrals, Electronic Prescriptions, demographics (PDS) and GP Connect, and an API for MESH. Developers still need an HSCN connection for most test environments, and onboarding and assurance are heavy going for small teams.
- `missing` Open client libraries for national services: suppliers each write and maintain their own client libraries for the same national services, and do not share them. Shared, maintained libraries would cut the cost of every integration.
- `missing` Open implementation of the NHS Warranted Environment: a fully open desktop environment that meets the warranted environment specification, which was the aim of the [NHSbuntu](https://github.com/NHSbuntu/nhsbuntu) project.
- `partial` National consent platform: the [National Data Opt-out API](https://digital.nhs.uk/developer/api-catalogue/national-data-opt-out-fhir) covers research and planning only. Each trust handles consent for procedures its own way, and there is no general national consent record.
- `partial` Ambulance and patient transport booking API: the [Booking and Referral Standard](https://digital.nhs.uk/services/booking-and-referral-standard) covers handoffs such as 111 to an emergency department. There is no national API for booking non-emergency patient transport.
- `missing` Electronic Staff Record API: NHSBSA is building [NHS PeoplePortal](https://www.nhsbsa.nhs.uk/nhs-peopleportal-transformation-programme) to replace ESR. If the new platform had an open, documented API, rostering, training and identity systems could stop re-keying staff data.

## Staff identity, registers and credentials

- `partial` Modern NHS staff identity: [CIS2 Authentication](https://digital.nhs.uk/services/care-identity-service/applications-and-services/cis2-authentication) now supports Windows Hello, authenticator apps and security keys as well as smartcards. What is still missing is a staff identity that:
  - works on any device and operating system, with an open-source, cross-platform client (the smartcard client, [NHS Smartcard Connect](https://digital.nhs.uk/services/care-identity-service/applications-and-services/technical-services/nhs-smartcard-connect), is closed source);
  - needs no hardware to be physically issued;
  - has temporary staff and multiple roles built in from the start;
  - supports detailed role-based access control and checks for a legitimate _current_ relationship with the patient;
  - lets supervising clinicians authorise permission changes straight away, for ratification later, instead of waiting for an IT office that is closed for most of the NHS's working week;
  - can carry cryptographically signed, verifiable statements of a person's roles and credentials.
- `partial` Professional register APIs, for real-time, programmatic confirmation of a clinician's registration and status:
  - `solved` The HCPC, which registers physiotherapists, speech and language therapists, paramedics and other allied health professionals, has an [Employer Check API](https://www.hcpc-uk.org/employers/registration/checking-your-employees-registration/).
  - `restricted` The GMC sells a [register download](https://www.gmc-uk.org/registration-and-licensing/our-registers/download-our-registers), including specialist and GP status, and the GPhC sells a data subscription.
  - `restricted` The NMC offers [employer confirmations](https://www.nmc.org.uk/registration/employer-confirmations/) through a web login only.
  - `missing` The GDC, Social Work England, and the BACP and UKCP counselling and psychotherapy registers have public search pages only.
- `partial` CPD and portfolio API: programmatic access to a clinician's CPD and portfolio record, instead of the current mix of portals and spreadsheets. A few portfolio platforms publish partner APIs, but there is no common standard for moving portfolio data between them.
- `missing` Procedure logbook API: structured access to a clinician's case logbook (anaesthetics, surgery, other procedures), which is usually entered by hand and never reaches rostering or appraisal systems.
- `missing` Portable staff credentials passport: the NHS Digital Staff Passport was [retired in December 2025](https://digital.nhs.uk/services/digital-staff-passport). Staff who rotate or change employer still repeat identity, DBS, occupational health and training checks each time.
- `partial` Portable training record and open e-learning: since [May 2025](https://www.england.nhs.uk/long-read/action-needed-to-save-up-to-200000-days-of-staff-time-following-changes-to-statutory-and-mandatory-training/), NHS organisations in England have accepted each other's core statutory and mandatory training, and the [NHS Learning Hub](https://learninghub.nhs.uk/) provides free national e-learning. There is still no portable training record, with an API, that follows the person. Nor is there openly licensed training content that any organisation can reuse, even though NHS staff wrote much of the existing material in the first place.
- `missing` Open standard for bank and locum shifts: rostering, staff bank and staffing platforms exchange vacancies and bookings through one-off integrations between suppliers rather than a published open schema.

## Communications

- `missing` Crisis communications that reach all clinical staff: during the COVID pandemic it became clear that contacting clinical staff by email depends on their link to a "home organisation". Sessional, locum and bank staff, who may not have one, could not be reached.
- `partial` Cross-platform NHS email and collaboration: NHSmail is now [NHS.net Connect](https://digital.nhs.uk/services/nhs.net-connect). It is still built on Microsoft 365, which makes it harder to use on some operating systems and devices.
- `missing` Clinical instant messaging available everywhere: no instant messaging service is reliably available across the whole NHS, apart from consumer and commercial products. Having a different product in every trust and ICB is counterproductive.
- `missing` Role-based messaging to replace bleeps: bleeps (radio pagers) are still relied on because they are reliable and have a long track record. A bleep represents a role rather than a person: "the on-call medical registrar" is handed over between shifts and gives a single, fixed point of contact for expert help without anyone needing to know who is on. Bleeps can only be replaced by a tested, reliable service that is available everywhere and does the same.

## Rostering and on-call

- `missing` Rota and on-call API: a rostering platform that publishes rotas and on-call lists through an API, so other applications know who the current on-call clinician is for a specialty, with sensible fall-backs. Automatic referral, EPR shortcuts (such as picking the right consultant team when ordering tests) and bleep replacement all depend on it. NHS England's [e-rostering meaningful use standards](https://www.england.nhs.uk/wp-content/uploads/2020/09/E-rostering_meaningful_use_standards.pdf) set expectations for rostering, but there is no national data standard or API.

## Organisations, locations and maps

- `solved` Organisation codes API: the [Organisation Data Service APIs](https://digital.nhs.uk/services/organisation-data-service/organisation-data-service-apis/choosing-an-organisation-data-service-api) (ORD and the Organisation Data Terminology FHIR API) cover NHS organisations, GP practices and pharmacies, and now include some geographic boundary and practitioner data. Before the national APIs, Matt Stibbs and Tony Yates built openODS, and [wardle/clods](https://github.com/wardle/clods) provides open tooling over organisational and geographic data.
- `partial` Care homes and independent providers register: CQC provides a [syndication API and a full care directory download](https://www.cqc.org.uk/about-us/transparency/using-cqc-data). There is still no open, current data on the type of care each home provides, its capacity, or whether it has beds available.
- `partial` Health 'MapIt': mySociety's [MapIt](https://mapit.mysociety.org/) makes administrative boundaries easy to use, and ONS publishes ICB boundaries through [Open Geography](https://geoportal.statistics.gov.uk/search?collection=dataset&tags=icb) (ICBs replaced CCGs in 2022, and some merged in April 2026). Nobody yet maintains easy-to-use map layers for GP practice catchments, urgent treatment centre locations, or open data on specific health conditions by area.

## Operational and performance data

- `missing` Live A&E waits and escalation status as open data: [A&E statistics](https://www.england.nhs.uk/statistics/statistical-work-areas/ae-waiting-times-and-activity/) are published monthly, after the fact. OPEL escalation levels are defined in a [national framework](https://www.england.nhs.uk/publication/integrated-opel-framework/) but not published as a feed. Live waits are available only in some regions, through services such as [NHSquicker](https://nhsquicker.co.uk/).
- `partial` Machine-readable waiting times by provider: [My Planned Care](https://www.myplannedcare.nhs.uk/) is updated weekly for the public, but has no documented API or download.
- `restricted` Open referral criteria and service eligibility: referral criteria can only be seen inside the e-Referral Service, and an acceptable use policy limits who can use the [Directory of Services API](https://digital.nhs.uk/services/directory-of-services-dos/api-acceptable-use-policy).
- `restricted` Open-source HRG grouper: the [HRG4+ Local Payment Grouper](https://digital.nhs.uk/services/national-casemix-office/downloads-groupers-and-tools/payment-groupers) is free but closed source, and [NHS Payment Scheme prices](https://www.england.nhs.uk/publication/2026-27-nhs-payment-scheme/) come as spreadsheets. With an open reference grouper, anyone could reproduce a costing.
- `missing` NHS PC benchmarking: a downloadable open-source agent that reports a PC's operating system, patch level, hardware, installed software and network bandwidth to a central service, so national IT money can go where it is most needed. The [Data Security and Protection Toolkit](https://www.dsptoolkit.nhs.uk/) assesses organisations' security, but there is no open benchmarking dataset.

## Data, testing and AI evaluation

- `partial` National UK synthetic patient population: NHS England's [UK Synthea adaptation](https://github.com/nhsengland/swpc_synthea) covers primary care in the South West, [Simulacrum](https://healthdatainsight.org.uk/project/the-simulacrum/) covers cancer, and there is [PDS test data](https://digital.nhs.uk/developer/api-catalogue/personal-demographics-service-fhir/pds-fhir-api-test-data). There is no maintained synthetic population covering all care settings, including hospitals, in UK Core FHIR with SNOMED CT and dm+d codes.
- `missing` Open UK Core conformance test suite: validators and examples exist, but there is no shared, automated conformance suite for UK Core and the national APIs, so each supplier proves conformance its own way.
- `partial` Open de-identification for UK clinical text: open tools exist, such as [CRATE](https://pmc.ncbi.nlm.nih.gov/articles/PMC5405523/), but there is no maintained tool tuned for UK records with a shared corpus to measure it against.
- `restricted` Openly licensed UK clinical language models and corpus: open-source clinical NLP tools exist, but SNOMED CT licensing restricts their models, and there is no openly licensed corpus of UK clinical text.
- `missing` Open evaluation datasets for ambient voice technology: NHS England keeps a [self-certified supplier registry](https://digital.nhs.uk/services/ambient-scribing/ambient-voice-technology-self-certified-supplier-registry) for ambient scribes, but there is no consented test set of UK consultations, in UK accents, and no shared way to compare products' accuracy and omissions.

## Clinical safety and governance

- `building` Shared hazard library and machine-readable hazard log: a common format for DCB0129 and DCB0160 hazard logs, plus a library of the hazards each kind of product usually carries (e-prescribing, ambient scribes, early warning scores). Open starting points: [`SAFETY.md`](https://github.com/pacharanero/SAFETY.md), a convention for keeping clinical safety documentation in the repository and an OHTF candidate project, and an open [DCB0129 template](https://github.com/turva-uk/dcb0129-template).
- `restricted` Open medical device registration data: the MHRA [Public Access Registration Database](https://pard.mhra.gov.uk/) is a web search with no API or bulk download. The US FDA publishes [downloadable files](https://www.fda.gov/medical-devices/device-registration-and-listing/establishment-registration-and-medical-device-listing-files-download).
- `missing` Open-source patient safety incident reporting: the national Learn from Patient Safety Events service accepts reports from [local risk management systems](https://www.england.nhs.uk/patient-safety/patient-safety-insight/learning-from-patient-safety-events/learn-from-patient-safety-events-service/lrms-suppliers/), but none of the compatible local systems is open source.

## Interoperability

- `missing` UK SMART on FHIR launch profile: SMART app launch is switched on one EPR at a time, and GP integration needs a separate pairing with each principal clinical system. With a national launch profile, one app could launch from any compliant EPR.
- `missing` Remote monitoring and virtual ward interoperability standard: NHS England's [2023 draft guidance](https://github.com/nhsengland/virtual-wards-draft-standards) says it is "not currently being updated", while virtual wards keep expanding.
- `missing` Computable research eligibility criteria: study eligibility criteria are free text, so local systems cannot match patients to open studies. A feed of structured criteria would let a patient's record suggest which studies they could join.

## Public health rules as code

- `building` Computable immunisation schedule: the UK childhood schedule (Green Book chapter 11) is published as PDFs, and every system re-implements it by hand. Open project: [Green Book](https://github.com/pacharanero/greenbook), a computable, versioned schedule and evaluation engine with a shared conformance suite, and an OHTF candidate project.
- `missing` Computable screening schedules: eligibility and intervals for the national screening programmes are written only in prose.
- `partial` Executable QOF business rules: the [QOF business rules](https://digital.nhs.uk/data-and-information/data-collections-and-data-sets/data-collections/primary-care-business-rules#quality-and-outcomes-framework) are published as specifications, and OpenSAFELY has implemented some of them (for example [qof-diabetes](https://github.com/opensafely/qof-diabetes)). There is no complete, open, executable reference implementation.

## Preservation of NHS technical documentation

- `building` Open archive of NHS specifications: critical technical specifications keep going missing. A Word master is lost, a Confluence space is taken down, or a web archive snapshot ends up as the only surviving copy. `developer.nhs.uk` and its FHIR servers were switched off in 2026, and reorganisation makes further losses likely. Rescued so far, in version-controlled, searchable form: [`nhs-cui`](https://github.com/pacharanero/nhs-cui) (NHS Common User Interface), [the Good Practice Guidelines for GP electronic patient records v4](https://github.com/pacharanero/the-good-practice-guidelines-for-gp-electronic-patient-records-v4) and [`mim`](https://github.com/pacharanero/mim) (the NHS Messaging Implementation Manual and GP2GP specifications).

## Contributing

Suggestions, corrections and news that something now exists are welcome as issues or pull requests. [CONTRIBUTING.md](CONTRIBUTING.md) explains what belongs on the list, how to format an entry and when to write a brief. Sign off commits under the [Developer Certificate of Origin](https://openhealthtechnology.org/community/dco/).

Related: [awesome-healthcare](https://github.com/kakoni/awesome-healthcare) lists what exists, and the [OHTF projects page](https://openhealthtechnology.org/projects/) lists open health projects with a neutral home.

## Licence

[CC BY-SA 4.0](LICENSE), copyright Marcus Baw and contributors.
