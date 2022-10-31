<template>
  <div
    class="search-bar-parent-container my-0 mx-8 flex h-36 items-center justify-center"
  >
    <div class="search-bar-container min-w-300 box-border flex h-12 py-4 px-6">
      <form class="input-container">
        <input
          v-model="inputText"
          class="search-bar"
          type="text"
          placeholder="Search..."
          @keydown.enter.prevent="
            searchData(inputText.replace(/\s/g, '').toLowerCase())
          "
        />
      </form>
      <div class="search-bar-right">
        <div class="sort dropdown" v-click-away="onClickAway">
          <div class="dropdown-button" @click="showDropdown = !showDropdown">
            <button class="sort-button">
              Filter By
              <i
                class="fa fa-angle-down"
                :class="{ 'chevron-clicked': showDropdown }"
              ></i>
            </button>
          </div>
          <DropdownMenu :options="difficulties" :displayMenu="showDropdown" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useProblemsStore from "@/stores/problems.store";
import DropdownMenu from "@/components/common/vue-dropdown.vue";

const { searchData } = useProblemsStore();

const inputText = ref("");

const showDropdown = ref(false);

const difficulties = ["Easy", "Medium", "Hard", "All"];

function onClickAway() {
  showDropdown.value = false;
}
</script>

<style lang="scss" scoped>
.search-bar-parent-container {
  .search-bar-container {
    width: 600px;
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
        box-sizing: border-box;
        .sort-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "Encode Sans", sans-serif;
          font-size: 1rem;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          transition: 0.2s ease;
          .fa-angle-down {
            font-size: 1.5rem;
            cursor: pointer;
          }
          .chevron-clicked {
            transform: rotate(270deg);
          }
          &:focus {
            outline: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            background: #353a3e;
            box-shadow: 0 2px 5px 0 rgba(255, 255, 255, 0.103);
          }
        }
        &:hover {
          opacity: 0.8;
        }
      }
      .dropdown {
        position: relative;
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
