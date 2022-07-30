<template>
  <div>
    <h3>和为: {{sum}}</h3>
    <button @click="sum++">sum++</button><hr/>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{job.salary}}K</h3>
    <button @click="name+='!'">名字变</button>
    <button @click="age++">年龄变</button>
    <button @click="job.salary++">薪资变</button>
  </div>
</template>

<script>
import {reactive, readonly, ref, shallowReadonly, toRefs} from 'vue'
export default {
  name: 'DeMo',
  setup() {
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      }
    })

    person = readonly(person)
    person = shallowReadonly(person)
    sum = readonly(sum)
    sum = shallowReadonly(sum)

    return {
      sum,
      ...toRefs(person)
    }
  }
}
</script>
