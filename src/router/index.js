import { createRouter, createWebHistory } from "vue-router";
import index from "../layouts/index.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    props: (route) => ({
      ...route.params,
    }),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About"),
      },
      {
        path: "/Contact",
        name: "Contact",
        component: () => import("../views/Contact"),
      },
      {
        path: "/auth/login",
        name: "login",
        component: () => import("../layouts/auth"),
      },
      {
        path: "/Result",
        name: "Result",
        component: () => import("../views/Result"),
        props: (route) => {
          console.log("called:", route);
          return {
            ...route.params,
          };
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
