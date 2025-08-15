import React from "react";
import PageFooter from "../PageFooter";
import RainbowItem from "../../RainbowItem";
import DonutChart from "../../Charts/DonutChart";
import { useExperience } from "../../../state/store";
import { getDataCleaning, getDataVisualization } from "../../../utils/getText";
import { overall } from "../../../utils/data";

const index = () => {
  const { dataCleaning, dataVisualization } = useExperience();

  return (
    <div className="page-right bg-white">
      <div className="paragraph">
        {getDataCleaning({ score: dataCleaning })
          .partTwo()
          .split(";")
          .map((p, id) => (
            <p key={id}>{p}</p>
          ))}{" "}
      </div>

      <div className="mt-16">
        <RainbowItem score={dataCleaning} />
      </div>

      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h2>Data Visualization</h2>
          {/* Dynamic Overall */}
          <DonutChart score={dataVisualization} />
        </div>

        <div className="paragraph mt-7">
          {getDataVisualization({ score: dataVisualization })
            .split(";")
            .map((p, id) => (
              <p key={id}>{p}</p>
            ))}
        </div>
      </div>
      <PageFooter page={7} isRightPage />
    </div>
  );
};

export default index;
