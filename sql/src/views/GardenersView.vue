<script>
import { createClient } from '@supabase/supabase-js'
import { gardener } from '../gardenerarray'
import boxTemplate from '../components/boxTemplate.vue'
/* export default {
  components: {
    gardenerBoxTemplate
  },
  data() {
    return {
      services: []
    }
  },
  async created() {
    // Create a single Supabase client for interacting with your database
    const supabase = createClient(
      'https://lkfdrqoayqeodntjklhk.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
    )

    try {
      const { data, error } = await supabase.from('gardener').select('*')
      console.log(data)
      if (error) {
        console.error(error)
      } else {
        this.services = data
      }
    } catch (error) {
      console.error(error)
    }
  }
} */
export default {
  components: {
    boxTemplate
  },
  data() {
    return {
      gardener
    }
  }
}
</script>

<template>
  <div class="Gardener-Box">
    <boxTemplate
      v-for="item in gardener"
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

<style>
.Gardener-Box {
  border: 4px solid black;
  border-radius: 10%;
  width: 30vw;
  height: 90vh;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}

.name {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
}
.image {
  width: 25vw;
  height: 40vh;
  justify-content: center;
  margin: 10px auto;
  text-align: center;
}
.price {
  text-align: center;
}

.Location {
  text-align: center;
}
</style>
