<template>
  <div class="col-sm-6">
    <b-form name="galeria" class="d-flex justify-content-center" @submit.prevent="guardar">
      <div class="conteiner-fluid">
        
        <label >FOTO</label>
        <b-form-file
          id="img"
          v-model="file"
          :state="Boolean(file)"
          placeholder="Seleccionar archivo"
          accept=".jpg, .png"
        ></b-form-file>
        <label >NOMBRE</label>
        <b-input v-model="form.nombre" id="nom" type="text" placeholder="nombre"></b-input>
        <label>PRECIO</label>
        <b-input v-model="form.precio" id="pre" type="number" placeholder="precio"></b-input>
        <label >CANTIDAD</label>
        <b-input v-model="form.cantidad" required id="can" type="number" placeholder="cantidad"></b-input>
        
        <button  type="submit" class="btn btn-success">guardar</button>
         
      </div>
    </b-form>
     
     
  </div>
</template>
<script>

import  {db} from '../../services/firebase'
export default {
  data(){
    return{
      form: {
        nombre:'',
        cantidad:'',
        precio:''
      }
    }
  },
  methods: {
   
    guardar() {

      
      db.collection("productos").add(this.form).then(res=>{
        this.$router.push({
          path:"/productos"
        })
      })
    }
    
  }
};
</script>
