<template>
  <div id="child">
    <span>子组件</span>
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