<template>
  <div
    class="search-bar-parent-container my-0 mx-8 flex h-36 items-center justify-center"
  >
    <div class="search-bar-container flex gap-4">
      <form
        class="input-container relative w-full min-w-[200px] rounded-lg bg-[#1b1f22]"
      >
        <input
          v-model="inputText"
          class="search-bar block h-full w-full rounded-lg bg-[#1b1f22] py-2 px-4 text-base text-white/90 placeholder-white duration-100 focus:outline focus:outline-white"
          type="text"
          placeholder="Search..."
          @keydown.enter.prevent="
            fetchData(inputText.replace(/\s/g, '').toLowerCase(), null, null)
          "
        />
        <button
          type="submit"
          class="absolute top-0 right-0 z-20 inline-block border-none bg-transparent py-2.5 px-3"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </form>
      <div class="search-bar-right flex gap-4">
        <DropdownMenu
          :menuText="'Sort By'"
          :icon="'fa fa-unsorted'"
          :type="'sort'"
        />
        <DropdownMenu
          :menuText="'Filter By'"
          :icon="'fa fa-angle-down'"
          :type="'filter'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useProblemsStore from "@/stores/problems.store";
import DropdownMenu from "@/components/common/dropdown-menu.vue";

const { fetchData } = useProblemsStore();

const inputText = ref("");
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
