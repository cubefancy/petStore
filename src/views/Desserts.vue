<template>
  <div class="about">
    <h1>Desserts</h1>
    <DessertMenu :desserts="desserts" />
  </div>
</template>

<script>
import DessertMenu from '../components/Dessert.vue'

export default {
  name: 'Desserts',
  components: {
    DessertMenu
  },
  computed: {
    desserts() {
      return this.$root.$data.desserts;
    }
  }
}
</script>
