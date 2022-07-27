<template>
  <h1>{{name}}</h1>
  <button @click="sayHello">say</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  setup() {
    let name = 'vue3'
    // function sayHello() {
    //   alert(name)
    // }
    // return {
    //   name,
    //   sayHello
    // }
    return () => h('h1', name)
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
