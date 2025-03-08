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
import Recruiting from "./Recruiting";
import AvailableOpportunities from "./AvailableOpportunities";



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
{activePage === "recruiting" && <Recruiting setActivePage={setActivePage} />}
      <footer className="footer">Fieldpay</footer>
    </div>
  );
};

export default App;

