import React from "react";
import { Button } from "react-bootstrap";

const AdminOther = ({ setActivePage }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Other</h2>
      <p>Manage additional financial options for your employees.</p>

{/* One-Time Employee Loan */}
<Button className="styled-button" onClick={() => setActivePage("one-time-loan")}>
  <div className="button-content">
    <p className="button-description">Provide a one-time loan to employees, available once per year.</p>
    <strong className="button-action">Offer Employee Loan</strong>
  </div>
</Button>

{/* Earned Wage Access */}
<Button className="styled-button" onClick={() => setActivePage("enable-ewa")}>
  <div className="button-content">
    <p className="button-description">Let employees access earned wages early, without affecting cash flow.</p>
    <strong className="button-action">Enable Earned Wage Access</strong>
  </div>
</Button>

    </div>
  );
};

export default AdminOther;

