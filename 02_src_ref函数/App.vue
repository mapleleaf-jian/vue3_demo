<template>
  <h1>{{name}}</h1>
  <h2>{{job.salary}}</h2>
  <button @click="updateInfo">更新</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup() {
    let name = ref('vue2')
    let job = ref({
      salary: '30K'
    })
    function updateInfo() {
      name.value = 'vue3'
      job.value.salary = '40K'
    }
    return {
      name,
      job,
      updateInfo
    }
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
