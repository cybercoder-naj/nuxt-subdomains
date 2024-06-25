import {
  defineNuxtModule,
  createResolver,
  addServerHandler,
  useRuntimeConfig,
  updateRuntimeConfig,
} from "@nuxt/kit";

export interface ModuleOptions {
  mainDomains: string[];
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-subdomains",
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
        path: resolver.resolve("./runtime/app/router.options"),
        optional: true,
      });
    },
  },
  setup({ mainDomains }, _nuxt) {
    const resolver = createResolver(import.meta.url);

    updateRuntimeConfig({ mainDomains });

    addServerHandler({
      middleware: true,
      handler: resolver.resolve("./runtime/server/subdomain-handler"),
    });
  },
});
