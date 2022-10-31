import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

const app = Vue.createApp({
    router,
})
app.use(VueRouter)
app.mount('#app')