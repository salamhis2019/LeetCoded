import { defineStore } from "pinia";

interface State {
  allProblems: any;
  currentProblems: any;
  currentProblemSolution: any;
  showSolution: any;
  dataLoading: any;
}

export const useProblemsStore = defineStore("problems", {
  state: (): State => {
    return {
      allProblems: [],
      currentProblems: [],
      currentProblemSolution: null,
      showSolution: false,
      dataLoading: false,
    };
  },
  actions: {
    async fetchData() {
      this.dataLoading = true;
      try {
        const response = await fetch("http://localhost:3000/problems/");
        const data = await response.json();
        this.allProblems = data;
        setTimeout(() => {
          this.dataLoading = false;
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    },
    async searchData(searchText: any) {
      this.dataLoading = true;
      try {
        const response = await fetch(
          `http://localhost:3000/problems?param=${searchText}`
        );
        const data = await response.json();
        this.allProblems = data;
        if (data.length === 0) {
          this.fetchData();
        }
        setTimeout(() => {
          this.dataLoading = false;
        }, 1000);
      } catch (error) {
        this.dataLoading = false;
        console.log(error);
      }
    },
    async filterData(difficulty: any) {
      this.dataLoading = true;
      try {
        if (difficulty !== "All") {
          const response = await fetch(
            `http://localhost:3000/problems?difficulty=${difficulty}`
          );
          const data = await response.json();
          this.allProblems = data;
        } else {
          this.fetchData();
        }
        setTimeout(() => {
          this.dataLoading = false;
        }, 1000);
      } catch (error) {
        this.dataLoading = false;
        console.error(error);
      }
    },
  },
});

export default useProblemsStore;
