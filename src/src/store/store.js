import Vue from 'vue'
import Vuex from 'vuex'

import GeneratedInfo from './modules/generated-info'


Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        GeneratedInfo
    },
    state: {

    },
    mutations: {

    },
    actions: {

    }
})