import React from "react";
import PageFooter from "../PageFooter";

const index = () => {
  return (
    <div className="page-left bg-white">
      <div className="space-y-section">
        <div className="space-y-p">
          <h1 className="title">Talent Report</h1>

          <p>
            Certified Data Scientist’s Evaluation System (CDS-ES) is a joint
            initiative of the Data Science Academy and Data Talent - assesses
            the technical and soft skills of professionals in Data Science.
          </p>

          <p>
            The assessment tool, which will be utilized in Azerbaijan, is
            aligned with 21st century skills based on the latest updates in data
            science methods and technologies. Understanding the skills profile
            of each talent will help us identify their strengths and weaknesses
            and aid in creating more relevant policies that can support both
            curriculum and workforce suggestions for versatile talent needs of
            organizations.
          </p>

          <p>
            CDS-ES focuses on identifying and examining current data science
            trends affecting data talents between the academy and industry.
          </p>

          <p>
            CDS-ES bridges the gap among different schools, industries,
            government and non-government agencies, communities and other
            institutions. It aims to establish a sustainable data science talent
            pipeline of Azerbaijan with the appropriate skills for work.
            <br />
            The CDS-ES report consolidates and creates a skills profile that
            represents
          </p>

          <div>
            <div className="flex items-center gap-1">
              <span className="bg-secondary circle"></span>
              <p>Technical Report</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="bg-alternative circle"></span>
              <p>Interpersonal Report</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-secondary">Technical report</h3>
            <p>Technical Report contains Transcript and Experience report.</p>
          </div>

          <div>
            <h4>Transcript</h4>
            <p>
              Transcript contains scored report on skills of the candidate on
              Tableau, SQL, Big Data, SPSS, R, and Python. These scores are
              calculated on the basis of homeworks, case studies, midterm and
              final exams during intensive 12 weeks Data Science Bootcamp.
            </p>
          </div>

          <div>
            <h4>Experience Report</h4>
            <p>
              Experience Report contains scores from data cleaning, data
              Visualization, modelling, and programming capabilities estimated
              based on real Data Science Capstone Projects. Each score is
              supplemented with a written description of the candidate’s
              capabilities.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-interpersonal">Interpersonal report</h3>
          <p>
            Interpersonal Report assesses Problem Solving, Critical Thinking,
            Communication and Leadership skills on the basis of Personality
            Tests and Interviews. Report provides separate score and written
            description of each capability.
          </p>
        </div>
      </div>

      <PageFooter page={2} />
    </div>
  );
};

export default index;
