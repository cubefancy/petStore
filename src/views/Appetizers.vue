<template>
  <div class="about">
    <h1>Appetizers</h1>
    <AppetizerMenu :appetizers="appetizers" />
  </div>
</template>

<script>
import AppetizerMenu from '../components/Appetizer.vue'

export default {
  name: 'Appetizers',
  components: {
    AppetizerMenu
  },
  computed: {
    appetizers() {
      return this.$root.$data.appetizers;
    }
  }
}
</script>
