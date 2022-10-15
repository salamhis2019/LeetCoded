<template>
  <div class="search-bar-parent-container">
    <div class="search-bar-container">
      <div class="input-container">
        <input class="search-bar" type="text" placeholder="Search..." />
      </div>
      <div class="search-bar-right">
        <div class="filter">
          <p>Filter</p>
        </div>
        <div class="sort">
          <p>Sort</p>
        </div>
      </div>
    </div>
  </div>
</template>

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
      .sort,
      .filter {
        display: flex;
        align-items: center;
        color: hsla(0, 0%, 100%, 0.9);
        p {
          font-size: 1.2rem;
          margin: 0;
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
