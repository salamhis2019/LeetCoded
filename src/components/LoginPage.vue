<template>
  <div
    class="popup fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
  >
    <div
      class="popup-inner mx-2 w-[600px] rounded-xl bg-[#1b1f22] p-6 shadow-lg shadow-black"
    >
      <LoginModal
        v-if="showSignIn"
        :headerText="'Sign In'"
        :buttonFunction="signIn"
        :buttonText="'Sign In'"
        :signInWithGoogle="signInWithGoogle"
        :renderLoadingSpinner="renderLoadingSpinner"
        :renderErrorMessage="renderErrorMessage"
        :errorMessage="errorMessage"
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
        :errorMessage="errorMessage"
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
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import useProblemsStore from "@/stores/problems.store";
import LoginModal from "@/components/common/login-modal.vue";

const problemsStore = useProblemsStore();
const { showLoginWindow } = storeToRefs(problemsStore);

const errorMessage = ref("");
const renderLoadingSpinner = ref<boolean>(false);
const renderErrorMessage = ref<boolean>(false);
const showSignIn = ref<boolean>(true);

const register = async (email: any, password: any, name: any) => {
  console.log("register function fired");
  renderLoadingSpinner.value = true;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((data) => {
      setTimeout(() => {
        console.log("successfully registered");
        console.log(auth.currentUser);
        showLoginWindow.value = false;
        renderLoadingSpinner.value = false;
        renderErrorMessage.value = true;
      }, 0);
    })
    .then(() => {
      console.log(auth.currentUser);
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        console.log(auth.currentUser);
      });
    })
    .catch((error) => {
      showLoginWindow.value = true;
      renderLoadingSpinner.value = false;
      renderErrorMessage.value = true;
      console.log(error);
    });
};

const signIn = (email: any, password: any, fullName: any) => {
  console.log("sign in function fired");
  renderLoadingSpinner.value = true;
  const auth = getAuth();
  signInWithEmailAndPassword(getAuth(), email, password)
    .then((data) => {
      setTimeout(() => {
        console.log("successfully registered");
        console.log(auth.currentUser?.displayName);
        showLoginWindow.value = false;
        renderLoadingSpinner.value = false;
        renderErrorMessage.value = true;
      }, 1000);
    })
    .catch((error) => {
      showLoginWindow.value = true;
      renderLoadingSpinner.value = false;
      renderErrorMessage.value = true;
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage.value = "Invalid email, please try again";
          break;
        case "auth/user-not-found":
          errorMessage.value =
            "No account with that email was found, try again!";
          break;
        case "auth/wrong-password":
          errorMessage.value = "Incorrect Password, please try again";
          break;
        default:
          errorMessage.value = "Email or password was incorrect, try again!";
          break;
      }
      console.log(error);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      setTimeout(() => {
        showLoginWindow.value = false;
        renderLoadingSpinner.value = false;
        renderErrorMessage.value = true;
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
