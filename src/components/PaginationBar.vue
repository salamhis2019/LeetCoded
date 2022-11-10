<template>
  <div
    class="pagination-container flex justify-center gap-2"
    v-if="allProblems.length !== 0"
  >
    <button
<<<<<<< HEAD
      class="button cursor-pointer rounded-lg border-0 bg-[#1b1f22] px-4 py-2 text-xl font-semibold text-white duration-200 hover:brightness-150 focus:shadow focus:shadow-white focus:outline-0 active:bg-[52b5a3] max-[540px]:px-6"
=======
      class="button cursor-pointer rounded-lg border-0 bg-[#1b1f22] px-4 py-2 text-xl font-semibold text-white duration-200 hover:brightness-150 focus:shadow focus:shadow-white focus:outline-0 active:bg-[52b5a3]"
>>>>>>> 08d4612cf10683c87d34619ca4f812d87d9f2314
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
import { ref, computed, watch, onBeforeUpdate } from "vue";
import ProblemsStore from "@/stores/problems.store";
import { storeToRefs } from "pinia";

const problemsStore = ProblemsStore();

const { allProblems, currentProblems, currentPage }: any =
  storeToRefs(problemsStore);

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

const pageStart = ref(0);
const pageEnd = ref(8);

onBeforeUpdate(() => {
  currentProblems.value = ref(
    allProblems.value.slice(pageStart.value, pageEnd.value)
  );
});

watch(currentPage, (newPage: any, oldPage: any) => {
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
<<<<<<< HEAD
=======

<style lang="scss" scoped>
@media only screen and (max-width: 750px) {
  .pagination-container {
    .button {
      padding: 0.5rem 0.8rem;
      font-size: 0.9rem;
    }
  }
}
</style>
>>>>>>> 08d4612cf10683c87d34619ca4f812d87d9f2314
