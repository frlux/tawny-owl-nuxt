const mutations = {
  addAuthorsToState: (state, authors) => {
    state.authors = authors;
  },

  addCallsToActionToState: (state, callsToAction) => { // eslint-disable-line
    state.callsToAction = callsToAction;
  },

  addCollectionToState(state, collection) {
    state.collection = collection; // eslint-disable-line
  },

  addEventToState(state, event) {
    state.events.push(event);
  },

  addEventsToState(state, events) {
    state.events = events; // eslint-disable-line
  },

  addFeaturedCollectionToState(state, featuredCollections) {
    state.featuredCollections = featuredCollections; // eslint-disable-line
  },

  addLocationsToState(state, locations) {
    state.locations = locations; // eslint-disable-line
  },

  addPagesToState(state, pages) {
    state.pages = pages; // eslint-disable-line
  },

  addPostsToState(state, posts) {
    state.posts = posts; // eslint-disable-line
  },

  addMoreEvents(state, moreEvents){
    for (let i=0; i < moreEvents.length; i++) {
      const index = state.events.findIndex(event => event.id === moreEvents[i].id);
      if (index === -1) {
        state.events.push(moreEvents[i]);
      }
    }
  },

  addResourcesToState(state, resources) {
    state.resources = resources; // eslint-disable-line
  },

  addServicesToState(state, services) {
    state.services = services; // eslint-disable-line
  },
};

export default mutations;
