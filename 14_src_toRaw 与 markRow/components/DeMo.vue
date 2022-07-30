<template>
  <div>
    <h3>和为: {{sum}}</h3>
    <button @click="sum++">sum++</button><hr/>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{job.salary}}K</h3>
    <h3 v-show="person.address">{{person.address}}</h3>
    <button @click="name+='!'">名字变</button>
    <button @click="age++">年龄变</button>
    <button @click="job.salary++">薪资变</button>
    <button @click="showRaw">原始</button>
    <button @click="addAddress">添加地址</button>
    <button @click="person.address.city='nanjing'">修改地址</button>
  </div>
</template>

<script>
import {markRaw, reactive, ref, toRaw, toRefs} from 'vue'
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

    function addAddress() {
      const address = {city: 'beijing'}
      person.address = markRaw(address)
    }

    function showRaw() {
      const p = toRaw(person)
      console.log(p)
      const s = toRaw(sum)
      console.log(s)
    }

    return {
      person,
      sum,
      ...toRefs(person),
      showRaw,
      addAddress
    }
  }
}
</script>
