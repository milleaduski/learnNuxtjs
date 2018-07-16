<template>
  <div>
    <div style="text-align: center;">
      <app-logo/>
      <h1 class="title">
        millenuxt
      </h1>
      <h2 class="subtitle">
        Vuex in Nuxt.js
      </h2>
      <div class="alert alert-primary" role="alert" v-for="item in countries" :key="item.id">
         <p>Country : {{item.name}}</p> 
         <p>Capital City: {{item.city}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import AppLogo from '~/components/AppLogo.vue'
  import {mapState} from 'vuex'
  export default{
    components: {
      AppLogo
    },
    computed: mapState([
      'countries'
    ])  
  }
</script>