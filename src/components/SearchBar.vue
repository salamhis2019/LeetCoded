<template>
  <div
    class="search-bar-parent-container my-0 mx-8 flex h-36 items-center justify-center"
  >
    <div
      class="search-bar-container min-w-300 box-border flex h-12 rounded-xl bg-[#1b1f22] py-2 px-4"
    >
      <form class="input-container flex grow">
        <input
          v-model="inputText"
          class="search-bar h-full w-full rounded-xl border-none bg-transparent text-base text-white/90 placeholder-white outline-none"
          type="text"
          placeholder="Search..."
          @keydown.enter.prevent="
            searchData(inputText.replace(/\s/g, '').toLowerCase())
          "
        />
      </form>
      <div class="search-bar-right flex">
        <div
          class="sort dropdown relative flex items-center text-base text-white"
          v-click-away="onClickAway"
        >
          <div class="dropdown-button" @click="showDropdown = !showDropdown">
            <button
              class="sort-button ease box-border flex cursor-pointer items-center gap-2 border-none bg-transparent px-1 text-white/90 duration-200 hover:opacity-80 focus:rounded-lg focus:bg-[#353a3e] focus:outline-0"
            >
              Filter By
              <i
                class="fa fa-angle-down cursor-pointer text-2xl"
                :class="{ 'chevron-clicked': showDropdown }"
              ></i>
            </button>
          </div>
          <DropdownMenu :options="difficulties" :displayMenu="showDropdown" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useProblemsStore from "@/stores/problems.store";
import DropdownMenu from "@/components/common/vue-dropdown.vue";

const { searchData } = useProblemsStore();

const inputText = ref("");

const showDropdown = ref(false);

const difficulties = ["Easy", "Medium", "Hard", "All"];

function onClickAway() {
  showDropdown.value = false;
}
</script>

<style lang="scss" scoped>
.search-bar-parent-container {
  .search-bar-container {
    width: 600px;
    .search-bar-right {
      .dropdown-button {
        .sort-button {
          .chevron-clicked {
            transform: rotate(270deg);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 450px) {
  .search-bar-parent-container {
    height: 150px;
  }
}
</style>
