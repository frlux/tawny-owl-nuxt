<template>

    <Channel network="pages"/>

</template>

<script>
export default {
  loading: true,
    async fetch({ route, store }) {

      if(store.state.pages.length === 0 ) {
        await store.dispatch('getPages');
      }
      if (store.state.menu.length === 0) {
        await store.dispatch("getMenus");
      }
      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getCallsToAction');
      }

       if (store.state.locations.length === 0) {
      await store.dispatch("getLocations");
      }
  
    }
};
</script>
