<template>
  <div class="nav-parent-container h-14 bg-[#1b1f22]">
    <nav
      class="nav-container flex h-full items-center justify-between py-0 px-12"
    >
      <div class="logo-container flex items-center">
        <router-link
          class="router-link flex items-center no-underline duration-200 ease-in-out hover:opacity-80 focus:scale-105 focus:rounded-lg focus:bg-zinc-700 focus:px-4 focus:shadow-lg focus:outline-none"
          to="/home"
          @click="logoClicked"
        >
          <h1 class="hero-text text-2xl text-white/90">
            <span
              class="leetcoded-text flex items-center gap-2 font-semibold italic"
              >LeetCoded
              <span class="code-brackets 4xl font-medium text-amber-500"
                >&lt;></span
              ></span
            >
          </h1>
        </router-link>
      </div>
      <button
        class="login-button ease cursor-pointer rounded-lg border-none bg-[#353a3e] py-1.5 px-6 text-base font-semibold text-white/90 duration-200 hover:scale-105 focus:scale-105 focus:shadow-lg focus:outline-0"
      >
        Login
      </button>
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
