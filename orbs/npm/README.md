# NPM

Orb for publish packages to NPM registry. It provides one job (`npm/publish`) for build **and** push package. If you are not using `yarn@berry`, please provide parameter `legacy_mode` as `true`.

```yml
version: 2.1
orbs:
  npm: checkmoney/npm@1.1.1
workflows:
  version: 2
  build:
    jobs:
      - npm/publish:
          npm_token: NPM_TOKEN
          legacy_mode: true
```
