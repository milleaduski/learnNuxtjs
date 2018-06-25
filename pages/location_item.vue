<template>
  <div>
    <items :data="'Location'"></items>
  </div>
</template>

<script>
  import Items from '~/components/items.vue'
  export default{
    components: {
      Items
    },
    async fetch({store}){
      await store.dispatch('load_items', 'location')
    }
  }
  
</script>
