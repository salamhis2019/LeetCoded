<template>
  <div class="nav-parent-container">
    <nav class="nav-container">
      <div class="logo-container">
        <img src="@/assets/leetcoded-logo.png" alt="" />
      </div>
      <div class="login-container">
        <p>Login</p>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
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
    .login-container {
      p {
        margin: 0 0.5rem;
      }
    }
  }
}
</style>
