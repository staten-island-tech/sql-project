<script>
import { reactive } from 'vue'
export const templateItems = reactive([])
export default {
  name: 'boxTemplate',
  props: {
    name: String,
    img: String,
    location: String,
    price: Number,
    available: String,
    description: String,
    buttonLabel: String
  },
  methods: {
    addtocart(object) {
      cart.push(object)
      console.log(cart)
    }
  }
}
export const cart = reactive([])
</script>

<template>
  <div class="box">
    <h2 class="name">{{ name }}</h2>
    <img class="image" :src="img" :alt="img" />
    <h3 class="Location">Location: {{ location }}</h3>
    <h3 class="price">Price ($ per hour): ${{ price }}</h3>
    <h3 class="Available">Available: {{ available }}</h3>
    <h3 class="description">Description: {{ description }}</h3>
    <button
      class="cart-button"
      @click="
        addtocart({
          name: name,
          img: img,
          price: price,
          count: 1
        })
      "
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>

<style>
.image {
  width: 100px;
  height: 100px;
  border: pink solid 2px;
  border-radius: 100%;
}

.Available {
  display: flex;
  justify-content: center;
  text-align: center;
}

.description {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
