import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/Inicio.vue"),
  },

  {
    path: "/formulario",
    name: "formulario",
    component: () => import("../components/Formulario.vue"),
  },
  //Las rutas asociadas a los componentes
  {
    path: "*",
    component: () => import("../views/ErrorPages/Error404.vue"),
  },

  {
    path: "/inicio",
    component: () => import("../components/Inicio.vue"),
    //los componentes que se renderizan en router view
    children: [
      {
        path: "/inicio", //main
        name: "inicio", //main
        component: () => import("../components/Start.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../components/About.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("../components/Reservas.vue"),
      },
      
      {
        path: "/formulario",
        name: "formulario",
        component: () => import("../components/Formulario.vue"),
      },
      {
        path: "/reserves",
        name: "reserves",
        component: () => import("../components/Reservas.vue"),
      },
      {
        path: "/areservados",
        name: "areservados",
        component: () => import("../components/AsientosReservados.vue"),
      },
      {
        path: "/disponibles",
        name: "disponibles",
        component: () => import("../components/VuelosDisponibles.vue"),
      },
      {
        path: "/lvuelos",
        name: "lvuelos",
        component: () => import("../components/Lvuelos.vue"),
      },
      {
        path: "/cancelados",
        name: "cancelados",
        component: () => import("../components/VuelosCancelados.vue"),
      },
      {
        path: "/pvuelos",
        name: "pvuelos",
        component: () => import("../components/Pvuelos.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
