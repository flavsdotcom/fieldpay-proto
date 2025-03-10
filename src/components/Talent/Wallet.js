import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Wallet.css"; // Ensure styles are properly linked

const Wallet = ({ setActivePage, balance = 0.0, pendingPayouts = 0.0, availableEarnings = 0.0 }) => {
  const [earnings, setEarnings] = useState([
    { id: 1, description: "Referral Bonus", amount: 100 },
    { id: 2, description: "Filter Clean Job", amount: 300 }
  ]);

  const claimEarnings = (id) => {
    setEarnings(earnings.filter(earning => earning.id !== id));
    alert("Your payout request has been submitted! Admin approval required.");
  };

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
      
      <h3 className="earnings-title">Available to Claim</h3>
      {earnings.length > 0 ? (
        earnings.map((earning) => (
          <div key={earning.id} className="wallet-card earnings-item">
            <p><strong>{earning.description}</strong>: ${earning.amount}</p>
            <Button className="wallet-button" onClick={() => claimEarnings(earning.id)}>Claim Your Earnings</Button>
          </div>
        ))
      ) : (
        <p className="no-earnings">No earnings available to claim.</p>
      )}
      
      <Button className="wallet-button" onClick={() => setActivePage("talent-dashboard")}>🏠 Home</Button>
    </div>
  );
};

export default Wallet;

