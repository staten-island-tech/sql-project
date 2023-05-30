<script>
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = ''
const supabaseKey = 'YOUR_SUPABASE_PUBLIC_API_KEY'
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
      const { data, error } = await supabase
        .from('users')
        .select('*')

      if (error) {
        console.error(error)
      } else {
        this.users = data
</script>
