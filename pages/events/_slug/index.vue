<template>

    <div>Hey we are here</div>

</template>

<script>
import axios from 'axios';

export default {
  computed: {
    eventObject() {
      return this.$store.getters['getEventBySlug'](this.$route.params.slug);
    },
  },

  async asyncData ({ params }) {
    const { data } = await axios.get(`https://fontana.librarians.design/wp-json/wp/v2/events/?slug=${params.slug}`);
  },

  async fetch ({ route, store }) {
    console.log('here');
    if (store.state.authors.length === 0) {
      await store.dispatch('getAuthors');
    }

    if (store.state.events.length === 0) {
      await store.dispatch('getUpcomingEvents');
    }
  },
};
</script>
