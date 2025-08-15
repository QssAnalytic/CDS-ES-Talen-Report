import React from "react";
import { overall } from "../../../utils/data";
import { useSoftSkills, userData } from "../../../state/store";

const index = ({ page = 2, isRightPage = false, isSoftSkillsPage = false }) => {
  const { fullName } = userData();
  const { softAverage } = useSoftSkills();

  return (
    <div className="absolute bottom-8 w-[81.5%]">
      <div
        className={`flex ${
          page % 2 !== 0 && "flex-row-reverse"
        } mt-[50px] justify-between border-t-[0.5px] border-footer pt-2 font-Gotham-Light tracking-[1.6px] text-[8px]`}
      >
        <div className="flex gap-1">
          {/* Dynamic Name */}
          <span className="uppercase">{fullName}</span>

          <span>|</span>

          <span className="uppercase">
            {isSoftSkillsPage ? "soft skills" : "technical skills"}
          </span>

          <span>|</span>

          <div className="gap-[2.5px] flex">
            <span className="uppercase">talent score</span>

            <span>•</span>

            {/* Total Score */}
            <span>
              {isSoftSkillsPage ? softAverage.toFixed(2) : overall().toFixed(2)}
            </span>
          </div>
        </div>
        <span className="tracking-[4px]">{page}</span>
      </div>
    </div>
  );
};

export default index;
