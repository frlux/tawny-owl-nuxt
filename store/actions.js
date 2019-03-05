import * as api from "./api.js";

const actions = {
  async getAudiences({ commit }) {
    const { data } = await api.fetchData('audience');
    commit('addTermsToState', {taxonomy: 'audience', terms: data.data});
},
  async getAuthors({ commit }) {
    const { data } = await api.fetchData('authors');
    commit('addAuthorsToState', data.data);
  },

  async getCallsToAction({ commit }) {
    const { data } = await api.fetchData('callsToAction');
    commit('addCallsToActionToState', data.data);
  },

  async getCollection({ commit }) {
    const { data } = await api.fetchData('collection');
    commit('addCollectionToState', data.data);
  },

  async getFeaturedCollections({ commit }) {
    const { data } = await api.fetchData('featuredCollections');
    commit('addFeaturedCollectionToState', data.data);
  },

  async getLocations({ commit }) {
    const { data } = await api.fetchData('locations');
    commit('addLocationsToState', data.data);
  },

  async getPages({ commit }) {
    const { data } = await api.fetchData('pages');
    commit('addPagesToState', data.data);
  },

  async getPosts({ commit }) {
    const { data } = await api.fetchData('posts');
    commit('addPostsToState', data.posts);
  },
    
  async getArticles({ commit }) {
    const { data } = await api.fetchData('articles');
    commit('addArticlesToState', data.data);
  },

  async getResources({ commit }) {
    const { data } = await api.fetchData('resources');
    commit('addResourcesToState', data.data);
  },

  async getServices({ commit }) {
    const { data } = await api.fetchData('services');
    commit('addServicesToState', data.data);
  },

  async getMenuItems({ commit }) {
    const { data } = await api.fetchData('menuItems');
    commit('addMenuItemsToState', data.data);
  },

  async getUpcomingEvents({ commit }) {
    const { data } = await api.fetchData('events');
    commit('addEventsToState', data.data);
  },
};

export default actions;
