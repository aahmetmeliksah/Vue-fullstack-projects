<template>
  <div class="col-3">
    <div
      class="card col-sm-12 col-m-12 col-x-12 col-xl-12 mb-3 mt-3"
      style="border-radius: 25px"
    >
      <!-- <div
        class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
        data-mdb-ripple-color="light"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
          style="border-top-left-radius: 15px; border-top-right-radius: 15px"
          class="img-fluid"
          alt="Laptop"
        />
        <a href="#!">
          <div class="mask"></div>
        </a>
      </div> -->
      <div class="card-body pb-0">
        <div class="d-flex justify-content-between">
          <div>
            <p class="text-dark">PRODUCT NAME:{{ product.product_name }}</p>
            <p class="small text-muted">
              CATEGORY NAME: {{ product.category_name }}
            </p>
          </div>
        </div>
      </div>
      <hr class="my-0" />
      <div class="card-body pb-0">
        <div class="d-flex justify-content-between">
          <p class="text-dark">${{ product.price }}</p>
        </div>
      </div>
      <hr class="my-0" />
      <div class="card-body">
        <div class="text-center pb-2 mb-1">
          <button
            type="button"
            class="btn btn-primary view-product-btn"
            @click="$emit('view-product', product)"
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>
