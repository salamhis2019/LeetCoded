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
      console.log("fetch data fired");
      const response = await fetch("http://localhost:3000/problems/");
      const data = await response.json();
      this.allProblems = data;
    },
    async searchData(searchText: any) {
      console.log(searchText);
      const response = await fetch(
        `http://localhost:3000/problems?param=${searchText}`
      );
      const data = await response.json();
      this.allProblems = data;
      console.log(data);
      if (data.length === 0) {
        this.fetchData();
      }
    },
  },
});

export default useProblemsStore;
