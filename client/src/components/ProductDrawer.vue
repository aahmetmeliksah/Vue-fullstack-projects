<template>
  <div
    class="drawer-background drawer-close"
    :class="{ show: active }"
    @click="$emit('close-product-drawer')"
  ></div>

  <!-- DRAWER STARTS HERE -->
  <!-- ADD IMAGE, PRICE, CATEGORY BASICALLY ALL THE DETAILS -->

  <div class="drawer" :class="{ show: active }">
    <div class="drawer-close" @click="$emit('close-product-drawer')">X</div>

    <div class="product-details" v-if="product">
      <h3>PRODUCT : {{ product.product_name }}</h3>
      <hr />
      <h3>ID : {{ product.id }}</h3>
      <hr />
      <h3>Category : {{ product.category_name }}</h3>
      <hr />
      <h3>Category ID : {{ product.category_id }}</h3>
      <hr />
      <p class="description">{{ product.product_description }}</p>
      <hr />
      <p class="description">${{ product.price }}</p>
    </div>

    <div class="product-details" v-if="product">
      <button class="btn btn-danger" @click="removeProduct">
        Remove Product
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['product', 'active'],

  methods: {
    async removeProduct() {
      // console.log(this.product.id)
      if (confirm('Are you sure you want to remove this product?')) {
        try {
          await axios.delete(
            `http://localhost:5000/products/${this.product.id}`,
            this.product
          )

          this.$router.push('/') // redirect to home page
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
}
</script>

<style lang="scss">
.drawer-background {
  z-index: 100;
  display: none;
  transition: display 0.5s;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  &.show {
    display: block;
  }
}

.drawer {
  overflow-y: scroll;
  width: 100vw;
  height: 100vh;
  background-color: rgb(228, 216, 228);
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 1rem;
  transition: left 0.5s;
  z-index: 101;
  text-align: center;

  &.show {
    left: 0;
  }
}

.drawer-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  cursor: pointer;
  border: 2px solid gray;
  color: gray;
  width: 3rem;
  float: right;
  box-shadow: 2px 2px 2px 3px #696868;

  &:hover {
    background-color: lightblue;
    box-shadow: 2px 2px 2px 3px #545ee2;
    transition: 0.3s;
    color: rgb(218, 25, 25);
  }
}

.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;

  p.description {
    padding: 20px;
    line-height: 1.5rem;
  }

  .button-container {
    button {
      width: 150px;
      border: none;
      padding: 10px;
      border-radius: 5px;
      margin: 0 5px 50px 5px;
      cursor: pointer;
    }
  }
}
</style>
