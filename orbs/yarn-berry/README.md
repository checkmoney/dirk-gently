# yarn-berry

Orb for running commands with `yarn@berry`. It provides a few jobs:
+ `yarn-berry/local` for run command locally.

Example:

```yml
version: 2.1
orbs:
  flutter: checkmoney/yarn-berry@1.0.0
workflows:
  version: 2
  build:
    jobs:
      - yarn-berry/local:
          command: "lint"
```
