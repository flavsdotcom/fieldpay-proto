import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl as Input } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import Teamwork from "./Teamwork";
import CreateCoverageRequest from "./CreateCoverageRequest";
import ActiveRequests from "./ActiveRequests";
import CreateRideAlongBonus from "./CreateRideAlongBonus";
import CreateReferralBonus from "./CreateReferralBonus";
import TalentDashboard from "./TalentDashboard";
import CreateGig from "./CreateGig";


const AdminHome = ({ setActivePage }) => {
 return (
    <div className="app-container">
      <h2 className="top-third">Admin Dashboard</h2>
      <Button className="custom-button" onClick={() => setActivePage("recruiting")}>
        Recruiting
      </Button>
      <Button className="custom-button" onClick={() => setActivePage("teamwork")}>
        Teamwork
      </Button>
      <Button className="custom-button" onClick={() => setActivePage("trade-school")}>
        Trade School
      </Button>
      <Button className="custom-button" onClick={() => setActivePage("other")}>
        Other
      </Button>
      <footer className="footer">Fieldpay</footer>
    </div>
  );
};

const AvailableOpportunities = ({ setActivePage }) => {
  const [opportunities, setOpportunities] = useState([
    { id: 1, description: "Filter clean job", payment: 400, company: "Company ABC" },
    { id: 2, description: "General maintenance", payment: 350, company: "Company XYZ" }
  ]);

  const claimGig = (id) => {
    alert("You've claimed this gig. The company has been notified.");
    setOpportunities(opportunities.filter(opportunity => opportunity.id !== id));
  };

  return (
    <div className="app-container">
      <h2 className="top-third">Available Opportunities</h2>
      {opportunities.length > 0 ? (
        opportunities.map((opportunity) => (
          <Card key={opportunity.id} className="gig-card">
            <Card.Body>
              <h5>{opportunity.description}</h5>
              <p>Company: {opportunity.company}</p>
              <p>Payment: ${opportunity.payment}</p>
              <Button className="custom-button" onClick={() => claimGig(opportunity.id)}>Claim</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No available opportunities at the moment.</p>
      )}
      <Button className="custom-button" onClick={() => setActivePage("talent-dashboard")}>Back</Button>
      <footer className="footer">Fieldpay</footer>
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [requests, setRequests] = useState([]);

  return (
    <div>
      {activePage === "home" && <AdminHome setActivePage={setActivePage} />}
      {activePage === "teamwork" && <Teamwork setActivePage={setActivePage} />}
      {activePage === "coverage-request" && (
        <CreateCoverageRequest setActivePage={setActivePage} requests={requests} setRequests={setRequests} />
      )}
      {activePage === "active-requests" && <ActiveRequests setActivePage={setActivePage} requests={requests} />}
      {activePage === "ride-along-bonus" && <CreateRideAlongBonus setActivePage={setActivePage} />}
      {activePage === "referral-bonus" && <CreateReferralBonus setActivePage={setActivePage} />}
      {activePage === "talent-dashboard" && <TalentDashboard setActivePage={setActivePage} />}
      {activePage === "create-gig" && <CreateGig setActivePage={setActivePage} />}
      {activePage === "available-opportunities" && <AvailableOpportunities setActivePage={setActivePage} />}
      <footer className="footer">Fieldpay</footer>
    </div>
  );
};

export default App;

