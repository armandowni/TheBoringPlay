export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", href: "~/assets/favicon.ico" }],
      title: "The Boring Play",
      meta: [
        {
          name: "description",
          content: "This site build with nuxt 3 with typeorm and express",
        },
      ],
    },
  },

  runtimeConfig: {
    API_URL: process.env.NUXT_API_SECRET,
  },
  ssr: false,
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "~/config/translate.ts",
    defaultLocale: "gb",
  },
});
