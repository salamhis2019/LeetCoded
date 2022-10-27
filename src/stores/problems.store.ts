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
      try {
        const response = await fetch("http://localhost:3000/problems/");
        const data = await response.json();
        this.allProblems = data;
      } catch (error) {
        console.error(error);
      }
    },
    async searchData(searchText: any) {
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
    async filterData(difficulty: any) {
      if (difficulty !== "All") {
        const response = await fetch(
          `http://localhost:3000/problems?difficulty=${difficulty}`
        );
        const data = await response.json();
        this.allProblems = data;
      } else {
        this.fetchData();
      }
    },
  },
});

export default useProblemsStore;
