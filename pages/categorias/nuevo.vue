<template>
  <b-form name="galeria" class="d-flex justify-content-center" @submit.prevent="guardar">
    <div class="conteiner-fluid mb-3" style="background-color: #ACB0AF">
      <b-container class="p-4">
      <h2> <b-badge>Crear categoria</b-badge></h2>
      <label>Nombre categoria</label>
      <b-input v-model="cat.nombre" :state="Boolean(cat.nombre)" id="nom" required type="text" placeholder="categoria"></b-input>
      <label>Descripcion</label>
      <b-input v-model="cat.descripcion" :state="Boolean(cat.descripcion)" required id="des" type="text" placeholder="descripcion"></b-input>
      
        <b-button  type="submit" class="btn btn-success">crear</b-button>
     
      </b-container>
    </div>
  </b-form>
</template>
<script>
import { db } from "../../services/firebase";
export default {
  data() {
    return {
      cat: {
        nombre: "",
        descripcion: ""
      }
    };
  },
  methods: {
    guardar() {
      db.collection("categorias")
        .add(this.cat)
        .then(res => {
          this.$router.push({
            path: "/categorias"
          });
        });
    }
  }
};
</script>