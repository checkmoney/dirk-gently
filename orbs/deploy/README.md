# deploy

Orb for deploy applications via ssh. It provides one job (`deploy/roll_out`).

Example:

```yml
version: 2.1
orbs:
  deploy: checkmoney/deploy@1.0.10
workflows:
  version: 2
  build:
    jobs:
      - deploy/roll_out:
          ssh_user: SSH_USER
          ssh_host: SSH_HOST
          image_name: "mr-solomons"
          image_version: CIRCLE_TAG
          path_to_app: PATH_TO_APP
          container_name: "solomons"
          apply_post_install: true
          post_install_script: "yarn evolutions -y"
```
