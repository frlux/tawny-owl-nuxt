<template>

    <Service :service-object="serviceObject" />

</template>

<script>
  export default {
    computed: {
      serviceObject() {
        return this.$store.getters['getServiceBySlug'](this.$route.params.slug);
      },
    },

    async fetch ({ route, store }) {
      const service = store.getters['getServiceBySlug'](route.params.slug);

      if (service === null) {
        await store.dispatch('getServiceBySlug', {
          slug: route.params.slug,
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
