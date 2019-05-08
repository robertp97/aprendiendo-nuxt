<template >
  <div class="container-fluid" >
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
        <b-spinner type="grow" label="Spinning"></b-spinner>

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
    
      <footer class="text-center py-2 " style="background-color: rgb(102, 100, 97)">
        <p style="color: blanchedalmond">LAS MEJORES COMIDAS RAPIDAS DE MOCOA - CLL8-32 CRA12 B/ VILLA ROSA </p>
        <p style="color: blanchedalmond">DOMICILIOS: 32035535852 </p>
        <div class="footer-copyright text-center py-2" style="background-color: rgb(70, 68, 67)">© 2019 Copyright:
            <a href="file:///C:/Users/Robert/Documents/pagina/index.html" style="color: blanchedalmond"> www.comidasrapidas.com</a>
        </div>
    </footer>
    
  </div>
</template>
<script>
export default {
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
<style>

</style>
