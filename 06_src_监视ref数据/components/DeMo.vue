<template>
  <div>
    <h3>sum: {{sum}}</h3>
    <button @click="sum++">sum++</button><br/>
    <h3>msg: {{msg}}</h3>
    <button @click="msg+='!'">sum++</button>
  </div>
</template>

<script>
import {ref, watch} from "vue";
export default {
  name: 'DeMo',
  setup() {
    let sum = ref(0)
    let msg = ref('hello')

    // 监视 ref 修饰的一个基本类型数据
    watch(sum, (newValue, oldValue) => {
      console.log('sum变了', newValue, oldValue)
    })

    // 监视 ref 修饰的多个基本类型数据
    watch([sum, msg], (newValue, oldValue) => {
      console.log('sum或msg变了', newValue, oldValue)
    })

    // 第三个参数
    watch([sum, msg], (newValue, oldValue) => {
      console.log('sum或msg变了', newValue, oldValue)
    }, {immediate: true})
    return {
      sum,
      msg
    }
  }
}
</script>
