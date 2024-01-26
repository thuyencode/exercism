#!/bin/bash

paru -Syu --noconfirm
# base-devel and git are already included
paru -S --noconfirm openssh unzip github-cli python-pytest leiningen clang nodejs nim

paru -S --noconfirm exercism-bin

# Get your API key at: https://exercism.org/settings/api_cli
read -p "Enter your Exercism's API key: " api_key

if [ -n "$api_key" ]; then
  exercism configure --token=$api_key -w /workspaces/exercism
else
  exercism configure -w /workspaces/exercism
  echo "You need to get the API key at https://exercism.org/settings/api_cli to use the exercism CLI!"
fi

curl -fsSL https://bun.sh/install | bash
source ~/.config/fish/config.fish

sudo cp $(pwd)/scripts/cpp_test_runner.sh /usr/bin
sudo chmod +x /usr/bin/cpp_test_runner.sh

echo "Remember to run 'gh auth login' to work with Git and Github. More info: https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git."