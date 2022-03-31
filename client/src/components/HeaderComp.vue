<template>
  <div class="search-bar-background-color">
    <div class="row d-flex justify-content-end">
      <div class="col-md-8">
        <div class="search">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="form-control"
            placeholder="Search products"
          />
          <button class="search-button">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-bar-background-color {
  margin-top: -2rem;
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
}

/* SEARCH BAR  START */
@import url('https://fonts.googleapis.com/css2?family=Poppins:weight@100;200;300;400;500;600;700;800&display=swap');

body {
  background-color: #eee;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
}

.height {
  height: 100vh;
}

.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
}

.search input {
  height: 60px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;
}

.search input:focus {
  box-shadow: none;
  border: 2px solid blue;
}

.search .fa-search {
  position: absolute;
  top: 20px;
  left: 16px;
}

.search button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 50px;
  width: 110px;
  background: blue;
}

.search-button {
  color: white !important;
  background: #24c6dc !important;
  background: -webkit-linear-gradient(to right, #514a9d, #24c6dc) !important;
  background: linear-gradient(to right, #514a9d, #24c6dc) !important;
  border-radius: 0.5rem !important;
}

.search-button:hover {
  opacity: 0.9 !important;
  transition: 0.5s !important;
}
/* SEARCH BAR END */
</style>
