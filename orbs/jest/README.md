# jest

Orb for run tests in JS application. It provides one job (`jest/test`) for run any tests via jest.

Example:

```yml
version: 2.1
orbs:
  jest: checkmoney/jest@1.0.0
workflows:
  version: 2
  build:
    jobs:
      - jest/test
```
