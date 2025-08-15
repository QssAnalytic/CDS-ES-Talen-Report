import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageTree from "./PageTree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";
import PageNine from "./PageNine";
import PageTen from "./PageTen";
import PageEleven from "./PageEleven";
import PageTwelve from "./PageTwelve";
import PageThirteen from "./PageThirteen";
import PageFourteen from "./PageFourteen";
import PageFifteen from "./PageFifteen";
import PageSixteen from "./PageSixteen";
import PageLast from "./PageLast";
import { forwardRef } from "react";
import Blank from "./Blank";
import { useExperience, useOption } from "../../state/store";
const Certifcate = forwardRef((props, ref) => {
  const { isExtension } = useOption();
  const { programming } = useExperience();
  return (
    <div
      id="A4"
      ref={ref}
      className="relative flex flex-col items-center mx-auto text-xs text-justify text-text font-Helvetica-Light">
      <PageOne />
      <PageTwo />
      <PageTree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
      <PageEight />
      <PageNine />
      <PageTen />

      {programming > 60 ? (
        <>
          <PageEleven />
          <PageTwelve page={11} />
          <PageThirteen page={12} />
          {isExtension && (
            <>
              {/* Solf Skills */}
              <PageFourteen page={13} />
              <PageFifteen page={14} />
              <PageSixteen page={15} />
              <Blank />
              {/*  */}
            </>
          )}
        </>
      ) : (
        <>
          <PageTwelve page={10} />
          <PageThirteen page={11} />
          {isExtension && (
            <>
              {/* Solf Skills */}
              <PageFourteen page={12} />
              <PageFifteen page={13} />
              <PageSixteen page={14} />
              <Blank />
              {/*  */}
            </>
          )}
        </>
      )}

      {programming < 60 && <Blank />}
      <Blank />
      <PageTwo />
      <PageLast />
    </div>
  );
});

export default Certifcate;
