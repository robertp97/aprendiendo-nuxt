<template >
  <b-form>
    <div class="row mt-3">
      <div class="col-sm-6">
        <h1>
          <b-badge>Categorias</b-badge>
        </h1>
      </div>
      <div class="col-sm-6">
        <b-button
          v-b-popover.hover="'puedes crear una nueva categoria!'"
          variant="success"
          href="/categorias/nuevo"
          class="rounded-pill"
        >Nuevo</b-button>
      </div>
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
        <b-button class="rounded-pill" variant="success" @click="editar(data.item)" v-b-modal.modal-edit>Editar</b-button>
        <b-button class="rounded-pill" v-b-modal.modal-sm variant="danger" @click="eliminar(data.item.id)" type="button">Eliminar</b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="table"
      align="center"
    ></b-pagination>
    <b-modal
      header-bg-variant="secondary"
      id="modal-sm"
       header-text-variant = "light"
      title="Confirmación"
      hide-footer
      ref="confirmar"
    >
      ¿Esta seguro que desea eliminar el registro!?
     <div class="d-flex justify-content-center">
       <b-button class="rounded-pill" type="submit" id="most" @click="esconder1" >Cancelar</b-button>
        <b-button class="rounded-pill" href="/categorias" id="borrar" @click="esconder1" variant="danger">Eliminar</b-button>
 
     </div>
        </b-modal>
    <b-modal
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="secondary"
      body-text-variant="light"
      ref="edit"
      id="modal-edit"
      title="Editar"
      no-close-on-backdrop
      hide-footer
    >
      <label for>Nombre</label>
      <b-input id="nombreedit" required type="text" placeholder="nombre"></b-input>
      <label for>Descripcion</label>
      <b-input id="desedit" required type="text" placeholder="descripcion"></b-input>
      <b-button type="submit" id="editr" class="btn btn-success rounded-pill">Editar</b-button>
    </b-modal>
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
      return this.productos.length;
    }
  },
  methods: {
    eliminar(id) {
      
      document.getElementById("borrar").onclick = function() {
      db.collection("categorias")
        .doc(id)
        .delete()
        .then(() => {
          let index;
          this.productos.map((value, key) => {
            if (value.id == id) index = key;
          });
          this.productos.splice(index, 1);
          alert("Rgistro eliminado")
        });
    }
    },
    editar(id) {
      document.getElementById("nombreedit").value = id.nombre;
      document.getElementById("desedit").value = id.descripcion;
      document.getElementById("editr").onclick = function() {
        var washingtonRef = db.collection("categorias").doc(id.id);
        var nom = document.getElementById("nombreedit").value;
        var des = document.getElementById("desedit").value;
        return washingtonRef
          .update({
            nombre: nom,
            descripcion: des
          })
          .then(function() {
            alert("Actualizacion exitosa!");
          })
          .catch(function(error) {
            alert("ha ocurrido un error: ", error);
          });
      };
    },
    esconder1(){
      this.$refs["confirmar"].hide();
     
    }

  }
};
</script>
