<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="header"></h1>
  <nav>
    <RouterLink class="link-home" to="/">Home</RouterLink>
  </nav>
  <RouterLink class="link-pie" to="/login"></RouterLink>
  <RouterLink class="link-bar" to="/Sign-Up"></RouterLink>
</template>

<style>
.header {
  color: #f4f1d6;
}
</style>
