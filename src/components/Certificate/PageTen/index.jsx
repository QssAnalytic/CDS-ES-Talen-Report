import React from "react";
import PageFooter from "../PageFooter";
import RainbowItem from "../../RainbowItem";
import DonutChart from "../../Charts/DonutChart";
import { useExperience } from "../../../state/store";
import { getDataModelling, getDataProgramming } from "../../../utils/getText";
import { useEffect } from "react";
const index = () => {
  const { modelling, programming } = useExperience();

  const getMarginTop = () => {
    if (modelling > 50 && modelling <= 60) {
      if (programming <= 50) {
        return "40px";
      } else if (programming <= 60) {
        return "40px";
      } else if (programming <= 80) {
        return "40px";
      } else if (programming <= 90) {
        return "40px";
      } else if (programming <= 100) {
        return "40px";
      }
    }
    return "46px";
  };

  const getNewDataProgramming = () => {
    if (modelling > 50 && modelling <= 60) {
      if (programming <= 50) {
        return getDataProgramming({ score: programming })
          .partOne()
          ?.split(";")
          .map((p, id) => <p key={id}>{p}</p>);
      } else if (programming <= 60) {
        return getDataProgramming({ score: programming })
          .partOne()
          ?.split(";")
          .map((p, id) => <p key={id}>{p}</p>);
      } else if (programming <= 80) {
        return getDataProgramming({ score: programming })
          .partOne()
          ?.split(";")
          .map((p, id) => <p key={id}>{p}</p>);
      } else if (programming <= 90) {
        return getDataProgramming({ score: programming })
          .partOne()
          ?.split(";")
          .slice(0, 4)
          .map((p, id) => <p key={id}>{p}</p>);
      } else if (programming <= 100) {
        return getDataProgramming({ score: programming })
          .partOne()
          ?.split(";")
          .map((p, id) => <p key={id}>{p}</p>);
      }
    }
    return getDataProgramming({ score: programming })
      .partOne()
      .split(";")
      .map((p, id) => <p key={id}>{p}</p>);
  };

  return (
    <div className="page-right bg-white">
      <div className="paragraph">
        {getDataModelling({ score: modelling })
          .partTwo()
          ?.split(";")
          .map((p, id) => (
            <p key={id}>{p}</p>
          ))}
      </div>

      <div className="mt-16">
        <RainbowItem score={modelling} />
      </div>

      <div style={{ marginTop: getMarginTop() }}>
        <div className="flex items-center justify-between">
          <h2>Programming</h2>
          {/* Dynamic Overall */}
          <DonutChart score={programming} />
        </div>

        <div className="paragraph mt-6">{getNewDataProgramming()}</div>
      </div>

      <PageFooter page={9} isRightPage />
    </div>
  );
};

export default index;
