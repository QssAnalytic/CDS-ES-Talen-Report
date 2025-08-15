import React from "react";

const DonutChart = ({ score = 0 }) => {
  return (
    <div className="relative w-[105px] h-[105px]">
      <div className="absolute flex items-center justify-center w-full h-full">
        <span className="text-2xl font-Gotham-Bold">{score.toFixed(2)}</span>
      </div>
      <svg className="w-[105px] h-[105px] -rotate-90">
        <linearGradient id="gradient" x1="0%" y1="0%" x2={0} y2={`${score}%`}>
          <stop offset="0%" stopColor="rgba(0, 213, 255, 1)" />
          <stop offset={`${score + 100}%`} stopColor="rgba(0, 85, 255, 1)" />
        </linearGradient>
        <circle className="svg-indicator-track" />
        <circle
          width="10px"
          stroke="url(#gradient)"
          className="svg-indicator-indication"
          style={{ strokeDashoffset: 300 - score * 3 }}
        />
      </svg>
    </div>
  );
};

export default DonutChart;
