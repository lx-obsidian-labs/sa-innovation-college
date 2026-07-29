import React from "react";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

export type PdfMode = "blank" | "completed";

export interface ApplicationFormData {
  referenceNumber?: string;
  generatedAt?: string;
  applicationType?: string;
  intake?: string;
  programme: {
    firstChoice?: string;
    firstCode?: string;
    secondChoice?: string;
    campus?: string;
    studyMode?: string;
    attendance?: string;
    preferredStartDate?: string;
    careerGoal?: string;
  };
  personal: {
    title?: string;
    surname?: string;
    firstNames?: string;
    preferredName?: string;
    idNumber?: string;
    passportNumber?: string;
    passportCountry?: string;
    passportExpiry?: string;
    dateOfBirth?: string;
    nationality?: string;
    countryOfBirth?: string;
    gender?: string;
    homeLanguage?: string;
    communicationLanguage?: string;
    citizenshipStatus?: string;
    permitType?: string;
    permitNumber?: string;
    permitExpiry?: string;
  };
  contact: {
    phone?: string;
    alternativePhone?: string;
    whatsapp?: string;
    email?: string;
    preferredContact?: string;
    residentialAddress?: string;
    suburb?: string;
    city?: string;
    province?: string;
    postalCode?: string;
    country?: string;
    postalAddress?: string;
  };
  guardian: {
    relationship?: string;
    fullName?: string;
    idNumber?: string;
    phone?: string;
    email?: string;
    address?: string;
    occupation?: string;
    employer?: string;
  };
  emergency: {
    fullName?: string;
    relationship?: string;
    phone?: string;
    alternativePhone?: string;
    email?: string;
    address?: string;
  };
  education: {
    highestGrade?: string;
    schoolName?: string;
    provinceOrCountry?: string;
    yearCompleted?: string;
    examinationNumber?: string;
    examinationAuthority?: string;
    matricStatus?: string;
    subjects?: Array<{ name?: string; result?: string; year?: string }>;
    previousInstitution?: string;
    previousProgramme?: string;
    previousStudentNumber?: string;
    previousStartYear?: string;
    previousEndYear?: string;
    previousStatus?: string;
    rplRequested?: boolean;
    rplSummary?: string;
  };
  employment: {
    status?: string;
    employer?: string;
    position?: string;
    startDate?: string;
    supervisor?: string;
    supervisorPhone?: string;
    employerSupport?: string;
  };
  funding: {
    method?: string;
    payerName?: string;
    payerIdOrRegistration?: string;
    relationship?: string;
    phone?: string;
    email?: string;
    billingAddress?: string;
    sponsorshipReference?: string;
  };
  support: {
    supportRequired?: boolean;
    supportAreas?: string[];
    supportDescription?: string;
    contactRequested?: boolean;
    devices?: string[];
    internetAccess?: string;
    computerSkillLevel?: string;
  };
  programmeRequirements: {
    hasDriversLicence?: boolean;
    licenceCode?: string;
    licenceExpiry?: string;
    clearanceWilling?: boolean;
    fitnessAcknowledged?: boolean;
  };
  documents?: Array<{
    name: string;
    status?: "attached" | "outstanding" | "not_applicable";
  }>;
  referral: {
    sources?: string[];
    referredBy?: string;
  };
  motivation?: string;
  declarations: {
    accurateInformation?: boolean;
    verificationConsent?: boolean;
    admissionUnderstanding?: boolean;
    feeUnderstanding?: boolean;
    popiaConsent?: boolean;
    communicationChannels?: string[];
    marketingConsent?: boolean;
  };
  signatures: {
    applicantName?: string;
    applicantSignature?: string;
    applicantDate?: string;
    applicantPlace?: string;
    guardianName?: string;
    guardianSignature?: string;
    guardianDate?: string;
    sponsorName?: string;
    sponsorSignature?: string;
    sponsorDate?: string;
  };
}

export interface ApplicationFormPDFProps {
  data?: Partial<ApplicationFormData>;
  mode?: PdfMode;
  logoSrc?: string;
}

const C = {
  navy: "#123968",
  blue: "#1F5796",
  orange: "#F2A100",
  ink: "#1D2834",
  muted: "#66717D",
  line: "#C7D0D9",
  pale: "#F3F6F8",
  paleBlue: "#EAF1F8",
  white: "#FFFFFF",
  danger: "#8F2E2E",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 26,
    paddingHorizontal: 32,
    paddingBottom: 40,
    fontFamily: "Helvetica",
    fontSize: 7.5,
    color: C.ink,
    backgroundColor: C.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 7,
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: C.orange,
  },
  brand: { flexDirection: "row", alignItems: "center", gap: 8 },
  logo: { width: 34, height: 34, objectFit: "contain" },
  monogram: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: C.navy,
    color: C.white,
    textAlign: "center",
    paddingTop: 10.5,
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  brandName: {
    color: C.navy,
    fontSize: 12,
    letterSpacing: 0.9,
    fontFamily: "Helvetica-Bold",
  },
  brandTag: {
    color: C.muted,
    fontSize: 6,
    marginTop: 2,
    letterSpacing: 0.3,
  },
  headerMeta: { textAlign: "right", color: C.muted, fontSize: 5.9, lineHeight: 1.35 },
  documentTitle: {
    color: C.navy,
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    marginTop: 5,
  },
  documentSubtitle: {
    color: C.muted,
    fontSize: 7.8,
    marginTop: 3,
    marginBottom: 10,
  },
  referenceBar: {
    backgroundColor: C.navy,
    color: C.white,
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 9,
  },
  referenceText: { fontSize: 7.5 },
  section: {
    marginBottom: 8,
    borderWidth: 0.7,
    borderColor: C.line,
    borderRadius: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.navy,
    color: C.white,
    minHeight: 22,
    paddingHorizontal: 7,
  },
  sectionNumber: {
    backgroundColor: C.orange,
    color: C.navy,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    textAlign: "center",
    paddingTop: 3.6,
    fontFamily: "Helvetica-Bold",
    marginRight: 7,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.7,
    letterSpacing: 0.25,
  },
  sectionBody: { padding: 7 },
  note: {
    backgroundColor: C.paleBlue,
    borderLeftWidth: 3,
    borderLeftColor: C.blue,
    padding: 6,
    marginBottom: 7,
    lineHeight: 1.35,
    color: C.ink,
  },
  warning: {
    backgroundColor: "#FFF6E5",
    borderLeftWidth: 3,
    borderLeftColor: C.orange,
    padding: 6,
    marginBottom: 7,
    lineHeight: 1.35,
  },
  row: { flexDirection: "row", gap: 7, marginBottom: 5 },
  field: { flexGrow: 1, flexBasis: 0 },
  fieldLabel: {
    color: C.muted,
    fontSize: 6.3,
    letterSpacing: 0.5,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
    textTransform: "uppercase",
  },
  required: { color: C.danger },
  fieldBox: {
    minHeight: 20,
    borderBottomWidth: 0.8,
    borderBottomColor: C.ink,
    paddingHorizontal: 3,
    paddingTop: 5,
    fontSize: 7.5,
  },
  fieldBoxCompleted: {
    minHeight: 20,
    backgroundColor: C.pale,
    borderWidth: 0.6,
    borderColor: C.line,
    paddingHorizontal: 6,
    paddingTop: 5,
    fontSize: 7.5,
  },
  area: {
    minHeight: 42,
    borderWidth: 0.7,
    borderColor: C.line,
    padding: 6,
    lineHeight: 1.35,
  },
  lineArea: {
    minHeight: 46,
    borderWidth: 0.7,
    borderColor: C.line,
    padding: 6,
  },
  writingLine: { borderBottomWidth: 0.5, borderBottomColor: C.line, height: 10.5 },
  choiceWrap: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 2 },
  choice: { flexDirection: "row", alignItems: "center", marginRight: 6 },
  checkbox: {
    width: 9,
    height: 9,
    borderWidth: 0.8,
    borderColor: C.ink,
    marginRight: 3,
    textAlign: "center",
    fontSize: 7,
    paddingTop: 0.6,
    fontFamily: "Helvetica-Bold",
  },
  checkboxSelected: { backgroundColor: C.navy, color: C.white, borderColor: C.navy },
  choiceLabel: { fontSize: 6.8 },
  instructionList: { marginTop: 5 },
  instructionRow: { flexDirection: "row", marginBottom: 3, lineHeight: 1.3 },
  instructionNo: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: C.paleBlue,
    color: C.navy,
    textAlign: "center",
    paddingTop: 3,
    fontFamily: "Helvetica-Bold",
    marginRight: 7,
  },
  instructionText: { flex: 1, paddingTop: 1.5 },
  table: { borderWidth: 0.7, borderColor: C.line },
  tableRow: { flexDirection: "row", minHeight: 18, borderBottomWidth: 0.5, borderBottomColor: C.line },
  tableRowLast: { flexDirection: "row", minHeight: 18 },
  tableHead: { backgroundColor: C.paleBlue, fontFamily: "Helvetica-Bold" },
  cell: {
    paddingVertical: 3.5,
    paddingHorizontal: 4,
    borderRightWidth: 0.5,
    borderRightColor: C.line,
    justifyContent: "center",
  },
  cellLast: { paddingVertical: 3.5, paddingHorizontal: 4, justifyContent: "center" },
  declaration: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
    lineHeight: 1.35,
  },
  declarationText: { flex: 1, paddingTop: 0.5 },
  signatureBox: {
    minHeight: 65,
    borderWidth: 0.7,
    borderColor: C.line,
    padding: 6,
  },
  signatureImage: { width: 125, height: 30, objectFit: "contain", alignSelf: "flex-start" },
  officeBand: {
    backgroundColor: C.paleBlue,
    borderWidth: 0.7,
    borderColor: C.blue,
    padding: 6,
    marginBottom: 7,
  },
  officeTitle: {
    color: C.navy,
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    marginBottom: 4,
  },
  footer: {
    position: "absolute",
    left: 32,
    right: 32,
    bottom: 15,
    borderTopWidth: 0.6,
    borderTopColor: C.line,
    paddingTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    color: C.muted,
    fontSize: 6.4,
  },
  footerCenter: { textAlign: "center", flex: 1 },
  privacy: { fontFamily: "Helvetica-Bold", color: C.navy },
  small: { fontSize: 6.8, color: C.muted, lineHeight: 1.35 },
  bold: { fontFamily: "Helvetica-Bold" },
  h3: { fontFamily: "Helvetica-Bold", color: C.navy, fontSize: 8.4, marginBottom: 4 },
  spacer: { height: 3 },
});

const EMPTY_DOCUMENTS: NonNullable<ApplicationFormData["documents"]> = [
  { name: "Certified South African ID or passport" },
  { name: "Valid permit, where applicable" },
  { name: "Matric certificate or latest school results" },
  { name: "Previous qualification certificates" },
  { name: "Academic transcript or statement of results" },
  { name: "Proof of residential address" },
  { name: "Curriculum vitae, where required" },
  { name: "Driver's licence, where required" },
  { name: "Sponsorship, bursary or employer letter" },
  { name: "Proof of payment, where required" },
  { name: "Recognition of Prior Learning evidence" },
  { name: "Other programme-specific document" },
];

const safe = (value: unknown): string =>
  value === undefined || value === null ? "" : String(value);

const isSelected = (selected: string | undefined, option: string) =>
  safe(selected).toLowerCase() === option.toLowerCase();

function Header({ logoSrc }: { logoSrc?: string }) {
  return (
    <View style={styles.header}>
      <View style={styles.brand}>
        {logoSrc ? (
          <Image src={logoSrc} style={styles.logo} />
        ) : (
          <Text style={styles.monogram}>SA</Text>
        )}
        <View>
          <Text style={styles.brandName}>SA INNOVATION COLLEGE</Text>
          <Text style={styles.brandTag}>THROUGH KNOWLEDGE, WE GROW TOWARDS EXCELLENCE</Text>
        </View>
      </View>
      <View style={styles.headerMeta}>
        <Text>147 Burger Avenue, Lyttelton Manor</Text>
        <Text>Centurion, 0157</Text>
        <Text>0800 014 568 | +27 72 773 3960</Text>
        <Text>info@sainnovationcollege.co.za</Text>
      </View>
    </View>
  );
}

function Footer() {
  return (
    <View fixed style={styles.footer}>
      <Text style={styles.privacy}>CONFIDENTIAL WHEN COMPLETED</Text>
      <Text style={styles.footerCenter}>SAIC-FRM-ADM-001 | Version 2026.1</Text>
      <Text
        render={({ pageNumber, totalPages }) => `PAGE ${pageNumber} OF ${totalPages}`}
      />
    </View>
  );
}

function PageShell({
  children,
  logoSrc,
}: {
  children: React.ReactNode;
  logoSrc?: string;
}) {
  return (
    <Page size="A4" style={styles.page}>
      <Header logoSrc={logoSrc} />
      {children}
      <Footer />
    </Page>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section} wrap={false}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionNumber}>{number}</Text>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <View style={styles.row}>{children}</View>;
}

function Field({
  label,
  value,
  mode,
  required,
  width,
}: {
  label: string;
  value?: unknown;
  mode: PdfMode;
  required?: boolean;
  width?: number;
}) {
  const text = safe(value);
  return (
    <View style={[styles.field, width ? { flexGrow: 0, flexBasis: width } : {}]}>
      <Text style={styles.fieldLabel}>
        {label} {required ? <Text style={styles.required}>*</Text> : ""}
      </Text>
      <View style={mode === "completed" ? styles.fieldBoxCompleted : styles.fieldBox}>
        <Text>{text || " "}</Text>
      </View>
    </View>
  );
}

function TextArea({
  label,
  value,
  mode,
  lines = 4,
}: {
  label: string;
  value?: unknown;
  mode: PdfMode;
  lines?: number;
}) {
  const text = safe(value);
  return (
    <View>
      <Text style={styles.fieldLabel}>{label}</Text>
      {mode === "completed" ? (
        <View style={[styles.area, { minHeight: lines * 10.5 }]}>
          <Text>{text || " "}</Text>
        </View>
      ) : (
        <View style={[styles.lineArea, { minHeight: lines * 10.5 }]}>
          {Array.from({ length: lines }).map((_, index) => (
            <View key={index} style={styles.writingLine} />
          ))}
        </View>
      )}
    </View>
  );
}

function Choice({
  label,
  checked,
}: {
  label: string;
  checked?: boolean;
}) {
  return (
    <View style={styles.choice}>
      <Text style={[styles.checkbox, checked ? styles.checkboxSelected : {}]}>
        {checked ? "X" : ""}
      </Text>
      <Text style={styles.choiceLabel}>{label}</Text>
    </View>
  );
}

function Choices({
  label,
  selected,
  options,
}: {
  label: string;
  selected?: string | string[];
  options: string[];
}) {
  const values = Array.isArray(selected) ? selected.map((v) => v.toLowerCase()) : [];
  return (
    <View style={{ marginBottom: 7 }}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.choiceWrap}>
        {options.map((option) => (
          <Choice
            key={option}
            label={option}
            checked={
              Array.isArray(selected)
                ? values.includes(option.toLowerCase())
                : isSelected(selected, option)
            }
          />
        ))}
      </View>
    </View>
  );
}

function SubjectTable({
  subjects = [],
  mode,
}: {
  subjects?: ApplicationFormData["education"]["subjects"];
  mode: PdfMode;
}) {
  const rows = Array.from({ length: 8 }).map((_, index) => subjects[index] || {});
  return (
    <View style={styles.table}>
      <View style={[styles.tableRow, styles.tableHead]}>
        <View style={[styles.cell, { width: "10%" }]}><Text>NO.</Text></View>
        <View style={[styles.cell, { width: "54%" }]}><Text>SUBJECT</Text></View>
        <View style={[styles.cell, { width: "20%" }]}><Text>RESULT</Text></View>
        <View style={[styles.cellLast, { width: "16%" }]}><Text>YEAR</Text></View>
      </View>
      {rows.map((row, index) => (
        <View key={index} style={index === rows.length - 1 ? styles.tableRowLast : styles.tableRow}>
          <View style={[styles.cell, { width: "10%" }]}><Text>{index + 1}</Text></View>
          <View style={[styles.cell, { width: "54%" }]}><Text>{mode === "completed" ? safe(row.name) : ""}</Text></View>
          <View style={[styles.cell, { width: "20%" }]}><Text>{mode === "completed" ? safe(row.result) : ""}</Text></View>
          <View style={[styles.cellLast, { width: "16%" }]}><Text>{mode === "completed" ? safe(row.year) : ""}</Text></View>
        </View>
      ))}
    </View>
  );
}

function DocumentTable({
  documents,
}: {
  documents: NonNullable<ApplicationFormData["documents"]>;
}) {
  return (
    <View style={styles.table}>
      <View style={[styles.tableRow, styles.tableHead]}>
        <View style={[styles.cell, { width: "61%" }]}><Text>SUPPORTING DOCUMENT</Text></View>
        <View style={[styles.cell, { width: "13%" }]}><Text>ATTACHED</Text></View>
        <View style={[styles.cell, { width: "13%" }]}><Text>OUTSTANDING</Text></View>
        <View style={[styles.cellLast, { width: "13%" }]}><Text>N/A</Text></View>
      </View>
      {documents.map((doc, index) => (
        <View
          key={`${doc.name}-${index}`}
          style={index === documents.length - 1 ? styles.tableRowLast : styles.tableRow}
        >
          <View style={[styles.cell, { width: "61%" }]}><Text>{doc.name}</Text></View>
          <View style={[styles.cell, { width: "13%", alignItems: "center" }]}>
            <Text style={[styles.checkbox, doc.status === "attached" ? styles.checkboxSelected : {}]}>
              {doc.status === "attached" ? "X" : ""}
            </Text>
          </View>
          <View style={[styles.cell, { width: "13%", alignItems: "center" }]}>
            <Text style={[styles.checkbox, doc.status === "outstanding" ? styles.checkboxSelected : {}]}>
              {doc.status === "outstanding" ? "X" : ""}
            </Text>
          </View>
          <View style={[styles.cellLast, { width: "13%", alignItems: "center" }]}>
            <Text style={[styles.checkbox, doc.status === "not_applicable" ? styles.checkboxSelected : {}]}>
              {doc.status === "not_applicable" ? "X" : ""}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function Declaration({
  checked,
  children,
}: {
  checked?: boolean;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.declaration}>
      <Text style={[styles.checkbox, checked ? styles.checkboxSelected : {}]}>
        {checked ? "X" : ""}
      </Text>
      <Text style={styles.declarationText}>{children}</Text>
    </View>
  );
}

function Signature({
  title,
  name,
  signature,
  date,
  mode,
}: {
  title: string;
  name?: string;
  signature?: string;
  date?: string;
  mode: PdfMode;
}) {
  return (
    <View style={[styles.signatureBox, { flex: 1 }]}>
      <Text style={styles.h3}>{title}</Text>
      <Field label="Full name" value={name} mode={mode} />
      <View style={styles.spacer} />
      <Text style={styles.fieldLabel}>Signature</Text>
      {mode === "completed" && signature ? (
        <Image src={signature} style={styles.signatureImage} />
      ) : (
        <View style={[styles.fieldBox, { minHeight: 31 }]}><Text> </Text></View>
      )}
      <View style={styles.spacer} />
      <Field label="Date" value={date} mode={mode} />
    </View>
  );
}

function normalise(input?: Partial<ApplicationFormData>): ApplicationFormData {
  return {
    referenceNumber: input?.referenceNumber || "",
    generatedAt: input?.generatedAt || "",
    applicationType: input?.applicationType || "",
    intake: input?.intake || "",
    programme: input?.programme || {},
    personal: input?.personal || {},
    contact: input?.contact || {},
    guardian: input?.guardian || {},
    emergency: input?.emergency || {},
    education: input?.education || {},
    employment: input?.employment || {},
    funding: input?.funding || {},
    support: input?.support || {},
    programmeRequirements: input?.programmeRequirements || {},
    documents: input?.documents?.length ? input.documents : EMPTY_DOCUMENTS,
    referral: input?.referral || {},
    motivation: input?.motivation || "",
    declarations: input?.declarations || {},
    signatures: input?.signatures || {},
  };
}

export function ApplicationFormPDF({
  data: input,
  mode = "blank",
  logoSrc,
}: ApplicationFormPDFProps) {
  const data = normalise(input);
  const d = data;

  return (
    <Document
      title="SA Innovation College Application for Admission"
      author="SA Innovation College"
      subject="Application for Admission"
      keywords="SA Innovation College, application, admission"
    >
      <PageShell logoSrc={logoSrc}>
        <Text style={styles.documentTitle}>APPLICATION FOR ADMISSION</Text>
        <Text style={styles.documentSubtitle}>
          Complete all applicable sections. Submission does not automatically guarantee admission.
        </Text>

        <View style={styles.referenceBar}>
          <Text style={styles.referenceText}>
            APPLICATION REF: {d.referenceNumber || "OFFICE USE"}
          </Text>
          <Text style={styles.referenceText}>ACADEMIC YEAR: 2026</Text>
          <Text style={styles.referenceText}>
            GENERATED: {d.generatedAt || "________________"}
          </Text>
        </View>

        <View style={styles.note}>
          <Text style={styles.bold}>IMPORTANT:</Text>
          <Text>
            Complete every section that applies to you. Information must match your supporting
            documents. Submit clear copies and keep a copy of the completed application.
          </Text>
        </View>

        <Text style={styles.h3}>BEFORE YOU BEGIN</Text>
        <View style={styles.instructionList}>
          {[
            "Use black or blue ink when completing the printed form.",
            "Do not submit original identity or qualification documents.",
            "Incomplete applications may delay the admission decision.",
            "Admission remains subject to entry requirements, document verification and available space.",
            "Quote the application reference number in all communication with the College.",
            "Read the declaration, privacy notice, fee terms and refund policy before signing.",
          ].map((instruction, index) => (
            <View style={styles.instructionRow} key={instruction}>
              <Text style={styles.instructionNo}>{index + 1}</Text>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>

        <View style={styles.warning}>
          <Text style={styles.bold}>SUPPORTING DOCUMENTS:</Text>
          <Text>
            Prepare an ID or passport, academic results, proof of address and any documents
            required by the selected programme. Additional documents may be requested after review.
          </Text>
        </View>

        <Section number="1" title="APPLICATION CONTROL">
          <Choices
            label="APPLICATION TYPE"
            selected={d.applicationType}
            options={["New application", "Returning student", "Programme change", "Re-admission"]}
          />
          <Choices
            label="INTAKE"
            selected={d.intake}
            options={["January 2026", "April 2026", "July 2026", "September 2026", "Other"]}
          />
          <Row>
            <Field label="Application reference number" value={d.referenceNumber} mode={mode} />
            <Field label="Student number (if returning)" mode={mode} />
          </Row>
          <Row>
            <Field label="Date received" mode={mode} />
            <Field label="Received by" mode={mode} />
            <Field label="Admissions officer" mode={mode} />
          </Row>
        </Section>

        <Text style={styles.small}>
          Submit online at www.sainnovationcollege.co.za/apply or deliver to 147 Burger Avenue,
          1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157.
        </Text>
      </PageShell>

      <PageShell logoSrc={logoSrc}>
        <Section number="2" title="PROGRAMME SELECTION">
          <Row>
            <Field label="First-choice programme" value={d.programme.firstChoice} mode={mode} required />
            <Field label="Programme code" value={d.programme.firstCode} mode={mode} />
          </Row>
          <Field label="Second-choice programme" value={d.programme.secondChoice} mode={mode} />
          <View style={styles.spacer} />
          <Choices
            label="STUDY MODE"
            selected={d.programme.studyMode}
            options={["Full-time", "Part-time", "Online", "Blended learning", "Short programme"]}
          />
          <Choices
            label="PREFERRED ATTENDANCE"
            selected={d.programme.attendance}
            options={["Weekdays", "Evenings", "Saturdays", "Flexible schedule"]}
          />
          <Row>
            <Field label="Campus or learning location" value={d.programme.campus} mode={mode} />
            <Field label="Preferred start date" value={d.programme.preferredStartDate} mode={mode} />
          </Row>
          <TextArea label="Career goal and reason for selecting this programme" value={d.programme.careerGoal} mode={mode} lines={4} />
        </Section>

        <Section number="3" title="PERSONAL INFORMATION">
          <Text style={styles.small}>
            Enter your names exactly as they appear on your identity document or passport.
          </Text>
          <View style={styles.spacer} />
          <Row>
            <Field label="Title" value={d.personal.title} mode={mode} width={70} />
            <Field label="Surname" value={d.personal.surname} mode={mode} required />
            <Field label="First names in full" value={d.personal.firstNames} mode={mode} required />
          </Row>
          <Row>
            <Field label="Preferred name" value={d.personal.preferredName} mode={mode} />
            <Field label="South African ID number" value={d.personal.idNumber} mode={mode} />
          </Row>
          <Row>
            <Field label="Passport number" value={d.personal.passportNumber} mode={mode} />
            <Field label="Country of issue" value={d.personal.passportCountry} mode={mode} />
            <Field label="Passport expiry date" value={d.personal.passportExpiry} mode={mode} />
          </Row>
          <Row>
            <Field label="Date of birth" value={d.personal.dateOfBirth} mode={mode} />
            <Field label="Nationality" value={d.personal.nationality} mode={mode} />
            <Field label="Country of birth" value={d.personal.countryOfBirth} mode={mode} />
          </Row>
          <Choices
            label="GENDER"
            selected={d.personal.gender}
            options={["Female", "Male", "Prefer not to disclose", "Other"]}
          />
          <Row>
            <Field label="Home language" value={d.personal.homeLanguage} mode={mode} />
            <Field label="Preferred communication language" value={d.personal.communicationLanguage} mode={mode} />
          </Row>
          <Choices
            label="CITIZENSHIP OR RESIDENCY STATUS"
            selected={d.personal.citizenshipStatus}
            options={["South African citizen", "Permanent resident", "Refugee or asylum seeker", "International applicant", "Other"]}
          />
          <Row>
            <Field label="Permit type" value={d.personal.permitType} mode={mode} />
            <Field label="Permit number" value={d.personal.permitNumber} mode={mode} />
            <Field label="Permit expiry date" value={d.personal.permitExpiry} mode={mode} />
          </Row>
        </Section>
      </PageShell>

      <PageShell logoSrc={logoSrc}>
        <Section number="4" title="CONTACT DETAILS">
          <Row>
            <Field label="Primary cellphone number" value={d.contact.phone} mode={mode} required />
            <Field label="Alternative cellphone number" value={d.contact.alternativePhone} mode={mode} />
            <Field label="WhatsApp number" value={d.contact.whatsapp} mode={mode} />
          </Row>
          <Row>
            <Field label="Email address" value={d.contact.email} mode={mode} required />
            <Field label="Preferred contact method" value={d.contact.preferredContact} mode={mode} />
          </Row>
          <TextArea label="Residential address" value={d.contact.residentialAddress} mode={mode} lines={2} />
          <View style={styles.spacer} />
          <Row>
            <Field label="Suburb or township" value={d.contact.suburb} mode={mode} />
            <Field label="City or town" value={d.contact.city} mode={mode} />
            <Field label="Province" value={d.contact.province} mode={mode} />
          </Row>
          <Row>
            <Field label="Postal code" value={d.contact.postalCode} mode={mode} />
            <Field label="Country" value={d.contact.country} mode={mode} />
          </Row>
          <TextArea label="Postal address, if different" value={d.contact.postalAddress} mode={mode} lines={2} />
        </Section>

        <Section number="5" title="PARENT, GUARDIAN OR SPONSOR">
          <Text style={styles.small}>
            Complete this section if the applicant is younger than 18 or another person is responsible for fees.
          </Text>
          <View style={styles.spacer} />
          <Row>
            <Field label="Relationship to applicant" value={d.guardian.relationship} mode={mode} />
            <Field label="Full name and surname" value={d.guardian.fullName} mode={mode} />
          </Row>
          <Row>
            <Field label="ID or passport number" value={d.guardian.idNumber} mode={mode} />
            <Field label="Cellphone number" value={d.guardian.phone} mode={mode} />
            <Field label="Email address" value={d.guardian.email} mode={mode} />
          </Row>
          <TextArea label="Residential address" value={d.guardian.address} mode={mode} lines={2} />
          <View style={styles.spacer} />
          <Row>
            <Field label="Occupation" value={d.guardian.occupation} mode={mode} />
            <Field label="Employer" value={d.guardian.employer} mode={mode} />
          </Row>
        </Section>

        <Section number="6" title="EMERGENCY CONTACT AND NEXT OF KIN">
          <Row>
            <Field label="Full name and surname" value={d.emergency.fullName} mode={mode} required />
            <Field label="Relationship" value={d.emergency.relationship} mode={mode} required />
          </Row>
          <Row>
            <Field label="Primary cellphone number" value={d.emergency.phone} mode={mode} required />
            <Field label="Alternative number" value={d.emergency.alternativePhone} mode={mode} />
            <Field label="Email address" value={d.emergency.email} mode={mode} />
          </Row>
          <TextArea label="Residential address" value={d.emergency.address} mode={mode} lines={2} />
        </Section>
      </PageShell>

      <PageShell logoSrc={logoSrc}>
        <Section number="7" title="EDUCATIONAL BACKGROUND">
          <Row>
            <Field label="Highest grade completed" value={d.education.highestGrade} mode={mode} required />
            <Field label="Name of school" value={d.education.schoolName} mode={mode} />
          </Row>
          <Row>
            <Field label="Province or country" value={d.education.provinceOrCountry} mode={mode} />
            <Field label="Year completed" value={d.education.yearCompleted} mode={mode} />
            <Field label="Examination number" value={d.education.examinationNumber} mode={mode} />
          </Row>
          <Row>
            <Field label="Examination authority" value={d.education.examinationAuthority} mode={mode} />
            <Field label="Matric status" value={d.education.matricStatus} mode={mode} />
          </Row>
          <Text style={styles.h3}>SCHOOL SUBJECTS AND RESULTS</Text>
          <SubjectTable subjects={d.education.subjects} mode={mode} />
        </Section>

        <Section number="8" title="PREVIOUS POST-SCHOOL STUDIES">
          <Row>
            <Field label="Institution name" value={d.education.previousInstitution} mode={mode} />
            <Field label="Qualification or programme" value={d.education.previousProgramme} mode={mode} />
          </Row>
          <Row>
            <Field label="Student number" value={d.education.previousStudentNumber} mode={mode} />
            <Field label="Year started" value={d.education.previousStartYear} mode={mode} />
            <Field label="Year completed or discontinued" value={d.education.previousEndYear} mode={mode} />
            <Field label="Status" value={d.education.previousStatus} mode={mode} />
          </Row>
        </Section>

        <Section number="9" title="RECOGNITION OF PRIOR LEARNING">
          <Choices
            label="ARE YOU REQUESTING RPL, CREDIT TRANSFER OR EXEMPTION?"
            selected={d.education.rplRequested ? "Yes" : undefined}
            options={["Yes", "No", "Unsure - guidance required"]}
          />
          <TextArea
            label="Relevant knowledge, workplace experience or previous studies"
            value={d.education.rplSummary}
            mode={mode}
            lines={3}
          />
        </Section>
      </PageShell>

      <PageShell logoSrc={logoSrc}>
        <Section number="10" title="EMPLOYMENT INFORMATION">
          <Choices
            label="CURRENT EMPLOYMENT STATUS"
            selected={d.employment.status}
            options={["Employed full-time", "Employed part-time", "Self-employed", "Unemployed", "Student", "Other"]}
          />
          <Row>
            <Field label="Employer or business name" value={d.employment.employer} mode={mode} />
            <Field label="Position or occupation" value={d.employment.position} mode={mode} />
            <Field label="Employment start date" value={d.employment.startDate} mode={mode} />
          </Row>
          <Row>
            <Field label="Supervisor's name" value={d.employment.supervisor} mode={mode} />
            <Field label="Supervisor's contact number" value={d.employment.supervisorPhone} mode={mode} />
            <Field label="Employer support" value={d.employment.employerSupport} mode={mode} />
          </Row>
        </Section>

        <Section number="11" title="FUNDING AND PAYMENT INFORMATION">
          <Choices
            label="INTENDED PAYMENT METHOD"
            selected={d.funding.method}
            options={["Self-funded", "Parent or guardian", "Employer-funded", "Bursary", "Scholarship", "Payment plan", "Not yet confirmed"]}
          />
          <Row>
            <Field label="Payer or organisation" value={d.funding.payerName} mode={mode} />
            <Field label="ID or registration number" value={d.funding.payerIdOrRegistration} mode={mode} />
            <Field label="Relationship to applicant" value={d.funding.relationship} mode={mode} />
          </Row>
          <Row>
            <Field label="Contact number" value={d.funding.phone} mode={mode} />
            <Field label="Email address" value={d.funding.email} mode={mode} />
          </Row>
          <TextArea label="Billing address" value={d.funding.billingAddress} mode={mode} lines={2} />
          <View style={styles.spacer} />
          <Field label="Sponsorship, purchase order or bursary reference" value={d.funding.sponsorshipReference} mode={mode} />
          <View style={styles.warning}>
            <Text>
              Completing this section does not confirm funding. Final fees, payment terms and refund
              conditions must be accepted through the registration agreement.
            </Text>
          </View>
        </Section>

        <Section number="12" title="LEARNING SUPPORT AND ONLINE READINESS">
          <Choices
            label="DO YOU REQUIRE LEARNING OR ACCESSIBILITY SUPPORT?"
            selected={d.support.supportRequired ? "Yes" : undefined}
            options={["Yes", "No", "Prefer to discuss privately"]}
          />
          <Choices
            label="SUPPORT AREA"
            selected={d.support.supportAreas}
            options={["Physical access", "Visual", "Hearing", "Learning", "Assessment", "Mental health", "Other"]}
          />
          <TextArea label="Support that may be required" value={d.support.supportDescription} mode={mode} lines={2} />
          <View style={styles.spacer} />
          <Choices
            label="AVAILABLE STUDY DEVICES"
            selected={d.support.devices}
            options={["Desktop", "Laptop", "Tablet", "Smartphone", "Shared computer", "No suitable device"]}
          />
          <Row>
            <Field label="Internet access" value={d.support.internetAccess} mode={mode} />
            <Field label="Computer skill level" value={d.support.computerSkillLevel} mode={mode} />
          </Row>
        </Section>
      </PageShell>

      <PageShell logoSrc={logoSrc}>
        <Section number="13" title="ADDITIONAL PROGRAMME REQUIREMENTS">
          <Choices
            label="VALID DRIVER'S LICENCE"
            selected={d.programmeRequirements.hasDriversLicence ? "Yes" : undefined}
            options={["Yes", "No", "Learner's licence only", "Not applicable"]}
          />
          <Row>
            <Field label="Licence code" value={d.programmeRequirements.licenceCode} mode={mode} />
            <Field label="Licence expiry date" value={d.programmeRequirements.licenceExpiry} mode={mode} />
          </Row>
          <Declaration checked={d.programmeRequirements.clearanceWilling}>
            Where formally required for the selected programme, I am willing to provide an
            appropriate criminal-record or suitability declaration.
          </Declaration>
          <Declaration checked={d.programmeRequirements.fitnessAcknowledged}>
            I understand that certain programmes may have lawful medical, physical or occupational
            fitness requirements that will be explained before sensitive information is requested.
          </Declaration>
        </Section>

        <Section number="14" title="SUPPORTING DOCUMENT CHECKLIST">
          <Text style={styles.small}>
            Attach only documents applicable to the selected programme. Do not submit originals.
          </Text>
          <View style={styles.spacer} />
          <DocumentTable documents={d.documents || EMPTY_DOCUMENTS} />
        </Section>

        <Section number="15" title="REFERRAL AND APPLICANT MOTIVATION">
          <Choices
            label="HOW DID YOU HEAR ABOUT SA INNOVATION COLLEGE?"
            selected={d.referral.sources}
            options={["Facebook", "Instagram", "TikTok", "Google", "WhatsApp", "Friend or family", "Former student", "School visit", "Poster or flyer", "Other"]}
          />
          <Field label="Name of person who referred you, if applicable" value={d.referral.referredBy} mode={mode} />
          <View style={styles.spacer} />
          <TextArea
            label="Why do you want to study at SA Innovation College?"
            value={d.motivation}
            mode={mode}
            lines={5}
          />
        </Section>
      </PageShell>

      <PageShell logoSrc={logoSrc}>
        <Section number="16" title="APPLICANT DECLARATION">
          <Declaration checked={d.declarations.accurateInformation}>
            I declare that the information and supporting documents submitted with this application
            are, to the best of my knowledge, true, complete and accurate.
          </Declaration>
          <Declaration checked={d.declarations.verificationConsent}>
            I authorise the College to verify information and documents relevant to this application
            with an issuing institution or appropriate authority, subject to applicable law.
          </Declaration>
          <Declaration checked={d.declarations.admissionUnderstanding}>
            I understand that submitting an application does not guarantee admission, funding,
            certification, workplace placement or employment.
          </Declaration>
          <Declaration checked={d.declarations.feeUnderstanding}>
            I understand that I must review and accept the official fee schedule, payment terms and
            refund policy before registration is completed.
          </Declaration>
        </Section>

        <Section number="17" title="PRIVACY AND POPIA CONSENT">
          <Text style={{ lineHeight: 1.4, marginBottom: 8 }}>
            SA Innovation College processes personal information to assess applications, verify
            identity and supporting documents, communicate outcomes, manage registration, provide
            student services, administer fees and meet lawful institutional obligations. Information
            will be protected through reasonable technical and organisational safeguards and retained
            only for an appropriate operational, regulatory or legal period.
          </Text>
          <Declaration checked={d.declarations.popiaConsent}>
            I consent to the processing of my personal information for application, admission,
            registration and related academic administration.
          </Declaration>
          <Choices
            label="APPLICATION COMMUNICATION CHANNELS"
            selected={d.declarations.communicationChannels}
            options={["Email", "SMS", "WhatsApp", "Phone call"]}
          />
          <Choices
            label="OPTIONAL PROGRAMME AND EVENT UPDATES"
            selected={d.declarations.marketingConsent ? "Yes" : "No"}
            options={["Yes", "No"]}
          />
        </Section>

        <View style={styles.row} wrap={false}>
          <Signature
            title="APPLICANT SIGNATURE"
            name={d.signatures.applicantName}
            signature={d.signatures.applicantSignature}
            date={d.signatures.applicantDate}
            mode={mode}
          />
          <Signature
            title="PARENT OR GUARDIAN"
            name={d.signatures.guardianName}
            signature={d.signatures.guardianSignature}
            date={d.signatures.guardianDate}
            mode={mode}
          />
        </View>
        <View style={styles.spacer} />
        <Row>
          <Field label="Place signed" value={d.signatures.applicantPlace} mode={mode} />
          <Field label="Sponsor or account holder" value={d.signatures.sponsorName} mode={mode} />
          <Field label="Sponsor date" value={d.signatures.sponsorDate} mode={mode} />
        </Row>
      </PageShell>

      <PageShell logoSrc={logoSrc}>
        <Text style={styles.documentTitle}>ADMISSIONS OFFICE USE</Text>
        <Text style={styles.documentSubtitle}>
          This page must be completed by authorised SA Innovation College staff.
        </Text>

        <View style={styles.officeBand}>
          <Text style={styles.officeTitle}>APPLICATION IDENTIFICATION</Text>
          <Row>
            <Field label="Application reference" value={d.referenceNumber} mode={mode} />
            <Field label="Applicant full name" value={`${safe(d.personal.firstNames)} ${safe(d.personal.surname)}`.trim()} mode={mode} />
            <Field label="Programme" value={d.programme.firstChoice} mode={mode} />
          </Row>
        </View>

        <Section number="A" title="APPLICATION COMPLETENESS">
          <View style={styles.choiceWrap}>
            {[
              "Personal details complete",
              "Contact details verified",
              "Programme selected",
              "Entry requirements checked",
              "Identity document received",
              "Academic documents received",
              "Funding method recorded",
              "Declaration signed",
              "POPIA consent recorded",
            ].map((item) => <Choice key={item} label={item} />)}
          </View>
        </Section>

        <Section number="B" title="ADMISSIONS ASSESSMENT">
          <Choices
            label="ASSESSMENT OUTCOME"
            options={["Meets requirements", "Provisionally meets requirements", "Additional assessment", "RPL review", "Alternative programme", "Does not meet requirements"]}
          />
          <TextArea label="Assessment notes and conditions" mode="blank" lines={4} />
          <View style={styles.spacer} />
          <Choices
            label="RECOMMENDATION"
            options={["Accept", "Provisionally accept", "Request documents", "Waiting list", "Alternative programme", "Decline"]}
          />
        </Section>

        <Section number="C" title="APPROVAL AND REGISTRATION">
          <Row>
            <Field label="Admissions officer" mode="blank" />
            <Field label="Signature" mode="blank" />
            <Field label="Date" mode="blank" />
          </Row>
          <Row>
            <Field label="Academic reviewer" mode="blank" />
            <Field label="Signature" mode="blank" />
            <Field label="Date" mode="blank" />
          </Row>
          <Row>
            <Field label="Final programme" mode="blank" />
            <Field label="Programme code" mode="blank" />
            <Field label="Intake and start date" mode="blank" />
          </Row>
          <Row>
            <Field label="Student number" mode="blank" />
            <Field label="Finance clearance" mode="blank" />
            <Field label="Registration status" mode="blank" />
          </Row>
        </Section>

        <Section number="D" title="APPLICATION RECEIPT">
          <Text style={styles.small}>
            Give this section to an applicant who submits a printed form at the campus.
          </Text>
          <View style={styles.spacer} />
          <Row>
            <Field label="Applicant name" mode="blank" />
            <Field label="Application reference" mode="blank" />
          </Row>
          <Row>
            <Field label="Programme" mode="blank" />
            <Field label="Date received" mode="blank" />
          </Row>
          <Row>
            <Field label="Outstanding documents" mode="blank" />
            <Field label="Received by and stamp" mode="blank" />
          </Row>
        </Section>

      </PageShell>
    </Document>
  );
}

export default ApplicationFormPDF;
