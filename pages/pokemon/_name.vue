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
          Detail Pokemon
        </a>
        <ul>
          <li>Name : {{items.name}}</li>
          <li>Height : {{items.height}}</li>
          <li>Name : {{items.weight}}</li>
        </ul>
    </div>
  </section>
</template>
<script>
import AppLogo from '~/components/AppLogo.vue'
import {mapState} from 'vuex'
export default{
  computed: mapState([
    'items'
    ]),
  components: {
    AppLogo
  },
  async fetch({store, params}){
    await store.dispatch('load_items', 'pokemon/'+params.name)
  }
}
  
</script>
