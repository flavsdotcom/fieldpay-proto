import React, { useState } from "react";
import "./App.css";
import AdminHome from "./components/AdminHome";
import TalentDashboard from "./components/TalentDashboard";  
import AvailableOpportunities from "./components/AvailableOpportunities";
import ActiveJobs from "./components/ActiveJobs";
import Recruiting from "./components/Recruiting";
import Teamwork from "./components/Teamwork";
import Wallet from "./components/Wallet";


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
        {activePage === "home" && <AdminHome setActivePage={setActivePage} />}
        {activePage === "recruiting" && <Recruiting setActivePage={setActivePage} />}
        {activePage === "teamwork" && <Teamwork setActivePage={setActivePage} />}
      </>
    ) : (
      <>
        {/* Talent Mode */}
        {activePage === "home" && <TalentDashboard setActivePage={setActivePage} />}
        {activePage === "available-opportunities" && <AvailableOpportunities setActivePage={setActivePage} />}
        {activePage === "active-jobs" && <ActiveJobs setActivePage={setActivePage} />}
        {activePage === "wallet" && <Wallet setActivePage={setActivePage} />}
      </>
    )}

    {/* Footer */}
    <footer className="footer">Fieldpay</footer>
  </div>
);
};

export default App;

