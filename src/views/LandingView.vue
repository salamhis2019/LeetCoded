<template>
  <div class="landing-view-container h-full w-full bg-cover bg-center">
    <div class="parent-wrapper ml-40 flex h-full items-center font-sans">
      <div class="content-wrapper mb-8 flex flex-col gap-8">
        <h1 class="hero-text text-6xl font-light text-white/90">
          Its All
          <span class="leetcoded-text font-semibold italic"
            >LeetCoded
            <span class="code-brackets font-black text-amber-500"
              >&lt; / ></span
            ></span
          >
        </h1>
        <div class="subcontent-container flex w-9/12 flex-col gap-8">
          <p class="subtext m-0 text-base text-white/90">
            Leetcode Solutions Visualized and journaled for personal use and use
            of others
          </p>
          <router-link
            :to="'/solutions'"
            class="button flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border-none py-0 px-6 text-left text-lg font-semibold text-white/90 no-underline"
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
