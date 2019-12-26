# notify

Orb for sending notifications via [notify](https://github.com/igorkamyshev/notify/) (uses notify-instance on https://notify.kamyshev.me). It provides one command (step) (`notify/send`).

Example:

```yml
version: 2.1
orbs:
  notify: checkmoney/notify@1.0.1
jobs:
  do_smth:
    # ...
    steps:
      - notify/send:
          user: "-121212121"
          project: "My favorite project"
          info: "Any message"
```
