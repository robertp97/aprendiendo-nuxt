(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{344:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(347),o=r.n(n);o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyBxIifkylHYEDqM2A-6Jffx_x0ZGl6DNfc",authDomain:"nuxt-ec3b4.firebaseapp.com",databaseURL:"https://nuxt-ec3b4.firebaseio.com",projectId:"nuxt-ec3b4",storageBucket:"nuxt-ec3b4.appspot.com",messagingSenderId:"676482658314"});var c=o.a.firestore();o.a},375:function(t,e,r){"use strict";r.r(e);var n=r(20),o=r(344),c={asyncData:function(){return o.a.collection("categorias").get().then(function(t){var e=[];return t.forEach(function(t){e.push(Object(n.a)({id:t.id},t.data()))}),{productos:e,perPage:4,currentPage:1}})},data:function(){return{fields:["nombre","descripcion","acciones"]}},computed:{rows:function(){}},methods:{eliminar:function(t){var e=this;o.a.collection("categorias").doc(t).delete().then(function(){var r;e.productos.map(function(e,n){e.id==t&&(r=n)}),e.productos.splice(r,1)})}}},l=r(23),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{staticStyle:{"background-color":"#d1d1d1"}},[r("div",{staticClass:"col-sm-6"},[r("h1",[t._v("CATEGORIAS")])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("b-button",{attrs:{variant:"success",href:"/categorias/nuevo"}},[t._v("Nuevo")])],1),t._v(" "),r("b-table",{attrs:{id:"table",responsive:"",striped:"",hover:"",fields:t.fields,items:t.productos,"per-page":t.perPage,"current-page":t.currentPage,small:""},scopedSlots:t._u([{key:"acciones",fn:function(data){return[r("b-button",{attrs:{variant:"success"}},[t._v("Editar")]),t._v(" "),r("b-button",{attrs:{variant:"danger",type:"button"},on:{click:function(e){return t.eliminar(data.item.id)}}},[t._v("Eliminar")])]}}])}),t._v(" "),r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"table",align:"center"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),r("footer",{staticClass:"text-center py-2 ",staticStyle:{"background-color":"rgb(102, 100, 97)"}},[r("p",{staticStyle:{color:"blanchedalmond"}},[t._v("LAS MEJORES COMIDAS RAPIDAS DE MOCOA - CLL8-32 CRA12 B/ VILLA ROSA ")]),t._v(" "),r("p",{staticStyle:{color:"blanchedalmond"}},[t._v("DOMICILIOS: 32035535852 ")]),t._v(" "),r("div",{staticClass:"footer-copyright text-center py-2",staticStyle:{"background-color":"rgb(70, 68, 67)"}},[t._v("© 2019 Copyright:\n          "),r("a",{staticStyle:{color:"blanchedalmond"},attrs:{href:"file:///C:/Users/Robert/Documents/pagina/index.html"}},[t._v(" www.comidasrapidas.com")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);