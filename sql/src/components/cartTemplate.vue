<script>
import cart from '../components/boxTemplate.vue'
export default {
  name: 'cartTemplate',
  props: {
    name: String,
    img: String,
    location: String,
    price: Number,
    available: String,
    description: String,
    buttonlabel: String
  },
  methods: {
    removefromcart(object) {
      let objects = cart.find((object) => object.name === object.name)
      cart.splice(objects, 1)
      console.log(cart)
    }
  }
}
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
        removefromcart({
          name: name,
          img: img,
          price: price,
          count: 1
        })
      "
    >
      {{ buttonlabel }}
    </button>
  </div>
</template>
