<template>
  <div>
    <h3>{{ person }}</h3>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{job.salary}}K</h3>
    <button @click="name+='!'">名字变</button><br/>
    <button @click="age++">年龄变</button><br/>
    <button @click="job.salary++">薪资变</button><br/>
  </div>
</template>

<script>
import {reactive, toRef, toRefs} from "vue";
export default {
  name: 'DeMo',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      }
    })

    return {
      person,
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // job: toRef(person, 'job')
      ...toRefs(person)
    }
  }
}
</script>
