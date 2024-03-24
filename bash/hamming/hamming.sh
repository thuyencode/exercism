#!/usr/bin/env bash

# The following comments should help you get started:
# - Bash is flexible. You may use functions or write a "raw" script.
#
# - Complex code can be made easier to read by breaking it up
#   into functions, however this is sometimes overkill in bash.
#
# - You can find links about good style and other resources
#   for Bash in './README.md'. It came with this exercise.
#
#   Example:
#   # other functions here
#   # ...
#   # ...

main() {
  if [[ "$#" -ne 2 ]]; then
    echo "Usage: $0 <string1> <string2>"
    return 1
  fi

  if [[ ${#1} -ne ${#2} ]]; then
    echo "strands must be of equal length"
    return 1
  fi

  COUNT=0

  for ((i = 0; i < ${#1}; i++)); do
    if [[ ${1:i:1} != "${2:i:1}" ]]; then
      ((COUNT++))
    fi
  done

  echo "$COUNT"
}

# call main with all of the positional arguments
main "$@"
