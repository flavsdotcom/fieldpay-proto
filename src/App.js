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
      <Button className="full-width-button" onClick={() => setActivePage("recruiting")}>Recruiting</Button>
      <Button className="full-width-button" onClick={() => setActivePage("teamwork")}>Teamwork</Button>
      <Button className="full-width-button" onClick={() => setActivePage("trade-school")}>Trade School</Button>
      <Button className="full-width-button" onClick={() => setActivePage("other")}>Other</Button>
    </div>
  );
};

const Recruiting = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2>Recruiting</h2>
      <p className="info-text">High performers want to work with other high performers. Relationships at work drive retention.</p>
      <Button className="full-width-button" onClick={() => setActivePage("referral-bonus")}>Create Referral Bonus</Button>
      <p className="info-text">De-risk hiring by inviting a candidate to “ride along” with a team member. Evaluate their ability to learn and their composure in customer environment.</p>
      <Button className="full-width-button" onClick={() => setActivePage("ride-along-bonus")}>Create Ride Along Bonus</Button>
      <Button className="full-width-button" onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const Teamwork = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2>Teamwork</h2>
      <p className="info-text">Has someone called out or quit? Or do you need someone's special expertise? Cover down with confidence knowing you can pay someone same-day.</p>
      <Button className="full-width-button" onClick={() => setActivePage("coverage-request")}>Create Coverage Request</Button>
      <Button className="full-width-button" onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const CreateReferralBonus = ({ setActivePage }) => {
  const [details, setDetails] = useState({ dateTime: new Date(), payment: 500 });
  const [inviteText, setInviteText] = useState("");

  const handleDateChange = (date) => setDetails({ ...details, dateTime: date });
  const handlePaymentChange = (e) => setDetails({ ...details, payment: Number(e.target.value) });

  const generateInvite = () => {
    const text = `Hey! We're running a referral bonus campaign. We'll pay you 50% on the first day your referral starts, and 50% 30 days later if they're still here! $${details.payment}.\n\nThis campaign runs through ${details.dateTime.toDateString()}. Onboard with us here to accept this challenge [onboarding link]`;
    setInviteText(text);
  };

  return (
    <div className="app-container">
      <Card className="card">
        <Card.Body>
          <h2>Create Referral Bonus</h2>
          <label>Campaign End Date:</label>
          <DatePicker selected={details.dateTime} onChange={handleDateChange} className="full-width-datepicker" />
          <input type="range" min={5} max={1000} step={5} value={details.payment} onChange={handlePaymentChange} className="full-width-slider" />
          <span>Payment: ${details.payment}</span>
          <Button className="full-width-button" onClick={generateInvite}>Generate Invite</Button>
          {inviteText && <div className="invite-text">{inviteText}</div>}
          <Button className="full-width-button" onClick={() => setActivePage("home")}>Home</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const CreateRideAlongBonus = ({ setActivePage }) => {
  const [details, setDetails] = useState({ dateTime: new Date(), payment: 500 });
  const [inviteText, setInviteText] = useState("");

  const handleDateChange = (date) => setDetails({ ...details, dateTime: date });
  const handlePaymentChange = (e) => setDetails({ ...details, payment: Number(e.target.value) });

  const generateInvite = () => {
    const text = `Hello! You've been invited for a ride along to learn about the day in the life of a service tech. Shadow our crew, have some fun, and get paid $${details.payment} at the end of the day, guaranteed.\n\nJoin us before ${details.dateTime.toDateString()} by signing up here [onboarding link] to claim your ride along spot!`;
    setInviteText(text);
  };

  return (
    <div className="app-container">
      <Card className="card">
        <Card.Body>
          <h2>Create Ride Along Bonus</h2>
          <label>Campaign End Date:</label>
          <DatePicker selected={details.dateTime} onChange={handleDateChange} className="full-width-datepicker" />
          <input type="range" min={5} max={1000} step={5} value={details.payment} onChange={handlePaymentChange} className="full-width-slider" />
          <span>Payment: ${details.payment}</span>
          <Button className="full-width-button" onClick={generateInvite}>Generate Invite</Button>
          {inviteText && <div className="invite-text">{inviteText}</div>}
          <Button className="full-width-button" onClick={() => setActivePage("home")}>Home</Button>
        </Card.Body>
      </Card>
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
    </div>
  );
};

export default App;

