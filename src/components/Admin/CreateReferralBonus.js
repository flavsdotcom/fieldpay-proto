import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateReferralBonus = ({ setActivePage }) => {
  const [details, setDetails] = useState({ dateTime: new Date(), payment: 500 });
  const [inviteText, setInviteText] = useState("");

  const handleDateChange = (date) => setDetails({ ...details, dateTime: date });
  const handlePaymentChange = (e) => setDetails({ ...details, payment: Number(e.target.value) });

  const generateInvite = () => {
    const text = `Hey! We're running a referral bonus campaign. We'll pay you 50% on the first day your referral starts, and 50% 30 days later if they're still here! $${details.payment}.
    \nThis campaign runs through ${details.dateTime.toDateString()}. Onboard with us here to accept this challenge [onboarding link]`;
    setInviteText(text);
  };

  return (
    <div className="app-container">
      <h2 className="top-third">Create Referral Bonus</h2>
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

export default CreateReferralBonus;

