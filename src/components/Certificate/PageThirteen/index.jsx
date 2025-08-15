import React from "react";
import Table from "../../Table";
import PageFooter from "../PageFooter";
import signature from "../../../assets/4x/signaturenew.png";
// import signatureNew from "../../../assets/4x/signature-new@4x.png";
import { transcriptData } from "../../../utils/data";
import { useOption } from "../../../state/store";
const index = ({ page }) => {
  const { isNewSignature } = useOption();

  return (
    <div className="page-left bg-white">
      <h1 className="title">Transcript</h1>
      <div className="paragraph mt-8">
        <p>
          Transcript of records depicts the overall performance of participant
          for each specified subject and calculated based on scores gained
          throughout the entire Bootcamp. It includes overall grades of each
          subject based on results of 40 homeworks, 30 case studies, a Midterm
          exam after the sixth week of Bootcamp, and a conclusive Final exam.
        </p>
        <p>
          The table below contains the subject's name, grade, and visual
          representation.
        </p>
      </div>

      <div className="mt-14">
        <Table data={transcriptData()} />
      </div>

      {isNewSignature ? (
        <img
          src={signature}
          className="w-[425px] bg-cover mt-10 ml-1"
          alt="signatureNew"
        />
      ) : (
        <img
          src={signature}
          className="w-[425px] bg-cover mt-10 ml-1"
          alt="signature"
        />
      )}

      <PageFooter page={page} />
    </div>
  );
};

export default index;
