<script>
<div class="box">
   <h2 class="name">{{  }}</h2>
   <img class="image" v-bind:src="img" v-bind:alt="img" />
   <h3 class="price">Price: ${{ price }}</h3>
   <h3 class="Habitat">Habitat: {{ Habitat }}</h3>
   <h3 class="dangerous">Danger Level: {{ dangerous }}</h3>
   <h3 class="InStock">{{ InStock }}</h3>
</script>

<template>
  <form class="loginForm">
    <div class="email">
      <input type="text" id="emailID" placeholder="Enter Email" />
    </div>
    <div>
      <input type="password" id="passwordID" placeholder="Enter Password" />
    </div>
    <button id="loginbtn">Login</button>
  </form>
</template>

<style>
.loginForm {
  border: black 3px solid;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  width: 20%;
}
</style>
