<template>
    <div class="my-header">
        <div class="my-header-default" v-if="headerType==='default'">
            <div class="my-header-default-return" @click="$router.go(-1)">
                <i class="iconfont icon-xiazai6"></i>
            </div>
            <div class="my-header-default-title">
                {{headerTitle}}
            </div>
        </div>
        <div id="headerIndex" class="my-header-index" v-if="headerType==='index'">
            <div class="my-header-index-address">
                广州
            </div>
            <div class="my-header-index-search">
                <router-link to="#">
                    <div class="my-header-index-search-con">
                        <span class="iconfont">&#xe617;</span>
                        <span class="iconfont">&#xe64a;</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    //公共头部组件
    export default {
        name: "my-header",
        data() {
            return {
                headerType: 'default',
                headerTitle: ''
            }
        },
        watch: {
            '$route'() {
                if (this.$route.meta.headerType) {
                    this.headerType = this.$route.meta.headerType;
                } else {
                    this.headerType = 'default';
                    this.headerTitle = this.$route.meta.headerTitle;
                }
            }
        },
        methods: {},
        created() {
            if (this.$route.meta.headerType) {
                this.headerType = this.$route.meta.headerType;
            } else {
                this.headerType = 'default';
                this.headerTitle = this.$route.meta.headerTitle;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .my-header {
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 100%;
        height: $header-height;
        line-height: $header-height;
        font-size: 36px; /*px*/
        .my-header-default {
            height: $header-height;
            background-color: $color-vice-text;
            box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2); /*no*/
            .my-header-default-return {
                position: absolute;
                top: 50%;
                left: 0;
                width: 72px;
                padding-left: 32px;
                transform: translateY(-50%);
                i {
                    font-size: 40px; /*px*/
                }
            }
            .my-header-default-title {
                text-align: center;
                font-size: 36px; /*px*/
            }
        }
        .my-header-index {
            display: flex;
            padding: 0 20px;
            /*background-color: transparent;*/
            background-color: aqua;
            .my-header-index-address {
                position: relative;
                width: 120px;
                height: 100%;
                font-size: 26px; /*px*/
                &:after {
                    position: absolute;
                    top: 50%;
                    right: 30px;
                    width: 0;
                    height: 0;
                    margin-top: -3px; /*no*/
                    border-left: 6px solid transparent; /*no*/
                    border-right: 6px solid transparent; /*no*/
                    border-top: 6px solid #333333; /*no*/
                    content: ' ';
                }
            }
            .my-header-index-search {
                width: 530px;
                padding: 13px 0;
                .my-header-index-search-con {
                    padding: 0 20px;
                    height: 62px;
                    line-height: 62px;
                    display: flex;
                    justify-content: space-between;
                    border-radius: 31px; /*no*/
                    cursor: pointer;
                    color: #999999;
                    background-color: $color-vice-text;
                    span {
                        font-size: 35px; /*px*/
                    }
                }
            }
        }
    }
</style>
