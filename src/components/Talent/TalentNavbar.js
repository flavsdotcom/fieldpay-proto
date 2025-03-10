import React from "react";
import { FaHome, FaWallet, FaBriefcase } from "react-icons/fa"; // ✅ Import icons
import "./TalentNavbar.css"; // ✅ Ensure styles are linked

const TalentNavbar = ({ setActivePage }) => {
  return (
    <div className="talent-navbar">
      <button
        className="nav-button"
        onClick={() => {
          console.log("Navigating to Home");
          setActivePage("home");
        }}
      >
        <FaHome size={24} />
        <span>Home</span>
      </button>

      <button
        className="nav-button"
        onClick={() => {
          console.log("Navigating to Wallet");
          setActivePage("wallet");
        }}
      >
        <FaWallet size={24} />
        <span>Wallet</span>
      </button>

      <button
        className="nav-button"
        onClick={() => {
          console.log("Navigating to Available Opportunities");
          setActivePage("available-opportunities");
        }}
      >
        <FaBriefcase size={24} />
        <span>Opps</span>
      </button>
    </div>
  );
};

export default TalentNavbar;

