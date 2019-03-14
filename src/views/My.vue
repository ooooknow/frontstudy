<template>
    <my-scroll ref="mescroll" class="my" :down="mescrollDown" :up="mescrollUp">
        <ul class="my-test-list">
            <li v-for="(item,index) of testlist" :key="index">
                <span>{{item}} {{index+1}}</span>
            </li>
        </ul>
    </my-scroll>
</template>

<script>
    import myScroll from '@/components/Public/myScroll'

    export default {
        name: 'home',
        components: {
            myScroll
        },
        data() {
            return {
                //下拉刷新的配置
                mescrollDown: {
                    //下拉刷新回调
                    callback: this.DownCallback
                },
                // 上拉加载的配置.
                mescrollUp: {
                    //关闭初始化默认运行上拉加载
                    auto: false,
                    //上拉加载回调
                    callback: this.UpCallback
                },
                //测试数据
                testlist: []
            }
        },
        methods: {
            //下拉刷新回调
            DownCallback(mescroll) {
                let self = this;
                setTimeout(function () {
                    self.$nextTick(() => {
                        self.testlist = [];
                        for (let i = 0; i < 10; i++) {
                            self.testlist.push('刷新test');
                        }
                        mescroll.endSuccess();
                    })
                }, 1000);
            },
            //上拉加载回调
            UpCallback(page, mescroll) {
                let self = this;
                setTimeout(function () {
                    for (let i = 0; i < 10; i++) {
                        self.testlist.push('第' + page.num + '次新增test ');
                    }
                    self.$nextTick(() => {
                        mescroll.endSuccess(10)
                    })
                }, 1000);
            }
        },
        activated() {
            if (!this.$route.meta.isBack) {
                console.log('我的页面初始化');
            }
            this.$route.meta.isBack = false
        },
        beforeRouteEnter(to, from, next) {
            to.meta.isBack = true;
            //进入页面前查看有无滚动位置记录 有哲滚动到记录的位置
            next(vm => {
                vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter();
            })
        },
        beforeRouteLeave(to, from, next) {
            //离开页面前记录滚动位置
            this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave();
            next()
        }
    }

</script>
<style lang="scss" scoped>
    .my {
        h1 {
            font-size: 40px;
            text-align: center;
            padding: 40px 0;
        }
        .my-test-list {
            li {
                height: 60px;
                line-height: 60px;
                text-align: center;
                font-size: 32px;
                span {
                    border-bottom: black 1px solid; /*px*/
                }
            }
        }
    }
</style>
