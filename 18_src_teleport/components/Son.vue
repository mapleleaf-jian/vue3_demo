<template>
  <div id="son">
    <h3>孙组件</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
  name: 'Son',
  components: {Dialog}
}
</script>

<style scoped>
  #son {
    background-color: orange;
    padding: 10px;
  }
</style>