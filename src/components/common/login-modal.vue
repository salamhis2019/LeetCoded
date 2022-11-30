<template>
  <div class="header flex h-8 justify-between">
    <h2 class="text-xl font-bold text-white">{{ headerText }}</h2>
    <button
      @click.prevent="showLoginWindow = false"
      class="close-window text-xl text-white duration-100 hover:text-amber-500"
    >
      <img
        class="w-5 duration-100 hover:scale-110"
        src="@/assets/x-icon.svg"
        alt="X icon for login page"
      />
    </button>
  </div>
  <p class="my-6 text-base text-white/80">
    Create an account and track your progress on hundreds of leetcode problems
    all solved in JavaScript from one place!
  </p>
  <div class="content-container flex w-full items-start">
    <div class="input-container flex w-full flex-col gap-4">
      <button
        @click.prevent="signInWithGoogle"
        class="flex h-12 items-center justify-between rounded-md bg-white/90 px-3 shadow-sm shadow-black duration-100 hover:bg-[#353a3e] hover:text-white active:translate-y-0.5"
      >
        <img
          src="@/assets/google-icon.svg"
          class="h-full w-10 border-r border-black pr-2"
          alt="google sign in icon"
        />
        <div class="text-container w-full">
          <p class="font-semibold">Sign in with Google</p>
        </div>
      </button>
      <div v-if="!showSignIn" class="name-info-container flex w-full gap-4">
        <form class="flex w-full flex-col gap-2">
          <label for="email" class="text-white">First Name:</label>
          <input
            v-model="firstName"
            type="firstName"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            class="w-full rounded-lg border-white/80 bg-[#353a3e] p-2 text-white accent-white outline-0 duration-200 focus:border-amber-500 focus:placeholder-transparent"
            :class="
              renderErrorMessage && firstName.length === 0
                ? 'border-2 border-red-600'
                : renderErrorMessage
            "
          />
        </form>
        <form class="flex w-full flex-col gap-2">
          <label for="email" class="text-white">Last Name:</label>
          <input
            v-model="lastName"
            type="lastName"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            class="w-full rounded-lg border-white/80 bg-[#353a3e] p-2 text-white accent-white outline-0 duration-200 focus:border-amber-500 focus:placeholder-transparent"
            :class="
              renderErrorMessage && lastName.length === 0
                ? 'border-2 border-red-600'
                : renderErrorMessage
            "
          />
        </form>
      </div>
      <form class="flex flex-col gap-2">
        <label for="email" class="text-white">Email:</label>
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          placeholder="Email..."
          class="w-full rounded-lg border-white/80 bg-[#353a3e] p-2 text-white accent-white duration-200 focus:border-amber-500 focus:placeholder-transparent"
          :class="{ 'border-2 border-red-600': renderErrorMessage }"
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
          :class="
            renderErrorMessage && lastName.length === 0
              ? 'border-2 border-red-600'
              : renderErrorMessage
          "
        />
      </form>
      <div
        v-if="renderErrorMessage"
        class="error-message-container flex gap-2 rounded-md border-2 border-black bg-[#F7EAAB] p-2.5 shadow-md shadow-black"
      >
        <img class="error-icon w-6" src="@/assets/exclamation.svg" alt="" />
        <p class="text-black/80">
          {{ errorMessage }}
        </p>
      </div>
      <slot></slot>
      <button
        @click.prevent="buttonFunction(email, password, firstName, lastName)"
        class="mt-4 flex h-12 justify-center rounded-xl border border-black font-bold shadow-md shadow-black duration-150 hover:brightness-125 active:translate-y-1"
        :class="showSignIn ? 'bg-amber-500' : 'bg-[#52b5a3]'"
      >
        <p v-if="!renderLoadingSpinner" class="p-2.5">{{ buttonText }}</p>
        <img
          v-else
          src="@/assets/login-loading.svg"
          alt="loading spinner"
          class="relative w-12"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { storeToRefs } from "pinia";
import useProblemsStore from "@/stores/problems.store";

const problemsStore = useProblemsStore();
const { showLoginWindow } = storeToRefs(problemsStore);

const email = ref("");
const password = ref("");
const firstName = ref("");
const lastName = ref("");

defineProps([
  "showSignIn",
  "headerText",
  "buttonFunction",
  "buttonText",
  "signInWithGoogle",
  "renderLoadingSpinner",
  "renderErrorMessage",
  "errorMessage",
]);
</script>
