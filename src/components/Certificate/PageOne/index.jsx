import React from "react";
import logo from "../../../assets/4x/logo@4x.png";
import title from "../../../assets/4x/title@4x.png";
import frame from "../../../assets/4x/first-page-frame@4x.png";
import companies from "../../../assets/4x/companies@4x.png";
import { userData } from "../../../state/store";

const index = () => {
  const { fullName } = userData();
  return (
    <div className="bg-white">
      <div className="bg-primary absolute top-0 w-full h-[475px]"></div>
      <div className="page-left !pl-[57px] relative !pt-[57px]">
        <div>
          <img className="w-[275px] h-[42px]" src={logo} alt="logo" />
          <div className="mt-6 ml-[68px] space-y-2">
            <img className="w-[421px] h-[20px]" src={title} alt="title" />
            {/* Dynamic FullName */}
            <h1 className="uppercase font-Gotham-Bold text-[11px] text-white tracking-[5px]">
              {fullName}
            </h1>
          </div>
          <div className="flex justify-center">
            <img
              src={frame}
              className="w-[476px] h-[475px] mt-[86px]"
              alt="frame"
            />
          </div>
          <img
            src={companies}
            alt="companies"
            className="w-[482px] h-[36px] mt-16 ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
