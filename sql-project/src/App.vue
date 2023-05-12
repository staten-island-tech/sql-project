<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <h1 class="header"></h1>
    <nav>
      <RouterLink class="link-home" to="/">Home</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link-home" to="/about">About Us</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link-home" to="/HousekeepersView">Housekeepers</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link-home" to="/GardernersView">Gardeners</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link-home" to="/CooksView">Cooks</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link-Login" to="/loginView">Log In</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link-SignUp" to="/SignUpView">Sign Up</RouterLink>
    </nav>
  </div>
</template>

<style>
.header {
  color: #f4f1d6;
}
</style>
