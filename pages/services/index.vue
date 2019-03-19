<template>

    <Services :filter='query'/>

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
    async fetch({ store }) {
      if (store.state.services.length < 15) {
        await store.dispatch("getServices");
      }

      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getCallsToAction');
      }
       if (store.state.locations.length === 0) {
      await store.dispatch("getLocations");
      }
      if (store.state.menu.length === 0) {
        await store.dispatch("getMenus");
      }

      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getCallsToAction');
      }

      if (store.state.events.length === 0) {
        await store.dispatch('getUpcomingEvents');
      }

      if (store.state.pages.length === 0) {
        await store.dispatch("getPages");
      }

      if (store.state.collection.length === 0) {
        await store.dispatch("getCollection");
      }

      if (store.state.posts.length === 0) {
        await store.dispatch("getPosts");
      }

      
    }
};
</script>
