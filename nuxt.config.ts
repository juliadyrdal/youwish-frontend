// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: ['nuxt-lodash', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxt/ui', '@nuxtjs/supabase'],
  colorMode: {
    preference: 'light'
  },
  runtimeConfig: {
    public: {
      productApiBaseUrl: process.env.PUBLIC_PRODUCT_API_BASE_URL || 'http://localhost:3000/api', 
      backendApiBaseUrl: process.env.PUBLIC_BACKEND_API_BASE_URL || 'http://localhost:3003/api', 
    },
    private: {
      
    }
  },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
    },
  },
});