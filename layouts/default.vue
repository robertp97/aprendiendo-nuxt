<template>
  <div style="background-color: #d1d1d1">
    <navbar/>
    <div class="container-fluid">
      <Nuxt/>
    </div>
    <div> <fot/></div>
   
  </div>
</template>
<script>
import navbar from "../components/navbar";
import fot from '../components/footer'
export default {
  components: { navbar,fot},
  
};
</script>