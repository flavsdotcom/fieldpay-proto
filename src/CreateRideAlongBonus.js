import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateRideAlongBonus = ({ setActivePage }) => {
  const [details, setDetails] = useState({ dateTime: new Date(), payment: 500 });
  const [inviteText, setInviteText] = useState("");

  const handleDateChange = (date) => setDetails({ ...details, dateTime: date });
  const handlePaymentChange = (e) => setDetails({ ...details, payment: Number(e.target.value) });

  const generateInvite = () => {
    const text = `Hello! You've been invited for a ride along to learn about the day in the life of a service tech. Shadow our crew, have some fun, and get paid $${details.payment} at the end of the day, guaranteed.
    \nJoin us before ${details.dateTime.toDateString()} by signing up here [onboarding link] to claim your ride along spot!`;
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
      {inviteText && <div><div>{inviteText}</div><Button className="custom-button" onClick={() => navigator.clipboard.writeText(inviteText)}>Copy Invite</Button></div>}
      <Button className="custom-button" onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

export default CreateRideAlongBonus;

