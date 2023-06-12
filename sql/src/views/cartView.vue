<script>
import { RouterLink, RouterView } from 'vue-router'
import cartTemplate from '../components/cartTemplate.vue'
import { cart } from '../components/boxTemplate.vue'

export default {
  components: {
    cartTemplate
  },
  data() {
    return {
      cart
    }
  }
}
</script>

<template>
  <div class="cart-heading">
    <h3 class="cart-header">Your Cart</h3>
  </div>
  <div class="Cart-Box">
    <cartTemplate
      class="Cart-Template"
      v-for="item in cart"
      :key="item.id"
      :name="item.name"
      :img="item.img"
      :Location="item.Location"
      :price="item.price"
      :Available="item.Available"
      :description="item.description_of_user"
      buttonLabel="Remove from Cart"
    />
  </div>
</template>

<style>
.Cart-Box {
  text-align: center;
  height: auto;
  position: absolute;
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.Cart-Template {
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

.cart-heading {
  text-align: center;
  height: auto;
  position: absolute;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #5c1ad9;
  border: black solid 4px;
  background-color: white;
  width: 20vw;
}
</style>
