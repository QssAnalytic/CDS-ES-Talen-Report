import React from "react";
import { getStatus } from "../../../utils/levelDesign";

const BarTitle = ({ title, score, color }) => {
  return (
    <div className="flex gap-2.5 text-text text-[15px]">
      {/* text-alternative text-novice text-secondary text-fundamentalAwarenes  */}
      <span className="w-[156px] text-end font-Gotham-Medium">{title}</span>
      <div className="w-40 h-[17px] flex relative">
        <div
          className={`${color} h-full relative `}
          style={{ width: `${score}%` }}
        >
          <span
            className={`text-white text-[10px] pb-0.5 font-Gotham-Light h-full w-40 flex items-center justify-center`}
          >
            {getStatus(score).name}
          </span>
        </div>
        <div
          className="h-full overflow-hidden"
          style={{ width: `${100 - score}%` }}
        >
          <span
            className={`text-${color.slice(
              3
            )} text-[10px] font-Gotham-Light pb-0.5 h-full text-center w-40 flex items-center justify-center relative`}
            style={{
              transform: `translateX(-${score}%)`,
            }}
          >
            {getStatus(score).name}
          </span>
        </div>
      </div>
      <span className="font-Gotham-Light">{score.toFixed(2)}</span>
    </div>
  );
};

export default BarTitle;
