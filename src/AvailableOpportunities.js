import React from "react";
import { Button } from "react-bootstrap";

const AvailableOpportunities = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Available Opportunities</h2>

      {/* 🛠 Wrap multiple JSX elements inside a Fragment */}
      <>
        {/* Sample Job 1 */}
        <div className="opportunity-card">
          <h3>New Air Filtration System Installation</h3>
          <p><strong>Company:</strong> ABC Company</p>
          <p><strong>Date:</strong> March 26</p>
          <p><strong>Hourly Rate:</strong> $25/hr</p>
          <Button className="custom-button">Claim Job</Button>
        </div>

        {/* Sample Job 2 */}
        <div className="opportunity-card">
          <h3>Same Day Pay</h3>
          <p><strong>Company:</strong> My Full Time Employer</p>
          <p><strong>Date:</strong> request today!</p>
          <p><strong>Hourly Rate:</strong> $25/hr</p>
          <Button className="custom-button">Claim Job</Button>
        </div>
      </>

      <Button className="custom-button" onClick={() => setActivePage("talent-dashboard")}>
        Back
      </Button>
    </div>
  );
};

export default AvailableOpportunities;

