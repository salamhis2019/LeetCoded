<template>
  <div class="landing-view-container h-full w-full bg-cover bg-center">
    <div class="parent-wrapper ml-40 flex h-full items-center font-sans">
      <div class="content-wrapper mb-8 flex flex-col gap-8">
        <h1 class="hero-text text-6xl font-light text-white/90">
          Its All
          <span class="leetcoded-text font-semibold italic"
            >LeetCoded
            <p class="code-brackets font-base inline-block text-amber-500">
              &lt;>
            </p></span
          >
        </h1>
        <div class="subcontent-container flex w-9/12 flex-col gap-8">
          <p class="subtext m-0 text-base text-white/90">
            Leetcode Solutions Visualized and journaled for personal use and use
            of others
          </p>
          <router-link :to="'/solutions'" class="button duration-200">
            <span class="text">View Solutions</span>
            <span class="icon">
              <img class="w-5" src="@/assets/double-arrow.svg" alt="" />
            </span>
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
          width: 350px;
          height: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          border: none;
          border-radius: 5px;
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
          background: #1b1f22;
          span {
            transition: 250ms ease-in-out;
          }
          .text {
            transform: translateX(35px);
            color: white;
            font-weight: bold;
          }
          .icon {
            position: absolute;
            transform: translateX(300px);
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            .fa-long-arrow-alt-right {
              width: 15px;
              color: white;
            }
          }
          &:hover {
            background: #353a3e;
            .text {
              color: transparent;
            }
            .icon {
              width: 150px;
              border-left: none;
              transform: translateX(210px);
            }
          }
          &:focus {
            outline-color: white;
            outline-width: 0.5px;
          }
          &:active {
            transform: translateX(3px);
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
