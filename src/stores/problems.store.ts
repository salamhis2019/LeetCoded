import { defineStore } from "pinia";
import { Problem } from "@/types/problems.store.types";

interface State {
  allProblems: Problem[] | unknown;
  currentProblems: Problem[];
  currentProblemSolution: Problem | null;
  currentPage: number;
  showSolution: boolean;
  showLoginWindow: boolean;
  dataLoading: boolean;
  currentUser: string | null;
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
      searchText: string,
      filterValue: string,
      sortBy: string
    ) {
      let newArr: Problem[] = [];
      return new Promise((resolve) => {
        for (const item in data) {
          newArr.push(data[item]);
        }

        let filteredItems: Problem[];

        if (searchText && searchText !== "") {
          filteredItems = newArr.filter((item: Problem) => {
            return item.param === searchText;
          });
          newArr = filteredItems;
        }

        if (filterValue && filterValue !== "All") {
          const data = newArr.filter((item: Problem) => {
            return item.difficulty === filterValue;
          });
          newArr = data;
        }

        if (sortBy) {
          if (sortBy === "Easy to Hard") {
            newArr.sort(function (a: Problem, b: Problem) {
              return a.difficultyId - b.difficultyId;
            });
          } else if (sortBy === "Hard to Easy") {
            newArr.sort(function (a: Problem, b: Problem) {
              return b.difficultyId - a.difficultyId;
            });
          }
        }
        resolve(newArr);
      });
    },
    async fetchData(searchText: string, filterValue: string, sortBy: string) {
      this.dataLoading = true;
      this.currentPage = 1;
      try {
        const response = await fetch(
          "https://leetcoded-14a63-default-rtdb.firebaseio.com/problems.json"
        );
        const data = await response.json();
        const fireBaseArr: Problem[] | unknown = await this.resolveData(
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
