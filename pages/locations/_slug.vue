<template>

    <Location :page-object="pageObject" />

</template>

<script>
  export default {
    computed: {
      pageObject() {
        return this.$store.getters['getLocationBySlug'](this.$route.params.slug);
      },
    },
  loading: true,
    async fetch ({ route, store }) {
      const location = store.getters['getContentBySlug'](route.params.slug, 'locations');

      if (!location) {
        await store.dispatch("getLocations");
      }
      if (store.state.menu.length === 0) {
        await store.dispatch("getMenus");
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
