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
          List data from API
        </a>
        <a v-for="item in items" :key="item.name" href="#" class="list-group-item list-group-item-action">{{item.name}}</a>
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
      ])
  }
</script>