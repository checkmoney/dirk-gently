# NPM

Orb for publish packages to NPM registry. It provides one job (`npm/publish`) for build **and** push package.

```yml
version: 2.1
orbs:
  npm: checkmoney/npm@1.0.0
workflows:
  version: 2
  build:
    jobs:
      - npm/publish:
          npm_token: NPM_TOKEN
```