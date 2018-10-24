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

    async fetch ({ store }) {
      if (store.state.events.length === 0) {
        await store.dispatch('getServices');
      }
    },
  };
</script>
