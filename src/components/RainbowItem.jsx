import React from "react";
import RainbowChart from "./Charts/RainbowChart";
const RainbowItem = ({ score, softSkill = false }) => {
  const levels = [
    { name: "Expert", secondName: "Leader", color: "bg-secondary" },
    { name: "Advanced", secondName: "Senior", color: "bg-alternative" },
    {
      name: "Intermediate",
      secondName: "Intermediate",
      color: "bg-intermediate",
    },
    { name: "Novice", secondName: "Junior", color: "bg-novice" },
    {
      name: "Fundamental Awareness",
      secondName: "Unsatisfactory",
      color: "bg-fundamentalAwarenes",
    },
  ];
  return (
    <div className="flex items-end justify-between max-w-[456px] ml-auto">
      <div className="flex flex-col max-w-full justify-between h-[155px]">
        {levels.map(({ name, secondName, color }) => (
          <div key={name} className="flex gap-[9.5px] items-start">
            <span className={`circle ${color} w-3.5 h-3.5`}></span>
            <span className="w-32">{softSkill ? secondName : name}</span>
          </div>
        ))}
      </div>
      <RainbowChart score={score} />
    </div>
  );
};

export default RainbowItem;
