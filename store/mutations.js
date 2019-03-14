const mutations = {
  addArticlesToState(state, articles) {
    state.articles = articles;
  },

  addAuthorsToState(state, authors) {
    state.authors = authors;
  },

  addCallsToActionToState(state, callsToAction) {
    state.callsToAction = callsToAction;
  },

  addCollectionToState(state, collection) {
    state.collection = collection;
  },

  addEventsToState(state, events) {
    state.events = events;
  },

  addCount(state, count) {
    state.counts[count.type]=count.count;
  },

  addFeaturedCollectionToState(state, featuredCollections) {
    state.featuredCollections = featuredCollections;
  },

  addLocationsToState(state, locations) {
    state.locations = locations;
  },
  
  addMenusToState(state, menuItems) {
    menuItems.forEach(item=>{
      Vue.set(state.menuItems, item.slug, '')
    })
  },
  addMenuItemsToState(state, payload) {
      state.menu.push(payload);
  },


  addMoreContent(state, payload) {
    if(!state[payload.contentType] || state[payload.contentType].length == 0){
      state[payload.contentType] = payload.content;
    }
    for (let i=0; i < payload.content.length; i++){
      const index = state[payload.contentType].findIndex(item => item.id === payload.content[i].id)
      if (index === -1){ 
        state[payload.contentType].push(payload.content[i]);
      }
    }
  },

  addMoreEvents(state, moreEvents){
    for (let i=0; i < moreEvents.length; i++){
      const index = state.events.findIndex(event => event.id === moreEvents[i].id)
      if (index === -1){ 
        state.events.push(moreEvents[i]);
      }
    }
  },

  addPagesToState(state, pages) {
    state.pages = pages;
  },

  addPostsToState(state, posts) {
    state.posts = posts;
  },

  addResourcesToState(state, resources) {
    state.resources = resources;
  },

  addServicesToState(state, services) {
    state.services = services;
  },

  setUserLocation(state, location){
    state.userLocation = location!=='all' ? location : null;
  },
  addTermsToState(state, payload){
    if(state[payload.taxonomy].length < 1){
      state[payload.taxonomy] = payload.terms;
    } else {
      for (let i=0; i < payload.terms.length; i++){
        const index = state[payload.taxonomy].findIndex(term => term.id === payload.terms[i].id)
        if (index === -1){ 
          state[payload.taxonomy].push(payload.terms[i]);
        }
      }
    }
  }
};

export default mutations;
