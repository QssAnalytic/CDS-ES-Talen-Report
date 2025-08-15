import React from "react";

const BarSkill = ({ score, color }) => {
  return (
    <div className="w-64 h-2">
      <div
        className={`h-full ${color}`}
        style={{ width: `${score * 0.97}%` }}
      ></div>
    </div>
  );
};

export default BarSkill;
