<template>
  <div
    class="results-parent-container flex min-h-[504px] items-start justify-center"
  >
    <TransitionGroup>
      <img
        class="mt-40 h-full w-32"
        src="@/assets/loading.svg"
        v-if="dataLoading"
        alt="loading image"
      />
      <div
        class="results-container min-h-50 mx-8 mt-0 mb-8 box-border flex w-[700px] flex-col gap-2 rounded-xl bg-[#1b1f22] p-4"
        v-if="allProblems.length !== 0 && !dataLoading"
      >
        <li
          v-for="({ name, param, difficulty }, index) in currentProblems"
          :key="index"
          class="problem-card min-h-12 box-border flex items-center justify-between rounded-lg bg-[#353a3e] py-2.5 px-6 max-[540px]:gap-2"
          :class="{ 'bg-transparent': index % 2 !== 0 }"
        >
          <div
            class="problem-card-left flex items-center gap-4 max-[540px]:flex-col max-[540px]:items-start max-[450px]:gap-2"
          >
            <router-link
              :to="`/solutions/${param}`"
              class="problem-link m-0 text-lg font-semibold text-white/90 no-underline duration-200 hover:text-amber-500 focus:text-amber-500 focus:shadow-md focus:outline-0 max-[540px]:text-xs"
              @click="setCurrentProblem(index)"
            >
              {{ name }}
            </router-link>
            <DifficultyBadge
              :size="'primary'"
              :color="difficulty?.toLowerCase()"
            >
              {{ difficulty }}
            </DifficultyBadge>
          </div>
          <label
            class="checkbox flex items-center accent-[#52b5a3] max-[540px]:h-5 max-[540px]:w-5"
          >
            <input type="checkbox" class="h-6 w-6 cursor-pointer" />
          </label>
        </li>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import ProblemsStore from "@/stores/problems.store";
import DifficultyBadge from "@/components/common/difficulty-badge.vue";
import { storeToRefs } from "pinia";

const problemsStore = ProblemsStore();

const {
  allProblems,
  currentProblems,
  currentProblemSolution,
  showSolution,
  dataLoading,
} = storeToRefs(problemsStore);

const { fetchData } = problemsStore;
fetchData(null, null, null);

function setCurrentProblem(index: any) {
  currentProblemSolution.value = currentProblems.value[index];
  showSolution.value = true;
}
</script>

<style lang="scss" scoped>
.v-leave-from {
  display: none;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.3s ease-in;
}
</style>
