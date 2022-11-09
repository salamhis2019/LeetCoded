<template>
  <div
    class="popup fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
  >
    <div
      class="popup-inner w-96 rounded-xl bg-[#1b1f22] p-6 shadow-lg shadow-black"
    >
      <div class="header flex h-8 justify-between">
        <h2 class="text-xl font-bold text-white">Sign In</h2>
        <button
          @click.prevent="showLoginWindow = false"
          class="close-window text-xl text-white duration-100 hover:text-amber-500"
        >
          X
        </button>
      </div>
      <p class="my-6 text-base text-white/80">
        Create an account and track your progress on hundreds of leetcode
        problems all solved in JavaScript from one place!
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
          <div class="signup-container flex gap-1 text-white">
            <p>Don't have an account yet,</p>
            <button
              class="text-[#52b5a3] underline duration-100 hover:brightness-125"
            >
              sign up!
            </button>
          </div>
          <button
            @click.prevent="register"
            class="mt-4 flex h-12 justify-center rounded-xl border border-black bg-amber-500 font-bold shadow-md shadow-black duration-150 hover:brightness-125 active:translate-y-1"
          >
            <p v-if="!renderLoadingSpinner" class="p-2.5">Login</p>
            <img
              v-else
              src="@/assets/login-loading.svg"
              alt="loading spinner"
              class="relative w-12"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import useProblemsStore from "@/stores/problems.store";

const problemsStore = useProblemsStore();
const { showLoginWindow } = storeToRefs(problemsStore);

const email = ref<string>("");
const password = ref<string>("");

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

const renderLoadingSpinner = ref<boolean>(false);
const renderErrorMessage = ref<boolean>(false);

const register = () => {
  renderLoadingSpinner.value = true;
  const auth = getAuth();
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      setTimeout(() => {
        console.log("successfully registered");
        console.log(auth.currentUser);
        showLoginWindow.value = false;
        renderLoadingSpinner.value = false;
        renderErrorMessage.value = true;
      }, 1000);
    })
    .catch((error) => {
      showLoginWindow.value = true;
      renderLoadingSpinner.value = false;
      renderErrorMessage.value = true;
      console.log(error);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
};

function hideLoginWindow() {
  console.log("this function fired");
  showLoginWindow.value = false;
}
</script>
