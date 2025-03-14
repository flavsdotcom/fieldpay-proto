import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AvailableOpportunities.css"; 

const AvailableOpportunities = ({ setActivePage }) => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "New Air Filtration System Installation", company: "HVAC Pro Services", rate: "$250", status: "available", claimedBy: null },
    { id: 2, title: "Pool Maintenance Service", company: "Blue Water Pools", rate: "$180", status: "claimed", claimedBy: "User" },
    { id: 3, title: "Electrical Wiring Check", company: "Bright Sparks Electrical", rate: "$200", status: "completed", claimedBy: "Someone Else" },
    { id: 4, title: "Roof Inspection", company: "Safe Roof Solutions", rate: "$150", status: "paid", claimedBy: "User" }
  ]);

  const claimJob = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: "claimed", claimedBy: "User" } : job));
  };

  const completeJob = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: "completed" } : job));
  };

  const requestPayout = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: "paid" } : job));
    alert("Payout requested! Waiting for admin approval.");
  };

  return (
    <div className="opportunities-container">
      <h2 classname="page-title">Opportunities</h2>

      {jobs.map((job) => (
        <div key={job.id} className="opportunity-card">
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Rate:</strong> {job.rate}</p>

          {job.status === "available" && (
            <Button className="opportunity-button" onClick={() => claimJob(job.id)}>Claim Job</Button>
          )}
          {job.status === "claimed" && job.claimedBy === "User" && (
            <Button className="opportunity-button" onClick={() => completeJob(job.id)}>Mark as Completed</Button>
          )}
          {job.status === "completed" && job.claimedBy === "User" && (
            <Button className="opportunity-button" onClick={() => requestPayout(job.id)}>Request Payout</Button>
          )}

          <p className={`job-status ${job.status}`}>
            Status: {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
            {job.claimedBy && ` - Claimed by ${job.claimedBy}`}
          </p>
        </div>
      ))}

    </div>
  );
};

export default AvailableOpportunities;

