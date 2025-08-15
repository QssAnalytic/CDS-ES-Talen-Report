import React from "react";
import PageFooter from "../PageFooter";
import DonutChart from "../../Charts/DonutChart";
import BarChart from "../../Charts/BarChart/BarChart";
import {
  experienceData,
  getUserData,
  overall,
  transcriptData,
} from "../../../utils/data";
import BarAverage from "../../Charts/BarChart/BarAverage";
import {
  getOverallDataCleaningText,
  getOverallGeneralText,
} from "../../../utils/getText";
import { useTechnicalOverallText } from "../../../state/store";
import { useEffect } from "react";
const index = () => {
  const { generalText, setGeneralText } = useTechnicalOverallText();
  const { name, pronoun } = getUserData();
  const score = overall();
  useEffect(() => {
    setGeneralText(
      getOverallGeneralText({
        score,
        name,
        pronoun,
      })
    );
  }, [score, name, pronoun]);

  return (
    <div className="bg-white page-right">
      <div>
        <h1 className="title">Technical report</h1>
        <div className="relative mt-3">
          <span className="text-center w-full flex pl-[154px] text-secondary font-Helvetica-Light text-sm leading-[35px] tracking-[2.8px]">
            TRANSCRIPT
          </span>
          {transcriptData().map(({ name, value }) => (
            <div
              key={name}
              className="flex text-chart items-center gap-[17px] text-[15px]"
            >
              <p className="font-Gotham w-[138px] text-end">{name}</p>
              <BarChart color="bg-secondary" variant={1} score={value} />
              <p className="font-Gotham-Light">{value.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-3">
          <span className="text-center w-full flex pl-[154px] text-alternative font-Helvetica-Light text-sm leading-[35px] tracking-[2.8px]">
            EXPERIENCE SKILLS
          </span>
          {experienceData().map(({ name, value }) => (
            <div
              key={name}
              className="flex text-chart items-center gap-[17px] text-[15px]"
            >
              <p className="font-Gotham w-[138px] text-end">{name}</p>
              <BarChart color="bg-alternative" variant={1} score={value} />
              <p className="font-Gotham-Light">{value.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="flex text-chart mt-3 items-center gap-[17px] font-Gotham-Bold text-base leading-[21.67px]">
          <span className="w-[138px] text-end">AVERAGE</span>
          <BarAverage score={overall()} />
          {/* Dynamic Overall  */}
          <span>{overall().toFixed(2)}</span>
        </div>

        <p className="mt-3 text-[10px] flex gap-1 leading-[14px] max-w-[340px] ml-16">
          <span className="inline-block font-Helvetica-Bold">Note:</span>
          <span className="inline-block">
            Varying degrees of importance of each grade above is multiplied by a
            predetermined weight to calculate average grade
          </span>
        </p>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h2>Overall summary of technical capabilities</h2>
          {/* Dynamic Overall */}
          <DonutChart score={overall()} />
        </div>

        {/* Dynamic Texts */}
        <div className={`${overall() > 60 ? "mt-8" : "mt-4"} paragraph`}>
          <p>{generalText}</p>
          <p>{getOverallDataCleaningText({ score: overall() })}</p>
        </div>
      </div>

      <PageFooter page={3} isRightPage />
    </div>
  );
};

export default index;
