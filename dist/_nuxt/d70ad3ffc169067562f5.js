(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{344:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(347),o=n.n(r);o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyBxIifkylHYEDqM2A-6Jffx_x0ZGl6DNfc",authDomain:"nuxt-ec3b4.firebaseapp.com",databaseURL:"https://nuxt-ec3b4.firebaseio.com",projectId:"nuxt-ec3b4",storageBucket:"nuxt-ec3b4.appspot.com",messagingSenderId:"676482658314"});var c=o.a.firestore();o.a},374:function(e,t,n){"use strict";n.r(t);var r=n(344),o={data:function(){return{form:{nombre:"",cantidad:"",precio:""}}},methods:{guardar:function(){var e=this;r.a.collection("productos").add(this.form).then(function(t){e.$router.push({path:"/productos"})})}}},c=n(23),component=Object(c.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-sm-6"},[n("b-form",{staticClass:"d-flex justify-content-center",attrs:{name:"galeria"},on:{submit:function(t){return t.preventDefault(),e.guardar(t)}}},[n("div",{staticClass:"conteiner-fluid"},[n("label",[e._v("FOTO")]),e._v(" "),n("b-form-file",{attrs:{id:"img",state:Boolean(e.file),placeholder:"Seleccionar archivo",accept:".jpg, .png"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),e._v(" "),n("label",[e._v("NOMBRE")]),e._v(" "),n("b-input",{attrs:{id:"nom",type:"text",placeholder:"nombre"},model:{value:e.form.nombre,callback:function(t){e.$set(e.form,"nombre",t)},expression:"form.nombre"}}),e._v(" "),n("label",[e._v("PRECIO")]),e._v(" "),n("b-input",{attrs:{id:"pre",type:"number",placeholder:"precio"},model:{value:e.form.precio,callback:function(t){e.$set(e.form,"precio",t)},expression:"form.precio"}}),e._v(" "),n("label",[e._v("CANTIDAD")]),e._v(" "),n("b-input",{attrs:{required:"",id:"can",type:"number",placeholder:"cantidad"},model:{value:e.form.cantidad,callback:function(t){e.$set(e.form,"cantidad",t)},expression:"form.cantidad"}}),e._v(" "),n("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("guardar")])],1)])],1)},[],!1,null,null,null);t.default=component.exports}}]);