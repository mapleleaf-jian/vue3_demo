<template>
  <h2>{{job.salary}}</h2>
  <h2>{{hobby}}</h2>
  <button @click="updateInfo">更新</button>
</template>

<script>
import {reactive, Reflect} from 'vue'
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

    const person = {
      name: '张三',
      age: 18
    }

    const p = new Proxy(person, {
      get(target, propName) {
        return Reflect(target, propName)
      },
      set(target, propName, value) {
        Reflect.set(target, propName, value)
      },
      deleteProperty(target, propName) {
        return Reflect.delete(target, propName)
      }
    })

    console.log(p)
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
