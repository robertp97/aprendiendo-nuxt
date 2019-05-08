<template>
  <b-form name="galeria" class="d-flex justify-content-center" @submit.prevent="guardar">
      <div class="conteiner-fluid">
          <label >Nombre categoria</label>
    <b-input v-model="cat.nombre" id="nom" type="text" placeholder="categoria"></b-input>
    <label >Descripcion</label>
    <b-input v-model="cat.descripcion" id="des" type="text" placeholder="descripcion"></b-input>
    <button type="submit" class="btn btn-success">crear</button>
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