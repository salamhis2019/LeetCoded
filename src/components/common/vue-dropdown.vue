<template>
  <div class="dropdown-menu" v-show="displayMenu">
    <ul>
      <li class="filter-item">
        <form class="container">
          <div
            class="radio-container"
            v-for="difficulty in options"
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
import { defineProps } from "vue";
import useProblemsStore from "@/stores/problems.store";

defineProps(["options", "displayMenu"]);

const { filterData } = useProblemsStore();
</script>

<style lang="scss" scoped>
.dropdown-menu {
  position: absolute;
  left: 0;
  top: calc(100% + 1.2rem);
  border-radius: 8px;
  background: #282a35;
  box-shadow: 0 2px 5px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-10px);
  transition: opacity 150px ease-in-out, transform 150ms ease-in-out;
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style-type: none;
    margin: 0;
    padding: 1rem;
    .filter-item {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .radio-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.1rem;
          border-radius: 5px;
          &:hover {
            color: rgba(255, 145, 0, 0.75);
          }
          .radio-label {
            cursor: pointer;
          }
          .radio {
            accent-color: orange;
          }
        }
      }
    }
  }
}
</style>
