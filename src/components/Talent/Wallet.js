import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon
import "./Wallet.css";

const Wallet = ({ setActivePage, balance = 0.0, pendingPayouts = 0.0, availableOpportunities = [] }) => {
  // Calculate total potential earnings from available jobs
  const totalPotentialEarnings = availableOpportunities.reduce((sum, job) => sum + job.rate, 0);

  return (
    <div className="wallet-container">
      <h2 className="wallet-title">Wallet</h2>

      {/* Balance & Pending Payouts Side by Side */}
      <div className="wallet-row">
        <div className="wallet-card">
          <h3>Balance</h3>
          <p className="balance-amount" style={{ color: "gray" }}>${balance.toFixed(2)}</p>
        </div>
        <div className="wallet-card pending-payouts">
          <h3>Pending Payouts</h3>
          <p style={{ color: "gray" }}>${pendingPayouts.toFixed(2)}</p>
        </div>
      </div>

      {/* Potential Earnings Section */}
      <div className="wallet-card available-earnings" onClick={() => setActivePage("available-opportunities")} style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3>Potential Earnings</h3>
          <p>${totalPotentialEarnings.toFixed(2)}</p>
        </div>
        <FaArrowRight size={20} color="#000" /> {/* Arrow Icon to Indicate Navigation */}
      </div>

    </div>
  );
};

export default Wallet;

