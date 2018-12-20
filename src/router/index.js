import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Books from '@/components/Book'
import publisher from '@/components/Publisher'
import Newbook from '@/components/Newbook'
import Newpublisher from '@/components/Newpublisher'
import Newbooktype from '@/components/Newbooktype'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Booktype from '@/components/Booktype'
import Maps from '@/components/GoogleMap'
import Editbook from '@/components/Editbook'
import Editbooktype from '@/components/Editbooktype'
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
      path: '/Newbooktype',
      name: 'Newbooktype',
      component: Newbooktype
    },
    {
      path: '/Newpublisher',
      name: 'Newpublisher',
      component: Newpublisher
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
      path: '/publisher',
      name: 'publisher',
      component: publisher
    },
    {
      path: '/map',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/editbook',
      name: 'Editbook',
      component: Editbook,
      props: true
    },
    {
      path: '/editbooktype',
      name: 'Editbooktype',
      component: Editbooktype,
      props: true
    }
  ]
})
