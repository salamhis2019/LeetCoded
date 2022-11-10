<template>
  <div :class="clsx(baseClasses, sizeClasses[size], colorClasses[color])">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { clsx } from "clsx";

defineProps({
  size: {
    type: String,
    validator: (s: any) => ["primary", "secondary"].includes(s),
    default: "pill",
  },
  color: {
    type: String,
    validator: (s: any) => ["easy", "medium", "hard"].includes(s),
    default: "easy",
  },
});

const baseClasses: any = "font-semibold text-black";

const sizeClasses: any = {
  primary:
    "text-base py-1 px-4 rounded-lg max-[540px]:px-3 max-[540px]:text-sm",
  secondary: "text-sm py-1 px-3 rounded-md",
};

const colorClasses: any = {
  easy: "bg-[#52b5a3]",
  medium: "bg-[#efbe48]",
  hard: "bg-[#eb4b63]",
};
</script>
