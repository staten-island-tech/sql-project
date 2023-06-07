<script>
import { service } from './boxTemplate.vue'
</script>
<template>
  <h3 class="cart-header">Your Cart</h3>

  <div class="CartBox">
    <h2 class="name">{{ name }}</h2>
    <img class="image" v-bind:src="img" v-bind:alt="img" />
    <h3 class="price">Price: ${{ price }}</h3>
    <button @click="removefromShoppingCart({ species: species })" class="Remove">
      Remove from Cart
    </button>
  </div>
</template>
