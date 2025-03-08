import React from "react";
import { Button } from "react-bootstrap";

const TalentDashboard = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Talent Dashboard</h2>
      <Button className="custom-button" onClick={() => setActivePage("available-opportunities")}>
        View Available Opportunities
      </Button>
      <Button className="custom-button" onClick={() => setActivePage("create-gig")}>
        Request a Gig
      </Button>
      <footer className="footer">Fieldpay</footer>
    </div>
  );
};

export default TalentDashboard;

