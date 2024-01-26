<template>
  <div class="mt-5">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <br />
    <h3>Reservas de vuelo</h3>
    <hr />

    <b-form @submit.prevent="submitForm">
      <!-- ... otros campos ... -->

      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          v-model="nombre"
          @input="validarNombre"
          required
        />
      </div>

      <div class="form-group">
        <label for="apellidoPaterno">Apellido Paterno:</label>
        <input
          type="text"
          class="form-control"
          id="apellidoPaterno"
          v-model="apellidoPaterno"
          @input="validarApellido"
          required
        />
      </div>

      <div class="form-group">
        <label for="apellidoMaterno">Apellido Materno:</label>
        <input
          type="text"
          class="form-control"
          id="apellidoMaterno"
          v-model="apellidoMaterno"
        />
      </div>

      <input type="submit" value="Enviar" />
    </b-form>

    <div v-if="errorMessage" class="alert alert-danger mt-3">
      {{ errorMessage }}
    </div>

    <hr />
    Asientos reservados
    <b-link :to="{ name: 'areservados' }"> ir </b-link>
  </div>
</template>
<script>
export default Vue.extend({
  name: "Reserves",
  data() {
    return {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      // ... otros datos ...
      errorMessage: "",
    };
  },
  methods: {
    // ... otros métodos ...

    validarNombre() {
      if (!this.validarNombre(this.nombre)) {
        this.errorMessage = "Ingrese un nombre válido.";
      } else {
        this.errorMessage = "";
      }
    },

    validarApellido() {
      if (!this.validarApellido(this.apellidoPaterno)) {
        this.errorMessage = "Ingrese un apellido paterno válido.";
      } else {
        this.errorMessage = "";
      }
    },

    // ... otros métodos ...
  },
});
</script>
<style></style>
