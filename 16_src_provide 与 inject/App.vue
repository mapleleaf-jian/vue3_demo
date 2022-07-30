<template>
  <div id="app">
    <span>祖组件</span>
    <span>姓名：{{name}}</span>
    <span> 年龄：{{age}}</span>
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child'
import {provide, reactive, toRefs} from "vue";
export default {
  name: 'App',
  components: {Child},
  setup() {
    let person = reactive({
      name: 'tom',
      age: 18
    })
    provide('person', person)
    return {...toRefs(person)}
  }
}
</script>>

<style scoped>
  #app {
    background-color: gray;
    padding: 10px;
  }
</style>
