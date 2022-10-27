import { defineStore } from "pinia";
import axios from "axios";

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
        console.log("fetch data fired");
        const response = await axios.get<any, any>(
          "http://localhost:3000/problems/"
        );
        const data = await response.json();
        this.allProblems = data;
      } catch (error) {
        console.log(error);
      }
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
    async filterData(difficulty: any) {
      console.log(difficulty);
      if (difficulty !== "All") {
        const response = await fetch(
          `http://localhost:3000/problems?difficulty=${difficulty}`
        );
        const data = await response.json();
        this.allProblems = data;
        console.log(data);
      } else {
        this.fetchData();
      }
    },
  },
});

export default useProblemsStore;
