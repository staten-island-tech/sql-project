<template>
  <form class="loginForm">
    <div class="email">
      <input type="text" v-model="userEmail" placeholder="Enter Email" />
    </div>
    <div>
      <input type="password" v-model="userPassword" placeholder="Enter Password" />
    </div>
    <button id="loginbtn" @click="login">Login</button>
    <span>Don't have an account? <router-link to="/signupView">Sign Up</router-link></span>
    <h3 class="message" id="msg"></h3>
  </form>
</template>

<script>
import { RouterLink } from 'vue-router'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lkfdrqoayqeodntjklhk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
const supabase = createClient(supabaseUrl, supabaseKey)

async function signIn(supabase, user_email, user_password) {
  try {
    await supabase.auth.signInWithPassword({
      email: user_email,
      password: user_password
    })

    /*  let {
      data: { user }
    } = await supabase.auth.getUser()
    useAuthStore().loadUser(user.id)
    router.push('requestlog') */
  } catch (error) {
    this.errormessage = 'Couldnt log you in, please check your credentials or try again later.'
    message.insertAdjacentHTML(
      'afterbegin',
      `<h3> Couldnt log you in, please check your credentials or try again later.</h3>`
    )
    console.error(error)
  }
}

export default {
  data() {
    return {
      userEmail: '',
      userPassword: ''
    }
  },
  methods: {
    async login(event) {
      event.preventDefault()

      const user_email = this.userEmail
      const user_password = this.userPassword
      const message = document.getElementById('msg')

      if (user_email === '' || user_password === '') {
        message.innerHTML = '<h3>Please enter your Email and Password.</h3>'
      } else {
        try {
          signIn(supabase, user_email, user_password)
        } catch (error) {
          console.error(error)
          message.innerHTML = '<h3>An error occurred. Please try again later.</h3>'
        }
      }
    }
  }
}
</script>

<style>
.loginForm {
  border: black 3px solid;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  width: 20%;
  height: auto;
}

.message {
  color: white;
}
</style>
