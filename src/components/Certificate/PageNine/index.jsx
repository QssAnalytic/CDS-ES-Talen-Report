import React from "react";
import PageFooter from "../PageFooter";
import RainbowItem from "../../RainbowItem";
import DonutChart from "../../Charts/DonutChart";
import { useExperience } from "../../../state/store";
import { getDataModelling } from "../../../utils/getText";
const index = () => {
  const { dataVisualization, modelling } = useExperience();

  return (
    <div className="page-left bg-white">
      <div>
        <RainbowItem score={dataVisualization} />
      </div>

      <div className="mt-20">
        <div className="flex items-center justify-between">
          <h2>Modelling (Predictive Analytics)</h2>
          {/* Dynamic Overall */}
          <DonutChart score={modelling} />
        </div>

        <div className="paragraph mt-8">
          {getDataModelling({ score: modelling })
            .partOne()
            .split(";")
            .map((p, id) => (
              <p key={id}>{p}</p>
            ))}
        </div>
      </div>
      <PageFooter page={8} />
    </div>
  );
};

export default index;
