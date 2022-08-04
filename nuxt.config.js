export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'freelance-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // https://nuxtjs.org/docs/2.x/directory-structure/components/
  // Mengaktifkan impor otomatis komponen-komponen
  // Sekarang nuxt hanya memindai komponen  di direktori components/_v2/
  // Komponen2 lain di luar kedua direktori tsb tetap perlu impor manual
  components: [
    {
      path: '~/components/',
      prefix: 'mag',
      extensions: ['vue']
    }
  ],
}
