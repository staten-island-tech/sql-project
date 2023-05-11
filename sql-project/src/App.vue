<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="header"></h1>
  <nav>
    <RouterLink class="link-home" to="/">Home</RouterLink>
  </nav>
  <nav>
    <RouterLink class="link-Login" to="/loginView">Log In</RouterLink>
    <RouterLink class="link-SignUp" to="/SignUpView">Sign Up</RouterLink>
  </nav>
</template>

<style>
.header {
  color: #f4f1d6;
}
</style>
