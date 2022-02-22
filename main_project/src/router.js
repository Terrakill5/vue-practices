import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from "./pages/CoachesList.vue";
import NotFound from './pages/NotFound.vue';
import RegisterCoaches from "./components/RegisterCoaches.vue";
import CoachMember from "./components/CoachMember.vue";
//import CoachesList from "./pages/CoachesList.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      name: "coaches",
      path: '/coaches',
      component: CoachesList,
    },
    {
      name: "coach",
      path: '/coach/:id',
      component: CoachMember,
      props: true,
      children: [{ path: '/contact/:id', component: null }],
    },
    {
      path: '/register',
      component: RegisterCoaches,
    },
    {
      path: '/requests',
      component: null,
    },
    { path: '/:noFound(.*)', component: NotFound },
  ],
});

export default router;
