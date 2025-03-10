import React from "react";
import { Button } from "react-bootstrap";
import "./Wallet.css"; 

const Wallet = ({ setActivePage, balance = 0.0, pendingPayouts = 0.0, availableEarnings = 0.0 }) => {
  return (
    <div className="wallet-container">
      <h2 className="wallet-title">Wallet</h2>

      <div className="wallet-balance-container">
        <div className="wallet-card">
          <h3>Balance</h3>
          <p className="balance-amount" style={{ color: "gray" }}>${balance.toFixed(2)}</p>
        </div>
        <div className="wallet-card pending-payouts">
          <h3>Pending Payouts</h3>
          <p style={{ color: "gray" }}>${pendingPayouts.toFixed(2)}</p>
        </div>
      </div>

      <div className="wallet-card available-earnings">
        <h3>Potential Earnings</h3>
        <p style={{ color: "gray" }}>${availableEarnings.toFixed(2)}</p>
      </div>

      <Button className="wallet-button" onClick={() => setActivePage("home")}>🏠 Home</Button>
    </div>
  );
};

export default Wallet;

