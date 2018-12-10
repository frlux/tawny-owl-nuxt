module.exports = {
  mode: 'spa',
  generate: {
    fallback: true,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Fontana Regional Library',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The homepage for the Fontana Regional Library system.' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans|PT+Serif|Lato'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });

        config.resolve.alias['vue'] = 'vue/dist/vue.common';
      }
    },
    optimization: {
      minimize: false,
    },
  },
  router: {
    base: '/tawny-owl-nuxt/dist',
  },
  plugins: [
    {
      src: '~plugins/addToCalendar.js',
      ssr: false,
    },
    {
      src: '~/plugins/feathers.js',
      ssr: true,
    },
    {
      src: '~/plugins/moment.js',
      ssr: true,
    },
    {
      src: '~/plugins/routes.js',
      ssr: true,
    }
  ],
}

