<template>
  <div id="app">
    <header-vue></header-vue>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
import headerVue from "../components/header.vue";
export default {
  components: {
    headerVue,
  },
};
</script>

<style>
.container {
  max-width: 1300px;
  margin: auto;
  /* padding: 0 2rem; */
}
</style>
