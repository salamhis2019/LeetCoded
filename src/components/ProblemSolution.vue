<template>
  <div class="solutions-parent-container">
    <div class="solution-content-container">
      <div class="header-content">
        <div class="header-left">
          <h3>{{ currentProblemSolution.name }}</h3>
          <DifficultyBadge :difficulty="currentProblemSolution.difficulty">{{
            currentProblemSolution.difficulty
          }}</DifficultyBadge>
        </div>
        <div class="header-right">
          <router-link :to="'/solutions/'" class="button solutions">
            Go Back to Solutions
          </router-link>
        </div>
      </div>
      <div class="solutions-explanation-container">
        <div
          class="solutions-content"
          v-for="{
            solutionTitle,
            solutionDescription,
            code,
          } in currentProblemSolution.solutions"
          :key="code"
        >
          <p class="solution-description">{{ solutionDescription }}</p>
          <h3 class="solution-title">{{ solutionTitle }}</h3>
          <div class="code-block-container">
            <code>{{ code }}</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useProblemsStore from "@/stores/problems.store";
import DifficultyBadge from "@/components/common/difficulty-badge.vue";

const problemsStore = useProblemsStore();
const { currentProblemSolution }: any = storeToRefs(problemsStore);
</script>

<style lang="scss" scoped>
.solutions-parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 3rem 0;
  .solution-content-container {
    width: 700px;
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      .header-left {
        display: flex;
        align-items: center;
        gap: 1rem;
        h3 {
          margin: 0;
          font-size: 2rem;
        }
      }
      .header-right {
        .button {
          padding: 0.5rem 1rem;
          background: #353a3e;
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          text-decoration: none;
          &:hover {
            background: hsla(207, 8%, 23%, 0.8);
          }
        }
      }
    }
    .solutions-explanation-container {
      padding: 1rem;
      background: #1b1f22;
      border-radius: 12px;
      .code-block-container {
        min-width: 400px;
        max-width: 550px;
        padding: 1rem;
        background: #282a35;
        border-radius: 12px;
        code {
          font-weight: 500;
          font-size: 1rem;
          white-space: pre;
        }
      }
    }
  }
}
</style>
