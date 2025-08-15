import React from "react";
import PageFooter from "../PageFooter";
import signature from "../../../assets/4x/signatureSecond@4x.png";
import signatureNew from "../../../assets/4x/signatureSecond-new@4x.png";
import BarChart from "../../Charts/BarChart/BarChart";
import { getSoftSkillStatus } from "../../../utils/levelDesign";
import { useOption, useSoftSkills } from "../../../state/store";
import {
  getCriticalThinkingText,
  getLeadershipText,
} from "../../../utils/getText";
const index = ({ page }) => {
  const { isNewSignature } = useOption();
  const { criticalThinking, leadership } = useSoftSkills();
  const softSkills = [
    {
      name: "Critical thinking",
      status: getSoftSkillStatus(criticalThinking),
      value: criticalThinking,
      context: getCriticalThinkingText(criticalThinking),
    },
    {
      name: "Leadership",
      status: getSoftSkillStatus(leadership),
      value: leadership,
      context: getLeadershipText(leadership),
    },
  ];
  return (
    <div className="page-right bg-white">
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

            <div className="paragraph">
              {context.split(";")?.map((p, id) => (
                <p key={id}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {isNewSignature ? (
        <img
          src={signature}
          className="w-[276px] absolute bottom-[100px]"
          alt="signatureNew"
        />
      ) : (
        <img
          src={signatureNew}
          className="w-[276px] absolute bottom-20"
          alt="signature"
        />
      )}

      <PageFooter page={page} isSoftSkillsPage isRightPage />
    </div>
  );
};

export default index;
