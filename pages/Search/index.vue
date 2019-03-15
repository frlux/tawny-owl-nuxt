<template>
<SearchResults :filter="$route.query.search" :location="$route.query.location" />

</template>

<script>
export default {
   async fetch ({ route, store }) {

     console.log(route);
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
