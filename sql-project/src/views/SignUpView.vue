<script>
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lkfdrqoayqeodntjklhk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
const supabase = createClient(supabaseUrl, supabaseKey)

async function signUp(supabase, user_email, user_password) {
  try {
    await supabase.auth.signUp({
      email: user_email,
      password: user_password
    })
    await supabase.auth.signInWithPassword({
      email: user_email,
      password: user_password
    })

    let {
      data: { user }
    } = await supabase.auth.getUser()
    console.log(user.id)

    await supabase.from('user_data').insert([{ user_id: user.id, email: user_email }])
  } catch (error) {
    console.error(error)
  }
}

export default {
  methods: {
    async signup(a) {
      a.preventDefault()

      let user_email = document.getElementByID('emailID').value
      let user_password = document.getElementByID('passwordID').value
      let user_passwordconfirmed = document.getElementByID('confirmpasswordID').value

      if (user_password == user_passwordconfirmed) {
        console.log(true)

        if (userEmail === '' || userPassword === '') {
        } else {
          const { user, session, error } = await supabase.auth.signUp({
            .from('user_data')
            .insert({ user_email: user_email, user_password: user_password })
        })
        }
      }
    }
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
  width: 20%;
  height: auto;
}
</style>
