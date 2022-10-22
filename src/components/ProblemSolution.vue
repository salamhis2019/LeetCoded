<template>
  <div class="solutions-parent-container">
    <div class="solution-content-container">
      <div class="header-content">
        <div class="header-left">
          <h3>{{ currentProblemSolution.name }}</h3>
          <DifficultyBadge
            :color="currentProblemSolution.difficulty.toLowerCase()"
            :size="'secondary'"
          >
            {{ currentProblemSolution.difficulty }}</DifficultyBadge
          >
        </div>
        <div class="header-right">
          <router-link :to="'/solutions/'" class="button solutions">
            Back to Solutions
          </router-link>
        </div>
      </div>
      <div
        class="solutions-explanation-container"
        v-if="currentProblemSolution.solutions"
      >
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
            <code>
              <span v-for="line in code" :key="line" class="line">{{
                line
              }}</span>
            </code>
          </div>
        </div>
      </div>
      <div class="solution-unavailable-container" v-else>
        <figure class="content-container">
          <img src="@/assets/waiting.svg" alt="waiting image" />
          <figcaption>Sorry, this one hasn't been cracked yet!</figcaption>
        </figure>
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
    margin: 0 1rem;
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
          font-size: 1.5rem;
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
      .solutions-content {
        .solution-description {
          margin: 0;
        }
        .code-block-container {
          padding: 1rem;
          background: #282a35;
          border-radius: 12px;
          code {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            font-weight: 500;
            font-size: 1rem;
            white-space: pre;
            @media only screen and (max-width: 400px) {
              .line {
                font-size: 0.7rem;
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 400px) {
  .solutions-parent-container {
    margin: 2rem;
    .solution-content-container {
      .header-content {
        gap: 1rem;
        .header-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: left;
          h3 {
            font-size: 1rem;
          }
        }
        .header-right {
          min-width: 145px;
          display: flex;
          justify-content: center;
          .button {
            font-size: 0.8rem;
          }
        }
      }
    }
    .solutions-explanation-container {
      margin-top: 1.5rem;
      padding: 0.5rem;
      .solutions-content {
        h3 {
          font-size: 1rem;
        }
        .code-block-container {
          padding: 0.5rem;
        }
      }
      .unsolved-parent-container {
        .waiting-image {
          width: 300px;
        }
      }
    }
  }
}
</style>
