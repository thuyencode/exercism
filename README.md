# My solutions for Exercism

This repo contains all of my solutions for exercises on Exercism

## How to run unit tests for Python exercises

First create a new Python environment at the top of the project:

```bash
python3 -m venv .venv
```

Then activate the newly created virtual environment:

- On Bash shell:

  ```bash
  source .venv/bin/activate
  ```

- On Fish shell:

  ```fish
  source .venv/bin/activate.fish
  ```

Make sure the binary files of `python` and `pip` are inside the workspace:

```fish
~/exercism (main) which python
/home/user/exercism/.venv/bin/python

~/exercism (main) which pip
/home/user/exercism/.venv/bin/pip
```

At last, install `pytest` packages

```bash
pip install pytest
```
