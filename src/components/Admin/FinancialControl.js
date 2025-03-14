import React from "react";
import { Button } from "react-bootstrap";
import "./FinancialControl.css"; // We'll style this later

const FinancialControl = ({ setActivePage }) => {
  return (
    <div className="financial-control-container">
<h2 className="page-title">Financial Control Center</h2>

      <div className="financial-summary">
        <p><strong>💰 Escrow Balance:</strong> $50,000</p>
        <p><strong>⏳ Pending Payouts:</strong> $5,000</p>
        <p><strong>✅ Approved Payouts:</strong> $8,000</p>
        <p><strong>🔄 Total Liabilities:</strong> $20,000</p>
      </div>

      <Button className="custom-button" onClick={() => setActivePage("home")}>
        Back to Admin
      </Button>
    </div>
  );
};

export default FinancialControl;

