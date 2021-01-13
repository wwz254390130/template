import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "*",
      name: "404",
      component: () => import("@/views/404.vue"),
      meta: { title: "访问出错" }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/login.vue"),
      meta: { title: "登录" }
    }
  ]
});

export default router;
