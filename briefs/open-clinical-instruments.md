# Open clinical instruments, delivered as code

Status: `restricted` for most instruments, `partial` for a few. Researched in November 2026. Licence terms change, so check the rights holder's current terms before relying on anything below.

## The gap

Clinicians rely on scored instruments: screening questionnaires, symptom scales, cognitive tests, frailty and nutrition scores, and patient-reported outcome measures. Most are free to use on paper. Very few have a licence that allows anyone to publish a reusable, open-source, coded version. EPR suppliers, app developers and trusts therefore re-implement the same instruments by hand, each negotiates permission separately (or doesn't), and each scores them with its own untested logic.

Adult ADHD shows the problem clearly. NHS England estimates that about [2.48 million people in England have ADHD](https://digital.nhs.uk/data-and-information/publications/statistical/mi-adhd/august-2026), waits for assessment run to years, and the [ADHD Taskforce final report](https://www.england.nhs.uk/2025/11/nhs-england-responds-to-adhd-taskforce-final-report/) was published in November 2025. Even so, there is no open, permissively licensed ADHD assessment tool that a service could add to its own pathway as a free JavaScript and HTML component. The tools used to diagnose ADHD in children and monitor their treatment are no more openly licensed than the adult ones.

## What exists today

### ADHD

- According to [NYU's licensing page](https://license.tov.med.nyu.edu/product/asrs6Qscreener), the ASRS v1.1 six-question screener is "freely available for clinical and non-clinical use, including commercial use". It requires attribution and allows no modification "other than creating electronic versions". Coding it is therefore lawful, but the only implementations found were small, unreviewed personal repositories, none of them versioned or designed to be embedded.
- The ASRS 18-question checklist has [separate, more restrictive terms](https://license.tov.med.nyu.edu/product/asrs-v11-18-question-symptom-checklist).
- DIVA-5, the semi-structured diagnostic interview widely used in UK adult services, is licensed per clinician, with per-use fees for integration into other platforms. Its [terms](https://www.divacenter.eu/more-information/copyright/) prohibit redistribution, adaptation and automated versions, so an open coded DIVA cannot be made.
- The tools used to diagnose and monitor ADHD in children follow the same pattern, and the adult ASRS grant does not help with any of them. The [NICHQ Vanderbilt Assessment Scales](https://nichq.org/downloadable/nichq-vanderbilt-assessment-scales/), the default US tool for diagnosing ADHD in children aged 6 to 12 and for scoring parent and teacher follow-up forms that track treatment response, are free only in their 2002 first edition, with attribution; NICHQ's own page sends anyone who wants the current, DSM-5-aligned third edition to buy it from the American Academy of Pediatrics.
- The SNAP-IV, used the same way to diagnose and monitor ADHD in children, has a narrower grant. The rights holder's own terms, published on the [APA's DSM-5 emerging measures page](https://www.psychiatry.org/getContentAsset/c9165e8b-2bb7-4746-a333-54f131bf79c8/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/APA-DSM5-Level-2-Inattention-Parent-of-Child-Age-6-to-17.pdf), let a clinician reproduce it on paper for their own patients, but say that "any other reproduction, including electronic reproduction, requires permission from the rights holder" - which rules out embedding it without going back to ask.
- The Conners scales, now in their [4th edition](https://mhscdn.blob.core.windows.net/mhs-web/MHS-WordPress/Learn.MHS/Manuals/conners_4_html_manual_full/part1/ch1_users.html), cover children through parent and teacher forms as well as adults, and are commercial throughout. MHS's manual prohibits reproducing, adapting or redeploying any part of the test on another digital platform without written permission, and bars even recording a telehealth administration as a copyright violation. [NICE NG87](https://www.nice.org.uk/guidance/ng87/chapter/recommendations) names Conners and the SDQ as helpful additional tools, which steers services towards a licensed instrument.

### Other instruments

- Openly licensed, so open code is lawful: PHQ-9, GAD-7 and PHQ-15, which Pfizer [released without copyright restriction](https://www.pfizer.com/news/press-release/press-release-detail/pfizer_to_offer_free_public_access_to_mental_health_assessment_tools_to_improve_diagnosis_and_patient_care); the [4AT delirium tool](https://www.the4at.com/4at-faq), released under CC BY 4.0, which is the model for others to follow; [K10 and K6](https://rckessler.scholars.harvard.edu/k10-and-k6-scales); and [RAND-36](https://www.rand.org/health/surveys/mos/36-item-short-form.html), the public-domain scoring of the SF-36 items.
- Free on paper, but permission needed for software: M-CHAT-R/F, EPDS, CORE-10, the Clinical Frailty Scale, AQ-10 (fees may apply for commercial use), the Barthel Index and PROMIS.
- Licensed or charged for: the MMSE, whose rights holder has used takedowns against tools derived from it; MoCA; WEMWBS; MUST; Braden; EQ-5D; SF-36; and the Oxford Hip and Knee Scores used in the national PROMs programme.
- The eFI2 frailty index was publicly funded and is built into GP systems, but its equation and code lists are available [on request for research use](https://www.bgs.org.uk/electronic-frailty-index-2-efi2) rather than published.

### Open building blocks

- NHS England's [National Clinical Content Repository](https://digital.nhs.uk/services/national-clinical-content-repository-copyright-licensing-service) negotiates sub-licences for around a hundred tools used in national datasets. It is the most useful UK initiative so far, but each organisation must register and request each tool, and it does not allow open redistribution.
- [CamCOPS](https://camcops.readthedocs.io/), from Cambridge and licensed GPL-3.0, implements more than a hundred tasks. It handles restricted instruments as empty skeletons that licensed users fill in locally. It is a complete app rather than a component other systems can embed.
- [NLM LHC-Forms](https://loinc.org/lhc-forms/) renders FHIR Questionnaires and LOINC panels, and [openEHR CKM](https://ckm.openehr.org/) holds archetypes for some instruments. These are data models without a user interface.

## What would close it

- An open instrument library that other systems can embed: versioned web components with tested scoring logic, UK Core FHIR Questionnaire and QuestionnaireResponse output, and SNOMED CT and LOINC bindings. It would start with instruments that are clearly openly licensed (PHQ-9, GAD-7, PHQ-15, K10, the ASRS six-question screener, 4AT and RAND-36), and publish worked test cases so any other implementation can check that it scores the same way.
- A public, machine-readable register of instrument licences, recording for each instrument the rights holder, whether electronic and commercial use is allowed, fees, training requirements, approved translations, and when it was last checked. At present this information is scattered across licensing pages, PDFs and individual permission emails.
- An open national licence. NHS England could either extend the NCCR to allow open-source redistribution, or buy out the rights to the instruments the NHS uses most and release them under CC BY, as the 4AT's authors did.
- An open adult ADHD diagnostic interview, mapped to DSM-5 and ICD-11 and validated in UK services, so that per-use licensing does not limit assessment capacity.
- An open cognitive screen, designed from scratch and validated in the UK, so that no existing rights holder can have it taken down.
- Open, validated translations, published under the same terms as the instruments themselves.

Scored instruments raise the same issues as clinical calculators. See the [clinical calculation](../README.md#clinical-calculation-and-decision-support) section, and [`clincalc`](https://github.com/ohtf/clincalc), which requires every calculator to record its distribution licence.
