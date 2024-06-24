import { useNuxtApp } from "#imports";
import type { RouterConfig } from "@nuxt/schema";
import useSubdomain from "../runtime/composables/useSubdomain";

export default <RouterConfig>{
  routes: (_routes) => {
    const { ssrContext } = useNuxtApp();
    const { subdomain, setSubdomain } = useSubdomain();

    if (ssrContext?.event.context.subdomain) {
      setSubdomain(ssrContext.event.context.subdomain);
    }

    if (subdomain.value) {
      return _routes
        .filter(({ path }) => path.startsWith(`/$${subdomain.value}`))
        .map((route) => ({
          ...route,
          path: route.path.replace(`/$${subdomain.value}`, ""),
        }));
    } else {
      return _routes.filter(({ path }) => !path.startsWith("/$"));
    }
  },
};
