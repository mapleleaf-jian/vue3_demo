<template>
  <div id="son">
    <span>孙组件</span>
    <span>姓名：{{name}}</span>
    <span> 年龄：{{age}}</span>
  </div>
</template>

<script>
import {inject, toRefs} from "vue";

export default {
  name: 'Son',
  setup() {
    let person = inject('person')
    return {...toRefs(person)}
  }
}
</script>

<style scoped>
  #son {
    background-color: orange;
    padding: 10px;
  }
</style>e