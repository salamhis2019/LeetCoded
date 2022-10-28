<template>
  <div class="dropdown-menu" v-show="showDropdown">
    <ul>
      <li class="filter-item">
        <form class="container">
          <div
            class="radio-container"
            v-for="difficulty in difficulties"
            :key="difficulty"
            @click="filterData(difficulty)"
          >
            <input
              type="radio"
              class="radio"
              :id="difficulty.toLowerCase()"
              name="difficulty"
              :value="difficulty.toLowerCase()"
            />
            <label class="radio-label" :for="difficulty.toLowerCase()">
              {{ difficulty }}
            </label>
          </div>
        </form>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useProblemsStore from "@/stores/problems.store";

const { filterData } = useProblemsStore();

const showDropdown = ref(false);

const difficulties = ["Easy", "Medium", "Hard", "All"];
</script>
