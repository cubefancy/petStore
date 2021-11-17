<template>
  <div class="Other">
    <h1>Entrees</h1>
    <h4>Protein choices include pork, beef, and chicken. Curry entrees are served with a side of rice.</h4>
    <EntreeMenu :entrees="entrees" />
  </div>
</template>

<script>
import EntreeMenu from '../components/Entree.vue'

export default {
  name: 'Entrees',
  components: {
    EntreeMenu
  },
  computed: {
    entrees() {
      return this.$root.$data.entrees;
    }
  }
}
</script>
