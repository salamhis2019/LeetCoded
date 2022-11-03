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
        class="results-container min-h-50 mx-8 mt-0 mb-8 box-border flex flex-col gap-2 rounded-xl bg-[#1b1f22] p-4"
        v-if="allProblems.length !== 0 && !dataLoading"
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
              class="problem-link m-0 text-lg font-semibold text-white/90 no-underline duration-200 hover:text-amber-500 focus:text-amber-500 focus:shadow-md focus:outline-0 max-[450px]:text-xs"
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
          <label class="checkbox bounce">
            <input type="checkbox" />
            <svg viewBox="0 0 21 21">
              <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
            </svg>
          </label>
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

const {
  allProblems,
  currentProblems,
  currentProblemSolution,
  showSolution,
  dataLoading,
} = storeToRefs(problemsStore);

const { fetchData } = problemsStore;
fetchData(null, null);

function setCurrentProblem(index: any) {
  currentProblemSolution.value = currentProblems.value[index];
  showSolution.value = true;
}
</script>

<style lang="scss" scoped>
.results-parent-container {
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
  .results-container {
    width: 700px;
    max-height: 550px;
  }
  @media only screen and (max-width: 750px) and (min-width: 550px) {
    .problem-link {
      font-size: 1.2rem;
    }
    .difficulty-badge {
      font-size: 0.75rem;
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
.checkbox {
  --background: #fff;
  --border: #d1d6ee;
  --border-hover: #bbc1e1;
  --border-active: #52b5a3;
  --tick: #fff;
  position: relative;
  input,
  svg {
    width: 21px;
    height: 21px;
    display: block;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    outline: none;
    background: var(--background);
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 4px;
    transition: box-shadow 0.2s;
    box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
    &:hover {
      --s: 2px;
      --b: var(--border-hover);
    }
    &:checked {
      --b: var(--border-active);
    }
  }
  svg {
    pointer-events: none;
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--stroke, var(--border-active));
    position: absolute;
    top: 0;
    left: 0;
    width: 21px;
    height: 21px;
    transform: scale(var(--scale, 1)) translateZ(0);
  }
  &.path {
    input {
      &:checked {
        --s: 2px;
        transition-delay: 0.2s;
        & + svg {
          --a: 16.1 86.12;
          --o: 102.22;
        }
      }
    }
    svg {
      stroke-dasharray: var(--a, 86.12);
      stroke-dashoffset: var(--o, 86.12);
      transition: stroke-dasharray 0.2s, stroke-dashoffset 0.2s;
    }
  }
  &.bounce {
    --stroke: var(--tick);
    input {
      &:checked {
        --s: 11px;
        & + svg {
          animation: bounce 0.2s linear forwards 0.2s;
        }
      }
    }
    svg {
      --scale: 0;
    }
  }
}

@keyframes bounce {
  50% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
  &:before,
  &:after {
    box-sizing: inherit;
  }
}
</style>
