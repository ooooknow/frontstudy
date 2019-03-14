<template>
    <div class="product-list">
        <h1>列表</h1>
        <p>
            <router-link to="/product/show">
                ->详情
            </router-link>
        </p>
    </div>
</template>

<script>
    //产品列表
</script>
<style lang="scss" scoped>
    .product-list {
        h1 {
            font-size: 40px;
            text-align: center;
            padding: 40px 0;
        }
        P {
            font-size: 28px;
            text-align: center;
        }
    }
</style>
