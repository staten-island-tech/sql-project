<script>
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

      if (this.userPassword === this.userPasswordConfirmed) {
        console.log(true)

        if (this.userEmail === '' || this.userPassword === '') {
        } else {
          try {
            const { user, error } = await supabase.auth.signUp({
              email: this.userEmail,
              password: this.userPassword
            })

            if (error) {
              console.error(error)
            } else {
              const { error } = await supabase.auth.signInWithEmail(
                this.userEmail,
                this.userPassword
              )

              if (error) {
                console.error(error)
              } else {
                console.log(user.id)
                await supabase
                  .from('user_data')
                  .insert([{ user_id: user.id, email: this.userEmail }])
              }
            }
          } catch (error) {
            console.error(error)
          }
        }
      } else {
        console.log('Passwords do not match.')
      }
    }
  }
}
</script>

<template>
  <form class="loginForm">
    <div class="email">
      <input type="text" v-model="userEmail" placeholder="Enter Email" />
    </div>
    <div>
      <input type="password" v-model="userPassword" placeholder="Enter Password" />
    </div>
    <div>
      <input type="password" v-model="userPasswordConfirmed" placeholder="Confirm Password" />
    </div>
    <button id="signupbtn" @click="signup">Sign Up</button>
  </form>
</template>

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
</style>
