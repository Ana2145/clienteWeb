<template>
    <div class="mt-5">
      <b-breadcrumb :items="items"></b-breadcrumb>
      <br />
      <h3>Proximos vuelos</h3>
      <hr />
      Asientos reservados de la comunidad inscrita en la compañia
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam sapiente
        quas minus. Placeat voluptas minima esse. Nobis aliquid accusamus
        repellendus eaque eveniet cumque dolorem pariatur quia tenetur totam
        velit, deserunt est error itaque quis dolorum asperiores minus. Minima aut
        error, reprehenderit enim ea repellat voluptatibus, sapiente quos
        dignissimos eveniet excepturi necessitatibus deserunt nisi eligendi atque
        dolores! Magnam eveniet officiis facilis excepturi autem veniam
        praesentium corrupti illum dolor quasi sed ex quis explicabo laborum vitae
        doloremque, quibusdam ducimus incidunt maxime porro delectus neque rerum
        nemo harum! Dolores porro in repellendus iusto, labore provident alias
        tempore nesciunt deserunt eum? Consequuntur, dolorum soluta.
      </p>
      <br />
      <b-link :to="{ name: 'inicio' }"> Inicio </b-link>
    </div>
  </template>
  <script>
  export default {
    name: "Pvuelos",
    data() {
      return {
        items: [
          {
            text: "Inicio",
            href: "#inicio",
          },
          {
            text: "Vuelos cancelados",
            href: "#reserves",
          },
          {
            text: "Proximos vuelos",
            active: true,
          },
        ],
      };
    },
  };
  </script>
  <style></style>
  