<template>

    <Locations />

</template>

<script>
export default {
    async fetch({ store }) {
      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getLocations');
      }

      if (store.state.services.length === 0) {
        await store.dispatch("getServices");
      }
    }
};
</script>
