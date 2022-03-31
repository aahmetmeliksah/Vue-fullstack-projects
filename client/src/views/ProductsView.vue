<template>
  <div>
    <ProductDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer()"
    />
    <div class="row">
      <ProductCardComp
        v-for="product in products"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>
<script>
import ProductCardComp from '../components/ProductCardComp.vue'
import ProductDrawer from '../components/ProductDrawer.vue'
import allProducts from '../../services/products/getAll'
import FooterComp from '../components/FooterComp.vue'

let products = []
allProducts.then((res) => {
  products = res
})

export default {
  name: 'ProductsView',
  components: {
    ProductCardComp,
    ProductDrawer,
    FooterComp,
  },
  data() {
    return {
      products,
      product: null,
      active: {
        product_drawer: false,
      },
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      this.active.product_drawer = true
      console.log(this.product)
    },
    closeProductDrawer() {
      this.active.product_drawer = false
    },
  },
}
</script>
