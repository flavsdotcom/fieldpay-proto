import React from "react";
import { Button } from "react-bootstrap";

const AvailableOpportunities = ({ setActivePage }) => {
  // Example list of gigs (for now, static data)
  const opportunities = [
    { id: 1, title: "Sample Available Job", company: "ABC Company", rate: "$25/hr", date: "March 10, 2025" },
  ];

  return (
    <div className="app-container">
      <h2 className="top-third">Available Opportunities</h2>
      {opportunities.map((gig) => (
        <div key={gig.id} className="gig-card">
          <h3>{gig.title}</h3>
          <p><strong>Company:</strong> {gig.company}</p>
          <p><strong>Rate:</strong> {gig.rate}</p>
          <p><strong>Date:</strong> {gig.date}</p>
          <Button className="custom-button">Claim Job</Button>
        </div>
      ))}
      <Button className="custom-button" onClick={() => setActivePage("talent-dashboard")}>
        Back
      </Button>
      <footer className="footer">Fieldpay</footer>
    </div>
  );
};

export default AvailableOpportunities;

