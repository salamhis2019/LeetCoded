<template>
  <div class="nav-parent-container h-14 bg-[#1b1f22]">
    <nav
      class="nav-container flex h-full items-center justify-between gap-2 py-0 px-12 max-[450px]:px-8"
    >
      <div class="logo-container flex items-center">
        <router-link
          class="router-link flex items-center no-underline duration-200 ease-in-out hover:opacity-80 focus:scale-105 focus:rounded-lg focus:bg-zinc-700 focus:px-4 focus:shadow-lg focus:outline-none"
          to="/"
          @click="logoClicked"
        >
          <h1 class="hero-text text-2xl text-white/90">
            <span
              class="leetcoded-text flex items-center gap-2 font-semibold italic max-[450px]:text-xl"
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
      <div
        v-else
        class="signed-in-container relative flex items-center gap-2 text-base text-white"
      >
        <div
          class="button-container flex cursor-pointer gap-2"
          @click="showDropdown = !showDropdown"
        >
          <button class="flex items-center gap-2 text-white">
            Hello, <span class="font-bold italic">{{ currentUser }}</span>
          </button>
          <i
            class="fa fa-angle-down cursor-pointer text-2xl font-bold duration-200"
            :class="{ 'rotate-180': showDropdown }"
            data-v-71fbddf2
            aria-hidden="true"
          ></i>
        </div>
        <Transition name="dropdown-content">
          <div
            v-if="showDropdown"
            v-click-away="handleDropdown"
            class="submenu-parent-container absolute top-[100%] translate-y-2 shadow-lg shadow-black"
          >
            <div class="submenu w-48 rounded-md bg-[#282a35] p-2.5">
              <div class="menu-item">
                <button
                  class="duration-100 hover:text-amber-500"
                  @click="handleSignout"
                >
                  Sign Out
                </button>
              </div>
            </div>
            <div
              class="triUp absolute top-[-29px] left-[150px] h-0 w-0 border-[15px] border-t-transparent border-l-transparent border-r-transparent border-b-[#282a35]"
            ></div>
          </div>
        </Transition>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import useProblemsStore from "@/stores/problems.store";
import DropdownItems from "@/components/common/dropdown-items.vue";

const problemsStore = useProblemsStore();
const { fetchData } = problemsStore;
const { showSolution, showLoginWindow } = storeToRefs(problemsStore);

const isLoggedIn = ref(false);
const showDropdown = ref<boolean>(false);

function logoClicked() {
  showSolution.value = false;
}

const handleSignout = () => {
  signOut(auth).then(() => {
    console.log("signed out");
    fetchData(null, null, null);
  });
};

const handleDropdown = () => {
  showDropdown.value = false;
};

const currentUser = ref<any>("");
let auth: any;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user: ", user.email);
      currentUser.value = user.displayName;
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
</script>

<style lang="scss">
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.2s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
