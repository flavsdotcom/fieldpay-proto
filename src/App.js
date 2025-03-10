import React, { useState } from "react";
import "./App.css";

// Admin Components
import AdminHome from "./components/Admin/AdminHome";
import Recruiting from "./components/Admin/Recruiting";
import CreateReferralBonus from "./components/Admin/CreateReferralBonus";
import CreateRideAlongBonus from "./components/Admin/CreateRideAlongBonus";
import Teamwork from "./components/Admin/Teamwork";
import CreateCoverageRequest from "./components/Admin/CreateCoverageRequest";

// Talent Components
import TalentDashboard from "./components/Talent/TalentDashboard";
import AvailableOpportunities from "./components/Talent/AvailableOpportunities";
import Wallet from "./components/Talent/Wallet";
import TalentNavbar from "./components/Talent/TalentNavbar"; // Ensure navbar is imported

const App = () => {
  const [userRole, setUserRole] = useState("admin"); // Tracks user role
  const [activePage, setActivePage] = useState("home"); // Tracks active page

  const toggleRole = () => {
    setUserRole((prevRole) => (prevRole === "admin" ? "talent" : "admin"));
    setActivePage("home"); // Reset to dashboard when switching roles
  };

  return (
    <div className="app-container">
      {/* Toggle Button */}
      <button className="toggle-button" onClick={toggleRole}>
        {userRole === "admin" ? "👤 Talent" : "🏢 Admin"}
      </button>

      {/* Admin Mode */}
      {userRole === "admin" ? (
        <>
          {activePage === "home" && <AdminHome activePage={activePage} setActivePage={setActivePage} />}
          {activePage === "recruiting" && <Recruiting setActivePage={setActivePage} />}
          {activePage === "teamwork" && <Teamwork setActivePage={setActivePage} />}
          {activePage === "referral-bonus" && <CreateReferralBonus setActivePage={setActivePage} />}
          {activePage === "ride-along-bonus" && <CreateRideAlongBonus setActivePage={setActivePage} />}
          {activePage === "coverage-request" && <CreateCoverageRequest setActivePage={setActivePage} />}
        </>
      ) : (
        <>
          {/* Talent Mode */}
          {activePage === "home" && <TalentDashboard setActivePage={setActivePage} />}
          {activePage === "wallet" && <Wallet setActivePage={setActivePage} />}
          {activePage === "available-opportunities" && <AvailableOpportunities setActivePage={setActivePage} />}

          {/* Persistent Talent Navigation */}
          <TalentNavbar setActivePage={setActivePage} />
        </>
      )}

    </div>
  );
};

// ✅ Ensure `export default App;` is at the bottom and outside JSX
export default App;
