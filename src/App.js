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
      <h2 className="top-third">Admin Dashboard</h2>
      <div className="middle-third">
        <Button className="full-width-button" onClick={() => setActivePage("recruiting")}>Recruiting</Button>
        <Button className="full-width-button" onClick={() => setActivePage("teamwork")}>Teamwork</Button>
        <Button className="full-width-button" onClick={() => setActivePage("trade-school")}>Trade School</Button>
        <Button className="full-width-button" onClick={() => setActivePage("other")}>Other</Button>
      </div>
    </div>
  );
};

const Recruiting = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Recruiting</h2>
      <p className="info-text italic">High performers want to work with other high performers. Relationships at work drive retention.</p>
      <Button className="full-width-button" onClick={() => setActivePage("referral-bonus")}>Create Referral Bonus</Button>
      <p className="info-text italic">De-risk hiring by inviting a candidate to “ride along” with a team member. Evaluate their ability to learn and their composure in customer environment.</p>
      <Button className="full-width-button" onClick={() => setActivePage("ride-along-bonus")}>Create Ride Along Bonus</Button>
      <Button className="full-width-button" onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const Teamwork = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Teamwork</h2>
      <p className="info-text italic">Has someone called out or quit? Or do you need someone's special expertise? Cover down with confidence knowing you can pay someone same-day.</p>
      <Button className="full-width-button" onClick={() => setActivePage("coverage-request")}>Create Coverage Request</Button>
      <Button className="full-width-button" onClick={() => setActivePage("home")}>Home</Button>
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
    </div>
  );
};

export default App;

