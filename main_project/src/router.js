import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from "./pages/coaches/CoachesList.vue";
import NotFound from './pages/NotFound.vue';
import RegisterCoaches from "./pages/coaches/RegisterCoaches.vue";
import CoachMember from "./pages/coaches/CoachMember.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import UserAuth from "./pages/auth/UserAuth.vue";
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
      children: [{name: "contact",path: '/coach/:id/contact', component: ContactCoach }],
    },
    {
      path: '/register',
      component: RegisterCoaches,
    },
    {
      path: '/requests',
      component: RequestsReceived,
    },
    { path: "/auth", component: UserAuth},
    { path: '/:noFound(.*)', component: NotFound },
  ],
});

export default router;
