<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="head">
    <h1 class="header"></h1>
    <nav>
      <RouterLink class="link head" to="/">Home</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link head" to="/about">About Us</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link head" to="/HousekeepersView">Housekeepers</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link head" to="/GardernersView">Gardeners</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link head" to="/CooksView">Cooks</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link-Login head" to="/loginView">Log In</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link-SignUp head" to="/SignUpView">Sign Up</RouterLink>
    </nav>
  </div>
</template>

<style>
.head {
  color: #f4f1d6;
  display: inline-block;
  flex-direction: row;
}
</style>
