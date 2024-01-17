<template>
  <div class="text-center mt-4">
    
    <b-breadcrumb :items="items"></b-breadcrumb>
    <br>
    <b-link :to="{ name: 'inicio' }"> Siguiente </b-link>

    <h3>Welcome to Fight Booking</h3>
    <b-container class="my-5">
      <b-row>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/250/250/?image=54"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/250/250/?image=58"
            alt="Image 2"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/250/250/?image=59"
            alt="Image 3"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>
<script>
export default {
  name: "Inicio",
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "#inicio",
          //to: { name: "inicio" },
        },
       /* {
          text: "Reserva de vuelos",
          hrf: "/reserves"
          //to: { name: "reserves" },
        },

        {
          text: "Vuelos disponibles",
          to: { name: "disponibles" },
        },

        {
          text: "cancelados",
          to: { name: "cancelados" },
          active: true,
        },*/
      ],
    };
  },
  /*
  methods: {
    navigateTo(routeName) {
      // Actualizar las migas de pan y redirigir a la ruta correspondiente
      this.items[1].text = routeName;
      this.items[1].to = { name: routeName };
      // Puedes utilizar this.$router.push() si necesitas redirigir programáticamente
    },
  },*/
};
</script>
<style>
</style>
