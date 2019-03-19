<template>

    <Page :page-object="pageObject"/>

</template>

<script>
  export default {
    

    computed: {
      pageObject() {
        return this.$store.getters['getContentBySlug'](this.$route.params.slug, 'posts');
      },
    },
    loading: true,
    async fetch ({ route, store }) {
      const blog = store.getters['getContentBySlug'](route.params.slug, 'posts');
      if (!blog) {
        await store.dispatch('getContentBySlug', {
          type: 'posts',
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
     meta:{
        parent: {name:"blog", text:"Shelf Life in the Mountains"}, type: {store: 'posts', wp: 'post'}
     },
  };
</script>
