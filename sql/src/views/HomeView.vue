<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="home-links">
    <h2 class="home">
      <RouterLink class="link login user" to="/loginView">Log In</RouterLink>
      or
      <RouterLink class="link signup user" to="/SignUpView">Sign Up</RouterLink>
      to use E-House
    </h2>
  </div>
</template>

<style>
.home {
  color: black;
  text-align: center;
}
.user {
  border: black 3px solid;
  padding: 5px;
  margin-top: 5%;
  border-radius: 1px;
  background-color: #5c1ad9;
  border-radius: 20px;
  color: pink;
  font-size: 18px;
  margin: 10px;
}

.home-links {
  position: absolute;
  margin-top: 450px;
}
</style>
