<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/appetizers">Appetizers</router-link> |
      <router-link to="/entrees">Entrees</router-link> |
      <router-link to="/desserts">Desserts</router-link>
    </div>
    <router-view/>
    <br>
    <footer>https://github.com/cubefancy/thaiRestaurant.git</footer>
  </div>
</template>

<style>
body {background-color: #B9E6102B;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #E67110;
}
footer {
  markin-top: 25px;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #E67110;
}
#nav a.router-link-exact-active {
  color: #9F590D;
}
</style>
