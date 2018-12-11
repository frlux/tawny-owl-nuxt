import axios from "axios/index";

const urls = {
  authors: 'https://fontana.librarians.design/wp-json/wp/v2/users',
  callsToAction: 'https://fontana.librarians.design/wp-json/wp/v2/calls-to-action',
  collection: 'https://fontana.librarians.design/wp-json/wp/v2/collection?_embed',
  featuredCollections: 'https://fontana.librarians.design/wp-json/wp/v2/featured-collections',
  locations: 'https://fontana.librarians.design/wp-json/wp/v2/locations',
  pages: 'https://fontana.librarians.design/wp-json/wp/v2/pages',
  posts: 'https://public-api.wordpress.com/rest/v1.1/sites/fontanalib.wordpress.com/posts/?number=10',
  articles: 'https://fontana.librarians.design/wp-json/wp/v2/posts',
  resources: 'https://fontana.librarians.design/wp-json/wp/v2/resources',
  services: 'https://fontana.librarians.design/wp-json/wp/v2/services?per_page=50',
  events: 'https://fontana.librarians.design/wp-json/wp/v2/events',
};

const actions = {
  async getAuthors({ commit }) {
    const { data } = await axios.get('https://fontana.librarians.design/wp-json/wp/v2/users');
    commit('addAuthorsToState', data);
  },

  async getCallsToAction({ commit }) {
    const { data } = await axios.get('https://fontana.librarians.design/wp-json/wp/v2/calls-to-action');
    console.log(data);
    commit('addCallsToActionToState', data);
  },

  getCollection({ commit }) {
    return new Promise((resolve) => {
      axios
        .get('https://fontana.librarians.design/wp-json/wp/v2/collection')
        .then(({ data }) => {
          commit('addCollectionToState', data);
          resolve();
        });
    });
  },

  async getEventBySlug({ commit }, { slug }) {
    try {
      const { data } = await axios.get(`https://fontana.librarians.design/wp-json/wp/v2/events/?slug=${slug}`);
      return commit('addEventToState', data);
    } catch (error) {
      return false;
    }
  },

  getFeaturedCollections({ commit }) {
    return new Promise((resolve) => {
      axios.get('https://fontana.librarians.design/wp-json/wp/v2/featured-collection')
        .then(({ data }) => {
          commit('addFeaturedCollectionToState', data);
          resolve();
        });
    });
  },

  getLocations({ commit }) {
    return new Promise((resolve) => {
      axios
        .get('https://fontana.librarians.design/wp-json/wp/v2/locations')
        .then(({ data }) => {
          commit('addLocationsToState', data);
          resolve();
        });
    });
  },

  getMoreContent({commit}, serviceQuery) {
    return new Promise(resolve => {
      axios
        .get(urls[serviceQuery.contentType] + serviceQuery.urlParams)
        .then(({data}) => {
          const payload = {'content': data, 'contentType': serviceQuery.contentType};
          commit("addMoreContent", payload);
          resolve();
        });
    });
  },

  getPages({ commit }) {
    return new Promise((resolve) => {
      axios
        .get('https://fontana.librarians.design/wp-json/wp/v2/pages')
        .then(({ data }) => {
          commit('addPagesToState', data);
          resolve();
        });
    });
  },

  getPosts({ commit }) {
    return new Promise((resolve) => {
      axios
        .get(
          'https://public-api.wordpress.com/rest/v1.1/sites/fontanalib.wordpress.com/posts/?number=10',
        )
        .then(({ data }) => {
          commit('addPostsToState', data.posts);
          resolve();
        });
    });
  },

  getResources({ commit }) {
    return new Promise((resolve) => {
      axios
        .get('https://fontana.librarians.design/wp-json/wp/v2/resources')
        .then(({ data }) => {
          commit('addResourcesToState', data);
          resolve();
        });
    });
  },

  async getServiceBySlug({ commit }, { slug }) {
    try {
      const { data } = await axios.get(`https://fontana.librarians.design/wp-json/wp/v2/services/?slug=${slug}`);
      return commit('addServiceToState', data);
    } catch (error) {
      return false;
    }
  },

  getServices({ commit }) {
    return new Promise((resolve) => {
      axios
        .get('https://fontana.librarians.design/wp-json/wp/v2/services')
        .then(({ data }) => {
          commit('addServicesToState', data);
          resolve();
        });
    });
  },

  async getUpcomingEvents({ commit }) {
    const { data } = await axios.get('https://fontana.librarians.design/wp-json/wp/v2/events');
    commit('addEventsToState', data);
  },
};

export default actions;
