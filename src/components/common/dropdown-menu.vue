<template>
  <div
    class="sort dropdown relative flex items-center text-base text-white max-[540px]:w-full"
    v-click-away="onClickAway"
  >
    <div
      class="dropdown-button flex h-full justify-center max-[540px]:w-full"
      @click="showDropdown = !showDropdown"
    >
      <button
        class="sort-button ease box-border flex w-[120px] cursor-pointer items-center justify-between gap-2 rounded-lg border-none bg-[#1b1f22] px-4 py-1 text-white/90 shadow-lg duration-200 hover:opacity-80 max-[540px]:w-full"
      >
        {{ menuText }}
        <i
          :class="showDropdown ? icon + ' rotate-180' : icon"
          class="cursor-pointer text-2xl font-bold duration-200"
        ></i>
      </button>
    </div>
    <Transition name="dropdown-content">
      <DropdownItems :displayMenu="showDropdown" :type="type" />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import DropdownItems from "@/components/common/dropdown-items.vue";

defineProps(["type", "menuText", "icon"]);

const showDropdown = ref<boolean>(false);

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
.active {
  transform: rotate(45);
}

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
