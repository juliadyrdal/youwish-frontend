// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    globalAppMiddleware: true,
    isEnabled: true,
    //originEnvKey: 'AUTH_ORIGIN',
    baseURL: 'http://localhost:3001/api/auth',
    providers: {
      auth0: {
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        issuer: process.env.AUTH0_ISSUER,
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:3000/api',
      auth: {
        origin: process.env.AUTH_ORIGIN,
      },
      auth0: {
        clientId: process.env.AUTH0_CLIENT_ID,
        domain: process.env.AUTH0_ISSUER,
      }
    },
    private: {
      auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
      authSecret: process.env.AUTH_SECRET,
    }
  }
})

// process.env.API_BASE_URL ||