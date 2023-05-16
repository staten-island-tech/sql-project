<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="head">
    <nav>
      <RouterLink class="link" to="/">Home</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link" to="/about">About Us</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link" to="/HousekeepersView">Housekeepers</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link" to="/GardernersView">Gardeners</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link" to="/CooksView">Cooks</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link login" to="/loginView">Log In</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link signup" to="/SignUpView">Sign Up</RouterLink>
    </nav>
  </div>
</template>

<style>
.header {
  margin: 10px auto;
  color: #f4f1d6;
  text-align: center;
}

.link {
  margin: 20px auto;
  color: white;
}

.head {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  position: absolute;
  bottom: 90%;
}
</style>
