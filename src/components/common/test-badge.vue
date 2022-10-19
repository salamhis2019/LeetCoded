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

const baseClasses = "difficulty-badge";

const sizeClasses: any = {
  primary: "primary",
  medium: "",
};

const colorClasses: any = {
  easy: "easy",
};
</script>

<style lang="scss" scoped>
.difficulty-badge {
  font-weight: 600;
  font-size: 0.9rem;
  color: rgb(0, 0, 0);
  padding: 0.3rem 1rem;
  border-radius: 10px;
  p {
    margin: 0;
  }
}
.easy {
  background: #52b5a3;
}
.medium {
  background: #efbe48;
}
.hard {
  background: #eb4b63;
}
</style>
