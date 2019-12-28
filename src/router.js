import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'auth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Auth.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/Card.vue'),
    },
    {
      path: '/blog/new',
      name: 'new-post',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/NewPost.vue'),
    },
    {
      path: '/blog/view/:slug',
      name: 'new-post',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/BlogPost.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue'),
    },
  ],
});
