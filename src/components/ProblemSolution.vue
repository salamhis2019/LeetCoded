<template>
  <div
    class="solutions-parent-container mx-0 flex h-[calc(100%_-_56px)] items-start justify-center pt-12 text-white/90"
  >
    <div
      class="solution-content-container my-0 mx-4 w-[700px] max-[540px]:w-[540px]"
    >
      <div class="header-content mb-4 flex items-center justify-between">
        <div class="header-left">
          <router-link
            :to="'/solutions/'"
            class="button solutions rounded-lg bg-[#353a3e] py-2 px-4 font-semibold text-white no-underline hover:bg-[#363b3fcc]"
            role="button"
          >
            Back to Solutions
          </router-link>
        </div>
        <div
          class="header-right flex items-center gap-4 max-[540px]:flex-col max-[540px]:items-end"
        >
          <h3 class="m-0 text-2xl font-bold max-[540px]:text-xl">
            {{ currentProblemSolution.name }}
          </h3>
          <DifficultyBadge
            :color="currentProblemSolution.difficulty.toLowerCase()"
            :size="'secondary'"
          >
            {{ currentProblemSolution.difficulty }}</DifficultyBadge
          >
        </div>
      </div>
      <div
        class="solutions-explanation-container mb-6 rounded-xl bg-[#1b1f22] p-5"
        v-if="solution"
      >
        <div
          class="solutions-content"
          v-for="(
            { title, lclink, explanation, imageLabel, image, codeLabel, code },
            index
          ) in steps"
          :key="explanation"
          :class="{ 'mb-16': index !== steps.length - 1 }"
        >
          <a
            v-if="index === 0"
            :href="lclink"
            target="blank"
            class="mb-4 flex w-40 justify-center gap-2 rounded-md bg-[#353a3e] p-2 text-white duration-100 hover:underline hover:brightness-125"
          >
            LeetCode Link
            <img src="@/assets/external-link.svg" class="w-4" alt="" />
          </a>
          <h3 class="solution-title text-xl font-bold">
            {{ title }}
          </h3>
          <p class="solution-description mb-4 font-normal text-white/90">
            {{ explanation }}
          </p>
          <h3 class="solution-title text-lg font-bold">
            {{ imageLabel }}
          </h3>
          <img v-if="image" :src="image" alt="step 1 image" class="my-3" />
          <h3 class="solution-title text-lg font-bold">
            {{ codeLabel }}
          </h3>
          <div
            v-if="code"
            class="code-block-container mt-4 box-border rounded-xl bg-[#282a35] p-4"
          >
            <code
              class="box-border flex flex-col gap-1 whitespace-normal text-base font-medium max-[540px]:max-w-[540px]"
            >
              <p
                v-for="line in code"
                :key="line"
                class="line whitespace-pre-wrap break-words break-all max-[540px]:text-xs"
              >
                {{ line?.replaceAll("*", " ") }}
              </p>
            </code>
          </div>
        </div>
      </div>
      <div
        class="solution-unavailable-container flex justify-center rounded-xl bg-[#1b1f22]"
        v-else
      >
        <figure class="content-container pt-4">
          <img
            class="waiting-image flex w-64 justify-center"
            src="@/assets/waiting.svg"
            alt="waiting image"
          />
          <figcaption
            class="image-caption my-4 mx-0 text-center text-lg font-extralight"
          >
            Sorry, this one hasn't been cracked yet...
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import useProblemsStore from "@/stores/problems.store";
import DifficultyBadge from "@/components/common/difficulty-badge.vue";

const problemsStore = useProblemsStore();
const { currentProblemSolution }: any = storeToRefs(problemsStore);

const solution = ref(currentProblemSolution.value.solution);
console.log(solution.value);

const steps = ref<any>([]);

function setStepArray() {
  for (const item in solution.value) {
    steps.value.push(solution.value[item]);
  }
}

console.log(steps);

setStepArray();
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 500px) {
  .solutions-parent-container {
    .solution-content-container {
      .header-content {
        align-items: flex-start;
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
