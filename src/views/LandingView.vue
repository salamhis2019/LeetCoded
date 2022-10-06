<template>
  <div class="landing-view-container">
    <div class="parent-wrapper">
      <div class="content-wrapper">
        <h1 class="hero-text">Its All LeetCoded .</h1>
        <div class="subcontent-container">
          <p class="subtext">
            Leetcode Solutions Visualized and journaled for personal use and use
            of others.
          </p>
          <button class="button">
            View Solutions
            <i class="fas fa-long-arrow-alt-right" style="font-size: 24px"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-view-container {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/blob-background.svg");
  background-size: cover;
  background-position: center;
  .parent-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 10rem;
    font-family: sans-serif;
    .content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 2rem;
      .hero-text {
        margin: 0;
        color: #ffffffe0;
        font-size: 3.5rem;
      }
      .subcontent-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 75%;
        .subtext {
          color: #ffffffe0;
          margin: 0;
        }
        .button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 2.5rem;
          padding: 0 1.5rem;
          border: none;
          border-radius: 0.5rem;
          background: #1b1f22;
          text-align: left;
          color: #ffffffc8;
          font-weight: 600;
          font-size: 1.2rem;
          cursor: pointer;
          transition: 0.2s;
          &:hover {
            box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.54);
          }
        }
      }
    }
  }
}
</style>
