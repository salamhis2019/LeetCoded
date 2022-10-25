import { defineStore } from "pinia";

export const useProblemsStore = defineStore("problems", {
  state: () => {
    return {
      allProblems: [],
      currentProblems: [],
      currentProblemSolution: null,
      showSolution: false,
    };
  },
  actions: {
    async fetchData() {
      console.log("fetch in progress");
      const response = await fetch("http://localhost:3000/problems/");
      const data = await response.json();
      this.allProblems = data;
    },
  },
});

export default useProblemsStore;
