<script>
import { RouterLink, RouterView } from 'vue-router'
import boxTemplate from '../components/boxTemplate.vue'
import { createClient } from '@supabase/supabase-js'
import { housekeeper } from '../housekeeperarray'

/* export default {
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
  }
} */
export default {
  components: {
    boxTemplate
  },
  data() {
    return {
      housekeeper
    }
  }
}
</script>

<template>
  <div class="Housekeeper-Box">
    <boxTemplate
      class="Housekeeper-Template"
      v-for="item in housekeeper"
      :key="item.id"
      :name="item.name"
      :img="item.img"
      :location="item.location"
      :price="item.price"
      :available="item.available"
      :description="item.description_of_user"
      buttonLabel="Add To Cart"
    />
  </div>
</template>

<style>
.Housekeeper-Box {
  text-align: center;
  height: auto;
  position: absolute;
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.Housekeeper-Template {
  border: black solid 3px;
  margin: 20px;
  border-radius: 10px;
  width: 30vw;
  background: black;
  justify-content: center;
  color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: 200px;
}
</style>
