<template>
  <div>
    <div style="text-align: center;">
      <app-logo/>
      <h1 class="title">
        millenuxt
      </h1>
      <h2 class="subtitle">
        CRUD Nuxt.js
      </h2>
      <div class="alert alert-primary" role="alert" v-for="item in countries" :key="item.id">
       <p>Country : {{item.name}}</p> 
       <p>Capital City: {{item.city}}</p>
      </div>
       <!--  <div v-for="item in countries" :key="item.id"> Country : {{item.name}}</div> -->
    </div>
  </div>
</template>

<script>
  import axios from "~/plugins/axios"
  import AppLogo from '~/components/AppLogo.vue'
  export default{
    components: {
      AppLogo
    },
    asyncData(){
        return axios.get('country').then(res=>({
          countries: res.data
        }))
    }
  }
</script>
