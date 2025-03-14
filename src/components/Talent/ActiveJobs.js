import React from "react";
import { Button } from "react-bootstrap";

const ActiveJobs = ({ activeJobs, setActivePage }) => {
  return (
    <div className="app-container">
      <h2 className="page-title">[Active Jobs]</h2>
      {activeJobs.length > 0 ? (
        activeJobs.map((job, index) => (
          <div key={index} className="opportunity-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Date:</strong> {job.date}</p>
            <p><strong>Hourly Rate:</strong> {job.rate}</p>
          </div>
        ))
      ) : (
        <p>No active jobs yet. Claim one from Available Opportunities.</p>
      )}
      <Button className="custom-button" onClick={() => setActivePage("talent-dashboard")}>
        Back
      </Button>
    </div>
  );
};

export default ActiveJobs;

