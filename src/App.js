import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import AdminHome from "./AdminHome";
import Recruiting from "./Recruiting";
import Teamwork from "./Teamwork";
import CreateCoverageRequest from "./CreateCoverageRequest";
import CreateRideAlongBonus from "./CreateRideAlongBonus";
import CreateReferralBonus from "./CreateReferralBonus";
import ActiveRequests from "./ActiveRequests";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app-container">
      {/* Admin Portal */}
      {activePage === "home" && <AdminHome setActivePage={setActivePage} />}
      {activePage === "recruiting" && <Recruiting setActivePage={setActivePage} />}
      {activePage === "teamwork" && <Teamwork setActivePage={setActivePage} />}
      {activePage === "coverage-request" && (
        <CreateCoverageRequest setActivePage={setActivePage} />
      )}
      {activePage === "active-requests" && <ActiveRequests setActivePage={setActivePage} />}
      {activePage === "ride-along-bonus" && <CreateRideAlongBonus setActivePage={setActivePage} />}
      {activePage === "referral-bonus" && <CreateReferralBonus setActivePage={setActivePage} />}

      {/* Footer */}
      <footer className="footer">Fieldpay</footer>
    </div>
  );
};

export default App;

