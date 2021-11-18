<template>
<div class="wrapper">
  <div class="desserts">
    <div class="dessert" v-for="dessert in desserts" :key="dessert.id">
      <div class="info">
        <h1>{{dessert.name}}</h1>
        <div class="description">
          <p>{{dessert.description}}</p>
          <h2>{{dessert.price}}</h2>
        </div>
      </div>
      <div class="image">
        <img :src="dessert.image">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DessertMenu',
  props: {
    desserts: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.desserts {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.dessert {
  margin: 10px;
  margin-top: 50px;
  width: 50%;
}
.dessert img {
  border: 2px solid #333;
  width: 100%;
  object-fit: cover;
}
.dessert .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: wrap;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 10px;
}
.price {
  display: flex;
}
button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}
.auto {
  margin-left: auto;
}
</style>
