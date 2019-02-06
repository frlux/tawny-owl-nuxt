<template>

    <Service :service-object="serviceObject" />

</template>

<script>
  export default {
    computed: {
      serviceObject() {
        return this.$store.getters['getServiceBySlug'](this.$route.params.slug);
      },

      serviceallsToAction() {
      let serviceCTA = this.$store.getters.getContentByService(
        'callsToAction',
        this.serviceObject.slug,
        this.location,
      );
      if (serviceCTA.length > 0) {
        return serviceCTA;
      }
      let serviceQuery = { urlParams: `?services=${this.serviceObject.id}`, contentType: 'callsToAction' };
      this.$store.dispatch(`getMoreContent`, serviceQuery);
      return this.$store.getters.getContentByService(
        'callsToAction',
        this.serviceObject.slug,
        this.location,
      );
    },

    serviceCollection() {
      let serviceCollections = this.$store.getters.getContentByService(
        'collection',
        this.serviceObject.slug,
        this.location,
      );

      if (serviceCollections.length > 5) {
        return serviceCollections;
      }
      let serviceQuery = { urlParams: `&services=${this.serviceObject.id}`, contentType: 'collection' };
      this.$store.dispatch('getMoreContent', serviceQuery);
      return this.$store.getters.getContentByService(
        'collection',
        this.serviceObject.slug,
        this.location,
      );
    },

    serviceArticles() {
      let serviceArticles = this.$store.getters.getContentByService(
        'articles',
        this.serviceObject.slug,
        this.location,
      );

      if (serviceArticles.length > 5) {
        return serviceArticles;
      }

      let serviceQuery = { urlParams: `?services=${this.serviceObject.id}`, contentType: 'articles' };
      this.$store.dispatch('getMoreContent', serviceQuery);
      return this.$store.getters.getContentByService(
        'articles',
        this.serviceObject.slug,
        this.location,
      );
    },

    serviceEvents() {
      let serviceEvents = this.$store.getters.getContentByService(
        'events',
        this.serviceObject.slug,
        this.location
      );

      if (serviceEvents.length > 5) {
        return serviceEvents;
      }

      let serviceQuery = { urlParams: `?services=${this.serviceObject.id}`, contentType: 'events' };
      this.$store.dispatch('getMoreContent', serviceQuery);
      return this.$store.getters.getContentByService(
        'events',
        this.serviceObject.slug,
        this.location
      );
    },

    servicePages() {
      let servicePages = this.$store.getters.getContentByService(
        'pages',
        this.serviceObject.slug,
        this.location
      );

      if (servicePages.length > 5) {
        return servicePages;
      }

      let serviceQuery = { urlParams: `?services=${this.serviceObject.id}`, contentType: 'pages' };

      this.$store.dispatch('getMoreContent', serviceQuery);
      return this.$store.getters.getContentByService(
        'pages',
        this.serviceObject.slug,
        this.location
      );
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
