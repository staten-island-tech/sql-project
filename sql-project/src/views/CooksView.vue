<<<<<<< HEAD
<script>
import boxTemplate from '../components/boxTemplate.vue'
import supabase from '../supabase.js'

const { data, error } = await supabase.from('cook').select('c')
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
=======
<script></script>
<template></template>
<script></script>
>>>>>>> parent of 413aa6e (cummit 4003q0441)
