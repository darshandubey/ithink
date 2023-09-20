<template>
  <div id="app">
    <FormData/>
  </div>
</template>

<script>
import FormData from './components/FormData.vue'

export default {
  name: 'App',
  components: {
    FormData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
