<template>
  <transition name="fade">
    <div
      v-if="showLoginWindow"
      class="background-overlay fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/70"
    ></div>
  </transition>
  <transition name="fadeUp">
    <LoginPage v-if="showLoginWindow" />
  </transition>
  <div
    class="mainview-parent-container min-h-full bg-black"
    v-if="!showSolution"
  >
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

const { showSolution, showLoginWindow } = storeToRefs(problemsStore);

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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
