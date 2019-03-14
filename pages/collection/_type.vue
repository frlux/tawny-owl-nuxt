<template>

    <Collection />

</template>

<script>
  export default {
    

    async fetch ({ route, store }) {
      const collection = store.state.collection;

      if (collection === null || collection.length == 0) {
        await store.dispatch('getCollection');
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
