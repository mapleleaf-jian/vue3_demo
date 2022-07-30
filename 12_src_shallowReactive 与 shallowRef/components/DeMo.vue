<template>
  <div>
    <h3>{{ person }}</h3>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{job.salary}}K</h3>
    <button @click="name+='!'">名字变</button>
    <button @click="age++">年龄变</button>
    <button @click="job.salary++">薪资变</button>
  </div>
</template>

<script>
import {shallowReactive, shallowRef} from "vue";
export default {
  name: 'DeMo',
  setup() {
    let person = shallowReactive({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      }
    })

    let x = shallowRef({
      y: 0
    })

    return { person, x }
  }
}
</script>
