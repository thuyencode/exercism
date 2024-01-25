#!/bin/bash

# Get your API key at: https://exercism.org/settings/api_cli
read -p "Enter your Exercism's API key: " api_key

if [ -n "$api_key" ]; then
  exercism configure --token=$api_key -w /workspaces/exercism
else
  echo "You need to get the API key at https://exercism.org/settings/api_cli to use the exercism CLI!"
fi

sudo apt update
sudo apt full-upgrade -y
sudo apt install python3-pytest cmake make leiningen clangd-16 nodejs -y
sudo update-alternatives --install /usr/bin/clangd clangd /usr/bin/clangd-16 100
curl -fsSL https://bun.sh/install | bash
source /home/vscode/.bashrc
