export function PrintableApplyForm() {
  return (
    <div className="print-only" style={{ display: "none" }}>
      <div className="print-form-header">
        <div className="logo">SA INNOVATION COLLEGE</div>
        <div className="subtitle">Online Application Form</div>
      </div>

      <div className="print-section-title">1. Personal Information</div>
      <div className="print-grid-4">
        <div className="print-field-group">
          <label>Title</label>
          <div className="print-field-line-sm" />
        </div>
        <div className="print-field-group" style={{ gridColumn: "span 3" }}>
          <label>Full Name & Surname</label>
          <div className="print-field-line" />
        </div>
      </div>
      <div className="print-grid-3">
        <div className="print-field-group">
          <label>Gender</label>
          <div className="print-field-line-sm" />
        </div>
        <div className="print-field-group">
          <label>Nationality</label>
          <div className="print-field-line-sm" />
        </div>
        <div className="print-field-group">
          <label>Postal Code</label>
          <div className="print-field-line-sm" />
        </div>
      </div>
      <div className="print-grid-2">
        <div className="print-field-group">
          <label>ID / Passport Number</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Date of Birth</label>
          <div className="print-field-line" />
        </div>
      </div>
      <div className="print-grid-2">
        <div className="print-field-group">
          <label>Phone Number</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Email Address</label>
          <div className="print-field-line" />
        </div>
      </div>
      <div className="print-field-group">
        <label>Physical Address</label>
        <div className="print-field-line" />
        <div className="print-field-line" />
      </div>
      <div className="print-field-group">
        <label>Preferred Start Date</label>
        <div className="print-field-line" />
      </div>

      <div className="print-section-title">2. Course Selection</div>
      <div className="print-grid-2">
        <div className="print-field-group">
          <label>Category</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Course</label>
          <div className="print-field-line" />
        </div>
      </div>

      <div className="print-section-title">3. Education &amp; Employment</div>
      <div className="print-grid-3">
        <div className="print-field-group">
          <label>Highest Education Level</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Previous School / Institution</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Employment Status</label>
          <div className="print-field-line" />
        </div>
      </div>
      <div className="print-grid-2">
        <div className="print-field-group">
          <label>Funding / Sponsorship</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>How Did You Hear About Us?</label>
          <div className="print-field-line" />
        </div>
      </div>

      <div className="print-section-title">4. Emergency Contact</div>
      <div className="print-grid-2">
        <div className="print-field-group">
          <label>Emergency Contact Name</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Emergency Contact Phone</label>
          <div className="print-field-line" />
        </div>
      </div>

      <div className="print-section-title">5. Declaration</div>
      <div className="print-declaration">
        By submitting this application, I confirm that I have read, understood, and agree to
        SA Innovation College&apos;s Terms &amp; Conditions and Refund Policy. I confirm that all
        information provided is accurate and complete.
      </div>
      <div className="print-checkbox-row">
        <div className="print-checkbox" />
        <span>I agree to the Terms &amp; Conditions and Refund Policy</span>
      </div>

      <div className="print-signature-row">
        <div className="print-field-group">
          <label>Signature</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Date</label>
          <div className="print-field-line" />
        </div>
      </div>

      <div className="print-footer">
        SA Innovation College &bull; 147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157
        <br />
        Tel: 0800 014 568 &bull; Email: info@sainnovationcollege.co.za &bull; www.sainnovationcollege.co.za
      </div>
    </div>
  );
}

export function PrintableContactForm() {
  return (
    <div className="print-only" style={{ display: "none" }}>
      <div className="print-form-header">
        <div className="logo">SA INNOVATION COLLEGE</div>
        <div className="subtitle">Enquiry / Contact Form</div>
      </div>

      <div className="print-grid-2">
        <div className="print-field-group">
          <label>First Name</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Surname</label>
          <div className="print-field-line" />
        </div>
      </div>
      <div className="print-grid-2">
        <div className="print-field-group">
          <label>Company / Organisation</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Preferred Contact Method</label>
          <div className="print-field-line" />
        </div>
      </div>
      <div className="print-grid-2">
        <div className="print-field-group">
          <label>Phone Number</label>
          <div className="print-field-line" />
        </div>
        <div className="print-field-group">
          <label>Email Address</label>
          <div className="print-field-line" />
        </div>
      </div>
      <div className="print-field-group">
        <label>Course Interested In</label>
        <div className="print-field-line" />
      </div>
      <div className="print-field-group">
        <label>Your Message</label>
        <div className="print-field-line" />
        <div className="print-field-line" />
        <div className="print-field-line" />
        <div className="print-field-line" />
      </div>

      <div className="print-footer">
        SA Innovation College &bull; 147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor, Centurion, 0157
        <br />
        Tel: 0800 014 568 &bull; Email: info@sainnovationcollege.co.za &bull; www.sainnovationcollege.co.za
      </div>
    </div>
  );
}
