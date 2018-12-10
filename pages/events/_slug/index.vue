<template>

    <Event :event-object="eventObject"/>

</template>

<script>
import axios from 'axios';

export default {
  computed: {
    eventObject() {
      return this.$store.getters['getEventBySlug'](this.$route.params.slug);
    },
  },

  async fetch ({ route, store }) {
    const event = store.getters['getEventBySlug'](route.params.slug);

    if (event === null) {
      await store.dispatch('getEventBySlug', {
        slug: route.params.slug,
      });
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
