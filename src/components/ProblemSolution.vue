<template>
  <div
    class="solutions-parent-container mx-0 flex h-[calc(100%_-_56px)] items-start justify-center pt-12 text-white/90"
  >
    <div class="solution-content-container my-0 mx-4 max-[540px]:w-60">
      <div class="header-content mb-4 flex items-center justify-between">
        <div class="header-left flex items-center gap-4">
          <h3 class="m-0 text-2xl font-bold">
            {{ currentProblemSolution.name }}
          </h3>
          <DifficultyBadge
            :color="currentProblemSolution.difficulty.toLowerCase()"
            :size="'secondary'"
          >
            {{ currentProblemSolution.difficulty }}</DifficultyBadge
          >
        </div>
        <div class="header-right">
          <router-link
            :to="'/solutions/'"
            class="button solutions rounded-lg bg-[#353a3e] py-2 px-4 font-semibold text-white no-underline hover:bg-[#363b3fcc]"
          >
            Back to Solutions
          </router-link>
        </div>
      </div>
      <div
        class="solutions-explanation-container rounded-xl bg-[#1b1f22] p-5"
        v-if="solution"
      >
        <div class="solutions-content">
          <p class="solution-description mb-4 font-normal">
            {{ solution?.solutionDescription }}
          </p>
          <h3 class="solution-title text-xl font-bold">
            {{ solution?.solutionTitle }}
          </h3>
          <div class="code-block-container mt-4 rounded-xl bg-[#282a35] p-4">
            <code
              class="flex flex-col gap-1 whitespace-pre break-words break-all text-base font-medium max-[540px]:max-w-[350px]"
            >
              <p
                v-for="line in solution?.code"
                :key="line"
                class="line break-words break-all"
              >
                {{ line.replaceAll("*", " ") }}
              </p>
            </code>
          </div>
        </div>
      </div>
      <div
        class="solution-unavailable-container flex justify-center rounded-xl bg-[#1b1f22]"
        v-else
      >
        <figure class="content-container">
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
</script>

<style lang="scss" scoped>
.solution-content-container {
  width: 700px;
  .solutions-explanation-container {
    .solutions-content {
      .code-block-container {
        code {
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
@media only screen and (max-width: 500px) {
  .solutions-parent-container {
    margin: 2rem;
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
