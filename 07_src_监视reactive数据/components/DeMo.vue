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
import {ref, watch, reactive} from "vue";
export default {
  name: 'DeMo',
  setup() {
    let sum = ref(0)
    let msg = ref('hello')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        salary: 20
      }
    })

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

    // 监视reactive修饰的变量的 全部 属性
    // 此处无法正常获取 oldValue
    // 强制开启了深度监视(deep配置项无效)
    watch(person, (newValue, oldValue) => {
      console.log('person改变', newValue, oldValue)
    })

    // 监视reactive修饰的变量的 单个 属性
    // 第一个参数必须写成函数的形式
    watch(() => person.age, (newValue, oldValue) => {
      console.log('person的age改变', newValue, oldValue)
    })

    // 监视reactive修饰的变量的 多个 属性
    watch([() => person.age, () => person.name], (newValue, oldValue) => {
      console.log('person的name或age改变', newValue, oldValue)
    })

    // 监视reactive修饰测变量中的 对象属性
    // deep:true 配置有效，需要开启
    watch(() => person.job, (newValue, oldValue) => {
      console.log('person的job改变', newValue, oldValue)
    }, {deep: true})

    return {
      sum,
      msg,
      person
    }
  }
}
</script>
