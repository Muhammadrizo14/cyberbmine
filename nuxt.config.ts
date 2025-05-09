import tailwindcss from "@tailwindcss/vite";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/styles/index.css', '~/assets/styles/main.scss'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})