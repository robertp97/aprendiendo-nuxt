<template >
  <b-form style="background-color: #d1d1d1">
    <div class="col-sm-6">
      <h1>CATEGORIAS</h1>
    </div>
    <div class="col-sm-6">
      <b-button v-b-popover.hover="'puedes crear una nueva categoria!'" variant="success" href="/categorias/nuevo">Nuevo</b-button>
     
    </div>
    <b-table
      id="table"
      responsive
      striped
      hover
      :fields="fields"
      :items="productos"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
      <template slot="acciones" slot-scope="data">
        <b-button variant="success">Editar</b-button>
        <b-button  @click="eliminar(data.item.id)"  variant="danger" type="button">Eliminar</b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="table"
      align="center"
    ></b-pagination>
    <footer class="text-center py-2" style="background-color: rgb(102, 100, 97)">
      <p
        style="color: blanchedalmond"
      >LAS MEJORES COMIDAS RAPIDAS DE MOCOA - CLL8-32 CRA12 B/ VILLA ROSA</p>
      <p style="color: blanchedalmond">DOMICILIOS: 32035535852</p>
      <div class="footer-copyright text-center py-2" style="background-color: rgb(70, 68, 67)">
        © 2019 Copyright:
        <a
          href="file:///C:/Users/Robert/Documents/pagina/index.html"
          style="color: blanchedalmond"
        >www.comidasrapidas.com</a>
      </div>
    </footer>
  </b-form>
</template>
<script>
import { db } from "../../services/firebase";
export default {
  asyncData() {
    return db
      .collection("categorias")
      .get()
      .then(productosSnap => {
        let productos = [];
        productosSnap.forEach(value => {
          productos.push({
            id: value.id,
            ...value.data()
          });
        });
        return {
          productos,
          perPage: 4,
          currentPage: 1
        };
      });
  },
  data() {
    return {
      fields: ["nombre", "descripcion", "acciones"]
    };
  },
  computed: {
    rows() {
      return this.productos.length
    }
  },
  methods: {
    eliminar(id) {
      
      db.collection("categorias")
        .doc(id)
        .delete()
        .then(() => {
          let index;
          this.productos.map((value, key) => {
            if (value.id == id) index = key;
          });
          this.productos.splice(index, 1);
        });
    }
  }
};
</script>
