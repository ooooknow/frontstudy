<template>

    <div class="index">
        <h1>首页</h1>
        <p>
            <router-link to="/product/list">
                ->列表
            </router-link>
        </p>
        <div class="demo1">
            demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1demo1
        </div>
        <div class="demo2"></div>
        <div class="demo3"></div>
    </div>
</template>

<script>
    //首页
    export default {
        beforeCreate: function () {
            console.group('------beforeCreate创建前状态------');
        },
        created: function () {
            console.group('------created创建完毕状态------');
        },
        beforeMount: function () {
            console.group('------beforeMount挂载前状态------');
        },
        mounted: function () {
            console.group('------mounted 挂载结束状态------');
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
        },
        beforeRouteEnter(to, from, next) {
            to.meta.isBack = true;
            console.group('beforeRouteEnter 路由进入前===============》');
            next(vm => {
                vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter();
            })
        },
        activated() {
            if (!this.$route.meta.isBack) {
                console.group('activated 路由页面挂载===============》');
            }
            this.$route.meta.isBack = false
        },
        beforeRouteLeave(to, from, next) {
            console.group('beforeRouteLeave 路由离开前===============》');
            this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave();
            next();
        }
    }
</script>
<style lang="scss" scoped>
    .index {
        h1 {
            font-size: 40px;
            text-align: center;
            padding: 40px 0;
        }
        P {
            font-size: 28px;
            text-align: center;
        }
        .demo1, .demo2, .demo3 {
            margin: 20px;
        }
        .demo1 {
            color: #000000;
            @include opacity(0.4);
            @include text-ellipsis(3);
        }
        .demo2 {
            @include regulaTriangle(top, red);
        }
        .demo3 {
            @include right-angledTriangle(1, red);
        }
    }
</style>
