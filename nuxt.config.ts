// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: 'Nuxt Market',
      meta: [
        {name: 'description', content: 'Everything Nuxt'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey : process.env.EXCHANGE_API_KEY
  }
})
