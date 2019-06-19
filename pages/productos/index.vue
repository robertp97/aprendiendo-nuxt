<template >
  <div class="container-fluid">
    <b-form>
      <div class="row mt-3">
        <div class="col-sm-6">
          <h1>
            <b-badge>Lista de productos</b-badge>
          </h1>
        </div>
        <div class="col-sm-6">
          <b-button
            v-b-popover.hover="'puedes agregar un nuevo producto!'"
            variant="success"
            href="/productos/crear"
          >Nuevo</b-button>
        </div>
        <div class="col-sm-12">
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
              <img :src="data.item.imagen" height="38">
              <b-button
                v-b-modal.modal-actual
                variant="success"
                @click="actualizar(data.item)"
              >Editar</b-button>
              <b-button
                v-b-modal.modal-confir
                @click="eliminar(data.item.id)"
                variant="danger"
                type="button"
              >Eliminar</b-button>
            </template>
          </b-table>

          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="table"
            align="center"
          ></b-pagination>
        </div>
      </div>
      <b-modal
        header-bg-variant="dark"
        header-text-variant="light"
        body-bg-variant="secondary"
        body-text-variant="light"
        ref="actual"
        id="modal-actual"
        title="Actualizar"
        no-close-on-backdrop
        hide-footer
      >
        <b-form-group label="IMAGEN" label-for="imagen">
          <b-form-file
            id="img"
            v-model="imageProduct"
            :state="Boolean(imageProduct)"
            placeholder="Cargar imagen"
            accept="image/*"
          ></b-form-file>
        </b-form-group>
        <label>NOMBRE</label>
        <b-form-input id="nom" type="text" placeholder="nombre"></b-form-input>
        <label>PRECIO</label>
        <b-input id="pre" type="number" placeholder="precio"></b-input>
        <label>CANTIDAD</label>
        <b-input required id="can" type="number" placeholder="cantidad"></b-input>

        <b-button type="submit" id="actualizar" href="/productos" class="btn btn-success">Editar</b-button>
      </b-modal>
    </b-form>
    <b-modal
      ref="confir"
      header-bg-variant="secondary"
      id="modal-confir"
     header-text-variant = "light"
      title="Confirmación"
      hide-footer
      no-close-on-backdrop
    >
      ¿Esta seguro que desea eliminar el registro!?
      <div>
        <b-button type="submit" id="most" @click="esconder">Cancelar</b-button>
        <b-button
          type="submit"
          id="elim"
          @click="esconder"
          href="/productos"
          variant="danger"
        >Eliminar</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { db } from "../../services/firebase";
export default {
  asyncData() {
    return db
      .collection("productos")
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
      fields: ["nombre", "precio", "categoria", "cantidad", "acciones"],
      imageProduct: ""
    };
  },
  computed: {
    rows() {
      return this.productos.length;
    }
  },
  methods: {
    eliminar(id) {
      
      document.getElementById("elim").onclick = function() {
        db.collection("productos")
          .doc(id)
          .delete()
          .then(() => {
            let index;
            this.productos.map((value, key) => {
              if (value.id == id) index = key;
            });
            this.productos.splice(index, 1);
          });
      };
    },

    actualizar(dat) {
      document.getElementById("nom").value = dat.nombre;
      document.getElementById("pre").value = dat.precio;
      document.getElementById("can").value = dat.cantidad;
      document.getElementById("actualizar").onclick = function() {
        var washingtonRef = db.collection("productos").doc(dat.id);
        return washingtonRef
          .update({
            nombre: document.getElementById("nom").value,
            precio: document.getElementById("pre").value,
            cantidad: document.getElementById("can").value
          })
          .then(res => {
            alert("actualizacion exitosa");
          });
      };
    },
    esconder() {
      this.$refs["confir"].hide();
    }
  }
};
</script>
