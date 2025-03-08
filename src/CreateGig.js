import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl as Input } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateGig = ({ setActivePage }) => {
  const [gigDetails, setGigDetails] = useState({
    description: "",
    date: new Date(),
    payment: 0,
  });

  const handleInputChange = (e) => {
    setGigDetails({ ...gigDetails, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setGigDetails({ ...gigDetails, date });
  };

  const submitGig = () => {
    alert("Your gig request has been created!");
    setActivePage("talent-dashboard");
  };

  return (
    <div className="app-container">
      <h2 className="top-third">Create a Gig</h2>
      <Card className="gig-card">
        <Card.Body>
          <label>Job Description:</label>
          <Input
            type="text"
            name="description"
            value={gigDetails.description}
            onChange={handleInputChange}
            placeholder="Describe the job"
          />
          <label>Date:</label>
          <DatePicker selected={gigDetails.date} onChange={handleDateChange} />
          <label>Payment:</label>
          <Input
            type="number"
            name="payment"
            value={gigDetails.payment}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
          <Button className="custom-button" onClick={submitGig}>
            Submit Gig
          </Button>
        </Card.Body>
      </Card>
      <Button className="custom-button" onClick={() => setActivePage("talent-dashboard")}>
        Back
      </Button>
    </div>
  );
};

export default CreateGig;

