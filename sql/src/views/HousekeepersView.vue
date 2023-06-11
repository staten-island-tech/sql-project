<script>
import boxTemplate from '../components/boxTemplate.vue'
import { createClient } from '@supabase/supabase-js'

export default {
  async created() {
    // Create a single supabase client for interacting with your database
    const supabase = createClient(
      'https://lkfdrqoayqeodntjklhk.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
    )

    const { data, error } = await supabase.from('house_keepers').select('*')
    if (error) {
      console.error(error)
    } else {
      this.services = data
    }
  },
  data() {
    return {
      services: null
    }
  },
  components: {
    boxTemplate
  },
  methods:{
  mounted(){
    created()
  }
  }
}
</script>

<template>
  <div class="House-Box">
    <boxTemplate
      v-for="item in services"
      :key="item.id"
      :name="item.name"
      :img="item.img"
      :Location="item.Location"
      :price="item.price"
      :Available="item.Available"
      :description="item.description_of_user"
      buttonLabel="Add To Cart"
    />
  </div>
</template>

<style></style>
