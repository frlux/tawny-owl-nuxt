<template>

    <Page :page-object="pageObject" />

</template>

<script>
  export default {
    computed: {
      pageObject() {
        return this.$store.getters['getContentBySlug'](this.$route.params.slug, 'resources');
      },
    },
  loading: true,
    async fetch ({ route, store }) {
      const resource = store.getters['getContentBySlug'](route.params.slug, 'resources');

      if (!resource) {
        await store.dispatch('getContentBySlug', {
          type: 'resources',
          params: {slug: route.params.slug} 
        });
      }
      if (store.state.menu.length === 0) {
        await store.dispatch("getMenus");
      }
      if (store.state.locations.length === 0) {
        await store.dispatch("getLocations");
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
