<template>

    <Channel network='resources'/>

</template>

<script>
export default {
  loading: true,
    async fetch({ store }) {

      if (store.state.menu.length === 0) {
        await store.dispatch("getMenus");
      }
      if (store.state.locations.length === 0) {
        await store.dispatch("getLocations");
      }
      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getResources');
      }

      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getCallsToAction');
      }

      if (store.state.services.length === 0) {
        await store.dispatch("getServices");
      }
    }
};
</script>
