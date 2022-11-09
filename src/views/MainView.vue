<template>
  <LoginPage>
    <div class="header flex h-8 justify-between">
      <h2 class="text-xl font-bold text-white">Welcome Back</h2>
      <button
        class="close-window text-xl text-white duration-100 hover:text-amber-500"
      >
        X
      </button>
    </div>
  </LoginPage>
  <div class="mainview-parent-container h-full" v-if="!showSolution">
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
import LoginPage from "@/components/LoginPage.vue";
import useProblemsStore from "@/stores/problems.store";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

const route = useRoute();
const problemsStore = useProblemsStore();

const { showSolution } = storeToRefs(problemsStore);

const param = computed(() => route.params.problem);

watch(param, (newParam) => {
  if (newParam === undefined) {
    showSolution.value = false;
  } else {
    showSolution.value = true;
  }
});
</script>

<style lang="scss" scoped>
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
  transition: opacity 0.3s ease-in;
}
</style>
