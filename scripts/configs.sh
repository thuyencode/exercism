#!/bin/bash

# Get your API key at: https://exercism.org/settings/api_cli
read -p "Enter your Exercism's API key: " api_key

if [ -n "$api_key" ]; then
  exercism configure --token=$api_key --workspace=/workspaces/exercism/
else
  exercism configure --workspace=/workspaces/exercism/
  echo "You need to get the API key at https://exercism.org/settings/api_cli to use the exercism CLI!"
fi

sudo cp $(pwd)/scripts/cpp_test_runner /usr/bin
sudo cp $(pwd)/scripts/c_test_runner /usr/bin

sudo chmod +x /usr/bin/cpp_test_runner
sudo chmod +x /usr/bin/c_test_runner

echo "Remember to run 'gh auth login' to work with Git and Github. More info: https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git."