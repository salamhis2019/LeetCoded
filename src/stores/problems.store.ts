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
    async resolveData(data: any) {
      const newArr: any = [];
      return new Promise((resolve) => {
        for (const item in data) {
          newArr.push(data[item]);
        }
        resolve(newArr);
      });
    },
    async fetchData() {
      this.dataLoading = true;
      try {
        const response = await fetch(
          "https://leetcoded-14a63-default-rtdb.firebaseio.com/problems.json"
        );
        const data = await response.json();
        const fireBaseArr = await this.resolveData(data);
        this.allProblems = fireBaseArr;
        setTimeout(() => {
          this.dataLoading = false;
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    },
    async searchData(searchText: any) {
      console.log(searchText);
      this.dataLoading = true;
      const filteredItems = this.allProblems.filter((item: any) => {
        return item.param === searchText;
      });
      console.log(filteredItems);
      this.currentProblems = filteredItems;
      if (filteredItems.length === 0) {
        this.fetchData();
      }
      setTimeout(() => {
        this.dataLoading = false;
      }, 1000);
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
