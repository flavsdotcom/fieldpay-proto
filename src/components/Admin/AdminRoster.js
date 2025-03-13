import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AdminRoster.css";

const AdminRoster = ({ setActivePage, onSelectUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const sampleUsers = [
    { id: 1, name: "John Doe", type: "W2" },
    { id: 2, name: "Jane Smith", type: "1099" }
  ];

  const handleUserSelection = (id) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((userId) => userId !== id)
        : [...prevSelected, id]
    );
  };

const financialData = {
  escrowBalance: 5000.00,
  pendingPayouts: 1200.00,
  approvedPayouts: 3200.00
};


const proceedToAssignment = () => {
  if (selectedUsers.length === 0) {
    alert("Please select at least one employee.");
    return;
  }
  console.log("Selected Users for Incentive:", selectedUsers);
  onSelectUsers(selectedUsers); // Pass selected users to the next step
  setActivePage("assign-incentive"); // Navigate to Assign Incentive screen
};

return (
  <div className="admin-roster-container">
    <h2 className="roster-title">Employee Roster</h2>
    <p className="roster-description">Select employees to assign an incentive.</p>

    {/* Employee List */}
    <ul className="roster-list">
      {sampleUsers.map((user) => (
        <li key={user.id} className="roster-item">
          <label className="roster-label">
            <input
              type="checkbox"
              className="roster-checkbox"
              checked={selectedUsers.includes(user.id)}
              onChange={() => handleUserSelection(user.id)}
            />
            <span className="roster-name">{user.name}</span>
          </label>
          <span className="roster-type">{user.type}</span>
        </li>
      ))}
    </ul>

    {/* Moved Financial Tiles Below the Roster */}
    <div className="financial-tiles">
      <div className="tile">
        <h3>💰 Escrow Balance</h3>
        <p>$10,000</p>
      </div>
      <div className="tile">
        <h3>⏳ Pending Payouts</h3>
        <p>$1,500</p>
      </div>
      <div className="tile">
        <h3>✅ Approved Payouts</h3>
        <p>$2,000</p>
      </div>
    </div>

    {/* Buttons */}
    <div className="roster-buttons">
      <Button className="custom-button confirm-btn" onClick={proceedToAssignment} disabled={selectedUsers.length === 0}>
        Assign
      </Button>
      <Button className="custom-button back-btn" onClick={() => setActivePage("home")}>
        Back
      </Button>
    </div>
  </div>
);

}; // ✅ CLOSE COMPONENT FUNCTION

export default AdminRoster; // ✅ EXPORT DEFAULT STATEMENT (No Extra Spaces)

