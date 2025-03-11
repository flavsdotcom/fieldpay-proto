import React, { useState } from "react";
import "./AdminRoster.css";

const AdminRoster = ({ setActivePage, assignAction }) => {
  // Sample roster data
  const [roster, setRoster] = useState([
    { id: 1, firstName: "John", lastName: "Doe", jobType: "W2" },
    { id: 2, firstName: "Jane", lastName: "Smith", jobType: "1099" }
  ]);

  const [selectedWorkers, setSelectedWorkers] = useState([]);

  // Toggle selection of a worker
  const toggleSelection = (id) => {
    setSelectedWorkers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((workerId) => workerId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle assignment
  const handleAssign = () => {
    if (assignAction) {
      assignAction(selectedWorkers);
    }
  };

  return (
    <div className="admin-roster-container">
      <h2>Team Roster</h2>
      <table className="roster-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Type</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((person) => (
            <tr key={person.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedWorkers.includes(person.id)}
                  onChange={() => toggleSelection(person.id)}
                />
              </td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.jobType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="assign-button" onClick={handleAssign}>Assign Selected</button>
      <button className="roster-button" onClick={() => setActivePage("home")}>🏠 Back to Admin</button>
    </div>
  );
};

export default AdminRoster;

