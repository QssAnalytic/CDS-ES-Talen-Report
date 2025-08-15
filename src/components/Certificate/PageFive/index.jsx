import React from "react";
import RainbowItem from "../../RainbowItem";
import PageFooter from "../PageFooter";
import { overall } from "../../../utils/data";
import {
  getOverallProgrammingText,
  getOverallVisualizationText,
} from "../../../utils/getText";
const index = () => {
  return (
    <div className="page-left bg-white">
      <div className="paragraph">
        <p>{getOverallVisualizationText({ score: overall() })}</p>
        <p>{getOverallProgrammingText({ score: overall() })}</p>
      </div>

      <div className="mt-20">
        <RainbowItem score={overall()} />
      </div>

      <div className="mt-20">
        <h1 className="title">Experience Report</h1>
        <h3 className="mt-7">Description of Projects</h3>
        <div className="flex gap-7 items-center mt-14">
          <div className="border-l-[3px] h-14 border-footer"></div>
          <p>
            Bootcamp’s culminating Capstone Projects are real-world projects
            requiring all skills from the entire data science pipeline:
            preparing, organizing, and transforming data, constructing a model,
            and evaluating results. Each Capstone project is associated with
            essential Data Scientist’s tools such as R, Python, Tableau, and
            SPSS.
          </p>
        </div>
      </div>

      <PageFooter page={4} />
    </div>
  );
};

export default index;
