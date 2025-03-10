import React from "react";
import { Button } from "react-bootstrap";
import "./Wallet.css"; // Ensure styles are properly linked

const Wallet = ({ setActivePage, balance = 0.00, pendingPayouts = 0.00, availableEarnings = 0.00 }) => {
  return (
    <div className="wallet-container">
      <h2 className="wallet-title">Wallet</h2>
      
      <div className="wallet-card">
        <h3>Balance</h3>
        <p className="balance-amount" style={{ color: "gray" }}>${balance.toFixed(2)}</p>
      </div>
      
      <div className="wallet-card pending-payouts">
        <h3>Pending Payouts</h3>
        <p style={{ color: "gray" }}>${pendingPayouts.toFixed(2)}</p>
      </div>
      
      <div className="wallet-card available-earnings">
        <h3>Potential Earnings</h3>
        <p style={{ color: "gray" }}>${availableEarnings.toFixed(2)}</p>
      </div>
      
      <Button className="wallet-button" onClick={() => setActivePage("request-same-day-pay")}>Request Same Day Pay</Button>
      <Button className="wallet-button" onClick={() => setActivePage("talent-dashboard")}>Back</Button>
    </div>
  );
};

export default Wallet;

