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
      <Button onClick={() => setActivePage("referral-bonus")}>Create Referral Bonus</Button>
      <Button onClick={() => setActivePage("ride-along-bonus")}>Create Ride Along Bonus</Button>
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const Teamwork = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Teamwork</h2>
      <Button onClick={() => setActivePage("coverage-request")}>Create Coverage Request</Button>
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const CreateReferralBonus = ({ setActivePage }) => {
  const [details, setDetails] = useState({ dateTime: new Date(), payment: 500 });
  const [inviteText, setInviteText] = useState("");

  const handleDateChange = (date) => setDetails({ ...details, dateTime: date });
  const handlePaymentChange = (e) => setDetails({ ...details, payment: Number(e.target.value) });

  const generateInvite = () => {
    const text = `Hey! We're running a referral bonus campaign. We'll pay you 50% on the first day your referral starts, and 50% 30 days later if they're still here! $${details.payment}.

This campaign runs through ${details.dateTime.toDateString()}. Onboard with us here to accept this challenge [onboarding link]`;
    setInviteText(text);
  };

  return (
    <div className="app-container">
      <h2 className="top-third">Create Referral Bonus</h2>
      <label>Campaign End Date:</label>
      <DatePicker selected={details.dateTime} onChange={handleDateChange} />
      <input type="range" min={5} max={1000} step={5} value={details.payment} onChange={handlePaymentChange} />
      <span>Payment: ${details.payment}</span>
      <Button onClick={generateInvite}>Generate Invite</Button>
      {inviteText && <div>{inviteText}</div>}
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const CreateRideAlongBonus = ({ setActivePage }) => {
  const [details, setDetails] = useState({ dateTime: new Date(), payment: 500 });
  const [inviteText, setInviteText] = useState("");

  const handleDateChange = (date) => setDetails({ ...details, dateTime: date });
  const handlePaymentChange = (e) => setDetails({ ...details, payment: Number(e.target.value) });

  const generateInvite = () => {
    const text = `Hello! You've been invited for a ride along to learn about the day in the life of a service tech. Shadow our crew, have some fun, and get paid $${details.payment} at the end of the day, guaranteed.

Join us before ${details.dateTime.toDateString()} by signing up here [onboarding link] to claim your ride along spot!`;
    setInviteText(text);
  };

  return (
    <div className="app-container">
      <h2 className="top-third">Create Ride Along Bonus</h2>
      <label>Campaign End Date:</label>
      <DatePicker selected={details.dateTime} onChange={handleDateChange} />
      <input type="range" min={5} max={1000} step={5} value={details.payment} onChange={handlePaymentChange} />
      <span>Payment: ${details.payment}</span>
      <Button onClick={generateInvite}>Generate Invite</Button>
      {inviteText && <div>{inviteText}</div>}
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
    </div>
  );
};

export default App;

