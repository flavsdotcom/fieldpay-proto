import React, { useState } from "react";
import { Card, Button, FormControl as Input } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateCoverageRequest = ({ setActivePage, requests, setRequests }) => {
  const [details, setDetails] = useState({
    workDescription: "",
    dateTime: new Date(),
    payment: 500,
  });
  const [inviteText, setInviteText] = useState("");

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => setDetails({ ...details, dateTime: date });
  const handlePaymentChange = (e) => setDetails({ ...details, payment: Number(e.target.value) });

  const generateInvite = () => {
    const text = `Hey! Are you available for ${details.workDescription}? 
    I need help on ${details.dateTime.toDateString()} and I can pay $${details.payment}.
    \n\nSign up here: [onboarding link]`;
    setInviteText(text);
  };

  return (
    <div className="app-container">
      <h2 className="top-third">Create Coverage Request</h2>
      <label>Description of Work:</label>
      <Input name="workDescription" placeholder="Describe the work" value={details.workDescription} onChange={handleChange} />
      <label>Date & Time:</label>
      <DatePicker selected={details.dateTime} onChange={handleDateChange} />
      <label>Payment:</label>
      <input type="range" min={5} max={1000} step={5} value={details.payment} onChange={handlePaymentChange} />
      <span>Payment: ${details.payment}</span>
      <Button className="custom-button" onClick={generateInvite}>Generate Invite</Button>
      {inviteText && <div><div>{inviteText}</div><Button className="custom-button" onClick={() => navigator.clipboard.writeText(inviteText)}>Copy Invite</Button></div>}
      <Button className="custom-button" onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

export default CreateCoverageRequest;

