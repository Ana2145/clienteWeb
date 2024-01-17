<template>
    <div class="mt-5">
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <h3>Vuelos cancelados</h3>
        <hr>
        Proximos vuelos
        <b-link :to="{ name: 'pvuelos' }"> ir </b-link>
    </div>
</template>
<script>
export default {
    name: "Cancelados",
    data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "#inicio",
        },
       {
          text: "Vuelos cancelados",
          active: true
        },
      ],
    };
  },
}
</script>
<style>
    
</style>