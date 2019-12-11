## Dirk Gently

A set of orbs for CircleCI

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

### Orbs

+ [deploy](./orbs/deploy)
+ [docker](./orbs/docker)
+ [flutter](./orbs/flutter)
+ [jest](./orbs/jest)
+ [npm](./orbs/npm)
+ [soda-lint](./orbs/soda-lint)

### Development

### Create new orb

```
circleci orb create checkmoney/NAME
```

#### Publish

Manually:
```
circleci orb publish FULL_PATH_TO_YML checkmoney/NAME@VERSION
```

Helper script:

```sh
./publish.js --name=<orb-name>
```

It has a bug for `deploy` orb, please piblish it manually.
