import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const EnableEWA = ({ setActivePage }) => {
  const [ewaEnabled, setEwaEnabled] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enable Earned Wage Access</h2>
      <p>
        Allow employees to access earned wages before payday without affecting your cash flow.
      </p>

      {/* Toggle Switch */}
      <Form.Group controlId="ewaToggle">
        <Form.Check 
          type="switch"
          label={ewaEnabled ? "Enabled ✅" : "Disabled ❌"}
          checked={ewaEnabled}
          onChange={() => setEwaEnabled(!ewaEnabled)}
        />
      </Form.Group>

      {/* Back Button */}
      <Button 
        className="custom-button" 
        style={{ marginTop: "15px" }} 
        onClick={() => setActivePage("other")}
      >
        Back
      </Button>
    </div>
  );
};

export default EnableEWA;

