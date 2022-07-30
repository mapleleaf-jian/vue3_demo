<template>
  <input type="text" v-model="keyword">
  <h3>{{keyword}}</h3>
</template>

<script>
import {customRef} from "vue";
export default {
  name: 'App',
  setup() {
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log('读取了数据 ', value)
            track() // 通知 Vue 追踪 value 的变化
            return value
          },
          set(newValue) {
            console.log(`修改了数据: ${value} -> ${newValue}`)
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() // 通知 Vue 重新解析模板
            }, delay)
          }
        }
      })
    }
    let keyword = myRef('hello', 500)
    return {keyword}
  }
}
</script>>
