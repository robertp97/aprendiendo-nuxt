<template>
  <div class>
    <b-form name="galeria" class="d-flex justify-content-center" @submit.prevent="guardar">
      <div class="conteiner-fluid mb-3" style="background-color: #ACB0AF">
        <b-container class="p-4">
          <h2>
            <b-badge>Crear producto</b-badge>
          </h2>
          <b-form-group label="IMAGEN" label-for="imagen">
            <b-form-file
              id="img"
              v-model="imageProduct"
              :state="Boolean(imageProduct)"
              placeholder="Cargar imagen"
              accept="image/*"
              required
            ></b-form-file>
          </b-form-group>
          <label>NOMBRE</label>
          <b-form-input
            v-model="form.nombre"
            id="nom"
            :state="Boolean(form.nombre)"
            type="text"
            placeholder="nombre"
          ></b-form-input>
          <label>PRECIO</label>
          <b-input
            v-model="form.precio"
            id="pre"
            type="number"
            :state="Boolean(form.precio)"
            placeholder="precio"
          ></b-input>
          <label>CANTIDAD</label>
          <b-input
            v-model="form.cantidad"
            required
            id="can"
            type="number"
            :state="Boolean(form.cantidad)"
            placeholder="cantidad"
          ></b-input>
          <label>CATEGORIA</label>
          <b-form-select
            id="categorias"
            v-model="form.categoria"
            :state="Boolean(form.categoria)"
            :options="categorias"
          ></b-form-select>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-success">guardar</button>
          </div>
        </b-container>
      </div>
    </b-form>
  </div>
</template>
<script>
import { db, storage } from "../../services/firebase";
import { async } from "q";

export default {
  asyncData() {
    return db
      .collection("categorias")
      .get()
      .then(categoriasSnap => {
        let categorias = [];
        categoriasSnap.forEach(value => {
          categorias.push(value.data().nombre);
        });
        return { categorias };
      });
  },
  data() {
    return {
      form: {
        nombre: "",
        cantidad: "",
        precio: ""
      },
      imageProduct: ""
    };
  },
  methods: {
    guardar() {
      let imageRef = storage.child(this.imageProduct.name);
      imageRef.put(this.imageProduct).then(async imageRes => {
        this.form.imagen = await imageRes.ref.getDownloadURL();
        db.collection("productos")
          .add(this.form)
          .then(res => {
            this.$router.push({
              path: "/productos"
            });
          });
      });
    }
  }
};
</script>
