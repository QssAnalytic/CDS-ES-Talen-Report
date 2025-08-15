import React from "react";
import rainbow from "../../assets/4x/rainbow@4x.png";
import arrow from "../../assets/4x/arrow.svg";
import { useState } from "react";
import { rainbowLevel } from "../../utils/levelDesign";
import { useEffect } from "react";

const RainbowChart = ({ score = 0 }) => {
  const [level, setLevel] = useState(100);
  const [textClass, setTextClass] = useState("bottom-6 left-5 text-white");

  console.log('redeploy')

  // 18 is rainbow chart one full bar degree
  // and 50 is half full rainbow chart
  useEffect(() => {
    setLevel(rainbowLevel(score));
    if (score <= 50) {
      setTextClass("bottom-[22px] left-5 text-white");
    } else if (score <= 60) {
      setTextClass("top-11 left-[60px] text-rainbowTitle");
    } else if (score <= 80) {
      setTextClass("top-6 left-[124px] text-rainbowTitle");
    } else if (score <= 90) {
      setTextClass("top-11 right-[60px] text-white");
    } else if (score <= 100) {
      setTextClass("bottom-[22px] right-5 text-white");
    }
  }, [score]);

  return (
    <div className="relative h-fit">
      <span
        className={`w-9 text-center font-Gotham-Thin text-sm absolute ${textClass}`}
      >
        {score.toFixed(2)}
      </span>
      <img src={rainbow} className="w-[285px] h-[141px]" alt="rainbow" />
      <div className="flex justify-center items-center">
        <div
          className="absolute flex justify-center bottom-0 h-24 w-0"
          style={{
            transformOrigin: "bottom center",
            rotate: `${level * 1.8 + 270}deg`,
          }}
        >
          <img
            src={arrow}
            className="h-24 aspect-auto absolute mt-3 max-w-none"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default RainbowChart;
