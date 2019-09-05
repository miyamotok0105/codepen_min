import Vue from 'vue'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './App.vue'
import Main from './components/Main.vue'
import Genarate from './components/Genarate.vue'

Vue.config.productionTip = false


const routes = [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Main},
    {path: '/genarate', component: Genarate, meta: {}},
];



const router = new VueRouter({
    routes,
    // linkActiveClass: 'active',
    mode: 'history',
});
sync(store, router);

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')