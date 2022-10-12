<template>
  <div class="results-parent-container">
    <div class="results-container">
      <div
        v-for="({ name, difficulty }, index) in currentProblems"
        :key="name"
        class="problem-card"
        :class="{ 'card-dark': index % 2 !== 0 }"
      >
        <div class="problem-card-left">
          <router-link to="/" class="problem-link">{{ name }}</router-link>
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
            <p>{{ difficulty }}</p>
          </div>
        </div>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          class="checkbox"
        />
      </div>
    </div>
    <div class="pagination-container">
      <button
        class="button"
        :class="{ active: currentPage === index + 1 }"
        v-for="(item, index) in pages"
        :key="item"
        @click="updateCurrentPage(index)"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Problems from "@/data/problems";
import { ref, computed, watch } from "vue";

const problems = Problems;

const pages = computed(() => {
  return problems.length / 8;
});

const currentPage = ref<number>(1);
const pageStart = ref(0);
const pageEnd = ref(9);

const currentProblems = ref(problems.slice(pageStart.value, pageEnd.value));

watch(currentPage, (newPage, oldPage) => {
  console.log(oldPage, newPage);

  if (newPage > oldPage) {
    pageStart.value += 8;
    pageEnd.value += 8;
  }

  if (newPage < oldPage) {
    pageStart.value -= 8;
    pageEnd.value -= 8;
  }

  if (currentPage.value === 1) {
    pageStart.value = 0;
    pageEnd.value = 9;
  }

  currentProblems.value = problems.slice(pageStart.value, pageEnd.value);
});

function updateCurrentPage(index: number) {
  currentPage.value = index + 1;
}
</script>

<style lang="scss">
.results-parent-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .results-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-sizing: border-box;
    max-width: 1050px;
    max-height: 550px;
    min-width: 300px;
    min-height: 300px;
    width: 700px;
    margin: 0 2rem 2rem 2rem;
    padding: 1rem;
    background-color: #1b1f22;
    border-radius: 12px;
    .problem-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      box-sizing: border-box;
      background: #353a3e;
      padding: 0.5rem 1.5rem;
      border-radius: 10px;
      .problem-card-left {
        display: flex;
        align-items: center;
        gap: 1rem;
        .problem-link {
          margin: 0;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
          transition: 0.2s;
          &:hover {
            color: #ff9900;
          }
        }
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
      }
      input[type="checkbox"] {
        accent-color: #52b5a3;
      }
      .checkbox {
        height: 24px;
        width: 24px;
        cursor: pointer;
      }
    }
    .card-dark {
      background: none;
    }
  }
  .pagination-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    max-width: 1050px;
    min-width: 300px;
    width: 700px;
    margin-bottom: 2rem;
    .button {
      padding: 0.75rem 1rem;
      color: white;
      font-weight: 600;
      font-size: 1.2rem;
      background: #1b1f22;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background: #353a3e;
      }
      &:active {
        background: #ff9900;
      }
      &:focus {
        outline: none;
        box-shadow: 0px 0px 6px white;
      }
    }
    .active {
      background: #ff9900;
      color: #1b1f22;
    }
  }
}
</style>
