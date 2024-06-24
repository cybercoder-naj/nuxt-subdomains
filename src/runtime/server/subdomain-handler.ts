import { defineEventHandler, getHeaders, useRuntimeConfig } from "#imports";

export default defineEventHandler((event) => {
  const headers = getHeaders(event);
  const hostname = headers["host"];

  if (hostname !== undefined) {
    const { mainDomain } = useRuntimeConfig();

    if (!mainDomain.includes(hostname)) {
      const subdomain = hostname.match(/^.*?(?=\.)/)!![0];
      event.context.subdomain = subdomain;
    }
  }
});
