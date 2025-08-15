import React from "react";
import PageFooter from "../PageFooter";
import RainbowItem from "../../RainbowItem";
import BarChart from "../../Charts/BarChart/BarChart";
import { getSoftSkillStatus } from "../../../utils/levelDesign";
import { useSoftSkills } from "../../../state/store";
import {
  getCommunicationText,
  getProblemSolvingText,
} from "../../../utils/getText";
const index = ({ page }) => {
  const { softAverage, communication, problemSolving } = useSoftSkills();
  const softSkills = [
    {
      name: "Communication",
      status: getSoftSkillStatus(communication),
      value: communication,
      context: getCommunicationText(communication),
    },
    {
      name: "Problem solving",
      status: getSoftSkillStatus(problemSolving),
      value: problemSolving,
      context: getProblemSolvingText(problemSolving),
    },
  ];
  return (
    <div className="page-left bg-white">
      <div className="paragraph">
        <p>
          Aware of need to collaborate with team and represent users/customer
          needs. May have some external contact with customers, suppliers and
          partners.
        </p>
      </div>

      <div className="mt-8 mb-[72px]">
        <RainbowItem softSkill score={softAverage} />
      </div>

      <div className="space-y-12">
        {softSkills.map(({ name, value, status, context }) => (
          <div key={name} className="paragraph">
            <div className="mb-1 flex justify-between pr-1">
              <div>
                <h3>
                  {name} • {value.toFixed(2)}
                </h3>
                <h5>{status}</h5>
              </div>

              <BarChart variant={4} colored={true} score={value} />
            </div>

            <div className="paragraph">{context}</div>
          </div>
        ))}
      </div>

      <PageFooter page={page} isSoftSkillsPage />
    </div>
  );
};

export default index;
