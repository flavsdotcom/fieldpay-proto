import React from "react";
import { Button } from "react-bootstrap";

const AdminHome = ({ activePage, setActivePage }) => {
console.log("Rendering 'Other' section in AdminHome - activePage:", activePage);

  return (
    <div className="app-container">
      <h2 className="top-third">Admin Dashboard</h2>

      {/* Main Category Buttons */}
      <Button className="custom-button" onClick={() => setActivePage("recruiting")}>
        Recruiting
      </Button>
      <Button className="custom-button" onClick={() => setActivePage("teamwork")}>
        Teamwork
      </Button>
      <Button className="custom-button" onClick={() => setActivePage("trade-school")}>
        Trade School
      </Button>
<Button className="custom-button" onClick={() => setActivePage("roster")}>
  Roster
</Button>

<Button
  className="custom-button"
  onClick={() => {
    console.log("Navigating to 'Other'");
    setActivePage("other");
  }}
>
  Other
</Button>

<Button className="custom-button" onClick={() => setActivePage("financial-control")}>
  Financial Control Center
</Button>


      {/* Submenus based on activePage */}
      {activePage === "recruiting" && (
        <>
          <h3>Recruiting</h3>
          <Button className="custom-button" onClick={() => setActivePage("referral-bonus")}>
            Create Referral Bonus
          </Button>
          <Button className="custom-button" onClick={() => setActivePage("ride-along-bonus")}>
            Create Ride Along Bonus
          </Button>
        </>
      )}

      {activePage === "teamwork" && (
        <>
          <h3>Teamwork</h3>
          <Button className="custom-button" onClick={() => setActivePage("coverage-request")}>
            Create Job/Route Coverage
          </Button>
        </>
      )}
{activePage === "other" && (
  <>
    <h3>Other</h3>
    <Button
      className="custom-button"
      onClick={() => setActivePage("one-time-loan")}
    >
      One-Time Employee Loan
    </Button>
    <Button
      className="custom-button"
      onClick={() => setActivePage("enable-ewa")}
    >
      Enable Earned Wage Access
    </Button>
  </>
)}





    </div>
  );
};

export default AdminHome;

