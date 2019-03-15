<template>

    <Page :page-object="pageObject" />

</template>

<script>
  export default {
    computed: {
      pageObject() {
        return this.$store.getters['getContentBySlug'](this.$route.params.slug);
      },
    },
    loading: true,
    async fetch ({ route, store }) {
      const article = store.getters['getContentBySlug'](route.params.slug, 'pages');

      if (!article) {
        await store.dispatch('getContentBySlug', {
          type: 'pages',
          params: {slug: route.params.slug} 
        });
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
