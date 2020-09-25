import colors from 'vuetify/es5/util/colors'

export default {
  /*
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  serverMiddleware: ['@/server/index.js'],
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#29f709', height: '5px' },
  /*
   ** Global CSS
   */
  css: ['@/assets/style.scss'],

  styleResources: {
    scss: ['@/assets/style.scss'],
  },

  // Importing fonts
  webfontloader: {
    google: {
      families: ['Montserrat', 'Montserrat Alternates'],
    },
  },

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // todo to check if client mode is the right one
    { src: '@/plugins/auth.js', mode: 'client' },
    '@/plugins/fontawesome.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  // Pwa
  manifest: {
    icon: {
      iconSrc: '@/static/icon.png',
    },
    short_name: 'GP',
    name: 'Globi Pals',
    // TODO: edit descreption
    descreption: 'Global Penpals',
    start_url: '/',
    theme_color: '#29f709',
    background_color: '#29f709',
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/dotenv'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    'nuxt-webfontloader',
  ],

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          // primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          primary: '#21d604',
        },
        light: {
          primary: '#29f709',
        },
      },
      icons: {
        iconfont: 'mdi',
      },
      font: {
        family: 'Montserrat',
      },
    },
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
