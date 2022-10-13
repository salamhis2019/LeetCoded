import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      currentProblems: [],
    };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
