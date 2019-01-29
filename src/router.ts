import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Demo from './apps/demo/Demo.vue';
import DemoHome from './apps/demo/pages/DemoHome.vue';
import Admin from './apps/admin/Admin.vue';
import AdminHome from './apps/admin/pages/AdminHome.vue';
import Blog from './apps/blog/Blog.vue';
import BlogHome from './apps/blog/pages/BlogHome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo,
      children: [
        { path: '', component: DemoHome },
        { path: '*', component: DemoHome },
        // ...other sub routes
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        { path: '', component: AdminHome },
        { path: '*', component: AdminHome },
        // ...other sub routes
      ],
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './apps/blog/Blog.vue'),
      children: [
        { path: '', component: BlogHome },
        { path: '*', component: BlogHome },
        // ...other sub routes
      ],
    },
  ],
});
