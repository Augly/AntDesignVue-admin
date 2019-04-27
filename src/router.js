import Vue from "vue";
import Router from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./Layouts/BasicLayout.vue"),
      children: [
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: {
            render: h => h("router-view")
          },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              component: () => import("./views/Dashboard/analysis.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/user",
      component: () => import("./Layouts/UserLayout.vue"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () => import("./views/User/login.vue")
        },
        {
          path: "/user/register",
          name: "register",
          component: () => import("./views/User/register.vue")
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/404.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.path != from.path) {
    Nprogress.start();
  }
  next();
});
router.afterEach(() => {
  Nprogress.done();
});
export default router;
