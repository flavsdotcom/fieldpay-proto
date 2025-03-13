import React from "react";
import { Button } from "react-bootstrap";

const Teamwork = ({ setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="top-third">Teamwork</h2>
{/* Job/Route Coverage */}
<Button className="styled-button" onClick={() => setActivePage("coverage-request")}>
  <div className="button-content">
    <p className="button-description">Has someone called out or quit? Or do you need someone's special expertise? Cover down with confidence knowing you can pay someone same-day.</p>
    <strong className="button-action">Create Job/Route Coverage</strong>
  </div>
</Button>
    </div>
  );
};

export default Teamwork;

