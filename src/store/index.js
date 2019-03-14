import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/module/app'

Vue.use(Vuex);
/*
    全局状态管理数据
*/
export default new Vuex.Store({
    modules: {
        app
    }
})
