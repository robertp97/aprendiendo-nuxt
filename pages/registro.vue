<!--<template>
  <div>
    <b-form class="d-flex justify-content-center" @submit.prevent="registro">
      
      <div class="conteiner-fluid mb-3" style="background-color: #ACB0AF">
        <h1>registro de usuario</h1>
      <label>NOMBRE</label>
      <b-form-input
        v-model="form.nombre"
        id="nombre"
        type="text" required
        placeholder="Ingrese nombre de usuario"
      ></b-form-input>
      <label>EMAIL</label>
      <b-input v-model="form.email" required id="email"  type="email" placeholder="ingrese su email"></b-input>
      <label>CONTRASEÑA</label>
      <b-input
        v-model="form.contraseña"
        required
        id="contraseña"
        type="password"
        placeholder="Contraseña"
      ></b-input>
      
      <button type="submit" class="btn btn-success">Registrarse</button>
      <div>
        ¿Ya tienes cuenta? <b-link href="" v-b-modal.modal-tall style="color: white">Iniciar sesion</b-link>
      </div>
     </div>
    </b-form>
  </div>
</template>
<script>
import {auth}  from '../services/firebase'
export default {
  data() {
    return {
      form: {
        
      }
    }
  },
  methods: {
    registro() {
        auth.createUserWithEmailAndPassword(this.form.email,this.form.contraseña).then(res=>{
          res.user.updateProfile({
            displayName: this.form.nombre,
          }).then(resUpdate=>{
            this.$router.push({
            path:"/"
          });
          })  
          
          
        }).catch(error=>{
            
        })
    }
  }
};
</script>
