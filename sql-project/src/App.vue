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
      <RouterLink class="link" to="/GardenersView">Gardeners</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link" to="/CooksView">Cooks</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link login user" to="/loginView">Log In</RouterLink>
    </nav>
    <nav>
      <RouterLink class="link signup user" to="/SignUpView">Sign Up</RouterLink>
    </nav>
    <RouterView />
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
  align-content: center;
  display: flex;
  justify-content: space-evenly;
  margin: 300px;
  margin-bottom: 200px;
  margin-top: -32%;
}

.login {
  margin-left: 100px;
}

.signup {
  margin-right: 100px;
}

.user {
  border: black 3px solid;
  padding: 5px;
  margin-top: 5%;
  border-radius: 1px;
  background-color: #452784;
  border-radius: 20px;
}
</style>
