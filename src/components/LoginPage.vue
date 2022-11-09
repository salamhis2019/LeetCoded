<template>
  <div
    class="popup fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
  >
    <div
      v-click-away="hideLoginWindow"
      class="popup-inner w-96 rounded-xl bg-[#1b1f22] p-6 shadow-lg shadow-black"
    >
      <slot />
      <p class="my-6 text-base text-white/80">
        Create an account and track your progress on hundreds of leetcode
        problems all solved in JavaScript from one place!
      </p>
      <div class="content-container flex w-full items-start">
        <div class="input-container flex w-full flex-col gap-4">
          <button
            class="flex h-12 items-center justify-between rounded-md bg-white/90 px-3 shadow-sm shadow-black duration-100 hover:bg-[#353a3e] hover:text-white active:translate-y-0.5"
          >
            <img
              src="@/assets/google-icon.svg"
              class="h-full w-10 border-r border-black pr-2"
              alt=""
            />
            <div class="text-container w-full">
              <p class="font-semibold">Sign in with Google</p>
            </div>
          </button>
          <form class="flex flex-col gap-2">
            <label for="email" class="text-white">Email Address:</label>
            <input
              v-model="email"
              type="text"
              id="email"
              name="email"
              placeholder="Email..."
              class="w-full rounded-lg border-white/80 bg-[#353a3e] p-2 text-white accent-white outline-0 duration-200 focus:border-amber-500 focus:placeholder-transparent"
            />
          </form>
          <form class="flex flex-col gap-2">
            <label for="password" class="text-white">Password:</label>
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
              class="w-full rounded-lg border-white/80 bg-[#353a3e] p-2 text-white accent-white outline-0 duration-200 focus:border-amber-500 focus:placeholder-transparent"
            />
          </form>
          <button
            @click="register"
            class="mt-4 rounded-xl border border-black bg-amber-500 p-2.5 font-bold shadow-md shadow-black duration-150 hover:brightness-125 active:translate-y-1"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useProblemsStore from "@/stores/problems.store";

const problemsStore = useProblemsStore();
const router = useRouter();
const { showLoginWindow } = storeToRefs(problemsStore);

const email = ref<string>("");
const password = ref<string>("");

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("successfully registered");
      router.push("/solutions");
    })
    .catch((error) => {
      console.log(error);
    });
};

function hideLoginWindow() {
  showLoginWindow.value = false;
}
</script>
