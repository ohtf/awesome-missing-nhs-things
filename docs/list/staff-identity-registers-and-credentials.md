# Staff identity, registers and credentials

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
