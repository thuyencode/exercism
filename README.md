# My solutions for Exercism

This repo contains all of my solutions for exercises on Exercism

**Don't forget to install recommended extensions in the [workspace file](./exercism.code-workspace).** Open Extensions sidebar _(Ctrl+Shift+X)_ and type `@recommended`.

## Getting started with Dev Containers (recommended)

Note: _Because I use Arch as my daily driver so I only show the instructions for Arch-based distros only._

First you need to install Docker and [`buildx`](https://github.com/docker/buildx). On Arch Linux, run this command:

```bash
sudo pacman -S docker docker-buildx
```

Then follow this tutorials and reboot: [**Install Docker on Arch Linux**](https://itsfoss.com/install-docker-arch-linux).

Next, install [Dev Containers](https://code.visualstudio.com/docs/devcontainers/tutorial#_install-the-extension) and then _open folder in container_.

Note: _If you encounter some error related to SSH authentication when using `git push`/`pull`, [use GitHub CLI to automatically store your Git credentials for you when you choose HTTPS as your preferred protocol for Git operations and answer "yes" to the prompt asking if you would like to authenticate to Git with your GitHub credentials](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git#github-cli). GitHub CLI is aldready installed in the container._

### Run unit tests for JavaScript/TypeScript exercises

**Recommended:** Use [Bun Test Runner](https://bun.sh/docs/cli/test) to run unit tests for each exercise:

Note: _`bun` is already installed in the container so you don't need to install it._

```bash
vscode ➜ /workspaces/exercism (main) $ cd javascript/hello-world/
vscode ➜ /workspaces/exercism/javascript/hello-world (main) $ bun test
bun test v1.0.25 (a8ff7be6)

hello-world.spec.js:
✓ Hello World > Say Hi! [0.03ms]

 1 pass
 0 fail
 1 expect() calls
Ran 1 tests across 1 files. [13.00ms]
```

If some tests fails to run because [Bun haven't implemented some Jest's APIs](https://github.com/oven-sh/bun/issues/1825), then install Jest with [Bun Package Manager](https://bun.sh/docs/cli/install) and then run the test:

```bash
vscode ➜ /workspaces/exercism/javascript/hello-world (main) $ bun i
bun install v1.0.25 (a8ff7be6)

 + @babel/core@7.23.7
 + @exercism/babel-preset-javascript@0.2.1 (v0.4.0 available)
 + @exercism/eslint-config-javascript@0.6.0
 + @types/jest@29.5.11
 + @types/node@20.11.6
 + babel-jest@29.7.0
 + core-js@3.32.2 (v3.35.1 available)
 + eslint@8.56.0
 + jest@29.7.0

 544 packages installed [54.44s]
vscode ➜ /workspaces/exercism/javascript/hello-world (main) $ bun run test
$ jest ./*
 PASS  ./hello-world.spec.js
  Hello World
    ✓ Say Hi! (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.331 s
Ran all test suites matching /.\/babel.config.js|.\/bun.lockb|.\/hello-world.js|.\/hello-world.spec.js|.\/HELP.md|.\/LICENSE|.\/node_modules|.\/package.json|.\/README.md/i.
```

### Run unit tests for Python exercises

**Recommended:** If you've installed the recommended extensions in the [workspace file](./exercism.code-workspace), then you can easily run Python unit tests like this:

!["Python Test Explorer for Visual Studio Code" in action](https://i.ibb.co/cYSLBXL/Screenshot-20240125-171733.png)

`pytest` is already installed in the container so just simply run this command to test all the Python exercises:

```bash
pytest -q --disable-warnings
```

If you want to run unit test for each exercise _(here I want to test the exercise named [Hello World](https://exercism.org/tracks/python/exercises/hello-world))_, move inside the exercise's folder that you want:

```bash
vscode ➜ /workspaces/exercism (main) $ cd python/hello-world/
vscode ➜ /workspaces/exercism/python/hello-world (main) $
pytest -q --disable-warnings
.
1 passed in 0.00s
```

Or:

```bash
pytest -q --disable-warnings python/hello-world
```

### Run unit tests for Clojure exercises

[**Follow this instrutions.**](#how-to-run-unit-tests-for-clojure-exercises)

Note: _`leiningen` is already installed in the container so you don't need to install it._

### Run unit tests for C++ exercises

Note: _`cmake` and `make` is already installed in the container so you don't need to install them._

You can use the built in helper script `cpp_test_runner.sh` or [Follow this instrutions](#how-to-run-unit-tests-for-c-exercises).

For example I have the exercise named **Hello World**. Let's run the unit tests with `cpp_test_runner.sh`:

```bash
vscode ➜ /workspaces/exercism (main) $ cd cpp/hello-world/
vscode ➜ /workspaces/exercism/cpp/hello-world (main) $ cpp_test_runner.sh
-- The CXX compiler identification is GNU 12.2.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - done
-- Check for working CXX compiler: /usr/bin/c++ - skipped
-- Detecting CXX compile features
-- Detecting CXX compile features - done
-- Configuring done
-- Generating done
-- Build files have been written to: /workspaces/exercism/cpp/hello-world/build
[ 25%] Building CXX object CMakeFiles/hello-world.dir/hello_world_test.cpp.o
[ 50%] Building CXX object CMakeFiles/hello-world.dir/hello_world.cpp.o
[ 75%] Building CXX object CMakeFiles/hello-world.dir/test/tests-main.cpp.o
[100%] Linking CXX executable hello-world
[100%] Built target hello-world
===============================================================================
All tests passed (1 assertion in 1 test case)

[100%] Built target test_hello-world
```

## Getting started without Dev Containers

### How to run unit tests for JavaScript/TypeScript exercises

[**Follow this instructions.**](#run-unit-tests-for-javascripttypescript-exercises)

Note: _If `bun` isn't installed on your system, then [follow this Bun's official instrucions](https://bun.sh/docs/installation)._

### How to run unit tests for Python exercises

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

Next, [use the `pytest` CLI](#run-unit-tests-for-python-exercises).

**Recommended:** [Using VSCode extensions](#run-unit-tests-for-python-exercises).

### How to run unit tests for Clojure exercises

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

### How to run unit tests for C++ exercises

[**More detailed information here.**](https://exercism.org/docs/tracks/cpp/tests) My instructions is specify for Arch-based distros only.

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
