<template>
  <div class="nav-parent-container">
    <nav class="nav-container">
      <div class="logo-container">
        <router-link class="router-link" to="/" @click="logoClicked">
          <img src="@/assets/leetcoded.png" alt="" />
        </router-link>
      </div>
      <button class="login-button">Login</button>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import useProblemsStore from "@/stores/problems.store";
import { storeToRefs } from "pinia";

const problemsStore = useProblemsStore();
const { showSolution } = storeToRefs(problemsStore);

function logoClicked() {
  showSolution.value = false;
}
</script>

<style lang="scss" scoped>
.nav-parent-container {
  height: 60px;
  background-color: #1b1f22;
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 3rem;
    color: #ff9900;
    .logo-container {
      display: flex;
      align-items: center;
      .router-link {
        display: flex;
        align-items: center;
        img {
          width: 150px;
          cursor: pointer;
        }
      }
    }
    .login-button {
      padding: 0.5rem 1.5rem;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      border: none;
      border-radius: 8px;
      background: #353a3e;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        box-shadow: 0px 0px 2px orange;
      }
    }
  }
}
</style>
