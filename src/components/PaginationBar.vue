<template>
  <div class="pagination-container" v-if="allProblems.length !== 0">
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
import { ref, computed, watch, onBeforeUpdate } from "vue";
import ProblemsStore from "@/stores/problems.store";
import { storeToRefs } from "pinia";

const problemsStore = ProblemsStore();

const { allProblems, currentProblems }: any = storeToRefs(problemsStore);

const pages = computed(() => {
  if (allProblems.value.length === 0 || undefined || NaN) {
    return 1;
  }
  if (allProblems.value.length % 8 === 0) {
    return allProblems.length / 8;
  } else {
    const remainder = allProblems.value.length % 8;
    return (allProblems.value.length - remainder + 8) / 8;
  }
});

const currentPage = ref<number>(1);
const pageStart = ref(0);
const pageEnd = ref(8);

onBeforeUpdate(() => {
  console.log("watcher fired");
  console.log("start", pageStart.value, "end", pageEnd.value);
  currentProblems.value = ref(
    allProblems.value.slice(pageStart.value, pageEnd.value)
  );
});

watch(currentPage, (newPage, oldPage) => {
  if (newPage > oldPage) {
    pageStart.value += (currentPage.value - oldPage) * 8;
    pageEnd.value += (currentPage.value - oldPage) * 8;
  }

  if (newPage < oldPage) {
    pageStart.value -= (oldPage - newPage) * 8;
    pageEnd.value -= (oldPage - newPage) * 8;
  }

  if (currentPage.value === 1) {
    currentProblems.value = [];
    pageStart.value = 0;
    pageEnd.value = 8;
  }

  currentProblems.value = allProblems.value.slice(
    pageStart.value,
    pageEnd.value
  );
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
  padding-bottom: 2rem;
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
      filter: brightness(150%);
    }
    &:active {
      background: #52b5a3;
    }
    &:focus {
      outline: none;
      box-shadow: 0px 0px 6px white;
    }
  }
  .active {
    background: #52b5a3;
    color: #1b1f22;
  }
}
@media only screen and (max-width: 750px) {
  .pagination-container {
    .button {
      padding: 0.5rem 0.8rem;
      font-size: 0.9rem;
    }
  }
}
</style>
