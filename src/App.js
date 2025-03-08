import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  const [userRole, setUserRole] = useState("admin");

  const toggleRole = () => {
    setUserRole(userRole === "admin" ? "talent" : "admin");
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
          {activePage === "coverage-request" && <CreateCoverageRequest setActivePage={setActivePage} />}
          {activePage === "active-requests" && <ActiveRequests setActivePage={setActivePage} />}
          {activePage === "ride-along-bonus" && <CreateRideAlongBonus setActivePage={setActivePage} />}
          {activePage === "referral-bonus" && <CreateReferralBonus setActivePage={setActivePage} />}
        </>
      ) : (
        <>
          {/* Talent Mode */}
{userRole === "talent" && (
<>
          {activePage === "talent-dashboard" && <TalentDashboard setActivePage={setActivePage} />}
          {activePage === "available-opportunities" && <AvailableOpportunities setActivePage={setActivePage} />}
          {activePage === "create-gig" && <CreateGig setActivePage={setActivePage} />}
        </>
      )}

      {/* Footer */}
      <footer className="footer">Fieldpay</footer>
    </div>
  );
};

export default App;

