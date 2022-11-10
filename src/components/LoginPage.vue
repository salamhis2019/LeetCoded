<template>
  <div
    class="popup fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
  >
    <div
      class="popup-inner w-96 rounded-xl bg-[#1b1f22] p-6 shadow-lg shadow-black"
    >
      <LoginModal
        v-if="showSignIn"
        :headerText="'Sign In'"
        :buttonFunction="signIn"
        :buttonText="'Sign In'"
        :signInWithGoogle="signInWithGoogle"
        :renderLoadingSpinner="renderLoadingSpinner"
        :renderErrorMessage="renderErrorMessage"
      >
        <div class="signup-container flex gap-1 text-white">
          <p>Don't have an account yet,</p>
          <button
            @click.prevent="showSignIn = false"
            class="text-[#52b5a3] underline duration-100 hover:brightness-125"
          >
            sign up!
          </button>
        </div>
      </LoginModal>
      <LoginModal
        v-else
        :headerText="'Create Account'"
        :buttonFunction="register"
        :buttonText="'Create Account'"
        :signInWithGoogle="signInWithGoogle"
        :renderLoadingSpinner="renderLoadingSpinner"
        :renderErrorMessage="renderErrorMessage"
      >
        <div class="signup-container flex gap-1 text-white">
          <p>Already have an account?</p>
          <button
            @click="showSignIn = true"
            class="text-[#52b5a3] underline duration-100 hover:brightness-125"
          >
            Sign In!
          </button>
        </div>
      </LoginModal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import useProblemsStore from "@/stores/problems.store";
import LoginModal from "@/components/common/login-modal.vue";

const problemsStore = useProblemsStore();
const { showLoginWindow } = storeToRefs(problemsStore);

const renderLoadingSpinner = ref<boolean>(false);
const renderErrorMessage = ref<boolean>(false);
const showSignIn = ref<boolean>(true);

const register = (email: any, password: any) => {
  console.log("register function fired");
  renderLoadingSpinner.value = true;
  const auth = getAuth();
  createUserWithEmailAndPassword(getAuth(), email, password)
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

const signIn = (email: any, password: any) => {
  console.log("sign in function fired");
  renderLoadingSpinner.value = true;
  const auth = getAuth();
  signInWithEmailAndPassword(getAuth(), email, password)
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
</script>
