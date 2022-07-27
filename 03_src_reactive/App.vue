<template>
  <h2>{{job.salary}}</h2>
  <h2>{{hobby}}</h2>
  <button @click="updateInfo">更新</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    let job = reactive({
      salary: '30K'
    })
    let hobby = reactive(['ball', 'book'])
    function updateInfo() {
      job.salary = '40K'
      hobby[0] = 'bike'
    }
    return {
      job,
      hobby,
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
