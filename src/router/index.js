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
import Editpublisher from '@/components/Editpublisher'
import Auth from '@/components/Auth'
import Dashboard from '@/components/Dashboard'
import auth from '@/auth'
Vue.use(Router)

var routes = [
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
    },
    {
      path: '/editpublisher',
      name: 'Editpublisher',
      component: Editpublisher,
      props: true
    },
    { path: '/auth', name: 'auth', component: Auth, meta: { guestOnly: true } },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requireAuth: true } }
  ]
  export const router = new Router({
    mode: 'history',
    routes
  })

  router.beforeEach((to, from, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser) next('auth')
  else if (guestOnly && currentUser) next('dashboard')
  else next()
})
