import React from "react";
import arrow from "../../../assets/4x/redArrow@4x.png";
const BarArrow = ({ score, colored = false }) => {
  const grades = colored
    ? [
        { value: 100, color: "bg-secondary" },
        { value: 90, color: "bg-alternative" },
        { value: 80, color: "bg-intermediate" },
        { value: 60, color: "bg-novice" },
        { value: 50, color: "bg-fundamentalAwarenes" },
      ]
    : [
        { value: 100 },
        { value: 90 },
        { value: 80 },
        { value: 70 },
        { value: 60 },
        { value: 50 },
      ];

  return (
    <div className="relative w-[174px]">
      <div
        className="flex justify-end translate-x-[2.5px] mb-0.5"
        style={{ width: `${score}%` }}
      >
        <img src={arrow} className="w-[5px] h-1" alt="" />
      </div>
      <div className="w-full relative flex overflow-hidden items-center h-2 rounded-full bg-[#DCE9E4]">
        {colored ? (
          <>
            {grades.map(({ value, color }, id) => (
              <div
                key={id}
                className={`${color} absolute h-full`}
                style={{ width: `${value}%` }}
              ></div>
            ))}
          </>
        ) : (
          <div
            className="bg-alternative rounded-l-full h-full"
            style={{ width: `${score}%` }}
          ></div>
        )}
      </div>

      {grades.map(({ value }, id) => (
        <div
          key={id}
          className={`absolute w-full top-2`}
          style={{ width: `${value}%` }}
        >
          <div className="flex justify-end">
            <div className="flex flex-col items-center justify-center translate-x-[3.6px]">
              <span
                className={`h-1 w-[1px] scale-x-[0.25] rounded-full bg-text ${
                  value === 100 && "invisible"
                } ${value === 60 && "-translate-x-[1px]"} `}
              ></span>
              <span className="font-Helvetica-Light text-[6px] -tracking-[0.06px] text-text">
                {value}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarArrow;
