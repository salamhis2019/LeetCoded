import { defineStore } from "pinia";

interface State {
  allProblems: any;
  currentProblems: any;
  currentProblemSolution: any;
  currentPage: any;
  showSolution: any;
  showLoginWindow: any;
  dataLoading: any;
  currentUser: any;
}

export const useProblemsStore = defineStore("problems", {
  state: (): State => {
    return {
      allProblems: [],
      currentProblems: [],
      currentProblemSolution: null,
      currentPage: 1,
      showSolution: false,
      showLoginWindow: false,
      dataLoading: false,
      currentUser: null,
    };
  },
  actions: {
    async resolveData(
      data: any,
      searchText: any,
      filterValue: any,
      sortBy: any
    ) {
      let newArr: any = [];
      return new Promise((resolve) => {
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

        if (sortBy) {
          if (sortBy === "Easy to Hard") {
            newArr.sort(function (a: any, b: any) {
              return a.difficultyId - b.difficultyId;
            });
          } else if (sortBy === "Hard to Easy") {
            newArr.sort(function (a: any, b: any) {
              return b.difficultyId - a.difficultyId;
            });
          }
        }
        resolve(newArr);
      });
    },
    async fetchData(searchText: any, filterValue: any, sortBy: any) {
      this.dataLoading = true;
      this.currentPage = 1;
      try {
        const response = await fetch(
          "https://leetcoded-14a63-default-rtdb.firebaseio.com/problems.json"
        );
        const data = await response.json();
        const fireBaseArr = await this.resolveData(
          data,
          searchText,
          filterValue,
          sortBy
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
