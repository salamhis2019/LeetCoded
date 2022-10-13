import { defineStore } from "pinia";

export const useProblemsStore = defineStore("problems", {
  state: () => {
    return {
      currentProblems: [],
    };
  },
});

export default useProblemsStore;
