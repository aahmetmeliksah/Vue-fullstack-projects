<template>
  <nav class="search-bar-background-color">
    <router-link to="/addproduct" style="color: wheat">Add Product</router-link>
    ||| <router-link to="/" style="color: wheat">Home</router-link> |||
    <router-link to="/products" style="color: wheat">Products</router-link> |||
    <router-link to="/card" style="color: wheat">Card</router-link>
  </nav>
  <router-view />
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: sans-serif;
}

.search-bar-background-color {
  background: #24c6dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #514a9d,
    #24c6dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #514a9d,
    #24c6dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: wheat;

  padding: 0.3rem;
}
</style>
