# Medicine shortages at the point of prescribing

Status: `partial`. The national shortage data exists, but it is not machine-readable or public, and prescribers do not see it when they choose a drug.

## The gap

When a GP writes a prescription in one of the main GP clinical systems, the system does not natively know, or warn, that the drug is the subject of a current [Medicine Supply Notification (MSN)](https://www.england.nhs.uk/long-read/a-guide-to-the-systems-and-processes-for-managing-medicines-supply-issues-in-england/) or [Serious Shortage Protocol (SSP)](https://www.nhsbsa.nhs.uk/pharmacies-gp-practices-and-appliance-contractors/serious-shortage-protocols-ssps). The prescriber finds out when the patient comes back, having spent the intervening days ringing round pharmacies.

## What exists today

- DHSC issues MSNs. The [Specialist Pharmacy Service Medicines Supply Tool](https://www.sps.nhs.uk/category/medicines-tools/medicines-supply/) collates current shortages with clinical advice, recommended alternatives and expected duration. Using it needs an SPS login and a manual lookup on the website, and it has no API.
- [Community Pharmacy England re-publishes MSNs as news articles](https://cpe.org.uk/dispensing-and-supply/supply-chain/medicine-shortages/), and [NHSBSA hosts the SSP list](https://www.nhsbsa.nhs.uk/pharmacies-gp-practices-and-appliance-contractors/serious-shortage-protocols-ssps). Neither is a feed.
- DHSC publishes [medicine supply disruption statistics](https://www.gov.uk/government/collections/medicine-supply-disruption-statistics-uk) twice a year. These look back over the period and are no help at the prescribing screen.
- Some third-party clinical template providers now flag shortages inside GP systems, and independent trackers scrape the official sources into public web pages. Each reaches only its own users, and none is an official national feed.

The last mile, from the curated national data to the prescribing screen, has never been built as public infrastructure.

## What would close it

- A public, versioned, machine-readable API over the national shortage data. At minimum it would give the drug identifier (dm+d VTM, VMP and AMP), shortage status, expected duration, severity, recommended alternatives, and the MSN or SSP reference. Today the canonical sources are HTML pages and emailed PDFs.
- Native integration into GP and hospital prescribing systems, so that choosing a drug that is short brings up an alert in context, with the named alternative one click away. Technically trivial once an API exists; institutionally absent.
- An automatic check that the alternative is not itself short. Cascading shortages (recent examples include methylphenidate, HRT and semaglutide) are routine, and a prescriber who switches a patient from A to B often finds at the next consultation that B cannot be obtained either.
- Structured "minimum-switch" guidance. Should every repeat patient be moved off the affected drug, or only enough to bridge the expected duration? Today the answer is prose in a PDF. If it were a field, clinical systems could suggest a switching strategy in proportion to how long the shortage is expected to last.
- A UK shortages page for patients, like the [US FDA Drug Shortages Database](https://www.accessdata.fda.gov/scripts/drugshortages/): public, searchable and with no login. The US has had one since 2011. UK patients find out at the pharmacy counter.
- An event feed of MSN and SSP creations, updates and resolutions, so systems can subscribe to changes instead of scraping web pages.
- One source of truth across the four nations. Scotland publishes its own [MSAN circulars](https://www.publications.scot.nhs.uk/), and Wales and Northern Ireland have community pharmacy bodies that re-publish the same national MSNs. A single national feed, with national additions where they are genuinely needed, would be cheaper and safer than the current chain of re-publication.

## Why now

The policy argument has already been made. The [2025 House of Lords inquiry warned that medicine shortages have become a national security risk](https://cpe.org.uk/our-news/lords-warn-medicine-shortages-now-a-national-security-risk/), and [House of Commons Library briefing CBP-9997](https://commonslibrary.parliament.uk/research-briefings/cbp-9997/) sets out the policy review. Current government policy ([Managing a robust and resilient supply of medicines](https://www.gov.uk/government/publications/managing-a-robust-and-resilient-supply-of-medicines/managing-a-robust-and-resilient-supply-of-medicines)) deals with manufacturers' obligations and the supply chain, and says little about the point of prescribing. The information is already collected. What is missing is a machine-readable version, shown to the prescriber when they make the decision. That's a small, achievable, high-leverage piece of work.
