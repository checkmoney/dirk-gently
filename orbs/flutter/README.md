# flutter

Orb for run tests for flutter. It provides two jobs:
+ `flutter/lint` for run dart analyzer;
+ `flutter/test` for run any flutter tests.

Example:

```yml
version: 2.1
orbs:
  flutter: checkmoney/flutter@1.1.0
workflows:
  version: 2
  build:
    jobs:
      - flutter/lint
      - flutter/test
```
