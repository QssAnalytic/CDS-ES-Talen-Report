import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getOverallGeneralText } from "../utils/getText";
export const useTranscript = create(
  devtools((set) => ({
    sql: 0,
    tableau: 0,
    r: 0,
    python: 0,
    bigData: 0,
    spss: 0,
    setSql: (iSql) => set({ sql: iSql }),
    setTableau: (iTableau) => set({ tableau: iTableau }),
    setR: (iR) => set({ r: iR }),
    setPython: (iPython) => set({ python: iPython }),
    setBigData: (iBigData) => set({ bigData: iBigData }),
    setSpss: (iSpss) => set({ spss: iSpss }),
  }))
);

export const useExperience = create((set) => ({
  dataCleaning: 0,
  dataVisualization: 0,
  modelling: 0,
  programming: 0,
  setDataCleaning: (iDataCleaning) => set({ dataCleaning: iDataCleaning }),
  setDataVisualization: (iDataVisualization) =>
    set({ dataVisualization: iDataVisualization }),
  setModelling: (iModelling) => set({ modelling: iModelling }),
  setProgramming: (iProgramming) => set({ programming: iProgramming }),
}));

export const useSoftSkills = create((set) => ({
  communication: 0,
  problemSolving: 0,
  criticalThinking: 0,
  leadership: 0,
  softAverage: 0,
  setCommunication: (iCommunication) => set({ communication: iCommunication }),
  setProblemSolving: (iProblemSolving) =>
    set({ problemSolving: iProblemSolving }),
  setCriticalThinking: (iCriticalThinking) =>
    set({ criticalThinking: iCriticalThinking }),
  setLeadership: (iLeadership) => set({ leadership: iLeadership }),
  setSoftAverage: (iSoftAverage) => set({ softAverage: iSoftAverage }),
}));

export const useOption = create((set) => ({
  isNewSignature: false,
  isExtension: false,
  setNewSignature: () =>
    set((state) => ({ isNewSignature: !state.isNewSignature })),
  setExtension: () => set((state) => ({ isExtension: !state.isExtension })),
}));

export const userData = create((set) => ({
  fullName: "",
  sex: "Male",

  setFullName: (iFullName) => set({ fullName: iFullName }),
  setSex: (iSex) => set({ sex: iSex }),
}));

export const useTechnicalOverallText = create((set) => ({
  generalText: "",
  setGeneralText: (text) => set({ generalText: text }),
}));
