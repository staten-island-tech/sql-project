<script>
import { RouterLink, RouterView } from 'vue-router'
import cartTemplate from '../components/cartTemplate.vue'
import { cart } from '../components/boxTemplate.vue'
import { createClient } from '@supabase/supabase-js'

export default {
  components: {
    cartTemplate
  },
  data() {
    return {
      cart
    }
  },
  methods: {
    async checkout() {
      const supabase = createClient(
        'https://lkfdrqoayqeodntjklhk.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
      )

      /*       const user = getUserData() */

      const message = document.getElementById('message')
      this.cart.forEach(async (item) => {
        const { data, error } = await supabase
          .from('order-history')
          .insert([{ name: item.name, price: item.price }], { upsert: true })
      })
      message.innerHTML = '<h3>Order has been sent!</h3>'
    }
  }
}
</script>

<template>
  <div class="cart-heading">
    <h3 class="cart-header">Your Cart</h3>
  </div>
  <div class="checkout-div">
    <button @click="checkout" class="checkout-button">Check Out</button>
  </div>
  <h3 class="msg" id="message"></h3>
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
      buttonlabel="Remove from Cart"
    />
  </div>
</template>

<style>
.msg {
  color: greenyellow;
}
.checkout-button {
  position: absolute;
  margin-top: 180px;
  margin-left: 400px;
  border-radius: 20%;
  background-color: #5c1ad9;
  font-size: 15px;
  color: white;
}
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
