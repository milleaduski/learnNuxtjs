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
      ...mapActions(['add'])
    }
  }
</script>
<!-- ![Screenshot_1.png](https://ipfs.busy.org/ipfs/QmbE1yhb6yvNfb39oQ38T48WHfYqskEyf1Wzz5LLDo2cu1)


#### Repository
https://github.com/nuxt/nuxt.js

#### What Will I Learn?
- Create Store in Vuex
- Request data in Vuex
- Making the data centralized
- Using Vuex on component

#### Resources
- Nuxt.js Website - https://nuxtjs.org/
- Nuxt.js Github. - https://github.com/nuxt/nuxt.js
- Axios- https://github.com/axios/axios
- JSON Placeholder- https://jsonplaceholder.typicode.com/
- Vuex - https://github.com/vuejs/vuex


#### Difficulty
Intermediated

### Tutorial Contents
in the previous tutorial, we have learned how to request to retrieve data via endpoint API, in this tutorial, we will learn how to submit data to the API and we will also learn about **mapActions** on Vuex. so I suggest you follow the tutorial about Vuex, so that later you will not find any difficulty to follow this tutorial. to submit the **API** we will still use tools from [JSON Placeholder](https://jsonplaceholder.typicode.com/), we will do Request **POST** in JSON Placeholder, to be able to do post we need the endpoint as in the picture below.

![Screenshot_12.png](https://ipfs.busy.org/ipfs/QmRqDNshjWqHLdMZBnAPzZt2cvj8jSiHPb6iLvrNu1Hxu6)

### Submit data to the API

Before we do POST data on the API we need to create a data form in frontend section. If in the previous tutorial we learn about ```mapState``` then in the tutorial we will learn about ```mapActions```.

- **Create Form Data**

We will use Bootstrap to create a data form on our frontend. in the previous tutorial we have installed bootstrap, you can see it in this [tutorial](https://steemit.com/utopian-io/@duski.harahap/universal-vue-js-application-with-nuxt-js-part-1-nuxt-structure-installation-and-configuration-global-css-and-css-frameworks). We will change the part of the form to make it more interesting and neat.

**Index.vue**
``` html
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
                  <input type="text" class="form-control" id="country" placeholder="Country">
                </div>
                <div class="form-group">
                  <label for="city">Password</label>
                  <input type="text" class="form-control" id="city" placeholder="City">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
            <div class="col-sm-6">
              <h3>List Of Countries</h3>
                <div class="alert alert-primary" role="alert" v-for="item in countries" :key="item.id">
                 <p>Country : {{item.name}}</p> 
                 <p>Capital City: {{item.city}}</p>
                </div>  
            </div>
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
```
<br>
![duskit.gif](https://ipfs.busy.org/ipfs/Qmc8gFY5gwr4vSPSYZU722tA9R4gREiQxwuhCGWsC3GiSh)
You can run your Nuxt.js Application and the result will be like the picture above, Running on **localhost/3333**
<br>
- **How to use mapActions**

We will start using ```mapActions``` in our Nuxt.js app, here I will explain how **mapActions** works. **mapActions** is used to invoke a function that exists in ```actions``` in Vuex. The function we can put on the event in Nuxt.js because Nuxt.js using Vue.js, so we can use the existing **events** on Vue.js like ***@change, @click, @submit, @keyup and [much more...](https://vuejs.org/v2/guide/events.html)***. We will see how to use it on components like the example below:

**Example:**
``` html
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
```

- We will create a v-model that we will use to store the input value ```v-model="formData.country"```, We will define the variable in the ```data()```, like the following example.

**Example:**
``` javascript
 data(){
      return{
        formData:{
          country:'',
          city:''
        }
      }
    },
```
We create an object with the formData name that has two key are ```country:' '``` and ```city:' '```. so to use it in **v-model** we can call object name first then key from the object that we access.

**Example:**

```v-model="formData.country"```

**Note** : *formData is an object and the country is a key of object.* -->