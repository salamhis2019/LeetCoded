<template>
  <div
    class="difficulty-badge"
    :class="
      difficulty === 'Easy'
        ? 'easy'
        : difficulty === 'Medium'
        ? 'medium'
        : 'hard'
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps(["difficulty"]);
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

@media only screen and (max-width: 400px) {
  .difficulty-badge {
    padding: 0.2rem 0.8rem;
    font-size: 0.7rem;
  }
}
</style>
