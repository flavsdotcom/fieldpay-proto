import React from "react";
import { Button } from "react-bootstrap";

const Recruiting = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Recruiting</h2>
      <p className="info-text">
        High performers want to work with other high performers. Relationships at work drive retention.
      </p>
      <Button className="custom-button" onClick={() => setActivePage("referral-bonus")}>
        Create Referral Bonus
      </Button>
      <p className="info-text">
        De-risk hiring by inviting a candidate to “ride along” with a team member. Evaluate their ability to learn and their composure in a customer environment.
      </p>
      <Button className="custom-button" onClick={() => setActivePage("ride-along-bonus")}>
        Create Ride Along Bonus
      </Button>
    </div>
  );
};

export default Recruiting;

