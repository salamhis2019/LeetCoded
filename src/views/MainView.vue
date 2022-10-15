<template>
  <NavBar />
  <div class="parent-container">
    <Transition>
      <div class="mainview-parent-container" v-if="!param">
        <SearchBar />
        <Results />
        <PaginationBar />
      </div>
      <div class="problem-solution-container" v-else>
        <ProblemSolution />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import Results from "@/components/ResultsSection.vue";
import ProblemSolution from "@/components/ProblemSolution.vue";
import PaginationBar from "@/components/PaginationBar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const param = computed(() => {
  console.log(route.params.problem);
  return route.params.problem;
});
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
