import React from "react";
import { Button } from "react-bootstrap";

const AdminOther = ({ setActivePage }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Other</h2>
      <p>Manage additional financial options for your employees.</p>

      {/* One-Time Employee Loan */}
      <Button 
        className="custom-button" 
        onClick={() => setActivePage("one-time-loan")}
      >
        One-Time Employee Loan
      </Button>

<Button className="custom-button" onClick={() => setActivePage("enable-ewa")}>
  Enable Earned Wage Access
</Button>

      {/* Back Button */}
      <Button 
        className="custom-button" 
        onClick={() => setActivePage("home")}
      >
        Back to Admin
      </Button>
    </div>
  );
};

export default AdminOther;

