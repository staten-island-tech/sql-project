<script>
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { defineStore } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
</script>

<template>
  <form class="loginForm">
    <div class="email">
      <input type="text" id="emailID" placeholder="Enter Email" />
    </div>
    <div>
      <input type="text" id="passwordID" placeholder="Enter Password" />
    </div>
    <button id="loginbtn">Login</button>
  </form>
</template>

<style>
.loginForm {
  border: black 3px solid;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  width: 20%x;
}
</style>
