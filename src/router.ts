import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import DashBoard from './views/todo/DashBoard.vue';
import firebase from 'firebase';

Vue.use(Router);

const router: Router = new Router({
  routes: [
    {
      path: '/signin',
      alias: '/',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/app',
      alias: '/dashboard',
      component: DashBoard,
      meta: {
        requiresAuth: true
      },
      children: []
    }
  ],
});

router.beforeEach((to, from, next) => {
  // firebase認証済みでない場合はログイン画面にリダイレクトする
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      next('/signin');
    }
  } else {
    next();
  }
});

export default router;
