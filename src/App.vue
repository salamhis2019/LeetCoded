<template>
  <div class="app-wrapper">
    <Transition>
      <router-view></router-view>
    </Transition>
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  height: 100%;
  background: #000203;
  font-family: sans-serif;
  .app-wrapper {
    height: 100%;
  }
}

// .v-leave-from {
//   display: none;
// }
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s ease-in;
}
</style>
