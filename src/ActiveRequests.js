import React from "react";

const ActiveRequests = ({ setActivePage, requests }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Active Requests</h2>
      <ul>
        {requests.length > 0 ? (
          requests.map((request, index) => (
            <li key={index}>{request}</li>
          ))
        ) : (
          <p>No active requests at the moment.</p>
        )}
      </ul>
      <button className="custom-button" onClick={() => setActivePage("home")}>Home</button>
    </div>
  );
};

export default ActiveRequests;

