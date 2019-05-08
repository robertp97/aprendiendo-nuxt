<template>
 
  <div >
    
    <b-navbar variant="dark" type="dark" toggleable="lg ">
      <img src="https://image.flaticon.com/icons/png/512/123/123278.png" height="38">
      -
      <b-navbar-brand href="/"> Inicio</b-navbar-brand>
      <b-navbar-toggle target="menu"></b-navbar-toggle>
      <b-collapse is-nav id="menu">
        <b-navbar-nav>
          
          <b-nav-item href="/productos">Productos</b-nav-item>
          <b-nav-item href="/categorias">Categorias</b-nav-item>
           <b-nav-item>CONTACTOS</b-nav-item>
        </b-navbar-nav>
         
      <b-navbar> 
       
         <img src="http://www.sccpre.cat/png/big/27/276896_logo-de-facebook-png.png" height="35">
            <img src="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-icono-de-instagram-logo-by-vexels.png" height="38">
             <img src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721678-whatsapp_108065.png" height="38">
            <img src="https://images.vexels.com/media/users/3/141373/isolated/preview/51ce5de22b3329db14c41f9056000906-icono-de-goma-de-twitter-by-vexels.png" height="35">
      </b-navbar>
      </b-collapse>
     
      <b-navbar>
        
           
        <div class="input-group ">
                <input type="search" class="form-control searchbar" placeholder="Buscar...">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Buscar</button>
                </div>
            </div>
      </b-navbar>
    </b-navbar>
    
    
  </div>
</template>
<script>
export default {};
</script>

