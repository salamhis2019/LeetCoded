<template>
  <div class="header flex h-8 justify-between">
    <h2 class="text-xl font-bold text-white">{{ headerText }}</h2>
    <button
      @click.prevent="showLoginWindow = false"
      class="close-window text-xl text-white duration-100 hover:text-amber-500"
    >
      X
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
          alt=""
        />
        <div class="text-container w-full">
          <p class="font-semibold">Sign in with Google</p>
        </div>
      </button>
      <form
        v-for="{ id, placeholder } in inputFields"
        :key="id"
        class="flex flex-col gap-2"
      >
        <label for="password" class="text-white">{{
          id[0].toUpperCase() + id.substring(1) + ":"
        }}</label>
        <input
          :v-model="id"
          :type="id"
          :id="id"
          :name="id"
          :placeholder="placeholder"
          class="w-full rounded-lg border-white/80 bg-[#353a3e] p-2 text-white accent-white outline-0 duration-200 focus:border-amber-500 focus:placeholder-transparent"
        />
      </form>
      <div
        v-if="renderErrorMessage"
        class="error-message-container rounded-md border-2 border-black bg-[#F7EAAB] p-2.5 shadow-md shadow-black"
      >
        <p class="text-black/80">
          Please enter valid email address and password
        </p>
      </div>
      <slot></slot>
      <button
        @click.prevent="buttonFunction"
        class="mt-4 flex h-12 justify-center rounded-xl border border-black bg-amber-500 font-bold shadow-md shadow-black duration-150 hover:brightness-125 active:translate-y-1"
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
import { defineProps } from "vue";
import { storeToRefs } from "pinia";
import useProblemsStore from "@/stores/problems.store";

const problemsStore = useProblemsStore();
const { showLoginWindow } = storeToRefs(problemsStore);

defineProps([
  "headerText",
  "buttonFunction",
  "buttonText",
  "signInWithGoogle",
  "renderLoadingSpinner",
  "renderErrorMessage",
]);

const inputFields = [
  {
    id: "email",
    placeholder: "Email...",
  },
  {
    id: "password",
    placeholder: "Password...",
  },
];
</script>