#!/bin/bash

# Get your API key at: https://exercism.org/settings/api_cli
read -p "Enter your Exercism's API key: " api_key

if [ -n "$api_key" ]; then
  exercism configure --token=$api_key -w /workspaces/exercism
else
  exercism configure -w /workspaces/exercism
  echo "You need to get the API key at https://exercism.org/settings/api_cli to use the exercism CLI!"
fi

sudo apt install python3-pytest cmake make leiningen clangd-16 nodejs nim -y
sudo update-alternatives --install /usr/bin/clangd clangd /usr/bin/clangd-16 100

curl -fsSL https://bun.sh/install | bash
source /home/vscode/.bashrc

sudo cp $(pwd)/scripts/cpp_test_runner.sh /usr/bin
sudo chmod +x /usr/bin/cpp_test_runner.sh

echo "Remember to run 'gh auth login' to work with Git and Github. More info: https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git."