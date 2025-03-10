import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const OneTimeLoan = ({ setActivePage }) => {
  const [loanAmount, setLoanAmount] = useState(1000); // Default: $1000

  return (
    <div style={{ padding: "20px" }}>
      <h2>One-Time Employee Loan</h2>
      <p>Offer your employee a one-time loan, available only once a year.</p>

      {/* Loan Amount Slider */}
      <Form.Group>
        <Form.Label>Loan Amount: <strong>${loanAmount}</strong></Form.Label>
        <Form.Control
          type="range"
          min="100"
          max="1000"
          step="50"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </Form.Group>

      {/* Generate Invite Button */}
      <Button className="custom-button" style={{ marginTop: "15px" }}>
        Generate Invite for Loan
      </Button>

      {/* Back Button */}
      <Button 
        className="custom-button" 
        style={{ marginTop: "10px" }} 
        onClick={() => setActivePage("other")}
      >
        Back
      </Button>
    </div>
  );
};

export default OneTimeLoan;

