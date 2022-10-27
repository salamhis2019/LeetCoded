<template>
  <div class="nav-parent-container">
    <nav class="nav-container">
      <div class="logo-container">
        <router-link class="router-link" to="/" @click="logoClicked">
          <h1 class="hero-text">
            <span class="leetcoded-text"
              >LeetCoded <span class="code-brackets">&lt;></span></span
            >
          </h1>
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
        text-decoration: none;
        transition: 0.2s ease;
        .hero-text {
          margin: 0;
          color: #ffffffe0;
          font-size: 1.5rem;
          font-weight: 300;
          .leetcoded-text {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-style: italic;
            font-weight: 600;
          }
          .code-brackets {
            color: orange;
            font-size: 2rem;
            font-weight: 500;
          }
        }
        &:hover {
          opacity: 0.8;
        }
        &:focus {
          outline: none;
          transform: scale(1.05);
          text-shadow: 2px 2px 0px rgba(255, 132, 0, 0.8);
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
      &:focus {
        outline: none;
        transform: scale(1.05);
        box-shadow: 2px 2px 2px 0px rgba(255, 132, 0, 0.8);
      }
    }
  }
}
</style>
