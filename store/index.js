import Vuex from 'vuex';
import axios from 'axios';
import actions from './actions';

const createStore = () => {
  return new Vuex.Store({
    state: {
      authors: [],
      callsToAction: [],
      collection: [],
      events: [],
      featuredCollections: [],
      locations: [],
      menu: [],
      pages: [],
      posts: [],
      resources: [],
      services: [],
    },

    actions,

    getters: {
      getAuthorById: state => authorId => state.authors.find(author => author.id === 2),

      getCallsToActionByCategory: state => (categoryName) => {
        const actionsByService = state.callsToAction.filter(
          call => // eslint-disable-line no-confusing-arrow
            call.acf.services
              ? call.acf.services.some(service => service.slug === categoryName)
              : [],
        );

        return actionsByService;
      },

      getContentByService: state => (
        contentType,
        serviceName = 'any',
        locationName = null,
      ) => {
        let contentFilteredByLocation;
        let contentByService;

        if (serviceName === 'any') {
          contentByService = state[`${contentType}`];
        } else {
          contentByService = state[`${contentType}`].filter(
            call => // eslint-disable-line no-confusing-arrow
              call.acf.services
                ? call.acf.services.some(service => service.slug === serviceName)
                : [],
          );
        }

        if (locationName && locationName !== 'all') {
          contentFilteredByLocation = contentByService.filter(
            content => // eslint-disable-line no-confusing-arrow
              content.acf.location
                ? content.acf.location.some(
                location => location.slug === locationName,
                )
                : [],
          );
        }
        return locationName && locationName !== 'all' ? contentFilteredByLocation : contentByService;
      },

      getEvents: state => (dateString = null, locationName = null) => {
        let events;
        let eventsFilteredByLocation;

        if (dateString) {
          events = state.events.filter(
            event =>
              `${event.start_date_details.year}-${
                event.start_date_details.month
                }-${event.start_date_details.day}` === dateString,
          );
        } else {
          events = state.events;
        }

        if (locationName && locationName !== 'all') {
          eventsFilteredByLocation = events.filter(
            event => event.venue.slug === locationName,
          );
        }

        return locationName && locationName !== 'all' ? eventsFilteredByLocation : events;
      },

      getEventBySlug: state => (slug) => {
        return state.events.find(event => event.slug === slug);
      },

      /**
       * We can use `getRandomContentItem(services)` -- for example -- to return
       * a random service.
       */
      getRandomContentItem: state => (contentType) => {
        const content = state[contentType];
        return content[Math.floor(Math.random() * content.length)];
      },

      getSiteContent: state => () => { // eslint-disable-line
        return [
          ...state.collection,
          ...state.events,
          ...state.pages,
          ...state.posts,
          ...state.services,
        ];
      },

      getServiceBySlug: state => slug => state.services.find(service => service.slug === slug),
    },

    mutations: {
      addAuthorsToState: (state, authors) => {
        state.authors = authors;
      },

      addCallsToActionToState: (state, callsToAction) => { // eslint-disable-line
        state.callsToAction = callsToAction;
      },

      addCollectionToState(state, collection) {
        state.collection = collection; // eslint-disable-line
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

      addEventsToState(state, events) {
        state.events = events; // eslint-disable-line
      },

      addResourcesToState(state, resources) {
        state.resources = resources; // eslint-disable-line
      },

      addServicesToState(state, services) {
        state.services = services; // eslint-disable-line
      },
    },
  })
};

export default createStore;
