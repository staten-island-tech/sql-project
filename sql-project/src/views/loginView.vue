<script>
/* const supabaseUrl = 'https://lkfdrqoayqeodntjklhk.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
then
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: '',
        password: ''
      })
      if (error) {
        console.error(error)
      } else {
        this.users = data
      }
    }
  }
}
supabase.auth.onAuthStateChange((event) => {
  if (event == 'SIGNED_IN') {
    router.push('/dashboard')
  }
}) */
</script>

<template>
  <form class="loginForm">
    <div class="email">
      <input type="text" id="emailID" placeholder="Enter Email" />
    </div>
    <div>
      <input type="password" id="passwordID" placeholder="Enter Password" />
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
}
</style>
