<template>
  <div
    class="dropdown-menu absolute left-0 rounded-lg bg-[#282a35] shadow-lg"
    v-show="displayMenu"
  >
    <ul>
      <li class="filter-item flex justify-between gap-4">
        <form v-if="type === 'sort'" class="container flex w-36 flex-col">
          <div
            class="radio-container ease flex w-full items-center gap-2 rounded-md p-2.5 duration-200 hover:text-amber-500"
            :class="{ 'bg-[#353a3e] text-amber-500': id === sortId }"
            v-for="({ text, id }, index) in sortOptions"
            :key="text"
            @click="fetchData(null, null, text)"
          >
            <button
              class="radio-label w-full cursor-pointer text-left text-sm"
              @click.prevent="sortByText(id)"
            >
              {{ text }}
            </button>
            <i v-if="sortId === index" class="material-icons">check</i>
          </div>
        </form>
        <form
          v-if="type === 'filter'"
          class="container flex flex-col gap-4 p-3 pr-6"
        >
          <div
            class="radio-container ease flex w-full items-center gap-2 rounded-md p-0.5 duration-200 hover:text-amber-500"
            v-for="difficulty in filterOptions"
            :key="difficulty"
            @click="fetchData(null, difficulty, null)"
          >
            <input
              type="radio"
              class="radio cursor-pointer accent-amber-500"
              :id="difficulty.toLowerCase()"
              name="difficulty"
              :value="difficulty.toLowerCase()"
            />
            <label
              class="radio-label cursor-pointer"
              :for="difficulty.toLowerCase()"
            >
              {{ difficulty }}
            </label>
          </div>
        </form>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import useProblemsStore from "@/stores/problems.store";

defineProps(["displayMenu", "type"]);

const { fetchData } = useProblemsStore();

const filterOptions = ["Easy", "Medium", "Hard", "All"];

const sortId = ref();

const sortOptions = [
  {
    text: "Easy to Hard",
    id: 0,
  },
  {
    text: "Hard to Easy",
    id: 1,
  },
  {
    text: "None",
    id: 2,
  },
];

function sortByText(id: any) {
  sortId.value = id;
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  top: calc(100% + 1.2rem);
  transform: translateY(-10px);
  transition: opacity 150px ease-in-out, transform 150ms ease-in-out;
}
</style>
