import axios from "axios";
export const urls = {
  audience: 'https://fontana.librarians.design/wp-json/wp/v2/audience',
  authors: 'https://fontana.librarians.design/wp-json/wp/v2/users?',
  callsToAction: 'https://fontana.librarians.design/wp-json/wp/v2/calls-to-action?',
  collection: 'https://fontana.librarians.design/wp-json/wp/v2/collection?',
  featuredCollections: 'https://fontana.librarians.design/wp-json/wp/v2/featured-collections',
  genres: 'https://fontana.librarians.design/wp-json/wp/v2/genres',
  locations: 'https://fontana.librarians.design/wp-json/wp/v2/locations?',
  menuItems: 'https://fontana.librarians.design/wp-json/fontana/v1/menus',
  pages: 'https://fontana.librarians.design/wp-json/wp/v2/pages?',
  posts: 'https://public-api.wordpress.com/rest/v1.1/sites/fontanalib.wordpress.com/posts/?',
  articles: 'https://fontana.librarians.design/wp-json/wp/v2/posts?',
  resources: 'https://fontana.librarians.design/wp-json/wp/v2/resources?',
  services: 'https://fontana.librarians.design/wp-json/wp/v2/services?per_page=50',
  events: 'https://fontana.librarians.design/wp-json/wp/v2/events?',
  };
export const fetchData = (type, param = []) => {
  try {
    return axios.get(urls[type],{
      params: param
    })
  } catch (error) {
    console.error(error)
  }
}