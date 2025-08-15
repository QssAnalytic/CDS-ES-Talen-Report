import React from "react";
import { getUserData, softSkillsData } from "../../../utils/data";
import BarChart from "../../Charts/BarChart/BarChart";
import PageFooter from "../PageFooter";
import DonutChart from "../../Charts/DonutChart";
import { useSoftSkills } from "../../../state/store";
import {
  getCognitiveCapabilityText,
  getCognitiveText,
  getIntropersonalText,
  getOverallCommunicationText,
  getOverallLeadershipText,
} from "../../../utils/getText";
const index = ({ page }) => {
  const {
    softAverage,
    communication,
    problemSolving,
    criticalThinking,
    leadership,
  } = useSoftSkills();
  return (
    <div className="page-right bg-white">
      <h1 className="title">Soft Skills Report</h1>

      <div className="my-[52px]">
        {softSkillsData()
          .slice(0, -1)
          .map(({ name, value }, id) => (
            <div
              key={name}
              className="flex text-chart items-center text-[15px]"
            >
              <p className="font-Gotham w-[138px] text-end mr-[17px]">{name}</p>
              <BarChart
                color={id % 2 === 0 ? "bg-secondary" : "bg-alternative"}
                variant={1}
                score={value}
              />
              <p className="font-Gotham-Light ml-2">{value.toFixed(2)}</p>
            </div>
          ))}

        <div className="flex text-chart mt-4 items-center font-Gotham-Bold text-base leading-[21.67px]">
          <span className="w-[138px] mr-[17px] text-end">AVERAGE</span>
          <BarChart variant={2} score={softAverage.toFixed(2)} />
          {/* Dynamic Overall  */}
          {/* {value.toFixed(2)} */}
          <span className="ml-2">{softAverage.toFixed(2)}</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="">Overall summary of interpersonal capabilities</h2>
          {/* Dynamic Overall */}
          <DonutChart score={softAverage} />
        </div>

        {/* Dynamic Texts */}
        <div className="mt-8 paragraph">
          <p>
            {getCognitiveCapabilityText({
              problemSolving,
              criticalThinking,
              name: getUserData().name,
            })}{" "}
            {getIntropersonalText({
              communication,
              leadership,
              pronoun: getUserData().pronoun,
            })}
          </p>

          <p>
            {getCognitiveText({
              problemSolving,
              criticalThinking,
              pronoun: getUserData().pronoun,
            })}{" "}
            {getOverallCommunicationText({ score: communication })}
          </p>

          {getOverallLeadershipText({ score: leadership })
            ?.split(";")
            .map((p, id) => (
              <p key={id}>{p}</p>
            ))}
        </div>
      </div>

      <PageFooter page={page} isSoftSkillsPage isRightPage />
    </div>
  );
};

export default index;
