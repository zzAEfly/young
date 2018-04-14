<template>
<div id="app">
    <div class="tabs">
        <ul>
            <li>
                <!-- 使用router-link指向定义的path -->
                <router-link :to="{name:'Home'}" tag="li">
                <div><img src="./assets/images/home.svg" alt=""></div>
                <div>首页</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'Categories'}" tag="li">
                <div><img src="./assets/images/category.svg" alt=""></div>
                <div>分类</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'ShoppingCart'}" tag="li">
                <div><img src="./assets/images/cart.svg" alt=""></div>
                <div>购物车</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'Me'}" tag="li">
                <div><img src="./assets/images/me.svg" alt=""></div>
                <div>我</div>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="content">
        <!-- 用router-view渲染视图 -->
        <router-view></router-view>
    </div>
</div>
</template>

<script>


</script>

<style>

</style>