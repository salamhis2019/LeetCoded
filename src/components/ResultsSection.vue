<template>
  <div class="results-parent-container">
    <div class="results-container">
      <div
        v-for="({ name, difficulty }, index) in currentProblems"
        :key="index"
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
  </div>
</template>

<script lang="ts" setup>
import ProblemsStore from "@/stores/problems.store";
import { storeToRefs } from "pinia";

const problemsStore = ProblemsStore();

const { currentProblems } = storeToRefs(problemsStore);
</script>

<style lang="scss" scoped>
.results-parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .results-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-sizing: border-box;
    width: 700px;
    max-height: 550px;
    min-height: 300px;
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
  @media only screen and (max-width: 750px) and (min-width: 350px) {
    .results-container {
      .problem-card {
        .problem-card-left {
          .problem-link {
            font-size: 1rem;
          }
          .difficulty-badge {
            display: none;
            font-size: 0.6rem;
          }
        }
      }
    }
  }
}
</style>
