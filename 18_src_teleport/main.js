// 引入的不再是Vue构造函数，而是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app(类似于Vue2中的vm，但比vm更轻)，并挂载
createApp(App).mount('#app')

// new Vue({
//     render: (h) => h(App)
// }).$mount('#app')