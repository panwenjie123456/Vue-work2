import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Books from '@/components/Book'
import Newbook from '@/components/Newbook'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Booktype from '@/components/Booktype'
import Maps from '@/components/GoogleMap'
import Edit from '@/components/Edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/Newbook',
      name: 'Newbook',
      component: Newbook
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/booktype',
      name: 'Booktype',
      component: Booktype
    },
    {
      path: '/map',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    }
  ]
})
