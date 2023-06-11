<script>
import { RouterLink, RouterView } from 'vue-router'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lkfdrqoayqeodntjklhk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default {
  data() {
    return {
      userEmail: '',
      userPassword: '',
      userPasswordConfirmed: ''
    }
  },
  methods: {
    async signup(event) {
      event.preventDefault()

      const user_email = this.userEmail
      const user_password = this.userPassword
      const user_passwordConfirmed = this.userPasswordConfirmed
      const message = document.getElementById('msg')

      if (user_password === user_passwordConfirmed) {
        console.log(true)

        if (user_email === '' || user_password === '') {
          message.insertAdjacentHTML('afterbegin', `<h3> Please input Email and/or Password </h3>`)
        } else {
          try {
            const { user, error } = await supabase.auth.signUp({
              email: user_email,
              password: user_password
            })

            if (error) {
              console.error(error)
            } else {
              const { error } = await supabase.auth.signInWithPassword(user_email, user_password)

              if (error) {
                console.error(error)
              } else {
                console.log(user_email, user_password)
                await supabase
                  .from('user_data')
                  .insert([{ email: user_email, password: user_password }])
              }
            }
            message.insertAdjacentHTML(
              'afterbegin',
              `<h3> Successfully made account. Account is now signined </h3>`
            )
          } catch (error) {
            console.error(error)
          }
        }
      } else {
        console.log('Passwords do not match.')
        message.insertAdjacentHTML('afterbegin', `<h3> Passwords do not match </h3>`)
      }
    }
  }
}
</script>

<template>
  <div>
    <router-view />
  </div>
  <div class="signup-container">
    <form class="signupForm">
      <div class="email-div">
        <input class="email" type="text" v-model="userEmail" placeholder="Enter Email" />
      </div>
      <div class="password-div">
        <input
          class="password"
          type="password"
          v-model="userPassword"
          placeholder="Enter Password"
        />
      </div>
      <div class="password-div">
        <input
          class="password"
          type="password"
          v-model="userPasswordConfirmed"
          placeholder="Confirm Password"
        />
      </div>
      <button class="signup-button" id="signupbtn" @click="signup">Sign Up</button>
      <span class="redirect"
        >Already have an account? <a><RouterLink to="/loginView">Login</RouterLink></a></span
      >
      <h3 class="message" id="msg"></h3>
    </form>
  </div>
</template>

<style>
.password {
  font-size: 20px;
  margin: 10px;
  border: #5c1ad9 solid 2px;
}

.email {
  font-size: 20px;
  margin: 10px;
  border: #5c1ad9 solid 2px;
}
.signupForm {
  border: black 3px solid;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  height: auto;
  position: absolute;
  margin-top: 600px;
}

.signup-container {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.message {
  color: red;
}

.signup-button {
  border-radius: 20%;
  background-color: #5c1ad9;
  margin: 20px;
  font-size: 15px;
  color: white;
}
</style>
