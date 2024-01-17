<template>
    <div class="mt-5">

        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <h3>Reservas de vuelo</h3>
        <hr>
        Asientos reservados

        <b-link :to="{ name: 'areservados' }"> ir </b-link>
        




    </div>
</template>
<script>
export default {
    name: "Reserves",
    data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "#inicio",
          //to: { name: "inicio" },
        },
       {
          text: "Reserva de vuelos",
          active: true
          //to: { name: "reserves" },
        },
      ],
    };
  },
}
</script>
<style>
    
</style>