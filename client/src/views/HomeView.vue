<template>
  <div>
    <HeaderComp />
    <ProductsView />
    <FooterComp />
  </div>
</template>

<script>
import ProductsView from './ProductsView.vue'
import HeaderComp from '../components/HeaderComp.vue'
import FooterComp from '../components/FooterComp.vue'
export default {
  components: {
    ProductsView,
    HeaderComp,
    FooterComp,
  },
}
</script>
