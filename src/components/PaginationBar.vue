<template>
  <div class="pagination-container">
    <button
      class="button"
      :class="{ active: currentPage === index + 1 }"
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

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: 1050px;
  min-width: 300px;
  width: 700px;
  margin-bottom: 2rem;
  .button {
    padding: 0.75rem 1rem;
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    background: #1b1f22;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: #353a3e;
      color: white;
    }
    &:active {
      background: #ff9900;
    }
    &:focus {
      outline: none;
      box-shadow: 0px 0px 6px white;
    }
  }
  .active {
    background: #ff9900;
    color: #1b1f22;
  }
}
@media only screen and (max-width: 750px) {
  .pagination-container {
    gap: 0.5rem;
    width: 300px;
    .button {
      padding: 0.5rem 0.8rem;
      font-size: 0.9rem;
    }
  }
}
</style>
