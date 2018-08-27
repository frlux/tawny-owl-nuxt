<template>

    <Services />

</template>

<script>
export default {
    async fetch({ store }) {
      if(store.state.callsToAction.length === 0 ) {
        await store.dispatch('getCallsToAction');
      }

      if (store.state.services.length === 0) {
        await store.dispatch("getServices");
      }
    }
};
</script>
