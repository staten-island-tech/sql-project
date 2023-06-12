<script>
import { RouterLink, RouterView } from 'vue-router'
import cartTemplate from '../components/cartTemplate.vue'
import { cart } from '../components/boxTemplate.vue'
</script>

<template>
  <h3 class="cart-header">Your Cart</h3>

  <div class="Cart-Box">
    <cartTemplate
      class="Cart-Template"
      v-for="item in cart"
      :key="cart.id"
      :name="cart.name"
      :img="cart.img"
      :Location="cart.Location"
      :price="cart.price"
      :Available="cart.Available"
      :description="cart.description_of_user"
      buttonLabel="Remove from Cart"
    />
  </div>
</template>

<style></style>
