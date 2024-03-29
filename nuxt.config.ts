// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  css: ["@/assets/scss/global.scss"],

})
