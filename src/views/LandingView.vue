<template>
  <div class="landing-view-container h-full w-full bg-cover bg-center">
    <div class="parent-wrapper flex items-center h-full ml-40 font-sans">
      <div class="content-wrapper flex flex-col gap-8 mb-8">
        <h1 class="hero-text text-white/90 font-light text-6xl">
          Its All
          <span class="font-semibold italic leetcoded-text"
            >LeetCoded
            <span class="code-brackets text-amber-500 font-black"
              >&lt; / ></span
            ></span
          >
        </h1>
        <div class="subcontent-container flex flex-col gap-8 w-9/12">
          <p class="subtext text-white/90 text-base m-0">
            Leetcode Solutions Visualized and journaled for personal use and use
            of others
          </p>
          <router-link
            :to="'/solutions'"
            class="button flex items-center justify-between w-full h-10 py-0 px-6 border-none rounded-lg text-left no-underline text-white/90 font-semibold text-lg cursor-pointer"
          >
            View Solutions
            <i class="fas fa-long-arrow-alt-right" style="font-size: 24px"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-view-container {
  background-image: url("@/assets/blob-background.svg");
  .parent-wrapper {
    .content-wrapper {
      .subcontent-container {
        .button {
          background: #1b1f22;
          transition: 0.2s;
          &:hover {
            box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.54);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 550px) {
  .landing-view-container {
    background-image: url("@/assets/blob-scene-mobile.svg");
    .parent-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 0;
      .content-wrapper {
        max-width: 350px;
      }
    }
  }
}
</style>
