<template>
  <div>
    <h3>sum: {{sum}}</h3>
    <button @click="sum++">sum++</button><br/>
    <h3>msg: {{msg}}</h3>
    <button @click="msg+='!'">sum++</button><br/>
    <h3>{{person.name}}</h3>
    <h3>{{person.age}}</h3>
    <h3>{{person.job.salary}}K</h3>
    <button @click="person.name+='!'">名字变</button><br/>
    <button @click="person.age++">年龄变</button><br/>
    <button @click="person.job.salary++">薪资变</button><br/>
  </div>
</template>

<script>
import {ref, watch} from "vue";
export default {
  name: 'DeMo',
  setup() {
    let sum = ref(0)
    let msg = ref('hello')
    let person = ref({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      }
    })

    watch(person, (newValue, oldValue) => {
      console.log(person)
      console.log('person的值改变了', newValue, oldValue)
    }, {deep: true})

    return {
      sum,
      msg,
      person
    }
  }
}
</script>
