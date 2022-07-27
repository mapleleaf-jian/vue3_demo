<template>
  <div>
    <h2>hello</h2>
  </div>
</template>

<script>
import {reactive} from "vue";
export default {
  name: 'DeMo',
  props: ['name', 'msg'],
  setup(props, context) {
    console.log('---', props) // Proxy {name: 'vue3', msg: 'hello'}
    console.log(context)
    const person = reactive({
      name: '张三',
      age: 18
    })
    return {
      person
    }
  }
}
</script>
