<template>
  <div id="child">
    <h3>子组件</h3>
    <Son/>
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'Child',
  components: {Son}
}
</script>

<style scoped>
  #child {
    background-color: skyblue;
    padding: 10px;
  }
</style>