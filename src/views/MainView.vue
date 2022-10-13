<template>
  <NavBar />
  <div class="parent-container">
    <div class="mainview-parent-container">
      <SearchBar />
      <Results />
      <PaginationBar />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import Results from "@/components/ResultsSection.vue";
import PaginationBar from "@/components/PaginationBar.vue";
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
</style>
