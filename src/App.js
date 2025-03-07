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

const Teamwork = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Teamwork</h2>
      <Button className="custom-button" onClick={() => setActivePage("coverage-request")}>Create Coverage Request</Button>
      <Button className="custom-button" onClick={() => setActivePage("active-requests")}>Active Requests</Button>
      <Button className="custom-button" onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const CreateRideAlongBonus = ({ setActivePage }) => {
  const [details, setDetails] = useState({ dateTime: new Date(), payment: 500 });
  const [inviteText, setInviteText] = useState("");

  const handleDateChange = (date) => setDetails({ ...details, dateTime: date });
  const handlePaymentChange = (e) => setDetails({ ...details, payment: Number(e.target.value) });
  const copyToClipboard = () => navigator.clipboard.writeText(inviteText);

  const generateInvite = () => {
    const text = `Hello! You've been invited for a ride along to learn about the day in the life of a service tech. Shadow our crew, have some fun, and get paid $${details.payment} at the end of the day, guaranteed.\n\nJoin us before ${details.dateTime.toDateString()} by signing up here [onboarding link] to claim your ride along spot!`;
    setInviteText(text);
  };

  return (
    <div className="app-container">
      <h2 className="top-third">Create Ride Along Bonus</h2>
      <label>Campaign End Date:</label>
      <DatePicker selected={details.dateTime} onChange={handleDateChange} />
      <label>Payment:</label>
      <input type="range" min={5} max={1000} step={5} value={details.payment} onChange={handlePaymentChange} />
      <span>Payment: ${details.payment}</span>
      <Button className="custom-button" onClick={generateInvite}>Generate Invite</Button>
      {inviteText && (
        <div>
          <div>{inviteText}</div>
          <Button className="custom-button" onClick={copyToClipboard}>Copy Invite</Button>
        </div>
      )}
      <Button className="custom-button" onClick={() => setActivePage("home")}>Home</Button>
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
      {activePage === "coverage-request" && <CreateCoverageRequest setActivePage={setActivePage} requests={requests} setRequests={setRequests} />}
      {activePage === "active-requests" && <ActiveRequests setActivePage={setActivePage} requests={requests} />}
      {activePage === "ride-along-bonus" && <CreateRideAlongBonus setActivePage={setActivePage} />}
    </div>
  );
};

export default App;

