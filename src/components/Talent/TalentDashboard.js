import React from "react";
import TalentNavbar from "./TalentNavbar";

const TalentDashboard = ({ setActivePage }) => {
  return (
    <div className="talent-dashboard">
      <h2>Talent Dashboard</h2>
      <p>Welcome! Explore available gigs and track your work.</p>
      
      {/* ✅ Ensure setActivePage is passed down */}
      <TalentNavbar setActivePage={setActivePage} />
    </div>
  );
};

export default TalentDashboard;

