import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import vueConfig from 'vue.config'
Vue.use(VueRouter)

import VueAxios from "vue-axios"
import axios from "axios"
Vue.use(VueAxios)

createApp(App).mount('#app')
