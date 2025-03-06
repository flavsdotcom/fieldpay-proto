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
      <Button className="custom-button" onClick={() => setActivePage("recruiting")}>Recruiting</Button>
      <Button className="custom-button" onClick={() => setActivePage("teamwork")}>Teamwork</Button>
      <Button className="custom-button" onClick={() => setActivePage("trade-school")}>Trade School</Button>
      <Button className="custom-button" onClick={() => setActivePage("other")}>Other</Button>
    </div>
  );
};

const Recruiting = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Recruiting</h2>
      <Button className="custom-button" onClick={() => setActivePage("referral-bonus")}>Create Referral Bonus</Button>
      <Button className="custom-button" onClick={() => setActivePage("ride-along-bonus")}>Create Ride Along Bonus</Button>
      <Button className="custom-button" onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const Teamwork = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Teamwork</h2>
      <Button className="custom-button" onClick={() => setActivePage("coverage-request")}>Create Coverage Request</Button>
      <Button className="custom-button" onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const CreateCoverageRequest = ({ setActivePage }) => {
  const [details, setDetails] = useState({ workDescription: "", dateTime: new Date(), payment: 500 });
  const [inviteText, setInviteText] = useState("");

  const handleChange = (e) => setDetails({ ...details, workDescription: e.target.value });
  const handleDateChange = (date) => setDetails({ ...details, dateTime: date });
  const handlePaymentChange = (e) => setDetails({ ...details, payment: Number(e.target.value) });

  const generateInvite = () => {
    const text = `Hey! Are you available for ${details.workDescription}? I need help on ${details.dateTime.toDateString()} and I can pay $${details.payment}.

Same day payout available if you onboard here: [onboarding link]`;
    setInviteText(text);
  };

  return (
    <div className="app-container">
      <h2 className="top-third">Create Coverage Request</h2>
      <Input placeholder="Describe the work" value={details.workDescription} onChange={handleChange} />
      <label>Date of Coverage:</label>
      <DatePicker selected={details.dateTime} onChange={handleDateChange} />
      <input type="range" min={5} max={1000} step={5} value={details.payment} onChange={handlePaymentChange} />
      <span>Payment: ${details.payment}</span>
      <Button className="custom-button" onClick={generateInvite}>Generate Invite</Button>
      {inviteText && <div>{inviteText}</div>}
      <Button className="custom-button" onClick={() => setActivePage("home")}>Home</Button>
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

