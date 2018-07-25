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
      </div>
      <hr>
      <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>Add new country</h3>
              <form>
                <div class="form-group">
                  <label for="country">Country</label>
                  <input type="text" class="form-control" id="country" placeholder="Country" v-model="formData.country">
                </div>
                <div class="form-group">
                  <label for="city">Password</label>
                  <input type="text" class="form-control" id="city" placeholder="City" v-model="formData.city">
                </div>
                <button @click.prevent="add(formData)" class="btn btn-primary">Submit</button>
              </form>
            </div>
            <div class="col-sm-6">
              <h3>List Of Countries</h3>
                <div class="alert alert-primary" role="alert" v-for="item in countries" :key="item.id">
                 <p>Country : {{item.name}}</p> 
                 <p>Capital City: {{item.city}}</p>
                 <button class="btn btn-danger" @click="doDelete(item.id)" >Delete</button>
                </div>  
            </div>
          </div>
      </div>
  </div>
</template>
<script>
  import AppLogo from '~/components/AppLogo.vue'
  import {mapState,mapActions} from 'vuex'
  export default{
    components: {
      AppLogo
    },
    data(){
      return{
        formData:{
          country:'',
          city:''
        }
      }
    },
    computed: mapState([
      'countries'
    ]),
    methods:{
      // ...mapActions({add : 'added'})
      add (formData){
        this.$store.dispatch('added',formData);
      },
      doDelete(id){
       this.$store.dispatch('deleteData',id);
      }
    }
  }
</script>