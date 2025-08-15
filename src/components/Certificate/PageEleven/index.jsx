import React from "react";
import frame from "../../../assets/4x/programmingFrame@4x.png";
import PageFooter from "../PageFooter";
import { useExperience } from "../../../state/store";
import { getDataProgramming } from "../../../utils/getText";
const index = () => {
  const { programming, modelling } = useExperience();

  const getNewDataProgramming = () => {
    if (modelling > 50 && modelling <= 60) {
      return getDataProgramming({ score: programming })
        .partTwo()
        ?.split(";")
        .slice(0, 3)
        .map((p, id) => <p key={id}>{p}</p>);
    }

    if (programming <= 50) {
      return;
    } else if (programming <= 60) {
      return;
    } else if (programming <= 80) {
      return getDataProgramming({ score: programming })
        .partTwo()
        ?.split(";")
        ?.slice(0, 3)
        .map((p, id) => <p key={id}>{p}</p>);
    } else if (programming <= 90) {
      return getDataProgramming({ score: programming })
        .partTwo()
        ?.split(";")
        .slice(1)
        .map((p, id) => <p key={id}>{p}</p>);
    } else if (programming <= 100) {
      return getDataProgramming({ score: programming })
        .partTwo()
        ?.split(";")
        ?.slice(0, 3)
        .map((p, id) => <p key={id}>{p}</p>);
    }
  };
  return (
    <div className="page-left bg-white">
      <div className="absolute w-full z-10">
        <img
          src={frame}
          className="absolute w-[561px] mix-blend-multiply object-cover h-[259px]"
          alt="programmingFrame"
        />
        <div className="w-[426px] h-[681px] inset-0 bg-projects"></div>
      </div>
      <div className="w-[426px] relative z-20 px-[43px] pt-12">
        <h1 className="font-Montserrat font-bold w-[332px] text-[32px] leading-[34px] text-start text-white">
          Everybody should learn to program a computer, because it teaches how
          <br />
          to think
        </h1>

        <div className="mt-[101px] space-y-5">{getNewDataProgramming()}</div>
      </div>

      <PageFooter page={10} />
    </div>
  );
};

export default index;
