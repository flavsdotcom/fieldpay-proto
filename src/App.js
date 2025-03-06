import React, { useState } from "react";
import { Card, CardContent } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl as Input } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      <p>High performers want to work with other high performers. Relationships at work drive retention.</p>
      <Button onClick={() => setActivePage("referral-bonus")}>Create Referral Bonus</Button>
      <p>De-risk hiring by inviting a candidate to “ride along” with a team member. Evaluate their ability to learn and their composure in customer environment.</p>
      <Button onClick={() => setActivePage("ride-along-bonus")}>Create Ride Along Bonus</Button>
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const Teamwork = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2>Teamwork</h2>
      <p>Has someone called out or quit? Or do you need someone's special expertise? Cover down with confidence knowing you can pay someone same-day.</p>
      <Button onClick={() => setActivePage("coverage-request")}>Create Coverage Request</Button>
      <Button onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

const CreateCoverageRequest = ({ setActivePage }) => {
  const [details, setDetails] = useState({
    workDescription: "",
    dateTime: new Date(),
    payment: 500,
  });
  const [inviteText, setInviteText] = useState("");

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setDetails({ ...details, dateTime: date });
  };

  const handlePaymentChange = (e) => {
    setDetails({ ...details, payment: Number(e.target.value) });
  };

  const generateInvite = () => {
    const text = `Hey! Are you available for ${details.workDescription}? I need help on ${details.dateTime.toDateString()} and I can pay $${details.payment}.
\nSame Day Payout available if you onboard here with Fieldpay: [onboarding link]`;
    setInviteText(text);
  };

  return (
    <div className="app-container">
      <Card className="card">
        <Card.Body>
          <h2>Create Coverage Request</h2>
          <Input
            name="workDescription"
            placeholder="Describe the work"
            value={details.workDescription}
            onChange={handleChange}
          />
          <DatePicker selected={details.dateTime} onChange={handleDateChange} />
          <input
            type="range"
            min={5}
            max={1000}
            step={5}
            value={details.payment}
            onChange={handlePaymentChange}
          />
          <span>Payment: ${details.payment}</span>
          <Button onClick={generateInvite}>Generate Invite</Button>
          {inviteText && <div className="invite-text">{inviteText}</div>}
          <Button onClick={() => setActivePage("home")}>Home</Button>
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
      {activePage === "coverage-request" && <CreateCoverageRequest setActivePage={setActivePage} />}
    </div>
  );
};

export default App;

