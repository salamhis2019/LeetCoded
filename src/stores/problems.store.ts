import { defineStore } from "pinia";

export const useProblemsStore = defineStore("problems", {
  state: () => {
    return {
      currentProblems: [],
      showSolution: false,
    };
  },
});

export default useProblemsStore;
