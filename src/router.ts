import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NotFound404 from './views/404.vue';
import Test from './views/Test.vue';

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import('./views/About.vue'),

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '*',
      name: '404',
      component: NotFound404,
    },
  ],
});
