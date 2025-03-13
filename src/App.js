import React, { useState } from "react";
import "./App.css";

// Admin Components
import AdminHome from "./components/Admin/AdminHome";
import Recruiting from "./components/Admin/Recruiting";
import CreateReferralBonus from "./components/Admin/CreateReferralBonus";
import CreateRideAlongBonus from "./components/Admin/CreateRideAlongBonus";
import Teamwork from "./components/Admin/Teamwork";
import CreateCoverageRequest from "./components/Admin/CreateCoverageRequest";
import AdminOther from "./components/Admin/AdminOther";
import OneTimeLoan from "./components/Admin/OneTimeLoan";
import EnableEWA from "./components/Admin/EnableEWA";
import AdminRoster from "./components/Admin/AdminRoster";
import AssignIncentive from "./components/Admin/AssignIncentive";
import FinancialControl from "./components/Admin/FinancialControl";
import AdminNavbar from "./components/Admin/AdminNavbar";
import TradeSchool from "./components/Admin/TradeSchool";

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

const availableJobs = [
  { id: 1, title: "New Air Filtration System Installation", rate: 250 }
];

const [selectedUsers, setSelectedUsers] = useState([]);

const onSelectUsers = (users) => {
  console.log("Users selected for incentive:", users);
  setSelectedUsers(users);
  setActivePage("assign-incentive");
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
    {activePage === "home" && <AdminRoster setActivePage={setActivePage} />} {/* Roster is the landing pane */}
    {activePage === "roster" && <AdminRoster setActivePage={setActivePage} />}
    {activePage === "recruiting" && <Recruiting setActivePage={setActivePage} />}
    {activePage === "teamwork" && <Teamwork setActivePage={setActivePage} />}
    {activePage === "referral-bonus" && <CreateReferralBonus setActivePage={setActivePage} />}
    {activePage === "ride-along-bonus" && <CreateRideAlongBonus setActivePage={setActivePage} />}
    {activePage === "coverage-request" && <CreateCoverageRequest setActivePage={setActivePage} />}
    {activePage === "other-benefits" && <AdminOther setActivePage={setActivePage} />}
    {activePage === "trade-school" && <TradeSchool setActivePage={setActivePage} />}
    {activePage === "financial-control" && <FinancialControl setActivePage={setActivePage} />}
    {/* Persistent Admin Navigation */}
    <AdminNavbar setActivePage={setActivePage} />
  </>
) : (
  <>
    {/* Talent Mode */}
    {activePage === "home" && <TalentDashboard setActivePage={setActivePage} />}
    {activePage === "wallet" && <Wallet setActivePage={setActivePage} />}
    {activePage === "available-opportunities" && <AvailableOpportunities setActivePage={setActivePage} />}
    <TalentNavbar setActivePage={setActivePage} />
  </>
)}

    </div>
  );
};

// ✅ Ensure `export default App;` is at the bottom and outside JSX
export default App;
