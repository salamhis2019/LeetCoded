<template>
  <div class="nav-parent-container">
    <nav class="nav-container">
      <div class="logo-container">
        <img src="@/assets/leetcoded-logo.png" alt="" />
      </div>
      <button class="login-button">Login</button>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav-parent-container {
  height: 60px;
  background-color: #1b1f22;
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 3rem;
    color: #ff9900;
    .logo-container {
      display: flex;
      align-items: center;
      img {
        width: 120px;
        cursor: pointer;
      }
    }
    .login-button {
      padding: 0.5rem 1.5rem;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      border: none;
      border-radius: 10px;
      background: #ff9900b5;
    }
  }
}
</style>
