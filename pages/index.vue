<template >
  <div class="container-fluid">
    <b-form name="galeria">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="720px"
        img-height="500px"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          caption="Super sandwiche cubano"
          text="Los mejores ingredientes seleccionados para nuestros clientes"
          img-src="https://static.iris.net.co/dinero/upload/images/2016/12/15/240182_1.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Combo"
          text="cangreburger y papas a la francesa"
          img-src="https://i1.wp.com/www.dalemedia.us/wp-content/uploads/2017/01/portada-10-hamburguesas-caras.jpg?fit=1280%2C720&ssl=1"
        ></b-carousel-slide>
       

        <b-carousel-slide
          img-src="http://lanotaeconomica.com.co/wp-content/uploads/2018/09/Comida-r%C3%A1pida.jpg"
        >
          <h1>Cangreburguer!</h1>
        </b-carousel-slide>

        <b-carousel-slide
          caption="SuperCombo"
          text="cangreburger, papas a la francesa,pollo y gaseosa"
          img-src="https://media-cdn.tripadvisor.com/media/photo-s/14/b0/e4/c8/comidas-rapidas-en-los.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
          caption="Pizza hawaina"
          img-src="https://www.superpizza.es/wp-content/uploads/2018/09/pizza-hawaiana-origen.png"
        ></b-carousel-slide>
      </b-carousel>
    </b-form>
    
    
    <div class="row mt-4">
      <div class="col-sm-3" v-for="producto in productos" :key="producto.id">
        
        <cardproductos :nombre="producto.nombre" 
        :slug="producto.slug"
        :imagen="producto.imagen" 
        :precio="producto.precio"
        :cantidad="producto.cantidad"/>
      </div>
    </div>
<div>
  
</div>
    
  </div>
</template>
<script>
import { db } from "../services/firebase";
import cardproductos from '../components/cardproducto'
import fot from '../components/footer'
export default {
  components:{cardproductos},
  
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
          productos
        };
      });
   
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>