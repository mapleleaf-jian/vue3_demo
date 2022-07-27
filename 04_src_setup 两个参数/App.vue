<template>
  <DeMo name="vue3" msg="hello"></DeMo>
</template>

<script>
import DeMo from "@/components/DeMo";
export default {
  name: 'App',
  components: {DeMo}
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
