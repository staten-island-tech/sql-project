<script>

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lkfdrqoayqeodntjklhk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
const supabase = createClient(supabaseUrl, supabaseKey)
export default {
  components: {},
  data() {
    user_name: '',
    user_email: '',
    user_password: '',
    payment_info: '',
  }
},
methods: {
  onMounted: async function () {
  this
  }
}
</script>
<template></template>
