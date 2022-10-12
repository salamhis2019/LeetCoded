<template>
  <div class="results-parent-container">
    <div class="results-container">
      <div
        v-for="({ name, difficulty }, index) in problems"
        :key="name"
        class="problem-card"
        :class="{ 'card-dark': index % 2 !== 0 }"
      >
        <div class="problem-card-left">
          <router-link to="/" class="problem-link">{{ name }}</router-link>
          <div class="difficulty-badge">
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
import Problems from "@/data/problems";

const problems = Problems;
</script>

<style lang="scss">
.results-parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 60px);
  margin: 0 auto;
  .results-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-sizing: border-box;
    max-width: 1050px;
    max-height: 550px;
    min-width: 300px;
    min-height: 550px;
    width: 700px;
    margin: 0 2rem;
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
          p {
            margin: 0;
          }
        }
      }
      input[type="checkbox"] {
        accent-color: #52b5a3;
      }
      .checkbox {
        height: 24px;
        width: 24px;
      }
    }
    .card-dark {
      background: none;
    }
  }
}
</style>
