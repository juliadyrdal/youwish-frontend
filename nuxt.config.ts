// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss', 
    'nuxt-lodash',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api',
    }
  }
})