<template>
<div>
  <div class="row mt-4">
      <div class="col-sm-4">
          <h2>Carrito de compras</h2>
      </div>
     
  </div>
    <div class="row mt-4" v-for="(value,key) in carrito" :key="key">
      <div class="col-sm-4">
          {{value.producto.nombre}}
      </div>
      
  </div>
  </div>

</template>
<script>  
import {db} from '../services/firebase'
import { async } from 'q';
export default {
data(){
    return{
        carrito:[]
    }
},
created(){
    this.traercarrito()
},
methods:{
    traercarrito(){
    return db.collection('carrito').onSnapshot(carritoSnap=>{
        this.carrito=[]

        carritoSnap.forEach(async valuecarrito=>{
            let producto= await valuecarrito.data().producto.get();

            producto=producto.data();
            this.carrito.push({
                id:valuecarrito.id,
                cantidad:valuecarrito.data().cantidad,
                precio:valuecarrito.data().precio,
                producto
            })
        })
       

    })
}
}
};
</script>
