import React from "react";
import { Button } from "react-bootstrap";

const AvailableOpportunities = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Available Gigs & Bonuses</h2>
      <p>Sample Available Job</p>
      <p>Date: March 10, 2025</p>
      <p>Hourly Rate: $25</p>
      <p>Company: ABC Company</p>
      <Button className="custom-button" onClick={() => setActivePage("talent-dashboard")}>
        Back to Dashboard
      </Button>
    </div>
  );
};

export default AvailableOpportunities;

