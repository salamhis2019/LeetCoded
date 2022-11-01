<template>
  <div class="results-parent-container flex items-center justify-center">
    <TransitionGroup name="fade">
      <div
        class="results-container min-h-50 mx-8 mt-0 mb-8 box-border flex flex-col gap-2 rounded-xl bg-[#1b1f22] p-4"
        v-if="allProblems.length !== 0"
      >
        <div
          v-for="({ name, param, difficulty }, index) in currentProblems"
          :key="index"
          class="problem-card box-border flex h-12 items-center justify-between rounded-lg bg-[#353a3e] py-2 px-6"
          :class="{ 'bg-transparent': index % 2 !== 0 }"
        >
          <div class="problem-card-left flex items-center gap-4">
            <router-link
              :to="`/solutions/${param}`"
              class="problem-link m-0 text-lg font-semibold text-white/90 no-underline duration-200 hover:text-amber-500 focus:text-amber-500 focus:shadow-md focus:outline-none"
              @click="setCurrentProblem(index)"
            >
              {{ name }}
            </router-link>
            <DifficultyBadge
              :size="'primary'"
              :color="difficulty.toLowerCase()"
            >
              {{ difficulty }}
            </DifficultyBadge>
          </div>
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            class="checkbox h-6 w-6 cursor-pointer accent-[#52b5a3] duration-200"
          />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import ProblemsStore from "@/stores/problems.store";
import DifficultyBadge from "@/components/common/difficulty-badge.vue";
import { storeToRefs } from "pinia";

const problemsStore = ProblemsStore();

const { allProblems, currentProblems, currentProblemSolution, showSolution } =
  storeToRefs(problemsStore);

const { fetchData } = problemsStore;
fetchData();

function setCurrentProblem(index: any) {
  currentProblemSolution.value = currentProblems.value[index];
  showSolution.value = true;
}
</script>

<style lang="scss" scoped>
.results-parent-container {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .results-container {
    width: 700px;
    max-height: 550px;
  }
  @media only screen and (max-width: 750px) and (min-width: 550px) {
    .results-container {
      .problem-card {
        .problem-card-left {
          .problem-link {
            font-size: 1.2rem;
          }
          .difficulty-badge {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 550px) {
    .results-container {
      .problem-card {
        gap: 0.5rem;
        .problem-card-left {
          .problem-link {
            font-size: 1rem;
          }
          .difficulty-badge {
            display: none;
            font-size: 0.6rem;
          }
        }
        .checkbox {
          height: 18px;
          width: 18px;
        }
      }
    }
  }
}
</style>
