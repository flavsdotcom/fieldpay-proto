import React from "react";

const AdminHome = ({ setActivePage }) => {
  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Dashboard</h2>
      
      <button className="custom-button" onClick={() => setActivePage("recruiting")}>
        Recruiting
      </button>
      <button className="custom-button" onClick={() => setActivePage("teamwork")}>
        Teamwork
      </button>
      <button className="custom-button" onClick={() => setActivePage("trade-school")}>
        Trade School
      </button>
      <button className="custom-button" onClick={() => setActivePage("other")}>
        Other
      </button>
    </div>
  );
};

export default AdminHome;

