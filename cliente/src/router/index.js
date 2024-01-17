import VueRouter from "vue-router";
import Vue from "vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/inicio",
  },

  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },

    children: [
      {
        path: "/inicio",
        name: "inicio",
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
        component: () => import("../components/Contact.vue")
      }
      ,
      {
        path: "/reserves",
        name: "reserves",
        component: () => import("../components/Reservas.vue")
      },
      {
        path: "/areservados",
        name: "areservados",
        component: () => import("../components/AsientosReservados.vue")
      },
      {
        path: "/disponibles",
        name: "disponibles",
        component: () => import("../components/VuelosDisponibles.vue")
      },
      {
        path: "/lvuelos",
        name: "lvuelos",
        component: () => import("../components/Lvuelos.vue")
      },
      {
        path: "/cancelados",
        name: "cancelados",
        component: () => import("../components/VuelosCancelados.vue")
      },
      {
        path: "/pvuelos",
        name: "pvuelos",
        component: () => import("../components/Pvuelos.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
