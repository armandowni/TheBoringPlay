import CountryFlag from "vue-country-flag-next";

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  return nuxtApp.vueApp.component("country-flag", CountryFlag);
});
