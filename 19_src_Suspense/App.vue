<template>
  <div id="app">
    <h3>App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child'
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(() => import('./components/Child')) //动态引入
export default {
  name: 'App',
  components: {Child}
}
</script>>

<style scoped>
  #app {
    background-color: gray;
    padding: 10px;
  }
</style>
