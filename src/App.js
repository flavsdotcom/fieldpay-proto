import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import AdminHome from "./AdminHome";
import Recruiting from "./Recruiting";
import Teamwork from "./Teamwork";
import CreateCoverageRequest from "./CreateCoverageRequest";
import CreateRideAlongBonus from "./CreateRideAlongBonus";
import CreateReferralBonus from "./CreateReferralBonus";
import TalentDashboard from "./TalentDashboard";
import AvailableOpportunities from "./AvailableOpportunities";
import CreateGig from "./CreateGig";
import ActiveRequests from "./ActiveRequests";

const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [userRole, setUserRole] = useState("admin"); // Default to Admin

const toggleRole = () => {
  setUserRole((prevRole) => {
    const newRole = prevRole === "admin" ? "talent" : "admin";
    console.log("Switched Role to:", newRole);

    // 🛠️ FIX: Automatically set the correct activePage when switching roles
    setActivePage(newRole === "admin" ? "home" : "talent-dashboard");

    return newRole;
  });
};

console.log("Rendering App with userRole:", userRole, "and activePage:", activePage);

return (
  <div className="app-container">
    {/* Role Toggle Button (Top-Right Corner) */}
    <button className="toggle-button" onClick={toggleRole}>
      {userRole === "admin" ? "👤 Talent" : "🏢 Admin"}
    </button>

    {/* 🚀 Admin Mode 🚀 */}
    {userRole === "admin" && (
      <>
        <AdminHome setActivePage={setActivePage} />
        {activePage === "recruiting" && <Recruiting setActivePage={setActivePage} />}
        {activePage === "teamwork" && <Teamwork setActivePage={setActivePage} />}
        {activePage === "coverage-request" && (
          <CreateCoverageRequest setActivePage={setActivePage} />
        )}
        {activePage === "active-requests" && <ActiveRequests setActivePage={setActivePage} />}
        {activePage === "ride-along-bonus" && <CreateRideAlongBonus setActivePage={setActivePage} />}
        {activePage === "referral-bonus" && <CreateReferralBonus setActivePage={setActivePage} />}
      </>
    )}

    {/* 🚀 Talent Mode 🚀 */}
{userRole === "talent" && (
  <>
    {activePage === "talent-dashboard" && ( <TalentDashboard setActivePage={setActivePage} />)}
    {activePage === "available-opportunities" && ( <AvailableOpportunities setActivePage={setActivePage} />)}
  </>
)}

    {/* Footer */}
    <footer className="footer">Fieldpay</footer>
  </div>
);
};

export default App;

