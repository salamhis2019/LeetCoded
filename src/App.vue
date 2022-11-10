<template>
  <div class="app-wrapper h-full bg-black">
    <NavBar />
    <router-view v-slot="{ Component, route }">
      <Transition>
        <div :key="route.path" class="min-h-full bg-black">
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
</script>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  height: 100%;
  background: #1b1f22;
  font-family: "Encode Sans", sans-serif;
  ::selection {
    background: white;
    color: black;
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
  transition: opacity 0.5s ease-in-out;
}
</style>
