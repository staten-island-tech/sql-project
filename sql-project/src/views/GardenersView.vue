<script>
import boxTemplate from '../components/boxTemplate.vue'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://lkfdrqoayqeodntjklhk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
)
const { data, error } = await supabase
  .from('gardener')
  .select('name', 'Location', 'img', 'price', 'Available', 'description_of_user')

  export default {
  data() {
    return {
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    }
  },
  name: 'boxTemplate',
  props: {
    name: String,
    img: String,
    Location: String,
    price: Number,
    Available: String,
    description_of_user: String,
    buttonLabel: String
  }
  methods: {
    addToShoppingCart(object) {
      service.push(object)
      console.log(service)
    }
  }
}
</script>
<template>
  <div class="Cook-Box">
    <boxTemplate
      v-for="service in data"
      v-bind:key="service"
      :name="data.name"
      :img="data.img"
      :Location="data.Location"
      :price="data.price"
      :Available="data.Available"
      :description_of_user="data.description_of_user"
      :buttonLabel="`Add To Cart`"
    />
  </div>
</template>
