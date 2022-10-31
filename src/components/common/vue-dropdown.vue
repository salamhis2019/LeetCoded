<template>
  <div
    class="dropdown-menu absolute left-0 rounded-lg bg-[#282a35] shadow-lg"
    v-show="displayMenu"
  >
    <ul flex flex-col gap-3 list-none m-0 p-4>
      <li class="filter-item flex justify-between gap-4">
        <form class="container flex flex-col gap-4 p-3">
          <div
            class="radio-container ease flex w-full items-center gap-2 rounded-md p-0.5 duration-200 hover:text-amber-500"
            v-for="difficulty in options"
            :key="difficulty"
            @click="filterData(difficulty)"
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
import { defineProps } from "vue";
import useProblemsStore from "@/stores/problems.store";

defineProps(["options", "displayMenu"]);

const { filterData } = useProblemsStore();
</script>

<style lang="scss" scoped>
.dropdown-menu {
  top: calc(100% + 1.2rem);
  transform: translateY(-10px);
  transition: opacity 150px ease-in-out, transform 150ms ease-in-out;
}
</style>
