# soda-lint

Orb for analyzing JS application. It provides one job (`soda-lint/invoke`) for run all linters from [@solid-soda/scripts](http://github.com/solid-soda/scripts).

Example:

```yml
version: 2.1
orbs:
  soda-lint: checkmoney/soda-lint@1.0.2
workflows:
  version: 2
  build:
    jobs:
      - soda-lint/invoke
```
