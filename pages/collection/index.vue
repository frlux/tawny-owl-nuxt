<template>

    <Page />

</template>

<script>
export default {
  loading: true,
    async fetch({ store }) {
      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getCallsToAction');
      }
      if (store.state.menu.length === 0) {
        await store.dispatch("getMenus");
      }
      if (store.state.locations.length === 0) {
        await store.dispatch("getLocations");
      }
     if (store.state.genres.length === 0) {
        await store.dispatch('getGenres');
      }
      if (store.state.audience.length === 0) {
        await store.dispatch('getAudiences');
      }
    }
};
</script>
