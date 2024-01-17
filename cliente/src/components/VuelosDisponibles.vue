<template>
    <div class="mt-5">
        <b-breadcrumb :items="items"></b-breadcrumb>
        <br>
        <h3>Vuelos disponibles</h3>
        <hr>
        Lineas de vuelo
        <b-link :to="{ name: 'lvuelos' }"> ir </b-link>
    </div>
</template>
<script>
export default {
    name: "Disponibles"
}
</script>
<style>
    
</style>