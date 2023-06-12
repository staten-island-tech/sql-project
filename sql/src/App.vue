<script>
/* import router from './router'
import { authStore } from './stores/auth' */
import { RouterLink, RouterView } from 'vue-router'

/* export default {
  methods: {
    logOut: function () {
      authStore.clearUser()
      router.push('loginView')
      this.loggedin = false
    },
    login: function () {
      this.loggedin = true
    }
  },
  data() {
    return {
      loggedin: false
    }
  }
} */
</script>

<template>
  <div class="web-heading">
    <RouterView />
    <div class="links-div">
      <div class="title">
        <h1 class="web-title">E-House</h1>
      </div>
      <nav>
        <RouterLink class="link links" to="/">Home</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link links" to="/about">About Us</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link links" to="/HousekeepersView">Housekeepers</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link links" to="/GardenersView">Gardeners</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link links" to="/CooksView">Cooks</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link login user" to="/loginView">Log In</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link signup user" to="/SignUpView">Sign Up</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link cart user" to="/cartView">🛒</RouterLink>
      </nav>
    </div>
    <nav>
      <div class="logout">
        <button v-if="loggedin" @click="logOut">Log Out</button>
      </div>
    </nav>
  </div>
</template>

<style>
.web-heading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #301934;
  padding: 30px;
}

.title {
  color: #5c1ad9;
}
.web-title {
  border-right: white 4px solid;
  padding: 30px;
  background-color: pink;
  color: #5c1ad9;
  font-weight: bold;
}

.link {
  border: black 3px solid;
  padding: 5px;
  margin-top: 5%;
  border-radius: 1px;
  background-color: #5c1ad9;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  margin: 50px;
}

.links {
  border-right: black 3px solid;
}

.links-div {
  width: 100%;
  align-content: center;
  display: flex;
  justify-content: space-evenly;
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
  color: violet;
}
</style>
