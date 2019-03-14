import * as api from "./api.js";

const actions = {
  async getAudiences({ commit }) {
    return new Promise(resolve => {
      const authors = api.fetchData('audience', {per_page: 50})
    .then( data=>{
      resolve();
      commit('addTermsToState', {taxonomy: 'audience', terms: data.data});
    });
  });
},
async getContentBySlug({ commit }, args) {
  return new Promise(resolve => {
    const authors = api.fetchData(args.type, args.params)
  .then( data=>{
    resolve();
    commit('addMoreContent', {contentType: args.type, content: data.data});
  });
});
},
  async getMenus({ commit }) {
    return new Promise(resolve => {
      const authors = api.fetchData('menuItems',[], '/top')
    .then( data=>{
      let menu ={name: 'top', items: data.data};
      commit('addMenuItemsToState', menu);
      resolve();
    });
  });
    /* return new Promise(resolve => {
      const authors = api.fetchData('menuItems')
    .then( data=>{
      data.data.forEach(item=>{
        api.fetchData('menuItems', [], '/'+item.slug).then(menus=>{
          let menu ={name: item.slug, items: menus.data};
          commit('addMenuItemsToState', menu);
        }
        ).catch(error => {console.log(error)})
      })
      resolve();
    });
  }); */
},
  async getAuthors({ commit }) {
    return new Promise(resolve => {
      const authors = api.fetchData('authors')
    .then( data=>{
      commit('addAuthorsToState', data.data);
      resolve();
    });
  });
  },

    async getCallsToAction({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('callsToAction')
      .then( data=>{
        commit('addCallsToActionToState', data.data);
        resolve();
      });
    });
  },

    async getCollection({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('collection')
      .then( data=>{
        commit('addCollectionToState', data.data);
        resolve();
      });
    });
    
  },

    async getFeaturedCollections({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('featuredCollections')
      .then( data=>{
        commit('addFeaturedCollectionToState', data.data);
        resolve();
      });
    });
  },

  async getGenres({ commit }) {
    return new Promise(resolve => {
      const authors = api.fetchData('genres', {per_page: 50})
    .then( data=>{
      resolve();
      commit('addTermsToState', {taxonomy: 'genres', terms: data.data});
    });
  });
},

    async getLocations({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('locations')
      .then( data=>{
        commit('addLocationsToState', data.data);
        resolve();
      });
    });
  },

    async getPages({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('pages')
      .then( data=>{
        commit("addCount", {type: 'pages', count: data.headers['x-wp-total']});
        commit('addPagesToState', data.data);
        resolve();
      });
    });
  },


    async getPosts({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('posts',{number: 10})
      .then( data=>{
        commit("addCount",{type: 'posts', count: data.data.found});        
        commit('addPostsToState', data.data.posts);
        resolve();
      });
    });
  },

    async getArticles({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('articles')
      .then( data=>{
        commit("addCount", {type: 'articles', count: data.headers['x-wp-total']});
        commit('addArticlesToState', data.data);
        resolve();
      });
    });
  },

    async getResources({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('resources')
      .then( data=>{
        commit("addCount", {type: 'resources', count: data.headers['x-wp-total']});
        commit('addResourcesToState', data.data);
        resolve();
      });
    });
  },


    async getServices({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('services',{per_page: 100})
      .then( data=>{
        commit('addServicesToState', data.data);
        resolve();
      });
    });
  },


    async getUpcomingEvents({ commit }) {
      return new Promise(resolve => {
        const authors = api.fetchData('events')
      .then( data=>{
        commit("addCount", {type: 'events', count: data.headers['x-wp-total']});
        commit('addEventsToState', data.data);
        resolve();
      });
    });
  },
};

export default actions;
