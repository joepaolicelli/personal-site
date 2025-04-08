// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: ['@nuxthub/core', '@nuxt/eslint', '@unocss/nuxt', '@nuxt/fonts', 'motion-v/nuxt', '@vueuse/nuxt'],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-01',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: false,
    },
  },

  // https://unocss.dev/guide/style-reset
  css: ['@unocss/reset/normalize.css'],

  // https://fonts.nuxt.com/get-started/configuration
  fonts: {
    priority: ['bunny', 'google'],
    families: [{ name: 'Kufam', weights: [400, 600] }],
  },
});