# SA Innovation College — Website

**Education website | Next.js 16 / React 19 / TypeScript**

**Stage:** Active development; production readiness not independently confirmed.  
**Verification:** Manifest and repository structure reviewed; live behavior and CI conclusions not independently verified.  
**Next milestone:** Verify content accuracy, document/PDF generation, email delivery and accessibility against the deployed application.

## Project overview

A web project for an education provider, maintained in the LX Obsidian Labs portfolio. The repository includes a Next.js application, public assets, project documentation and a configured deployment URL: [sa-innovation-college.vercel.app](https://sa-innovation-college.vercel.app). The URL is repository metadata, **not a confirmed live smoke-test result**.

## Technology

The inspected package manifest declares Next.js 16, React 19, TypeScript, Tailwind CSS 4, Nodemailer, jsPDF and React PDF renderer. These dependencies indicate intended integration areas; they do not establish that all email or document workflows are operational.

## Setup and local verification

Use a supported Node.js runtime with the checked-in npm lockfile:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. The manifest also defines:

```bash
npm run lint
npm run build
```

No `test` script is declared in the inspected package manifest. Do not claim automated coverage without adding and running relevant tests.

## Review and acceptance checklist

- [ ] Confirm current routes, navigation, contact details, admissions copy and approved programme information with the client.
- [ ] Verify every enquiry form and any outbound email with controlled test data.
- [ ] Test PDF generation, downloads, filenames and handling of invalid input.
- [ ] Validate keyboard navigation, focus states, contrast, responsive layouts and image alternatives.
- [ ] Confirm privacy policy, consent and retention for applicant or student information.
- [ ] Run a clean build and lint; record exact commit SHA and CI conclusions.
- [ ] Test production links and deployment rollback.
- [ ] Confirm permission to publish client logos, screenshots and any case-study details.

## Security and configuration

Keep mail credentials, service tokens and database secrets out of Git. Audit server-side email handlers for abuse prevention and input validation. Never publish real student or applicant records in screenshots, fixtures or logs.

## Maintainer

**LX Obsidian Labs** · [Engineering portfolio](https://github.com/lx-obsidian-labs/lx-obsidian-labs) · [Contact](mailto:vilanenathan@gmail.com)

**License / redistribution:** Confirm project ownership and client publication rights before reusing or distributing code and assets.
