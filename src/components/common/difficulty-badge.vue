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
  secondary: "secondary",
};

const colorClasses: any = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
};
</script>

<style lang="scss" scoped>
.difficulty-badge {
  font-weight: 600;
  color: rgb(0, 0, 0);
  p {
    margin: 0;
  }
}
.primary {
  font-size: 1rem;
  padding: 0.3rem 1rem;
  border-radius: 10px;
}

.secondary {
  font-size: 0.8rem;
  padding: 0.2rem 0.8rem;
  border-radius: 8px;
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
