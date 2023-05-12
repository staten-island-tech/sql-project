<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="header"></h1>
  <nav>
    <RouterLink class="link-home" to="/">Home</RouterLink>
    <RouterLink class="link-home" to="/about">About Us</RouterLink>
    <RouterLink class="link-home" to="/HousekeepersView">Housekeepers</RouterLink>
    <RouterLink class="link-home" to="/GardernersView">Gardeners</RouterLink>
    <RouterLink class="link-home" to="/CooksView">Cooks</RouterLink>
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
