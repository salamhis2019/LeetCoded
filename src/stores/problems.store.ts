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
    async resolveData(data: any, searchText: any, filterValue: any) {
      let newArr: any = [];
      return new Promise((resolve) => {
        console.log("filter value: ", filterValue);
        for (const item in data) {
          newArr.push(data[item]);
        }

        let filteredItems: any;

        if (searchText && searchText !== "") {
          filteredItems = newArr.filter((item: any) => {
            return item.param === searchText;
          });
          newArr = filteredItems;
        }

        if (filterValue && filterValue !== "All") {
          console.log(newArr);
          const data = newArr.filter((item: any) => {
            return item.difficulty === filterValue;
          });
          newArr = data;
        }
        resolve(newArr);
      });
    },
    async fetchData(searchText: any, filterValue: any) {
      this.dataLoading = true;
      try {
        const response = await fetch(
          "https://leetcoded-14a63-default-rtdb.firebaseio.com/problems.json"
        );
        const data = await response.json();
        const fireBaseArr = await this.resolveData(
          data,
          searchText,
          filterValue
        );
        this.allProblems = fireBaseArr;
        setTimeout(() => {
          this.dataLoading = false;
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default useProblemsStore;
