<template>
    <events :filter="$route.query.filter" :location="$route.query.location"></events>
</template>

<script>
export default {
  async fetch ({ store }) {
    if (store.state.events.length === 0) {
      await store.dispatch('getUpcomingEvents');
    }

    if (store.state.locations.length === 0) {
      await store.dispatch('getLocations');
    }
  }
};
</script>
