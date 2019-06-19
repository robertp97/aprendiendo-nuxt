<template>
  <b-container class="shadow p-3 mb-4 rounded">
    <b-card
      no-body
      overlay
      :img-src="imagen"
      tag="article"
      style="max-width: 340px; cursor:pointer "
      bg-variant="light"
      class="mb-2 text-center zoom"
      border-variant="dark"
      @click="lol(slug)"
      
    >
      <b-card-body class="zoom" :title="nombre" :sub-title="'precio'+precio">
       
      </b-card-body>
    </b-card>
  </b-container>
</template>
<script>
export default {
  props: ["nombre", "imagen", "precio", "slug"],

  methods: {
    lol(slug) {
     
     this.$router.push({
            path: "/"+slug
          });
    }
  }
};
</script>
<style>
.zoom{
    transition: 1s
}
.zoom:hover{
transform: scale(1.2);
}
</style>
