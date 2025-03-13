import React from "react";
import { Button } from "react-bootstrap";
import "./AdminButtons.css"; // Ensure this contains the new styles

const Recruiting = ({ setActivePage }) => {
  return (
    <div className="admin-section">
      <h2 className="section-title">Recruiting Incentives</h2>

      {/* Referral Bonus */}
      <Button className="styled-button" onClick={() => setActivePage("referral-bonus")}>
        <div className="button-content">
          <p className="button-description">Encourage referrals and reward employees for bringing in great new hires.</p>
          <strong className="button-action">Create Referral Bonus →</strong>
        </div>
      </Button>

      {/* Ride-Along Bonus */}
      <Button className="styled-button" onClick={() => setActivePage("ride-along-bonus")}>
        <div className="button-content">
          <p className="button-description">Offer a paid ride-along to evaluate potential hires before full employment.</p>
          <strong className="button-action">Create Ride-Along Bonus →</strong>
        </div>
      </Button>

    </div>
  );
};

export default Recruiting;

