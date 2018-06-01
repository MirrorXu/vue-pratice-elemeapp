import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Goods from '../components/goods/Goods.vue'
import Ratings from '../components/ratings/Ratings.vue'
import sellers from '../components/sellers/Sellers.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: '/ratings',
      component: Ratings
    },
    {
      path: '/sellers',
      name: '/sellers',
      component: sellers
    }
  ]
})
