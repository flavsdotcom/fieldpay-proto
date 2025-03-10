import React from "react";

const AvailableOpportunities = ({ setActivePage }) => {
  const sampleJobs = [
    { id: 1, title: "New Air Filtration System Installation", company: "ABC Company", rate: "$25/hr" },
    { id: 2, title: "Residential AC Tune-Up", company: "XYZ Cooling", rate: "$30/hr" }
  ];

  return (
    <div className="app-container">
      <h2>Available Opportunities</h2>
      {sampleJobs.map((job) => (
        <div key={job.id} className="opportunity-card">
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Hourly Rate:</strong> {job.rate}</p>
        </div>
      ))}
      <button className="custom-button" onClick={() => setActivePage("home")}>Back</button>
    </div>
  );
};

export default AvailableOpportunities;

