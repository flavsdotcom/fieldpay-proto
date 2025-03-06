import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl as Input } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const AdminHome = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2>Admin Dashboard</h2>
      <Button onClick={() => setActivePage("recruiting")}>Recruiting</Button>
      <Button onClick={() => setActivePage("teamwork")}>Teamwork</Button>
      <Button onClick={() => setActivePage("trade-school")}>Trade School</Button>
      <Button onClick={() => setActivePage("other")}>Other</Button>
    </div>
  );
};

const Recruiting = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2>Recruiting</h2>
      <Button onClick={() => setActivePage("referral-bonus")}>Create Referral Bonus</Button>
      <Button onClick={() => setActivePage("ride-along-bonus")}>Create Ride Along Bonus</Button>
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const Teamwork = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2>Teamwork</h2>
      <Button onClick={() => setActivePage("coverage-request")}>Create Coverage Request</Button>
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const CreateReferralBonus = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2>Create Referral Bonus</h2>
      <p>Referral bonus details go here.</p>
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const CreateRideAlongBonus = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2>Create Ride Along Bonus</h2>
      <p>Ride along bonus details go here.</p>
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const CreateCoverageRequest = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2>Create Coverage Request</h2>
      <p>Coverage request details go here.</p>
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      {activePage === "home" && <AdminHome setActivePage={setActivePage} />}
      {activePage === "recruiting" && <Recruiting setActivePage={setActivePage} />}
      {activePage === "teamwork" && <Teamwork setActivePage={setActivePage} />}
      {activePage === "referral-bonus" && <CreateReferralBonus setActivePage={setActivePage} />}
      {activePage === "ride-along-bonus" && <CreateRideAlongBonus setActivePage={setActivePage} />}
      {activePage === "coverage-request" && <CreateCoverageRequest setActivePage={setActivePage} />}
    </div>
  );
};

export default App;

