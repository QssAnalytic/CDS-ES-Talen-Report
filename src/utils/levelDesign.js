export const rainbowLevel = (score) => {
  if (score <= 50) {
    return score * 0.37 + 0.3;
  } else if (score <= 60) {
    return ((score - 51) / 10) * 20.5 + 20.5;
  } else if (score <= 80) {
    return ((score - 61) / 20) * 19.2 + 41;
  } else if (score <= 90) {
    return ((score - 81) / 10) * 20.5 + 61;
  } else if (score <= 100) {
    return ((score - 91) / 10) * 20 + 81.5;
  }
  return 0;
};

export const getStatus = (score) => {
  if (score <= 50) {
    return {
      name: "Fundamental Awareness",
    };
  } else if (score <= 60) {
    return { name: "Novice" };
  } else if (score <= 80) {
    return { name: "Intermediate" };
  } else if (score <= 90) {
    return { name: "Advanced" };
  } else if (score <= 100) {
    return {
      name: "Expert",
    };
  }
  return "";
};

export const getSoftSkillStatus = (score) => {
  if (score <= 50) {
    return "Unsatisfactory";
  } else if (score <= 60) {
    return "Junior";
  } else if (score <= 80) {
    return "Intermediate";
  } else if (score <= 90) {
    return "Senior";
  } else if (score <= 100) {
    return "Leader";
  }
  return "";
};

export const getLetterGrade = (score) => {
  if (score <= 50) {
    return "F";
  } else if (score <= 60) {
    return "E";
  } else if (score <= 70) {
    return "D";
  } else if (score <= 80) {
    return "C";
  } else if (score <= 90) {
    return "B";
  } else if (score <= 100) {
    return "A";
  }
  return "";
};
