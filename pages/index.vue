<template>
  <div>
    <items :data="'Pokemon'"></items>
  </div>
</template>

<script>
  import Items from '~/components/items.vue'
  export default{
    components: {
      Items
    },
    async fetch({store}){
      await store.dispatch('load_items', 'pokemon')
    }
  }
  
</script>
