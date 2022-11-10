<template>
  <div class="nav-parent-container h-14 bg-[#1b1f22]">
    <nav
      class="nav-container flex h-full items-center justify-between py-0 px-12"
    >
      <div class="logo-container flex items-center">
        <router-link
          class="router-link flex items-center no-underline duration-200 ease-in-out hover:opacity-80 focus:scale-105 focus:rounded-lg focus:bg-zinc-700 focus:px-4 focus:shadow-lg focus:outline-none"
          to="/"
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
        @click="showLoginWindow = true"
        v-if="!isLoggedIn"
        class="login-button ease cursor-pointer rounded-lg border-none bg-[#353a3e] py-1.5 px-6 text-base font-semibold text-white/90 duration-200 hover:scale-105 focus:scale-105 focus:shadow-lg focus:outline-0"
      >
        Login
      </button>
      <div v-else class="signed-in-container">
        <button
          class="flex items-center gap-2 text-white"
          @click="handleSignout"
        >
          Hello, <span class="font-bold italic">{{ currentUser }}</span>
          <i
            class="fa fa-angle-down cursor-pointer text-2xl font-bold"
            data-v-71fbddf2
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import useProblemsStore from "@/stores/problems.store";

const problemsStore = useProblemsStore();
const { showSolution, showLoginWindow } = storeToRefs(problemsStore);

const isLoggedIn = ref(false);

function logoClicked() {
  showSolution.value = false;
}

const handleSignout = () => {
  signOut(auth).then(() => {
    console.log("signed out");
  });
};

const currentUser = ref<any>("");
let auth: any;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user: ", user.email);
      currentUser.value = user.email;
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
</script>
