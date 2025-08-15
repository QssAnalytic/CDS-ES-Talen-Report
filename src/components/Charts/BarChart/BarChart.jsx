import React from "react";
import BarSkill from "./BarSkill";
import BarAverage from "./BarAverage";
import BarTitle from "./BarTitle";
import BarArrow from "./BarArrow";

const BarChart = ({ variant, score, color, title, colored }) => {
  if (variant === 1) {
    return <BarSkill color={color} score={score} />;
  } else if (variant === 2) {
    return <BarAverage score={score} />;
  } else if (variant === 3) {
    return <BarTitle score={score} color={color} title={title} />;
  } else if (variant === 4) {
    return <BarArrow score={score} colored={colored} />;
  }
};

export default BarChart;
