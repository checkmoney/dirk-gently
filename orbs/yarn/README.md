# yarn

Orb for running commands with `yarn`. It provides a few jobs:
+ `yarn/local` for run command locally.

Example:

```yml
version: 2.1
orbs:
  flutter: checkmoney/yarn@1.0.0
workflows:
  version: 2
  build:
    jobs:
      - yarn/local:
          command: "lint"
```
