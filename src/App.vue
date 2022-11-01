<template>
  <div class="app-wrapper h-full">
    <router-view></router-view>
  </div>
</template>

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
</style>
