import Auth0Provider from "next-auth/providers/auth0";
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: useRuntimeConfig().private.authSecret,
  pages: {
    signIn: '/',
  },
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    Auth0Provider.default({
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        issuer: process.env.AUTH0_ISSUER
      })
  ]
})