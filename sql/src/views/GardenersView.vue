<script>
export default {
  name: 'Card',
  props: {
    name: String,
    created_at: String,
    Location: String,
    price: String,
    Available: String,
    description_of_user: String,
    img: String,
  },
}
</script>

<template>
  <div class="card" :id="primaryKey">
    <h2 class="name">{{name}}</h2>
    <h2 class="appointment-time">Appointment made at: {{created_at}}</h2>
    <h2 class="price">${{price}}</h2>
    <h3 class="available">{{Available}}</h3>
    <h5 class="description">{{description_of_user}}</h5>
    <h5 class="img">{{img}}</h5>
    <button v-on:click="remove">Remove</button>
  </div>
</template>

<style scoped>
button {
  margin-top: 1rem;
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  max-width: none;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}
button:hover,
button:focus {
  opacity: 0.75;
}
</style>