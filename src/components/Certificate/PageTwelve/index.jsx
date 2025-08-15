import React from "react";
import PageFooter from "../PageFooter";
import RainbowItem from "../../RainbowItem";
import { useExperience } from "../../../state/store";
import { getDataProgramming } from "../../../utils/getText";
const index = ({ page }) => {
  const { programming, modelling } = useExperience();
  const getNewDataProgramming = () => {
    if (modelling > 50 && modelling <= 60) {
      return getDataProgramming({ score: programming })
        .partTwo()
        ?.split(";")
        .slice(3)
        .map((p, id) => <p key={id}>{p}</p>);
    }

    if (programming <= 50) {
      return;
    } else if (programming <= 60) {
      return;
    } else if (programming <= 80) {
      return getDataProgramming({ score: programming })
        .partTwo()
        ?.split(";")
        ?.slice(3)
        .map((p, id) => <p key={id}>{p}</p>);
    } else if (programming <= 90) {
      return;
    } else if (programming <= 100) {
      return getDataProgramming({ score: programming })
        .partTwo()
        ?.split(";")
        ?.slice(-1)
        .map((p, id) => <p key={id}>{p}</p>);
    }
  };
  return (
    <div className="page-right bg-white">
      <div className="paragraph">{getNewDataProgramming()}</div>

      <div className="mt-10">
        <RainbowItem score={programming} />
      </div>

      <PageFooter page={page} isRightPage />
    </div>
  );
};

export default index;
