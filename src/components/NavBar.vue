<template>
  <div class="nav-parent-container h-14 bg-[#1b1f22]">
    <nav
      class="nav-container flex justify-between items-center h-full py-0 px-12"
    >
      <div class="logo-container flex items-center">
        <router-link
          class="router-link flex items-center no-underline hover:opacity-80 focus:outline-0 focus:scale-105 focus:shadow-lg focus:bg-zinc-700 focus:px-4 focus:rounded-lg ease-in-out duration-200"
          to="/"
          @click="logoClicked"
        >
          <h1 class="hero-text text-white/90 text-2xl">
            <span
              class="leetcoded-text flex items-center gap-2 italic font-semibold"
              >LeetCoded
              <span class="code-brackets text-amber-500 text-4xl font-medium"
                >&lt;></span
              ></span
            >
          </h1>
        </router-link>
      </div>
      <button
        class="login-button py-1.5 px-6 text-white/90 text-base font-semibold bg-[#353a3e] border-none rounded-lg ease duration-200 cursor-pointer hover:scale-105 focus:scale-105 focus:outline-0 focus:shadow-lg"
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
