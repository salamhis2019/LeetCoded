<template>
  <NavBar />
  <div class="mainview-parent-container" v-if="!showSolution">
    <SearchBar />
    <Results />
    <PaginationBar />
  </div>
  <ProblemsSolution v-else />
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import Results from "@/components/ResultsSection.vue";
import ProblemsSolution from "@/components/ProblemSolution.vue";
import PaginationBar from "@/components/PaginationBar.vue";
import useProblemsStore from "@/stores/problems.store";
import { storeToRefs } from "pinia";

const problemsStore = useProblemsStore();
const { showSolution } = storeToRefs(problemsStore);
</script>

<style lang="scss" setup>
.parent-container {
  display: flex;
  justify-content: center;
  width: 100%;
  .mainview-parent-container {
    max-width: 700px;
    min-width: 300px;
  }
}

.v-leave-from {
  display: none;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s ease-in;
}
</style>
