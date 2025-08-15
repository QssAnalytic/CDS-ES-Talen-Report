import React from "react";
import PageFooter from "../PageFooter";
import BarChart from "../../Charts/BarChart/BarChart";
import DonutChart from "../../Charts/DonutChart";
import { useExperience } from "../../../state/store";
import { experienceData, overall } from "../../../utils/data";
import { getDataCleaning } from "../../../utils/getText";
const index = () => {
  const { dataCleaning } = useExperience();
  return (
    <div className="page-left bg-white">
      <h1 className="title mb-8">Grades of Experience Skills</h1>
      <p>
        The graph below depicts grades of Data Cleaning, Visualization,
        Predictive Analytics and Programming skills estimated during Bootcamp
        and evaluated by qualified Data Scientists based on completed projects.
      </p>
      <div className="mt-14 space-y-3">
        {experienceData().map(({ name, color, value }) => (
          <BarChart
            key={name}
            variant={3}
            title={name}
            color={color}
            score={value}
          />
        ))}
      </div>

      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h2>Data Cleaning</h2>
          {/* Dynamic Overall */}
          <DonutChart score={dataCleaning} />
        </div>

        {/* Dynamic Texts */}
        <div className="mt-12 paragraph">
          {getDataCleaning({ score: dataCleaning })
            .partOne()
            .split(";")
            .map((p, id) => (
              <p key={id}>{p}</p>
            ))}
        </div>
      </div>

      <PageFooter page={6} />
    </div>
  );
};

export default index;
