<script>
/* import { authStore } from '../stores/auth' */
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

    let {
      data: { user }
    } = await supabase.auth.getUser()
    console.log(user.id)
    useAuthStore().loadUser(user.id)
    router.push('requestlog')
  } catch (error) {
    console.error(error)
  }
}

export default {
  methods: {
    async login(a) {
      a.preventDefault()

      let user_email = document.getElementById('emailID').value
      let user_password = document.getElementById('passwordID').value

      if (user_email === '' || user_password === '') {
        console.log('error')
      } else {
        signIn(supabase, user_email, user_password)
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
    <RouterLink class="link login user" to="/loginView"
      ><button id="loginbtn">Login</button></RouterLink
    >
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
}
</style>
