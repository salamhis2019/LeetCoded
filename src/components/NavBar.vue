<template>
  <div class="nav-parent-container">
    <nav class="nav-container">
      <div class="logo-container">
        <h1>Logo</h1>
      </div>
      <div class="login-container">
        <p>Login</p>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.nav-parent-container {
  background-color: #1b1f22;
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: white;
    .logo-container {
      h1 {
        margin: 0 0.5rem;
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
