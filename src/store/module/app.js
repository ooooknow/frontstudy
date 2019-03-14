const app = {
    state: {
        //是否开启错误弹窗
        stateDemo: '默认demo信息'
    },
    mutations: {
        SET_STATE_DEMO: (state, text) => {
            state.stateDemo = text;
        }
    },
    actions: {
        //设置demo全局状态方法
        SetDemo({commit, rootState}, text) {
            console.log(rootState.app.stateDemo);
            commit('SET_STATE_DEMO', text);
        }
    },
    getters: {
        stateDemo: state => state.stateDemo
    }
};

export default app
