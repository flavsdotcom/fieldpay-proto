import React from "react";
import { Button } from "react-bootstrap";

const Teamwork = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Teamwork</h2>
      <p className="info-text">Has someone called out or quit? Or do you need someone's special expertise? Cover down with confidence knowing you can pay someone same-day.</p>
      <Button className="custom-button" onClick={() => setActivePage("coverage-request")}>Create Coverage Request</Button>
      <Button className="custom-button" onClick={() => setActivePage("active-requests")}>View Active Requests</Button>
      <Button className="custom-button" onClick={() => setActivePage("home")}>Home</Button>
    </div>
  );
};

export default Teamwork;

