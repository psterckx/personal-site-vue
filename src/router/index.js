import { createRouter, createWebHistory } from "vue-router";
import Projects from "../views/Projects.vue";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import MobileMenu from "../views/MobileMenu.vue";
import Router from "./Router.vue";
// import Experiences from "../views/Experiences.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    // {
    //   path: "/experiences",
    //   name: "Experiences",
    //   component: Experiences,
    // },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/m",
      name: "MobileMenu",
      component: MobileMenu,
    },
    {
      path: "/p/:name",
      component: Router,
      props: true,
    },

  ],
});

export default router;
