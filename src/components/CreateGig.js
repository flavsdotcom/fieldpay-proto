import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CreateGig = ({ setActivePage }) => {
  const [gigDetails, setGigDetails] = useState({
    description: "",
    rate: "",
    date: "",
  });

  const handleChange = (e) => {
    setGigDetails({ ...gigDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`Gig request sent: ${gigDetails.description} for ${gigDetails.rate} on ${gigDetails.date}`);
  };

  return (
    <div className="app-container">
      <h2 className="top-third">Request a Gig</h2>
      <label>Description:</label>
      <input type="text" name="description" value={gigDetails.description} onChange={handleChange} className="full-width-input" />
      <label>Rate:</label>
      <input type="text" name="rate" value={gigDetails.rate} onChange={handleChange} className="full-width-input" />
      <label>Date:</label>
      <input type="date" name="date" value={gigDetails.date} onChange={handleChange} className="full-width-input" />
      <Button className="custom-button" onClick={handleSubmit}>Send Request</Button>
      <Button className="custom-button" onClick={() => setActivePage("talent-dashboard")}>Back</Button>
      <footer className="footer">Fieldpay</footer>
    </div>
  );
};

export default CreateGig;

