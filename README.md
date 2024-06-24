# Nuxt Subdomains

<!-- [![npm version][npm-version-src]][npm-version-href] -->
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->

[![NPM Version][npm-version-src]][npm-version-href]
[![License][license-src]][license-href]

Demo &bull; [Quick Start](#quick-start) &bull; [License](/LICENSE) &bull; [Changelog](/CHANGELOG.md)

This is a stripped down version of [nuxt-multi-tenancy](https://github.com//nuxt-multitenancy) that requires little to no setup. Heavily inspired by [zernonia/keypress](https://github.com/zernonia/keypress) open-source blogging website.

## Why should you use it?

- Create multiple applications under subdomains in a single Nuxt3 application.
- Directory based subdomain routing.
- Little to no setup required.

## Quick Start

### Installation

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-subdomains
# OR
pnpm dlx nuxi module add nuxt-subdomains
# OR
bunx nuxi module add nuxt-subdomains
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  bun i
  
  # Generate type stubs
  bun run dev:prepare
  
  # Develop with the playground
  bun run dev
  
  # Build the playground
  bun run dev:build
  ```
</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-subdomains
[npm-version-href]: https://npmjs.com/package/nuxt-subdomains
[license-src]: https://img.shields.io/github/license/cybercoder-naj/nuxt-subdomains
[license-href]: https://npmjs.com/package/my-module
