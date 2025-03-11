import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AssignIncentive.css";

const AssignIncentive = ({ selectedUsers, setActivePage }) => {
  const [selectedIncentive, setSelectedIncentive] = useState("");

  const incentiveOptions = [
    { id: "referral-bonus", label: "Referral Bonus" },
    { id: "ride-along-bonus", label: "Ride Along Bonus" },
    { id: "coverage-request", label: "Job/Route Coverage" },
    { id: "one-time-loan", label: "One-Time Employee Loan" },
    { id: "enable-ewa", label: "Earned Wage Access" }
  ];

  const handleAssign = () => {
    if (!selectedIncentive) {
      alert("Please select an incentive type.");
      return;
    }
    console.log("Assigning", selectedIncentive, "to users:", selectedUsers);
    // Here, we will later integrate actual assignment logic
    alert(`Incentive assigned: ${selectedIncentive} to selected users.`);
    setActivePage("home"); // Return to home after assignment
  };

  return (
    <div className="assign-incentive-container">
      <h2>Assign Incentive</h2>
      <p>Select an incentive to assign to selected users.</p>
      
      <select 
        className="incentive-dropdown"
        value={selectedIncentive} 
        onChange={(e) => setSelectedIncentive(e.target.value)}
      >
        <option value="">Select Incentive</option>
        {incentiveOptions.map((incentive) => (
          <option key={incentive.id} value={incentive.id}>
            {incentive.label}
          </option>
        ))}
      </select>

      <div className="assign-buttons">
        <Button className="custom-button assign-btn" onClick={handleAssign}>
          Confirm Assignment
        </Button>
        <Button className="custom-button back-btn" onClick={() => setActivePage("roster")}>
          Back to Roster
        </Button>
      </div>
    </div>
  );
};

export default AssignIncentive;

