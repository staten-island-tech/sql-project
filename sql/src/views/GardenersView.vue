<script>
<<<<<<< HEAD
import boxTemplate from '../components/boxTemplate.vue'
import { createClient } from '@supabase/supabase-js'

export default {
  async created() {
    // Create a single supabase client for interacting with your database
    const supabase = createClient(
      'https://lkfdrqoayqeodntjklhk.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
    )

    const { data, error } = await supabase.from('gardener').select('*')
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
  }
=======
export default {
  name: 'Card',
  props: {
    name: String,
    created_at: String,
    Location: String,
    price: String,
    Available: String,
    description_of_user: String,
    img: String,
  },
>>>>>>> minul-I-goofed-up
}
</script>

<template>
<<<<<<< HEAD
  <div class="Cook-Box">
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
=======
  <div class="card" :id="primaryKey">
    <h2 class="name">{{name}}</h2>
    <h2 class="appointment-time">Appointment made at: {{created_at}}</h2>
    <h2 class="price">${{price}}</h2>
    <h3 class="available">{{Available}}</h3>
    <h5 class="description">{{description_of_user}}</h5>
    <h5 class="img">{{img}}</h5>
    <button v-on:click="remove">Remove</button>
  </div>
</template>

<style scoped>
button {
  margin-top: 1rem;
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  max-width: none;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}
button:hover,
button:focus {
  opacity: 0.75;
}
</style>
>>>>>>> minul-I-goofed-up
