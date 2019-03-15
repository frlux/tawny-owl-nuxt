const mutations = {
  addArticlesToState(state, articles) {
    if(!state.articles || state.articles.length == 0){
      state.articles = articles;
    } else{
      for (let i=0; i < articles.length; i++){
        const index = state.articles.findIndex(item => item.id === articles[i].id)
        if (index === -1){ 
          state.articles.push(articles[i]);
        }
      }
    }
    
  },

  addAuthorsToState(state, authors) {
    state.authors = authors;
  },

  addCallsToActionToState(state, callsToAction) {
    if(!state.callsToAction || state.callsToAction.length == 0){
      state.callsToAction = callsToAction;
    } else{
      for (let i=0; i < callsToAction.length; i++){
        const index = state.callsToAction.findIndex(item => item.id === callsToAction[i].id)
        if (index === -1){ 
          state.callsToAction.push(callsToAction[i]);
        }
      }
    }
  },

  addCollectionToState(state, collection) {
    if(!state.collection || state.collection.length == 0){
      state.collection = collection;
    }else{
      for (let i=0; i < collection.length; i++){
        const index = state.collection.findIndex(item => item.id === collection[i].id)
        if (index === -1){ 
          state.collection.push(collection[i]);
        }
      }
    }
  },

  addEventsToState(state, events) {
    if(!state.events || state.events.length == 0){
      state.events = events;
    }else{
      for (let i=0; i < events.length; i++){
        const index = state.events.findIndex(item => item.id === events[i].id)
        if (index === -1){ 
          state.events.push(events[i]);
        }
      }
    }
  },

  addCount(state, count) {
    state.counts[count.type]=count.count;
  },

  addFeaturedCollectionToState(state, featuredCollections) {
    if(!state.featuredCollections || state.featuredCollections.length == 0){
    state.featuredCollections = featuredCollections;
    }else{
      for (let i=0; i < featuredCollections.length; i++){
        const index = state.featuredCollections.findIndex(item => item.id === featuredCollections[i].id)
        if (index === -1){ 
          state.featuredCollections.push(featuredCollections[i]);
        }
      }
    }
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
    if(!Array.isArray(payload.content)){
      payload.content = [payload.content];
    }
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
    if(!state.pages || state.pages.length==0){
    state.pages = pages;
    }else{
      for (let i=0; i < pages.length; i++){
        const index = state.pages.findIndex(item => item.id === pages[i].id)
        if (index === -1){ 
          state.pages.push(pages[i]);
        }
      }
    }
  },

  addPostsToState(state, posts) {
    if(!state.posts || state.posts.length==0){
    state.posts = posts;
    }else{
      for (let i=0; i < posts.length; i++){
        const index = state.posts.findIndex(item => item.id === posts[i].id)
        if (index === -1){ 
          state.posts.push(posts[i]);
        }
      }
    }
  },

  addResourcesToState(state, resources) {
    if(!state.resources || state.resources.length==0){
      state.resources = resources;
      }else{
        for (let i=0; i < resources.length; i++){
          const index = state.resources.findIndex(item => item.id === resources[i].id)
          if (index === -1){ 
            state.resources.push(resources[i]);
          }
        }
      }
  },

  addServicesToState(state, services) {
    if(!state.services || state.services.length==0){
      state.services = services;
      }else{
        for (let i=0; i < services.length; i++){
          const index = state.services.findIndex(item => item.id === services[i].id)
          if (index === -1){ 
            state.services.push(services[i]);
          }
        }
      }
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
