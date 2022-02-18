import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      /* {path: "/", component: TeamsList}, */
      { path: '/', redirect: '/teams' },
      {
        name: 'teams',
        path: '/teams',
        meta: {needsAuth: true}, //se usa para autenticar
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true,
          },
        ],
      },
      /* {path: "/teams", component: TeamsList, alias "/" }, */
      {
        path: '/users',
        components: { default: UsersList, footer: UsersFooter },
        beforeEnter(to, from, next) {
          console.log('users beforeEnter');
          console.log(to, from);
          next();
        },
      },
      { path: '/teams/:teamId', component: TeamMembers, props: true }, //siempre poner la ruta dinamica de ultimo, pues las rutas estaticas son prioritarias
      /* {path: "/:notFound(.*)", redirect: "/teams"} */
      { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
      //console.log(to,from,savedPosition);
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    },
  });
  /* router.beforeEach(function (to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    if (to.meta.needsAuth) {
        console.log("Needs auth!");
        next();
    }
    else {
        next();
    } */
    /*   if (to.name === "team-members") {
          next();
      }
      else {
          next({name: "team-members", params: { teamId: "t2"}}); //next() o next(confirm) deja que le usuario siga a la siguiente pagina, por el contrario next(false) lo niega
      } */
   //next();
  //});
  
  /* router.afterEach(function (to, from) {
      //sending analytics data
      console.log(to, from);
  }); */

  export default router;