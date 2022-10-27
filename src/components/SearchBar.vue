<template>
  <div class="search-bar-parent-container">
    <div class="search-bar-container">
      <form class="input-container">
        <input
          v-model="inputText"
          class="search-bar"
          type="text"
          placeholder="Search..."
          @keydown.enter="
            searchData(inputText.replace(/\s/g, '').toLowerCase())
          "
        />
      </form>
      <div class="search-bar-right">
        <div class="sort dropdown">
          <div
            class="dropdown-button"
            v-click-away="onClickAway"
            @click="showDropdown = !showDropdown"
          >
            <button class="sort-button">Sort</button>
            <i
              class="fa fa-angle-down"
              :class="{ 'chevron-clicked': showDropdown }"
            ></i>
          </div>
          <div class="dropdown-menu" v-show="showDropdown">
            <ul>
              <li
                class="filter-item"
                v-for="difficulty in difficulties"
                :key="difficulty"
              >
                <a>{{ difficulty }}</a>
                <input type="checkbox" :id="difficulty" :name="difficulty" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useProblemsStore from "@/stores/problems.store";

const { searchData } = useProblemsStore();

const inputText = ref("");

const showDropdown = ref(false);

const difficulties = ["Easy", "Medium", "Hard"];

function onClickAway() {
  showDropdown.value = false;
}
</script>

<style lang="scss" scoped>
.search-bar-parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin: 0 2rem;
  .search-bar-container {
    display: flex;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    height: 50px;
    min-width: 300px;
    width: 650px;
    background: #1b1f22;
    border-radius: 12px;
    .input-container {
      display: flex;
      flex-grow: 4;
      height: 100%;
      .search-bar {
        height: calc(100% - 2px);
        width: 100%;
        background: none;
        border: none;
        border-radius: 12px;
        outline: none;
        font-size: 1.2rem;
        color: white;
        &::placeholder {
          color: hsla(0, 0%, 100%, 0.9);
        }
      }
    }
    .search-bar-right {
      display: flex;
      gap: 2rem;
      .sort {
        display: flex;
        align-items: center;
        color: hsla(0, 0%, 100%, 0.9);
        p {
          font-size: 1.2rem;
          margin: 0;
        }
      }
      .dropdown-button {
        display: flex;
        .sort-button {
          font-family: "Encode Sans", sans-serif;
          font-size: 1rem;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }
        .fa-angle-down {
          font-size: 1.5rem;
        }
        .chevron-clicked {
          transform: rotate(270deg);
        }
        &:hover {
          opacity: 0.8;
        }
      }
      .dropdown {
        position: relative;
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
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 450px) {
  .search-bar-parent-container {
    height: 150px;
  }
}
</style>
