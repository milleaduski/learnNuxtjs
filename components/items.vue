<template>
  <section class="container">
    <div style="text-align: center;">
      <app-logo/>
      <h1 class="title">
        millenuxt
      </h1>
      <h2 class="subtitle">
        tutorial
      </h2>
    </div>
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active">
          Data {{data}} from Props
        </a>
         <nuxt-link tag="a" v-for="item in items.results" class="list-group-item list-group-item-action" :key="item.name" :to="'/'+data+'/'+item.name">{{item.name}}</nuxt-link>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import {mapState} from 'vuex'
  export default{
    components: {
      AppLogo
    },
    computed: mapState([
      'items'
      ]),
    props:['data']
  }
</script>