# Docker

Orb for handle docker images. It provides one job (`docker/build_push`) for build **and** push new docker image, based on `Dockerfile` in root.

```yml
version: 2.1
orbs:
  docker: checkmoney/docker@1.0.1
workflows:
  version: 2
  build:
    jobs:
      - docker/build_push:
          image_name: "mr-solomons"
          image_version: CIRCLE_TAG
          docker_username: DOCKER_USERNAME
          docker_password: DOCKER_PASSWORD
```