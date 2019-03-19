<template>

    <Collection slug='any'/>

</template>

<script>
  export default {
    loading: true,
    async fetch ({ route, store }) {
      const collection = store.state.collection;

      if (collection === null || collection.length == 0) {
        await store.dispatch('getCollection');
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

      if (store.state.services.length === 0) {
        await store.dispatch('getServices');
      }

      if (store.state.events.length === 0) {
        await store.dispatch('getUpcomingEvents');
      }
    },
  };
</script>
