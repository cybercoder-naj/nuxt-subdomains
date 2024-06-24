export default defineNuxtConfig({
  modules: ["../src/module"],
  nuxtSubdomains: {
    mainDomains: ["example.com", "localhost:3000"],
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});
