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

    async fetch ({ route, store }) {
      const article = store.getters['getContentBySlug'](route.params.slug, 'posts');

      if (article === null) {
        await store.dispatch('getContentBySlug', {
          type: 'posts',
          params: {slug: route.params.slug} 
        });
      }

      if (store.state.services.length === 0) {
        await store.dispatch('getServices');
      }

      if (store.state.events.length === 0) {
        await store.dispatch('getEvents');
      }
    },
  };
</script>
