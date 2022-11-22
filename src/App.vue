<template>
  <div class="app-wrapper h-full bg-black">
    <NavBar v-if="route.path !== '/'" />
    <router-view v-slot="{ Component, route }">
      <Transition>
        <div
          :key="route.path"
          class="bg-black"
          :class="route.path === '/' ? 'h-[calc(100%+50px)]' : 'min-h-full'"
        >
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
    <PageFooter v-if="route.path !== '/'" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";

const route = useRoute();
</script>

<style lang="scss">
#app {
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
