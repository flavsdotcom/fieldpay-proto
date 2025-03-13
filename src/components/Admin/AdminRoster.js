import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AdminRoster.css";

const AdminRoster = ({ setActivePage, onSelectUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const sampleUsers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" }
  ];

  const handleUserSelection = (id) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((userId) => userId !== id)
        : [...prevSelected, id]
    );
  };

  const proceedToAssignment = () => {
    console.log("Selected Users:", selectedUsers);
    onSelectUsers(selectedUsers);
    setActivePage("assign-incentive");
  };

  return (
    <div className="admin-roster-container">
      <h2 className="roster-title">Team Roster</h2>
      <p className="roster-description">Select team members to assign an incentive or opportunity.</p>

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
              <span className="user-name">{user.name}</span>
              <span className="user-type">{user.type}</span>
            </label>
          </li>
        ))}
      </ul>

      {/* Assign Button */}
      <div className="roster-buttons">
        <Button
          className="custom-button confirm-btn"
          onClick={proceedToAssignment}
          disabled={selectedUsers.length === 0}
        >
          Assign
        </Button>
      </div>
    </div>
  );
}; // ✅ Properly closed the function block

export default AdminRoster; // ✅ Correct export

