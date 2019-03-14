<template>
    <div id="app">
        <my-header/>
        <transition :name="transitionName">
            <keep-alive>
                <router-view class="child-view"></router-view>
            </keep-alive>
        </transition>
        <my-footer/>
    </div>
</template>

<script>
    import MyHeader from '@/components/Public/MyHeader'
    import MyFooter from '@/components/Public/MyFooter'
    import {mapGetters} from 'vuex'
    import {test} from '@/utils'
    import {getMockDemo} from '@/api'

    export default {
        components: {
            MyHeader,
            MyFooter
        },
        data() {
            return {
                transitionName: ""
            };
        },
        computed: {
            ...mapGetters([
                'stateDemo'
            ])
        },
        watch: {
            $route(to, from) {
                let isBack = this.$router.isBack;
                if (isBack) {
                    if (!from.meta.isHome) {
                        console.log("后退动画");
                        this.transitionName = "slide-right";
                    } else {
                        this.transitionName = "";
                    }
                } else {
                    if (!to.meta.isHome) {
                        console.log("前进动画");
                        this.transitionName = "slide-left";
                    } else {
                        this.transitionName = "";
                    }
                }
                this.$router.isBack = false;
            }
        },
        methods: {
            //vuex demo
            vuexDemo() {
                console.log(this.$store.state.app.stateDemo);
                console.log(this.stateDemo);
                this.$store.commit('SET_STATE_DEMO', 'commit设置demo信息');
                console.log(this.$store.state.app.stateDemo);
                console.log(this.stateDemo);
                this.$store.dispatch("SetDemo", 'dispatch设置demo信息');
                console.log(this.$store.state.app.stateDemo);
                console.log(this.stateDemo);
            },
            //公共js方法demo demo
            utilsDemo() {
                test('公共js方法demo');
            },
            async apiDemo() {
                console.log('apiDemo');
                try {
                    const data = await getMockDemo('13710121070');
                    console.log('返回的数据', data.data);
                } catch (err) {
                    console.log(err);
                }
            },
            apiDemo2() {
                getMockDemo('13710121070').then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
        mounted() {
            // this.vuexDemo();
            // this.utilsDemo();
            this.apiDemo();
            this.apiDemo2();
        }
    }
</script>

<!--<style lang="scss" src="@/styles/_reset.scss"></style>-->
<style lang="scss">
    @import '@/styles/_reset.scss';
    @import '@/styles/_utilities.scss';
    @import './assets/iconfont/iconfont.css';
    #app {
        position: relative;
        height: 100%;
        .child-view {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            overflow-y: auto;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
            padding-top: $header-height;
            padding-bottom: $footer-height;
        }
        .slide-right-enter-active,
        .slide-right-leave-active,
        .slide-left-enter-active,
        .slide-left-leave-active {
            height: 100%;
            will-change: transform;
            transition: all 500ms;
            position: absolute;
            top: 0;
            bottom: 0;
            backface-visibility: hidden;
            perspective: 1000;
        }
        .slide-right-enter, .slide-right-enter-active {
            animation: bounce-left-in 500ms;
        }
        .slide-right-leave-active {
            animation: bounce-left-out 500ms;
        }
        .slide-left-enter, .slide-left-enter-active {
            animation: bounce-right-in 500ms;
        }
        .slide-left-leave-active {
            animation: bounce-right-out 500ms;
        }
    }

    @keyframes bounce-right-in {
        0% {
            transform: translate3d(100%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes bounce-right-out {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-100%, 0, 0);
        }
    }

    @keyframes bounce-left-in {
        0% {
            transform: translate3d(-100%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes bounce-left-out {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(100%, 0, 0);
        }
    }
</style>
