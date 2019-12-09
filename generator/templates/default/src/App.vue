<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
  import index from './components/index.vue'

  export default {
    name: 'app',
    components: {
      index
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
