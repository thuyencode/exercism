# My solutions for Exercism

This repo contains all of my solutions for exercises on Exercism

**Don't forget to install recommended extensions in [workspace file](./exercism.code-workspace).** Open Extensions sidebar _(Ctrl+Shift+X)_ and type `@recommended`.

## How to run unit tests for Python exercises

[**More detailed information here.**](https://exercism.org/docs/tracks/cpp/tests) My instructions is specify for Arch-based distros only.

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

At last, install `pytest` package:

```bash
pip install pytest
```

## How to run unit tests for Clojure exercises

You need to install [Leiningen](https://leiningen.org) first. On Arch-based Linux distros:

```bash
sudo pacman -S extra/leiningen
```

Then run the test inside the exercise folders. Example:

```fish
~/exercism (main) cd clojure/hello-world/
~/e/c/hello-world (main) lein test

lein test hello-world-test

Ran 1 tests containing 1 assertions.
0 failures, 0 errors.
~/e/c/hello-world (main)  main
```

## How to run unit tests for C++ exercises

On Arch Linux, you need to install `base-devel` group packages:

```bash
sudo pacman -S base-devel
```

For other Linux distros, find a way to install `cmake` and `make`.

Now we need to run the test cases. For example I have the exercise named **Hello World**:

```fish
~/exercism (main) cd cpp/hello-world/
~/e/c/hello-world (main) mkdir build
~/e/c/hello-world (main) cd build/
~/e/c/h/build (main)
```

Next, use `cmake` and `cmake` to compile the unit test file:

```fish
~/e/c/h/build (main) cmake -G "Unix Makefiles" ..
-- Configuring done (0.0s)
-- Generating done (0.0s)
-- Build files have been written to: /home/arona/exercism/cpp/hello-world/build

~/e/c/h/build (main) make
[100%] Built target hello-world
===============================================================================
All tests passed (1 assertion in 1 test case)

[100%] Built target test_hello-world
```

Then run the compiled binary file in the `build` folder:

```fish
~/e/c/h/build (main) ./hello-world
===============================================================================
All tests passed (1 assertion in 1 test case)
```
