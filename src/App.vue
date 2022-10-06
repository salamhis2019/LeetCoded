<template>
  <div class="app-wrapper">
    <LandingView />
  </div>
</template>

<script lang="ts" setup>
import LandingView from "@/views/LandingView.vue";
</script>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  height: 100%;
  background: #000203;
  .app-wrapper {
    height: 100%;
  }
}
</style>
