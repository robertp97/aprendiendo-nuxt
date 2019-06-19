<!--<template>
  <div>
    <b-form class="d-flex justify-content-center" @submit.prevent="iniciar">
      <div class="conteiner-fluid mb-3" style="background-color: #ACB0AF">
        <h2>INICIAR SESION</h2>
        <label>EMAIL</label>
        <b-input
          v-model="form.email"
          id="email"
          required
          type="email"
          placeholder="ingrese su email"
        ></b-input>

        <label>CONTRASEÑA</label>
        <b-input
          v-model="form.pass"
          required
          id="contraseña"
          type="password"
          placeholder="Contraseña"
        ></b-input>

        <button type="submit" class="btn btn-success">Iniciar sesion</button>
        <div>
          <label >¿No tienes cuenta?</label>
          <b-link href="registro" style="color: white">Registrate</b-link>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
import { auth } from "../services/firebase";
export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    iniciar() {
      auth
        .signInWithEmailAndPassword(this.form.email, this.form.pass)
        .then(res => {
          this.$router.push({
            path: "/"
          });
        })
        .catch(err => {
          alert("ha ocurrido un error");
        });
    }
  }
};
</script>-->

