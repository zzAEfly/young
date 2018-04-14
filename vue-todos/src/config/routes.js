import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../Home.vue'
import Explorer from '../Explorer.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'
import Categories from '../Category.vue'

Vue.use(VueRouter)
//使用路由实例插件
// export default 
export default router=new VueRouter({
    mode:'history',
    base:__dirname,
    linkActiveClass:"active",
    routes:[
      {
        name:'Main',
        path:'/',
        component:Main,
        children:[
        //将页面组件与path指定的路由关联
        {name:'Home',path:'/',component:Home},
        {name:'Categories',path:'/Categories',component:Category},
        {name:'ShoppingCart',path:'/shopping-cart',component:ShoppingCart},
        {name:'Me',path:'/me',component:Me}
        ]
      },
      {name:'BookDetail',path:'/books/:id',component:BookDetail}
      ]

});