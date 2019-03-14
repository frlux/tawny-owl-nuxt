import Vuex from 'vuex';
import axios from 'axios';
import actions from './actions';
import mutations from './mutations';
const urls = {
  authors: 'https://fontana.librarians.design/wp-json/wp/v2/users?',
  callsToAction: 'https://fontana.librarians.design/wp-json/wp/v2/calls-to-action?',
  collection: 'https://fontana.librarians.design/wp-json/wp/v2/collection?',
  featuredCollections: 'https://fontana.librarians.design/wp-json/wp/v2/featured-collections?',
  locations: 'https://fontana.librarians.design/wp-json/wp/v2/locations?',
  pages: 'https://fontana.librarians.design/wp-json/wp/v2/pages?',
  posts: 'https://public-api.wordpress.com/rest/v1.1/sites/fontanalib.wordpress.com/posts/?number=10',
  articles: 'https://fontana.librarians.design/wp-json/wp/v2/posts?',
  resources: 'https://fontana.librarians.design/wp-json/wp/v2/resources?',
  services: 'https://fontana.librarians.design/wp-json/wp/v2/services?per_page=50',
  events: 'https://fontana.librarians.design/wp-json/wp/v2/events?',
};
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
      articles: [],
      resources: [],
      services: [],
      userLocation: null,
      audience: [],
      genres: [],
      counts: {
        events: 0,
        pages: 0,
        posts: 0,
        articles: 0,
        resources: 0,
      },
    },

    actions,

    getters: {
      getAuthorById: state => authorId => state.authors.find(author => author.id === authorId),
  
      getCallsToActionByCategory: state => categoryName => {
        const actionsByService = state.callsToAction.filter(
          call =>
            call.acf.services && call.acf.services.some(service => service.slug === categoryName)
        );
  
        return actionsByService;
      },
      getContentByService: state => (contentType = null, serviceName = null, locationName = null) => {
       /*  const c = contentType ? state[contentType] : [
          ...state.callsToAction,
          ...state.resources,
          ...state.events,
          ...state.pages,
          ...state.posts,
          ...state.articles,
          ...state.collection,
        ]; */
        const c = state[contentType];
        let contents;
        let contentsFilteredByService = [];
  
    
        if (locationName && locationName !== 'all') {
          contents = c.filter(
            page => page.acf && page.acf.location && page.acf.location.some(location => location.slug === locationName)
          );
  
          if(!contents || contents.length < 1){
            contents = c.filter(
              page => !page.acf.location || page.acf.location.some(location => location.slug === 'headquarters')
            );
          }
        } else {
          contents = c;
        }
        
  
        if(contentType === 'callsToAction'){
          contents.sort(
            (a,b) => (a.acf.priority > b.acf.priority) ? 1
                      : ((b.acf.priority > a.acf.priority) ? -1 
                      :  0));
        }
        
        if (serviceName && serviceName !== 'any') {
          contentsFilteredByService = contentsFilteredByService.filter(
            page => page.acf && page.acf.services && page.acf.services.some(service => service.slug === serviceName)
          );
        } 
        
        return serviceName && serviceName !== 'any' ? contentsFilteredByService : contents;
      },
  
      getEvents: state => (dateString = null, locationName = null) => {
        let events;
        let eventsFilteredByLocation;
  
        if (dateString) {
          events = state.events.filter(
            event =>
              `${event.start_date_details.year}-${
                event.start_date_details.month
              }-${event.start_date_details.day}` === dateString
          );
        } else {
          events = state.events;
        }
  
        if (locationName && locationName !== 'all') {
          eventsFilteredByLocation = events.filter(
            event => event.acf.location && event.acf.location.some(location => location.slug === locationName)
          );
        }
  
        return locationName && locationName !== 'all' ? eventsFilteredByLocation : events;
      },
  
      getEventBySlug: state => slug => {
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
  
      getSiteContent: state => () => {
        return [
          ...state.collection,
          ...state.events,
          ...state.pages,
          ...state.posts,
          ...state.services,
          ...state.resources,
          ...state.locations,
          ...state.articles,
        ];
      },
  
      getServiceBySlug: state => slug => state.services.find(service => service.slug === slug),
      getLocationBySlug: state => slug => state.locations.find(location => location.slug === slug),
      getContentBySlug: state => (slug, type=null, all=null) => {
        
        let content = !type ? [
          ...state.articles,
          ...state.pages,
          ...state.posts,
        ] : type=='blog' ? state.posts : state[type];
        if(!content || content.length < 1){
          return null;
        }
      
        content = content.filter(item => item.slug && item.slug === slug);
    
        return !all ? content[0] : content;
      },
      getTerm: state => (tid, taxonomy=null) => {
        let terms = taxonomy ? state[taxonomy] : [
          ...state.genres,
          ...state.audience,
          ...state.featuredCollections,
          ...state.services
        ];
  
        return isNaN(tid) ? terms.find(term => term.slug == tid) : terms.find(term => term.id == tid)
      }
    },

    mutations,
  })
};

export default createStore;
