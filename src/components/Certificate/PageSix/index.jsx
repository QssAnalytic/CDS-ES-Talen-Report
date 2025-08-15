import React from "react";
import PageFooter from "../PageFooter";
const index = () => {
  const projects = [
    {
      id: 1,
      title: "Performance analyses project for Telecom Company",
      content: `Data analytics professionals receive many ad-hoc requests from marketing and 
  CRM departments about the performance of tariffs for different KPIs and they 
  should create dynamic dashboards using Tableau and other visualization tools 
  conveying all required insights.`,
    },
    {
      id: 2,
      title: "Creating predictive credit risk model for Telecom",
      content: `In this project data scientists are required to determine the clients that have 
      probable payment in 30, 60, 90 days and are intended to create statistical 
      performance models. Data scientist should also evaluate the performance of 
      models and deploy the leader model.`,
    },
    {
      id: 3,
      title: "Electricity contract selection project",
      content: `In this project data scientist should analyze near 400 000 lines of corporation's 
      electricity consumption data and create models optimizing and reducing 
      expenses.`,
    },
    {
      id: 4,
      title: "The McKinsey & Company's project",
      content: `In this project an anonymized dataset provided by one of the most prestigious 
      consulting companies around the world that operate in many countries including 
      Azerbaijan. The participant needs to predict the target value (“y”) given all the 
      other features. At the end of this project, participant will be ready for the first data 
      science job as this project encomposes all of the necessary phases a top-notch 
      data scientist in the finance industry passes through to successfully build an 
      in-house prediction model.`,
    },
  ];
  return (
    <div className="relative bg-white">
      <div className="bg-projects w-full h-[68.5%] bottom-0 absolute"></div>
      <div className="page-right">
        <p className="mb-11">
          Capstone Projects are challenging real Data Science tasks provided by
          various companies and covering different areas of business. All these
          projects require getting through all steps of data science
          methodologies such as business understanding, analytical approach to a
          problem, data preparation and cleaning, visualization, modelling, use
          of machine learning, deep learning and artificial intelligence methods
          in Predictive Analytics, evaluating and optimization. Completing the
          Capstone Projects from scratch shows the ability to make key decisions
          along the way, justifies architectural decisions, proves understanding
          the characteristics of different algorithms, frameworks, and
          technologies and how they impact model performance and
          scalability.Capstone Projects completely demonstrates that a data
          scientist has what it takes to lead a complex analysis project from
          start to finish. Details about each Capstone Project are given below:
        </p>
        <div className="pt-9">
          <h1 className="title pl-[65px]">Projects</h1>
          <ul className="space-y-4 mt-8">
            {projects.map(({ id, title, content }) => (
              <li className="flex gap-[30px]" key={id}>
                <div className="mt-1 flex justify-center items-center border h-[35px] w-full max-w-[35px] font-Helvetica-Light text-[22px] leading-6 text-white -tracking-[0.22px] border-white rounded-full">
                  {id}
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <PageFooter page={5} isRightPage />
      </div>
    </div>
  );
};

export default index;
