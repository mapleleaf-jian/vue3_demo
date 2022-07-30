<template>
  <div id="app">
    <h3>祖组件</h3>
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child'
export default {
  name: 'App',
  components: {Child}
}
</script>>

<style scoped>
  #app {
    background-color: gray;
    padding: 10px;
  }
</style>
