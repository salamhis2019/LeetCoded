<template>
  <div
    class="sort dropdown relative flex items-center text-base text-white"
    v-click-away="onClickAway"
  >
    <div
      class="dropdown-button flex justify-center"
      @click="showDropdown = !showDropdown"
    >
      <button
        class="sort-button ease box-border flex w-[120px] cursor-pointer items-center justify-between gap-2 rounded-lg border-none bg-[#1b1f22] px-4 py-1 text-white/90 shadow-lg duration-200 hover:opacity-80"
      >
        Filter By
        <i
          class="fa fa-angle-down cursor-pointer text-2xl"
          :class="{ 'chevron-clicked': showDropdown }"
        ></i>
      </button>
    </div>
    <DropdownItems :displayMenu="showDropdown" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useProblemsStore from "@/stores/problems.store";
import DropdownItems from "@/components/common/dropdown-items.vue";

const { fetchData } = useProblemsStore();

const showDropdown = ref(false);

function onClickAway() {
  showDropdown.value = false;
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  top: calc(100% + 1.2rem);
  transform: translateY(-10px);
  transition: opacity 150px ease-in-out, transform 150ms ease-in-out;
}
</style>
