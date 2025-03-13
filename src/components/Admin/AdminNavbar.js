import React from "react";
import { FaFootballBall, FaSeedling, FaUsers, FaHandHoldingUsd, FaTools, FaMoneyBillWave } from "react-icons/fa";
import "./AdminNavbar.css";

const AdminNavbar = ({ setActivePage }) => {
  return (
    <div className="admin-navbar">
      <button className="nav-button" onClick={() => setActivePage("roster")}>
        <FaFootballBall size={24} />
        <span>Roster</span>
      </button>
      <button className="nav-button" onClick={() => setActivePage("recruiting")}>
        <FaSeedling size={24} />
        <span>Recruiting</span>
      </button>
      <button className="nav-button" onClick={() => setActivePage("teamwork")}>
        <FaUsers size={24} />
        <span>Teamwork</span>
      </button>
      <button className="nav-button" onClick={() => setActivePage("other-benefits")}>
        <FaHandHoldingUsd size={24} />
        <span>Other</span>
      </button>
      <button className="nav-button" onClick={() => setActivePage("trade-school")}>
        <FaTools size={24} />
        <span>Trade</span>
      </button>
      <button className="nav-button" onClick={() => setActivePage("financial-control")}>
        <FaMoneyBillWave size={24} />
        <span>Finance</span>
      </button>
    </div>
  );
};

export default AdminNavbar;

