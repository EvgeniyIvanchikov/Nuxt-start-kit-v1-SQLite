// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi', '@nuxt/eslint'],
  css: ['@/assets/styles/main.scss'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337', // Default options
    prefix: '/api', // Default options
    admin: '/admin', // Default options
    version: 'v5', // Default options
    cookie: {}, // Default options
    cookieName: 'strapi_jwt', // Default options
  },
});
