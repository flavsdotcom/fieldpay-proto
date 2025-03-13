import React from "react";

const TradeSchool = ({ setActivePage }) => {
  return (
    <div>
      <h2>Trade School</h2>
      <p>Placeholder content for Trade School</p>
      <button onClick={() => setActivePage("home")}>Back to Admin</button>
    </div>
  );
};

export default TradeSchool;

