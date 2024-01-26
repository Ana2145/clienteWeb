<template>
      <b-container fluid>
        <b-row>
          <b-col>
            <b-navbar toggleable="lg" type="light" variant="light">
              <b-navbar-brand href="#">Lop</b-navbar-brand>
              <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>
    
              <b-collapse id="navbar-nav" is-nav>
                <b-navbar-nav>
                  <b-nav-item to="/inicio">Inicio</b-nav-item>
                  <b-nav-item to="/about">Acerca de</b-nav-item>
                  <b-nav-item to="/formulario">Formulario</b-nav-item>

                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </b-col>
        </b-row>
    
        <b-row>
          <b-col sm="3">
            <!--<b-sidebar
              id="sidebar"
              shadow
              visible
              no-header-close
              no-close-on-route-change
              no-close-on-esc
              no-close-on-backdrop
              z-index="-1"
            >-->
              <b-nav vertical class="pt-5">
                <b-nav-item>
                  <b-link :to="{ name: 'reserves' }"> Reservas de vuelo </b-link>
                </b-nav-item>
                <b-nav-item>
                  <b-link :to="{ name: 'disponibles' }"> Vuelos disponibles </b-link>
                </b-nav-item>
                <b-nav-item>
                  <b-link :to="{ name: 'cancelados' }"> Vuelos cancelados </b-link>
                </b-nav-item>
              </b-nav>
            <!--</b-sidebar>-->
          </b-col>
    
          <b-col>
            <router-view></router-view>
          </b-col>
        </b-row>
      </b-container>
    </template>
    
    <script>
    export default {
      //name: "App",
    };
    </script>
    
    <style scoped>
  
    .b-nav-link {
      pointer-events: auto !important;
    }
    </style>
    