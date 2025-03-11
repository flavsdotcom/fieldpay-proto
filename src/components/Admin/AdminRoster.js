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
              {user.name} ({user.type})
            </label>
          </li>
        ))}
      </ul>

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
};

export default AdminRoster;

