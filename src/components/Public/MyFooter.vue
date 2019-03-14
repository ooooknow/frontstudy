<template>
    <div class="my-footer" v-if="isShow">
        <div class="my-footer-item" v-for="item of footerList" :key="item.name"
             :class="{'active':item.name===active}" @click="footerJump(item.name)">
            <router-link :to="{name: item.name}">
                <div class="my-footer-item-icon">
                    <i class="iconfont" :class="item.icon"></i>
                </div>
                <div class="my-footer-item-title">
                    {{item.title}}
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-footer",
        data() {
            return {
                footerList: [
                    {
                        name: 'Index',
                        title: '首页',
                        icon:'icon-shouye'
                    },
                    {
                        name: 'My',
                        title: '我的',
                        icon:'icon-ziyuan'
                    }
                ],
                active: '',
                isShow: true
            }
        },
        watch: {
            '$route'() {
                this.isShow = this.$route.meta.isHome;
            }
        },
        methods: {
            footerJump(name) {
                this.active = name;
                this.$router.push({name: name})
            }
        },
        created() {
            this.active = this.$route.name;
        }
    }
</script>

<style lang="scss" scoped>
    .my-footer {
        position: fixed;
        bottom: 0;
        z-index: 2;
        width: 100%;
        height: $footer-height;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: $color-vice-text;
        box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.2); /*no*/
        .my-footer-item {
            height: $footer-height;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px 0 5px;
            .my-footer-item-icon {
                line-height: 42px;
                i {
                    font-size: 44px; /*px*/
                }
            }
            .my-footer-item-title {
                height: 32px;
                line-height: 32px;
                font-size: 18px; /*px*/
            }
            &.active {
                .my-footer-item-icon {
                    i {
                        color: $color-active;
                    }
                }
                .my-footer-item-title {
                    color: $color-active;
                }
            }
        }
    }
</style>
