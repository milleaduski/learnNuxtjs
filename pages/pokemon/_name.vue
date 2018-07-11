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
<!-- 
#### Repository
https://github.com/nuxt/nuxt.js

#### What Will I Learn?
- Dynamic components
- Communication between components with props
- Transition page on nuxt.js
- Dynamic pages

#### Resources
- Nuxt.js Website - https://nuxtjs.org/
- Nuxt.js Github. - https://github.com/nuxt/nuxt.js
- Vuex - https://github.com/vuejs/vuex
- Poke API - https://pokeapi.co/

#### Difficulty
Intermediated

### Tutorial Contents
In this tutorial, we will learn how to use Nuxt.js to interact with our **API**. We will learn the **Create Read Update Delete (CRUD)** System on **Nuxt.js**. We will create the **API** with the help of [JSON placeholder](https://jsonplaceholder.typicode.com/) tools. I suggest you to look at the basic tutorials of Nuxt.js in the curriculum section under the tutorial. because in this tutorial we will not discuss setup on Nuxt.js and handling **Search engine optimization (SEO)** on the server side, by using **CRUD** system on Nuxt.js we will see how we can interact with API without doing Request to the server. Indirectly the application that we run is a **Single Page Applications (SPA)**, We just start to make CRUD system in Nuxt.js.

### Create API with JSON-Server
I assume you have installed Nuxt.js and have created a project folder for Nuxt.js, if you have not installed and setup on Nuxt.js you can see it in my previous [tutorial](https://steemit.com/utopian-io/@duski.harahap/universal-vue-js-application-with-nuxt-js-part-1-nuxt-structure-installation-and-configuration-global-css-and-css-frameworks).
I will not discuss much about the installation process of Nuxt.js, as I will focus on creating APIs locally easily including all REst APIs -->