<template>
  <div class="pagination-container">
    <button
      class="button cursor-pointer rounded-lg border-0 bg-[#1b1f22] px-4 py-2 text-xl font-semibold text-white duration-200 hover:brightness-150 focus:shadow focus:shadow-white focus:outline-0 active:bg-[52b5a3] max-[540px]:px-6"
      :class="{ ['bg-[#52b5a3] text-black']: currentPage === index + 1 }"
      v-for="(item, index) in pages"
      :key="item"
      @click="updateCurrentPage(index)"
    >
      {{ index + 1 }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import Problems from "@/data/problems";
import { ref, computed, watch } from "vue";
import ProblemsStore from "@/stores/problems.store";
import { storeToRefs } from "pinia";

const problemsStore = ProblemsStore();

const { currentProblems } = storeToRefs(problemsStore);

const problems = Problems;

const pages = computed(() => {
  return problems.length / 8;
});

const currentPage = ref<number>(1);
const pageStart = ref(0);
const pageEnd = ref(9);

currentProblems.value = ref(problems.slice(pageStart.value, pageEnd.value));

watch(currentPage, (newPage, oldPage) => {
  console.log(newPage, oldPage);
  if (newPage > oldPage) {
    console.log("increase");
    pageStart.value += (currentPage.value - oldPage) * 8;
    pageEnd.value += (currentPage.value - oldPage) * 8;
  }

  if (newPage < oldPage) {
    console.log("reduce");
    pageStart.value -= (oldPage - newPage) * 8;
    pageEnd.value -= (oldPage - newPage) * 8;
  }

  if (currentPage.value === 1) {
    currentProblems.value = [];
    pageStart.value = 0;
    pageEnd.value = 9;
  }

  currentProblems.value = problems.slice(pageStart.value, pageEnd.value);
});

function updateCurrentPage(index: number) {
  currentPage.value = index + 1;
}
</script>
