# deploy

Orb for deploy applications via ssh. It provides one job (`deploy/roll_out`).

Example:

```yml
version: 2.1
orbs:
  deploy: checkmoney/deploy@1.2.0
workflows:
  version: 2
  build:
    jobs:
      - deploy/roll_out:
          ssh_user: SSH_USER
          ssh_host: SSH_HOST
          org_name: "checkmoney"
          image_name: "mr-solomons"
          notify_user: "1234567890"
          image_version: CIRCLE_TAG
          path_to_app: PATH_TO_APP
          container_name: "solomons"
          apply_post_install: true
          post_install_script: "yarn evolutions -y"
```
