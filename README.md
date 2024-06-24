# Nuxt Subdomains

<!-- [![npm version][npm-version-src]][npm-version-href] -->
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->

[![NPM Version][npm-version-src]][npm-version-href]
[![License][license-src]][license-href]

[Sample](/playground/) &bull; [Quick Start](#quick-start) &bull; [License](/LICENSE) &bull; [Changelog](/CHANGELOG.md)

This is a stripped down version of [nuxt-multi-tenancy](https://github.com/hieuhani/nuxt-multitenancy) that requires little to no setup. Heavily inspired by [zernonia/keypress](https://github.com/zernonia/keypress) open-source blogging website.

## Why should you use it?

- Create multiple applications under subdomains in a single Nuxt3 application.
- Directory based subdomain routing.
- Little to no setup required.

## Quick Start

### Installation (Nuxi CLI)

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-subdomains
# OR
pnpm dlx nuxi module add nuxt-subdomains
# OR
bunx nuxi module add nuxt-subdomains
```

### Installation (Manual)

Add `nuxt-subdomains` as a dependency to your project.

```bash
npm install nuxt-subdomains
# OR
pnpm add nuxt-subdomains
# OR
bun add nuxt-subdomains
```

And register the module in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    // Any other modules,
    "nuxt-subdomains",
  ],
});
```

### Configuration

You need to tell `nuxt-subdomains` all your main domains of your application. Edit your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  modules: [
    // Any other modules,
    "nuxt-subdomains",
  ],
  nuxtSubdomains: {
    mainDomains: ["localhost:3000", "example.com"],
  },
});
```

### Creating Subdomains

> [!IMPORTANT]
>
> You must enable page-based routing in your nuxt application, i.e. there must be a `pages` directory with your application files.

To create subdomains, you should add a folder preffixed with `$` just under your pages directory:

```
.
├── nuxt.config.ts
├── package.json
├── pages
│   ├── $admin # admin subdomain directory.
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── admin # /admin route of main domain.
│   │   └── index.vue
│   ├── index.vue
│   ├── $my # my subdomain directory.
│   │   ├── index.vue
│   │   └── [slug].vue
│   └── [slug].vue
├── server
│   └── tsconfig.json
└── tsconfig.json
```

## Run Sample Project

Reproduce the [playground](/playground/) code to experiement with the application.

1. Clone this repository.
2. Install the dependencies e.g. `bun install`.
3. Generate the type stubs e.g. `bun run dev:prepare`.
4. Start the local dev server e.g. `bun run dev`.

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-subdomains
[npm-version-href]: https://npmjs.com/package/nuxt-subdomains
[license-src]: https://img.shields.io/github/license/cybercoder-naj/nuxt-subdomains
[license-href]: https://npmjs.com/package/my-module
