<template>
    <div ref="mescroll" class="mescroll">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import MeScroll from 'mescroll.js'
    import 'mescroll.js/mescroll.min.css'

    export default {
        name: 'my-scroll',
        data: function () {
            return {
                mescroll: null,
                lastScrollTop: 0, // 路由切换时滚动条的位置
                lastBounce: null, // 路由切换时是否禁止ios回弹
                config: {}
            }
        },
        props: {
            up: {
                type: Object,
                default: function () {
                    return {
                        use: false
                    }
                }
            },
            down: {
                type: Object,
                default: function () {
                    return {
                        use: false
                    }
                }
            }
        },
        mounted: function () {
            this.mescroll = new MeScroll(this.$refs.mescroll, {
                up: this.up,
                down: this.down
            });
            this.$emit('init', this.mescroll) // init回调mescroll对象
        },
        methods: {
            beforeRouteEnter() {
                if (this.mescroll) {
                    // 滚动到之前列表的位置
                    if (this.lastScrollTop) {
                        console.log('进入', this.lastScrollTop);
                        this.mescroll.setScrollTop(this.lastScrollTop)
                        setTimeout(() => { // 需延时,因为setScrollTop内部会触发onScroll,可能会渐显回到顶部按钮
                            this.mescroll.setTopBtnFadeDuration(0) // 设置回到顶部按钮显示时无渐显动画
                        }, 16)
                    }
                    // 恢复到之前设置的isBounce状态
                    if (this.lastBounce != null) this.mescroll.setBounce(this.lastBounce)
                }
            },
            beforeRouteLeave() {
                if (this.mescroll) {
                    console.log('离开', this.mescroll.getScrollTop());
                    this.lastScrollTop = this.mescroll.getScrollTop() // 记录当前滚动条的位置
                    this.mescroll.hideTopBtn(0) // 隐藏回到顶部按钮,无渐隐动画
                    this.lastBounce = this.mescroll.optUp.isBounce // 记录当前是否禁止ios回弹
                    this.mescroll.setBounce(true) // 允许bounce
                }
            }
        }
    }
</script>

<style>
</style>
