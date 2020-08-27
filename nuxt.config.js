
export default {
  mode: 'spa',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'EdHusk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personalised Learning at your Doorstep' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDpdZ8DqVUl_uTIVSad76td_MINU9vjEfE&libraries=places' },
      {
        hid: 'tawk.to',
        src: 'https://embed.tawk.to/58ea940230ab263079b5f1ea/default'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vee-validate'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-99716197-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', {
      defaultIconPack: 'fas',
      materialDesignIconsHRef: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css'
    }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://api.edhusk.com/'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vee-validate/dist/rules']
  }
}
