<template>

    <Event :eventObject="eventObject" />

</template>

<script>
export default {
  computed: {
    eventObject() {
      return this.$store.getters['getEventBySlug'](this.$route.params.slug);
    },
  },

  async fetch ({ store }) {
    if (store.state.authors.length === 0) {
      await store.dispatch('getAuthors');
    }
    if (store.state.events.length === 0) {
      await store.dispatch('getUpcomingEvents');
    }
  },
};
</script>
