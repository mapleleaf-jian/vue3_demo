<template>
  <div>
    姓：<input type="text" v-model="person.firstName"><br/>
    名：<input type="text" v-model="person.lastName"><br/>
    <span>全名：{{person.fullName}}</span><br/>
    全名：<input type="text" v-model="person.fullName"><br/>
  </div>
</template>

<script>
import {reactive, computed} from "vue";
export default {
  name: 'DeMo',
  setup() {
    const person = reactive({
      firstName: '张',
      lastName: '三'
    })
    // 简写
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName;
    // })
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName;
      },
      set(value) {
        const names = value.split('-')
        person.firstName = names[0]
        person.lastName = names[1]
      }
    })
    return {
      person
    }
  }
}
</script>
