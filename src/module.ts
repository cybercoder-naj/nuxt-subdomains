import { defineNuxtModule, createResolver, addServerHandler } from "@nuxt/kit";

export interface ModuleOptions {
  mainDomains: string[];
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@cybercoder-naj/nuxt-subdomains",
    configKey: "nuxtSubdomains",
    version: "0.1.0",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    mainDomains: [],
  },
  hooks: {
    "pages:routerOptions"({ files }) {
      const resolver = createResolver(import.meta.url);

      files.push({
        path: resolver.resolve("./app/router.options"),
        optional: true,
      });
    },
  },
  setup({ mainDomains }, _nuxt) {
    const resolver = createResolver(import.meta.url);

    // TODO send _options to the handler
    addServerHandler({
      middleware: true,
      handler: resolver.resolve("./runtime/server/subdomain-handler"),
    });
  },
});
