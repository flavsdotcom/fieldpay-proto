import React from "react";
import TalentNavbar from "./TalentNavbar";

const TalentDashboard = ({ setActivePage }) => {
  return (
    <div className="talent-dashboard">
      <h2 classname="page-title">Talent Dashboard</h2>
      <p>Welcome! Success is measured by your discipline and inner peace- Mike Ditka </p>
      
      {/* ✅ Ensure setActivePage is passed down */}
      <TalentNavbar setActivePage={setActivePage} />
    </div>
  );
};

export default TalentDashboard;

