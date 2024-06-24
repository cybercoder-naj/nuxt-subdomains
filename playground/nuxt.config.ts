export default defineNuxtConfig({
  modules: ["../src/module"],
  nuxtSubdomains: {
    mainDomains: ["http://example.com"],
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});
