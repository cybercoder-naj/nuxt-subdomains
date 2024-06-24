import { defineEventHandler, getHeaders } from "#imports";

export default defineEventHandler((event) => {
  const headers = getHeaders(event);
  const hostname = headers["host"];

  if (hostname !== undefined) {
    // TODO get mainDomains from module options
    const mainDomain = ["localhost:3000"];

    if (!mainDomain.includes(hostname)) {
      const subdomain = hostname.match(/^.*?(?=\.)/)!![0];
      event.context.subdomain = subdomain;
    }
  }
});
