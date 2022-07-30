<template>
  <div>
    <button @click="isShow=true">打开弹窗</button>
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>内容</h3>
          <h3>内容</h3>
          <button @click="isShow=false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'Dialog',
  setup() {
    let isShow = ref(false)
    return {isShow}
  }
}
</script>

<style scoped>
  .mask {
    position: absolute;
    top: 0;bottom: 0;left: 0;right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: tanslate(-50%, -50%);
    text-align: center;
    width: 200px;
    height: 150px;
    background-color: green;
    padding: 10px;
    margin-top: 5px;
  }
</style>