import { defineStore } from "pinia";

export const useProblemsStore = defineStore("problems", {
  state: () => {
    return {
      currentProblems: [],
      currentProblemSolution: null,
      showSolution: false,
    };
  },
});

export default useProblemsStore;
