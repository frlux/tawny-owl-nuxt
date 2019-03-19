<template>

    <Event :page-object="pageObject"/>

</template>

<script>
import axios from 'axios';

export default {
  loading: true,
  computed: {
    pageObject() {
      return this.$store.getters['getEventBySlug'](this.$route.params.slug);
    },
  },
loading: true, 
  async fetch ({ route, store }) {
    const event = store.getters['getContentBySlug'](route.params.slug);

    if (event === null) {
      await store.dispatch('getEventBySlug', {
        type: 'events',
        params: {slug: route.params.slug},
      });
    }
    if (store.state.menu.length === 0) {
        await store.dispatch("getMenus");
      }
      if (store.state.locations.length === 0) {
        await store.dispatch("getLocations");
      }

    if (store.state.authors.length === 0) {
      await store.dispatch('getAuthors');
    }

    if (store.state.events.length === 0) {
      await store.dispatch('getUpcomingEvents');
    }
    
  },
};
</script>