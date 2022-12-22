<template>
  <input type="checkbox" class="h-6 w-6 cursor-pointer" v-model="checked" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checked = ref();
</script>
