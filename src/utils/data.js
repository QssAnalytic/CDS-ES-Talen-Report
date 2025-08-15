import {
  useExperience,
  useSoftSkills,
  useTranscript,
  userData,
} from "../state/store";

export const average = (data) => {
  const avg = data.reduce((acc, curVal) => acc + curVal, 0) / data.length;

  return round(avg);
};

const round = (num) => Math.round((num + Number.EPSILON) * 10) / 10;

export const overall = () => {
  const { tableau, sql, bigData, spss, r, python } = useTranscript();
  const { dataCleaning, dataVisualization, modelling, programming } =
    useExperience();

  const transcriptAvg = round(
    average([tableau, sql, bigData, spss, r, python]) * 40
  );
  const experienceAvg = round(
    average([dataCleaning, dataVisualization, modelling, programming]) * 60
  );

  return round((transcriptAvg + experienceAvg) / 100);
};

export const transcriptData = () => {
  const {
    tableau,
    sql,
    bigData,
    spss,
    r,
    python,
    setTableau,
    setSql,
    setBigData,
    setSpss,
    setR,
    setPython,
  } = useTranscript();
  return [
    {
      label: "Tableau",
      name: "Tableau",
      type: "number",
      setValue: setTableau,
      value: tableau,
    },
    {
      label: "Sql",
      name: "Sql",
      type: "number",
      setValue: setSql,
      value: sql,
    },
    {
      label: "R",
      name: "R",
      type: "number",
      setValue: setR,
      value: r,
    },
    {
      label: "Python",
      name: "Python",
      type: "number",
      setValue: setPython,
      value: python,
    },
    {
      label: "Big Data",
      name: "Big Data",
      type: "number",
      setValue: setBigData,
      value: bigData,
    },
    {
      label: "Spss",
      name: "Spss",
      type: "number",
      setValue: setSpss,
      value: spss,
    },
  ];
};

export const experienceData = () => {
  const {
    dataCleaning,
    dataVisualization,
    modelling,
    programming,
    setDataCleaning,
    setDataVisualization,
    setModelling,
    setProgramming,
  } = useExperience();
  return [
    {
      label: "Data Cleaning",
      name: "Data Cleaning",
      type: "number",
      setValue: setDataCleaning,
      value: dataCleaning,
      color: "bg-alternative",
    },
    {
      label: "Data Visualization",
      name: "Data Visualization",
      type: "number",
      setValue: setDataVisualization,
      value: dataVisualization,
      color: "bg-novice",
    },
    {
      label: "Modelling",
      name: "Modelling",
      type: "number",
      setValue: setModelling,
      value: modelling,
      color: "bg-secondary",
    },
    {
      label: "Programming",
      name: "Programming",
      type: "number",
      setValue: setProgramming,
      value: programming,
      color: "bg-fundamentalAwarenes",
    },
  ];
};

export const softSkillsData = () => {
  const {
    communication,
    problemSolving,
    criticalThinking,
    leadership,
    softAverage,
    setCommunication,
    setProblemSolving,
    setCriticalThinking,
    setLeadership,
    setSoftAverage,
  } = useSoftSkills();

  return [
    {
      label: "Communication",
      name: "Communication",
      type: "number",
      setValue: setCommunication,
      value: communication,
    },
    {
      label: "Problem Solving",
      name: "Problem Solving",
      type: "number",
      setValue: setProblemSolving,
      value: problemSolving,
    },
    {
      label: "Critical Thinking",
      name: "Critical Thinking",
      type: "number",
      setValue: setCriticalThinking,
      value: criticalThinking,
    },
    {
      label: "Leadership",
      name: "Leadership",
      type: "number",
      setValue: setLeadership,
      value: leadership,
    },
    {
      label: "Soft Average",
      name: "Soft Average",
      type: "number",
      setValue: setSoftAverage,
      value: softAverage,
    },
  ];
};

export const getUserData = () => {
  const { fullName, sex } = userData();
  const pronoun = sex === "Male" ? "He" : "She";
  const name =
    fullName.toLowerCase().split(" ")[0].charAt(0).toUpperCase() +
    fullName.toLowerCase().split(" ")[0].slice(1);
  return { name, pronoun };
};
