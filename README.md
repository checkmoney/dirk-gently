## Dirk Gently

A set of orbs for CircleCI

### Publish

Execute helper script:

```sh
./publish.js --name=<orb-name>
```

### Usage

Modify `.circleci/config.yml` in main repo:

```yml
version: 2.1 # You must use new version of CircleCI
orbs:
  <orb-name>: checkmoney/<orb-name>@<orb-version>
# ...
# then just use jobs from orb in your workwlows
workflows:
  version: 2
  build:
    jobs:
      - <orb-name>/<job-name>
```
