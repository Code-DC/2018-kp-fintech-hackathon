import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import productlist from '@/components/productlist'
import account from '@/components/account'
import select from '@/components/select'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: productlist
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/account',
      name: 'account',
      component: account
    }
  ]
})
