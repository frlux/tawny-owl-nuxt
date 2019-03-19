<template>
<SearchResults :filter="query" :location="$route.query.location" />

</template>

<script>
export default {
  created() {
    // $on method will receive the updated count value from the sender component
    if(this.$route.query && (this.$route.query.filter || this.$route.query.search)){
      this.query = this.$route.query.filter ? this.$route.query.filter : this.$route.query.search; 
    }
    this.$nuxt.$root.$on('inputData', data => {
      console.log(data);
      this.query=data;
    });
  },
  data(){
    return{
      query: ''
    }
  },
  loading: true,
  
  
   async fetch ({ route, store }) {
     if (store.state.menu.length === 0) {
        await store.dispatch("getMenus");
      }
      if (store.state.locations.length === 0) {
      await store.dispatch("getLocations");
      }
      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getCallsToAction');
      }
   }


};
</script>
