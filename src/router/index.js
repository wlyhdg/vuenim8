import Vue from "vue";
import VueRouter from "vue-router";
import Modal from "../views/Modal.vue";
import Drawer from "../views/Drawer.vue";
import Cards from "../views/Cards.vue";
import Simple from "../views/Simple.vue";
import Stagger from "../views/Stagger.vue";
import State from "../views/State.vue";
import Timeline from "../views/Timeline.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Modal",
    component: Modal
  },
  {
    path: "/drawer",
    name: "Drawer",
    component: Drawer
  },
  {
    path: "/cards",
    name: "Cards",
    component: Cards
  },
  {
    path: "/simple",
    name: "Simple",
    component: Simple
  },
  {
    path: "/stagger",
    name: "Stagger",
    component: Stagger
  },
  {
    path: "/state",
    name: "State",
    component: State
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/List.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
