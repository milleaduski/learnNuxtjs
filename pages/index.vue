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
                  <label for="city">City</label>
                  <input type="text" class="form-control" id="city" placeholder="City" v-model="formData.city">
                </div>
                <button v-if="toggleBtn" @click.prevent="add(formData)" class="btn btn-primary">Submit</button>
                <button v-else @click.prevent="doUpdate()" class="btn btn-warning">Update</button>
              </form>
            </div>
            <div class="col-sm-6">
              <h3>List Of Countries</h3>
               <div class="form-group">
                  <input type="text" class="form-control" id="search" placeholder="Search Country" v-model="searchKey">
                </div>
                <div class="alert alert-primary" role="alert" v-for="item in searchCountries" :key="item.id">
                 <p>Country : {{item.name}}</p> 
                 <p>Capital City: {{item.city}}</p>
                 <button class="btn btn-warning" style="margin-right: 10px;" @click="editData(item)" >Edit</button>
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
          city:'',
          id:''
        },
        toggleBtn: true,
        itemCountries: this.$store.state.countries,
        searchKey:''
      }
    },
    computed:{
      searchCountries(){
        return this.itemCountries.filter(country => 
          country.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1 || country.city.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1
        )
      }
    },
    methods:{
      // ...mapActions({add : 'added'})
      add (formData){
        this.$store.dispatch('added',formData);
      },
      doDelete(id){
       this.$store.dispatch('deleteData',id);
      },
      editData(item){
        this.toggleBtn = false
        this.formData.country = item.name
        this.formData.city = item.city
        this.formData.id = item.id
      },
      doUpdate(){
        this.$store.dispatch('updateData',
        {
          id: this.formData.id,
          name: this.formData.country,
          city: this.formData.city
        })
        this.formData.country = ''
        this.formData.id = ''
        this.formData.city = ''
      }
    }
  }
</script>

<!--  -->