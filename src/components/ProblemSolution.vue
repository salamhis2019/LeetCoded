<template>
  <div class="solutions-parent-container">
    <div class="solution-content-container">
      <div class="header-content">
        <div class="header-left">
          <h2>{{ currentProblemSolution.name }}</h2>
          <p>{{ currentProblemSolution.difficulty }}</p>
        </div>
        <div class="header-right">
          <button>Go back to Problems</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useProblemsStore from "@/stores/problems.store";

const problemsStore = useProblemsStore();
const { currentProblemSolution }: any = storeToRefs(problemsStore);
</script>

<style lang="scss" scoped>
.solutions-parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .solution-content-container {
    width: 700px;
    .header-content {
      display: flex;
      justify-content: space-between;
      .header-left {
        display: flex;
      }
      .header-right {
      }
    }
  }
}
</style>
