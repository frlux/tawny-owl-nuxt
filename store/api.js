import axios from "axios";
export const content = {
  audience: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/audience',
    content: 'taxonomy',
    field: 'audience',
    acf_field: 'target_readership',
    searchable: false,
    label: '',
    contentName: 'audience'
  },
  authors: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/users',
    content: 'user',
    searchable: false,
    label: '',
    contentName: ''
  },
  callsToAction: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/calls-to-action',
    content: 'post',
    searchable: false,
    label: '',
    contentName: ''
  },
  collection: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/collection',
    content: 'post',
    searchable: true,
    label: 'See More Collection Items',
    contentName: 'collection item'
  },
  featuredCollections: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/featured-collections',
    content: 'taxonomy',
    field: 'featured-collections',
    searchable: false,
    label: '',
    contentName: 'featured collection'
  },
  genres: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/genres',
    content: 'taxonomy',
    field: 'genres',
    acf_field: 'genre',
    searchable: false,
    label: '',
    contentName: 'genre'
  },
  menuItems: {
    url: 'https://fontana.librarians.design/wp-json/fontana/v1/menus',
    content: 'menu',
    searchable: false,
    label: '',
    contentName: ''
  },
  locations: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/locations',
    content: 'taxonomy',
    field: 'locations',
    acf_field: 'location',
    searchable: true,
    label: '',
    contentName: 'location'
  },
  pages: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/pages',
    content: 'page',
    searchable: true,
    label: '',
    contentName: 'page'
  },
  posts: {
    url: 'https://public-api.wordpress.com/rest/v1.1/sites/fontanalib.wordpress.com/posts',
    content: 'blog',
    searchable: true,
    label: '',
    contentName: 'blog post'
  },
  articles: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/posts',
    content: 'post',
    searchable: true,
    label: '',
    contentName: 'article'
  },
  resources: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/resources',
    content: 'post',
    searchable: true,
    label: '',
    contentName: 'resource'
  },
  services: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/services',
    content: 'taxonomy',
    field: 'services',
    acf_field: 'services',
    searchable: true,
    label: '',
    contentName: 'service'
  },
  events: {
    url: 'https://fontana.librarians.design/wp-json/wp/v2/events?',
    content: 'event',
    searchable: true,
    label: '',
    contentName: 'event'
  },
  subjects:{
    url: 'https://fontana.librarians.design/wp-json/wp/v2/subjects',
    content: 'taxonomy',
    field: 'subjects',
    acf_field: 'subjects',
    searchable: false,
    label: '',
    contentName: 'subject'
  },
  links:{
    organizersBySlug: 'https://fontana.librarians.design/wp-json/tribe/events/v1/organizers/by-slug/',
    searchable: false,
    }
  };

export const fetchData = (type, param = [], append=null) => {
  const url = append ? content[type].url + append : content[type].url;
  try {
    return axios.get(url, {
      params: param
    })
  } catch (error) {
    console.error(error)
  }
}

export const fetchLink = (link) => {
  try {
    return axios.get(link)
  } catch (error) {
    console.error(error)
  }
}

export const fetchPerson = (type, slug) => {
  
  try {
    let person = content.links[type] + slug;
    return axios.get(person)
  } catch (error) {
    console.error(error)
  }
}
