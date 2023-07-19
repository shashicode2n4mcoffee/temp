import React from "react";

const TooltipContent = ({ value, label }) => {
  return (
    <div style={{ backgroundColor: "white", color: "black", padding: "10px" }}>
      <p>Value: {value}</p>
      <p>Label: {label}</p>
    </div>
  );
};

export default TooltipContent;
