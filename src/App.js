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

const AdminHome = ({ setActivePage }) => {
 return (
    <div className="app-container">
      <h2 className="top-third">Admin Dashboard</h2>
      <Button className="custom-button" onClick={() => setActivePage("recruiting")}>Recruiting</Button>
      <Button className="custom-button" onClick={() => setActivePage("teamwork")}>Teamwork</Button>
      <Button className="custom-button" onClick={() => setActivePage("trade-school")}>Trade School</Button>
      <Button className="custom-button" onClick={() => setActivePage("other")}>Other</Button>
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
      {activePage === "recruiting" && <Recruiting setActivePage={setActivePage} />}
      {activePage === "teamwork" && <Teamwork setActivePage={setActivePage} />}
      {activePage === "coverage-request" && <CreateCoverageRequest setActivePage={setActivePage} requests={requests} setRequests={setRequests} />}
      {activePage === "active-requests" && <ActiveRequests setActivePage={setActivePage} requests={requests} />}
      {activePage === "ride-along-bonus" && <CreateRideAlongBonus setActivePage={setActivePage} />}
      {activePage === "referral-bonus" && <CreateReferralBonus setActivePage={setActivePage} />}
    </div>
  );
};

const Recruiting = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Recruiting</h2>
      <p className="info-text">High performers want to work with other high performers. Relationships at work drive retention.</p>
      <Button className="custom-button" onClick={() => setActivePage("referral-bonus")}>Create Referral Bonus</Button>
      <p className="info-text">De-risk hiring by inviting a candidate to “ride along” with a team member. Evaluate their ability to learn and their composure in customer environments.</p>
      <Button className="custom-button" onClick={() => setActivePage("ride-along-bonus")}>Create Ride Along Bonus</Button>
      <Button className="custom-button" onClick={() => setActivePage("home")}>Home</Button>
<footer className="footer">Fieldpay</footer>

    </div>
  );
};

export default App;

