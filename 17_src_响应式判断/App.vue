<template>
  <div id="app">
    <h3>hello</h3>
  </div>
</template>

<script>
import {isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref} from "vue";

export default {
  name: 'App',
  setup() {
    let student = reactive({name: 'tom', age: 18})
    let sum = ref(0)
    let stu = readonly(student)
    console.log(isReactive(student))// true
    console.log(isRef(sum))// true
    console.log(isReadonly(stu))// true
    console.log(isProxy(stu))// true
    console.log(isProxy(student))// true
  }
}
</script>>
