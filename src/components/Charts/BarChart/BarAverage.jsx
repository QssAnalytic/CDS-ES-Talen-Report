import React from "react";

const BarAverage = ({ score }) => {
  return (
    <div className="w-64 h-2">
      <div
        className="relative h-full overflow-hidden"
        style={{ width: `${Math.floor(score / 10) * 10 * 0.97}%` }}
      >
        <div className="flex items-center gap-[1px] absolute">
          {Array(10)
            .fill(10)
            .map((item, id) => (
              <div
                key={id}
                className="w-6 h-2 odd:bg-secondary even:bg-alternative"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BarAverage;
