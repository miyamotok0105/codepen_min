import Vue from 'vue'
import App from './App.vue'
import Main from './components/Main.vue'
import Genarate from './components/Genarate.vue'

// window.Vue = require('vue');
Vue.config.productionTip = false


const routes = [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Main},
    {path: '/genarate', component: Genarate, meta: {}},
];

import VueRouter from 'vue-router';
Vue.use(VueRouter);


const router = new VueRouter({
    routes,
    // linkActiveClass: 'active',
    mode: 'history',
});

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
    render: h => h(App),
    router
}).$mount('#app')