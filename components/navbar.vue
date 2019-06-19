<template>
  <div>
    <b-navbar variant="dark" type="dark" toggleable="lg ">
      <b-navbar-brand href="/">
        <img src="https://image.flaticon.com/icons/png/512/123/123278.png" height="38" alt="Kitten">
        <i>Inicio</i>
      </b-navbar-brand>

      <b-navbar-toggle target="menu"></b-navbar-toggle>
      <b-collapse is-nav id="menu">
        <b-navbar-nav>
          <b-nav-item href="/productos">Productos</b-nav-item>
          <b-nav-item href="/categorias">Categorias</b-nav-item>
          <b-nav-item href="/carrito">Carrito</b-nav-item>
          <b-nav-item disabled>CONTACTOS</b-nav-item>
        </b-navbar-nav>
        <a href="https://www.facebook.com/" rel="nofollow" target="_blank" class="zoom">
          <img
            src="http://www.sccpre.cat/png/big/27/276896_logo-de-facebook-png.png"
            height="35"
            alt="Kitten"
          >
        </a>
        <a href="https://www.instagram.com/" rel="nofollow" target="_blank" class="zoom">
          <img
            src="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-icono-de-instagram-logo-by-vexels.png"
            height="38"
            alt="Kitten"
          >
        </a>

        <a href="https://web.whatsapp.com/" rel="nofollow" target="_blank" class="zoom">
          <img
            src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721678-whatsapp_108065.png"
            height="38"
            alt="Kitten"
          >
        </a>
        <a href="https://twitter.com/" rel="nofollow" target="_blank" class="zoom">
          <img
            src="https://cdn1.iconfinder.com/data/icons/new_twitter_icon/450/bird_twitter_new_black.png"
            height="35"
            alt="Kitten"
          >
        </a>
      </b-collapse>

      <b-navbar class="ml-auto">
        
        <div class="input-group ">
          <input type="search" class="form-control searchbar " placeholder="Buscar...">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Buscar</button>
          </div>
        </div>
        
        <b-navbar-nav>
          <!--<b-nav-item href v-b-modal.modal v-if="!user">Registrarse</b-nav-item>-->

          <b-navbar-brand v-if="!user" href>
            <a href="#">
              <img
                v-b-modal.modal-tall
                src="https://firebasestorage.googleapis.com/v0/b/nuxt-ec3b4.appspot.com/o/images.png?alt=media&token=874d9f27-920b-454e-bee0-87a1e1f4d665"
                height="38"
                alt="Kitten"
                
              >
            </a>
          </b-navbar-brand>
        </b-navbar-nav>

        <b-dropdown
          v-if="user"
          size="sm"
          id="dropdown-dropleft"
          right
          :text="user.displayName"
          variant="primary"
          class="m-2"
        >
          <b-dropdown-item href="#" @click="cerrar">Cerrar sesion</b-dropdown-item>
        </b-dropdown>
      </b-navbar>
    </b-navbar>
    <!--registro-->
    <b-modal
    
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="secondary"
      body-text-variant="light"
      ref="regis"
      id="modal"
      title="Registrarse"
      no-close-on-backdrop
      hide-footer
      class="shaduw"
    >
      <b-form @submit.prevent="registro">
        <div>
          <h1>registro de usuario</h1>
          <label>NOMBRE</label>
          <b-form-input
            v-model="dat.nombre"
            id="nombre"
            type="text"
            required
            placeholder="Ingrese nombre de usuario"
            :state="Boolean(dat.nombre)"
            
          ></b-form-input>
          <label>EMAIL</label>
          <b-input
            v-model="dat.correo"
            required
            id="email"
            type="email"
            placeholder="ingrese su email"
            :state="Boolean(dat.correo)"
          ></b-input>
          <label>CONTRASEÑA</label>
          <b-input
            v-model="dat.contraseña"
            required
            id="contraseña"
            type="password"
            placeholder="Contraseña"
            :state="Boolean(dat.contraseña)"
          ></b-input>

          <button type="submit" class="btn btn-success">Registrarse</button>
          <div>
            ¿Ya tienes cuenta?
            <b-link href v-b-modal.modal-tall @click="ocultar" style="color: white">Iniciar sesion</b-link>
          </div>
        </div>
      </b-form>
    </b-modal>
    <!--login-->
    <b-modal
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="secondary"
      body-text-variant="light"
      ref="login"
      id="modal-tall"
      title="Iniciar sesion"
      no-close-on-backdrop
      hide-footer
      @shown="focusMyElement"
    >
      <b-form @submit.prevent="iniciar">
        <div>
          <label>EMAIL</label>
          <b-input
            v-model="form.email"
            id="email"
            required
            type="email"
            placeholder="ingrese su email"
            :state="Boolean(form.email)"
            ref="coor"
          ></b-input>
          <label>CONTRASEÑA</label>
          <b-input
            v-model="form.pass"
            required
            id="contra"
            type="password"
            placeholder="Contraseña"
            :state="Boolean(form.pass)"
          ></b-input>
          <button type="submit" class="btn btn-success">Iniciar sesion</button>
          <div>
            <label for>¿No tienes cuenta?</label>
            <b-link v-b-modal.modal @click="hidemodal" style="color: black">Registrate</b-link>
          </div>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import { auth } from "../services/firebase";
export default {
  data() {
    return {
      user: false,
      form: {},
      dat: {}
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user;
    });
  },
  methods: {
    cerrar() {
      auth.signOut();
    },

    iniciar() {
      auth
        .signInWithEmailAndPassword(this.form.email, this.form.pass)
        .then(res => {
          this.hidemodal();
          this.$router.push({
            path: "/"
          });
        })
        .catch(err => {
          alert("ha ocurrido un error");

          this.showModal();
        });
    },
    hidemodal() {
      this.$refs["login"].hide();
    },
    showModal() {
      this.form.email = "";
      this.form.pass = "";
      this.$refs["login"].show();
    },
    ocultar() {
      this.$refs["regis"].hide();
    },
    ver() {
      this.dat.correo = "";
      this.dat.contraseña = "";
      this.$refs["regis"].show();
    },
    focusMyElement(e) {
      this.$refs.coor.focus()
    },
    registro() {
      auth
        .createUserWithEmailAndPassword(this.dat.correo, this.dat.contraseña)
        .then(res => {
          res.user
            .updateProfile({
              displayName: this.dat.nombre
            })
            .then(resUpdate => {
              this.ocultar();
              
              this.$router.push({
                path: "/"
              });
            });
        })
        .catch(error => {
          alert("ha ocurrido un error");
          this.ver();
        });
    }
  }
};
</script>