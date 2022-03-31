<template>
  <div class="container contact-form mt-5">
    <form
      @submit.prevent="addProduct"
      method="POST"
      action="/products"
      encType="multipart/form-data"
    >
      <h3>Add Product</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input
              type="text"
              name="product_name"
              v-model="newProduct.product_name"
              class="form-control mb-3"
              placeholder="Type Product Name Here"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="category_name"
              class="form-control mb-3"
              placeholder="Type Category Name Here"
              v-model="newProduct.category_name"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              name="category_id"
              class="form-control mb-3"
              placeholder="Category ID goes here..."
              v-model="newProduct.category_id"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              name="price"
              class="form-control mb-3"
              placeholder="Price of your product goes here..."
              v-model="newProduct.price"
            />
          </div>

          <!-- UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE -->

          <!-- <div class="form-group">
            <input
              type="file"
              name="product_image"
              class="form-control mb-3"
              @change="addProduct"
            />
          </div> -->

          <!-- UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE -->

          <div class="form-group">
            <a href="http://localhost:8080/products"
              ><input
                type="submit"
                name="add_product"
                class="btn btn-primary"
                value="Add Product"
            /></a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <textarea
              name="product_description"
              class="form-control"
              placeholder="Tell about your product to customers"
              style="width: 100%; height: 150px"
              v-model="newProduct.product_description"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
  <footer-comp />
</template>
<script>
import axios from 'axios'
import FooterComp from '../components/FooterComp.vue'

export default {
  components: {
    FooterComp,
  },
  data() {
    return {
      newProduct: {
        product_name: null,
        product_description: null,
        category_name: null,
        category_id: null,
        price: null,
        quantity: null,
        product_image: null,
      },
    }
  },
  methods: {
    async addProduct() {
      try {
        this.newProduct = await axios.post(
          'http://localhost:5000/addproduct',
          this.newProduct
        )

        this.newProduct = {
          product_name: null,
          product_description: null,
          category_name: null,
          category_id: null,
          price: null,
          quantity: null,
          product_image: null,
        }

        this.$router.push('/')
        // console.log(this.newProduct)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
