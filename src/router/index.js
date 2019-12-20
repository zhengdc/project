import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login'
import Home from '@/components/Home'
import SinglePageList from '@/components/SinglePageList'
import Product from '@/components/Product'
import News from '@/components/News'
import Category from '@/components/Category'
import Links from '@/components/Links'
import MessageList from '@/components/MessageList'
import Manager from '@/components/Manager'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      // name: 'index',
      component: index,
      children: [{
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/SinglePageList',
          name: 'SinglePageList',
          component: SinglePageList
        },
        {
          path: '/Product',
          name: 'Product',
          component: Product
        },
        {
          path: '/News',
          name: 'News',
          component: News
        },
        {
          path: '/Category',
          name: 'Category',
          component: Category
        },
        {
          path: '/Links',
          name: 'Links',
          component: Links
        },
        {
          path: '/MessageList',
          name: 'MessageList',
          component: MessageList
        },
        {
          path: '/Manager',
          name: 'Manager',
          component: Manager
        },
      ]
    },

  ]
})
