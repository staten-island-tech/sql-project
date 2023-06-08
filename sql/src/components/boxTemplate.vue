<script>
import { reactive } from 'vue'
export const service = reactive([])
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
    description: String,
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
  <div class="box">
    <h2 class="name">{{ name }}</h2>
    <img class="image" v-bind:src="img" v-bind:alt="img" />
    <h3 class="Location">Location: {{ Location }}</h3>
    <h3 class="price">Price: ${{ price }}</h3>
    <h3 class="Available">Available {{ Available }}</h3>
    <h3 class="description">{{ description }}</h3>
    <button
      @click.self="
        addToShoppingCart({
          name: species,
          image: img,
          price: price,
          count: 1
        })
      "
      class="Buy"
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>
