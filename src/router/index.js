import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/VmHome';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
