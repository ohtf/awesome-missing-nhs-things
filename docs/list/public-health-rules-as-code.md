# Public health rules as code

- `building` Computable immunisation schedule: the UK childhood schedule (Green Book chapter 11) is published as PDFs, and every system re-implements it by hand. Open project: [Green Book](https://github.com/pacharanero/greenbook), a computable, versioned schedule and evaluation engine with a shared conformance suite, and an OHTF candidate project.
- `missing` Computable screening schedules: eligibility and intervals for the national screening programmes are written only in prose.
- `partial` Executable QOF business rules: the [QOF business rules](https://digital.nhs.uk/data-and-information/data-collections-and-data-sets/data-collections/primary-care-business-rules#quality-and-outcomes-framework) are published as specifications, and OpenSAFELY has implemented some of them (for example [qof-diabetes](https://github.com/opensafely/qof-diabetes)). There is no complete, open, executable reference implementation.
