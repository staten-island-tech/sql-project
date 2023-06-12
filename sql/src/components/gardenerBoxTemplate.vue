<script>
import { createClient } from '@supabase/supabase-js'

/* export const gardenerdata = [] */

export default {
  name: 'gardenerBoxTemplate',
  props: {
    name: String,
    img: String,
    Location: String,
    price: Number,
    Available: String,
    description: String,
    buttonLabel: String
  },
  methods: {
    addToShoppingCart(object) {
      console.log(object)
    }
  }
}
/*  async created() {
    // Create a single Supabase client for interacting with your database
    const supabase = createClient(
      'https://lkfdrqoayqeodntjklhk.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
    )

    try {
      const { data, error } = await supabase.from('gardener').select('*')
      if (error) {
        console.error(error)
      } else {
        gardenerdata.push(data)
        console.log(data)
      }
    } catch (error) {
      console.error(error)
    }
  }
} */
</script>

<template>
  <div class="box">
    <h2 class="name">{{ name }}</h2>
    <img class="image" :src="img" :alt="img" />
    <h3 class="Location">Location: {{ Location }}</h3>
    <h3 class="price">Price ($ per hour): ${{ price }}</h3>
    <h3 class="Available">Available: {{ Available }}</h3>
    <h3 class="description">Description: {{ description }}</h3>
    <button
      @click="
        addToShoppingCart({
          name,
          image: img,
          price,
          count: 1
        })
      "
      class="Buy"
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>
