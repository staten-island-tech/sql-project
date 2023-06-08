<script>
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lkfdrqoayqeodntjklhk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
const supabase = createClient(supabaseUrl, supabaseKey)

async function signup(event) {
  event.preventDefault()

  let user_email = document.getElementById('emailID').value
  let user_password = document.getElementById('passwordID').value
  let user_passwordconfirmed = document.getElementById('confirmpasswordID').value

  if (user_password === user_passwordconfirmed) {
    console.log(true)

    if (user_email === '' || user_password === '') {
      console.log('Please enter email and password.')
    } else {
      try {
        const { user, error } = await supabase.auth.signUp({
          email: user_email,
          password: user_password
        })

        if (error) {
          console.error(error)
        } else {
          const { error } = await supabase.auth.signInWithEmail(user_email, user_password)

          if (error) {
            console.error(error)
          } else {
            console.log(user.id)
            await supabase.from('user_data').insert([{ user_id: user.id, email: user_email }])
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
</script>

<template>
  <form class="loginForm">
    <div class="email">
      <input type="text" id="emailID" placeholder="Enter Email" />
    </div>
    <div>
      <input type="password" id="passwordID" placeholder="Enter Password" />
    </div>
    <div>
      <input type="password" id="confirmpasswordID" placeholder="Confirm Password" />
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
