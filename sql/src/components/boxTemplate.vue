<script>
export default {
  name: 'boxTemplate',
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
</script>

<template>
  <div class="box">
    <h2 class="name">{{ name }}</h2>
    <img class="image" :src="img" :alt="img" />
    <h3 class="Location">Location: {{ Location }}</h3>
    <h3 class="price">Price: ${{ price }}</h3>
    <h3 class="Available">Available {{ Available }}</h3>
    <h3 class="description">{{ description }}</h3>
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

<style>
/* Add your styles here */
</style>
