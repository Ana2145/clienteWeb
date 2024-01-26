<template>
  <div class="formulario-container">
    <form @submit.prevent="submitForm" class="formulario">
      <h2 style="text-align: center;">Formulario</h2>
      <div class="seccion-formulario mt-4">
        <h4>Datos Personales</h4>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" class="form-control" id="nombre" v-model="nombre" @input="validarNombre" required />
        </div>
        <div class="form-group">
          <label for="apellidoPaterno">Apellido Paterno:</label>
          <input type="text" class="form-control" id="apellidoPaterno" v-model="apellidoPaterno" @input="validarApellido" required />
        </div>
        <div class="form-group">
          <label for="apellidoMaterno">Apellido Materno:</label>
          <input type="text" class="form-control" id="apellidoMaterno" v-model="apellidoMaterno" />
        </div>
      </div>
      <div class="seccion-formulario">
        <h4>Dirección</h4>
        <div class="form-group">
          <label for="codigoPostal">Código Postal:</label>
          <input type="text" class="form-control" id="codigoPostal" v-model="codigoPostal" @input="validarCodigoPostal" required />
        </div>
        <div class="form-group">
          <label for="calle">Calle:</label>
          <input type="text" class="form-control" id="calle" v-model="calle" @input="validarCalle" required />
        </div>
        <div class="form-group">
          <label for="numero">Número:</label>
          <input type="text" class="form-control" id="numero" v-model="numero" @input="validarNumero" required />
        </div>

        <div class="form-group">
          <label for="ciudad">Ciudad:</label>
          <input type="text" class="form-control" id="ciudad" v-model="ciudad" @input="validarCiudad" required />
        </div>
      </div>
      <div class="seccion-formulario">
        <h4>Datos de Contacto</h4>
        <div class="form-group">
          <label for="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="date" class="form-control" id="fechaNacimiento" v-model="fechaNacimiento" @input="validarFechaNacimiento" required />
        </div>
        <div class="form-group">
          <label for="correo">Correo Electrónico:</label>
          <input type="email" class="form-control" id="correo" v-model="correo" @input="validarCorreo" required />
        </div>
        <div class="form-group">
          <label for="telefono">Número Telefónico:</label>
          <input type="tel" class="form-control" id="telefono" v-model="telefono" @input="validarTelefono" required />
        </div>
      </div>
      <div class="seccion-formulario">
        <h4>Fotografía</h4>
        <div class="form-group">
          <label for="foto">Subir Fotografía (PNG):</label>
          <input type="file" accept="image/png" @change="handleFileChange" class="form-control" id="foto" />
        </div>
        <div v-if="fotoPreview" class="foto-preview">
          <img :src="fotoPreview" alt="Foto previa" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Enviar Reserva</button>
    </form>

    <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      codigoPostal: '',
      calle: '',
      numero: '',
      ciudad: '',
      fechaNacimiento: '',
      correo: '',
      telefono: '',
      foto: null,
      fotoPreview: null,
      errorMessage: '',
    };
  },
  methods: {
    validarNombre() {
      const regex = /^[a-zA-Z\s]+$/;
      if (!regex.test(this.nombre)) {
        this.errorMessage = 'Ingrese un nombre válido (solo letras y espacios).';
      } else {
        this.errorMessage = '';
      }
    },

    validarApellido() {
      const regex = /^[a-zA-Z\s]+$/;
      if (!regex.test(this.apellidoPaterno)) {
        this.errorMessage = 'Ingrese un apellido paterno válido (solo letras y espacios).';
      } else {
        this.errorMessage = '';
      }
    },

    validarCodigoPostal() {
      const regex = /^[0-9]{5}$/;
      if (!regex.test(this.codigoPostal)) {
        this.errorMessage = 'Ingrese un código postal válido (5 dígitos numéricos).';
      } else {
        this.errorMessage = '';
      }
    },

    validarCalle() {
      const regex = /^[a-zA-Z0-9\s]+$/;
      if (!regex.test(this.calle)) {
        this.errorMessage = 'Ingrese una calle válida (solo letras, números y espacios).';
      } else {
        this.errorMessage = '';
      }
    },

    validarNumero() {
      const regex = /^[0-9]+$/;
      if (!regex.test(this.numero)) {
        this.errorMessage = 'Ingrese un número válido (solo dígitos numéricos).';
      } else {
        this.errorMessage = '';
      }
    },

    validarCiudad() {
      const regex = /^[a-zA-Z\s]+$/;
      if (!regex.test(this.ciudad)) {
        this.errorMessage = 'Ingrese una ciudad válida (solo letras y espacios).';
      } else {
        this.errorMessage = '';
      }
    },

    validarFechaNacimiento() {
      const fechaNacimiento = new Date(this.fechaNacimiento);
      const fechaLimite = new Date();
      fechaLimite.setFullYear(fechaLimite.getFullYear() - 18);

      if (fechaNacimiento >= fechaLimite) {
        this.errorMessage = 'Debes ser mayor de 18 años para enviar el formulario.';
      } else {
        this.errorMessage = '';
      }
    },

    validarCorreo() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(this.correo)) {
        this.errorMessage = 'Ingrese un correo electrónico válido.';
      } else {
        this.errorMessage = '';
      }
    },

    validarTelefono() {
      const regex = /^[0-9]{10}$/;
      if (!regex.test(this.telefono)) {
        this.errorMessage = 'Ingrese un número telefónico válido (10 dígitos numéricos).';
      } else {
        this.errorMessage = '';
      }
    },

    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        if (file.size > 3 * 1024 * 1024) {
          this.errorMessage = 'El tamaño del archivo debe ser menor a 3 MB.';
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          this.fotoPreview = reader.result;
        };
        reader.readAsDataURL(file);

        this.foto = file;
        this.errorMessage = '';  // Reiniciar el mensaje de error
      }
    },

  },
};
</script>

<style scoped>
.formulario-container {
  max-width: 600px;
  margin: auto;
}

.formulario {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.seccion-formulario {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.alert {
  margin-top: 20px;
}

.foto-preview {
  margin-top: 10px;
}

.foto-preview img {
  max-width: 100%;
  max-height: 150px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
