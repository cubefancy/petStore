<template>
<div class="wrapper">
  <div class="appetizers">
    <div class="appetizer" v-for="appetizer in appetizers" :key="appetizer.id">
      <div class="info">
        <h1>{{appetizer.name}}</h1>
        <div class="description">
          <p>{{appetizer.description}}</p>
          <h2>{{appetizer.price}}</h2>
        </div>
      </div>
      <div class="image">
        <img :src="appetizer.image">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AppetizerMenu',
  props: {
    appetizers: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.appetizers {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.appetizer {
  margin: 10px;
  margin-top: 50px;
  width: 50%;
}
.appetizer img {
  border: 2px solid #333;
  width: 100%;
  object-fit: cover;
}
.appetizer .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
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
