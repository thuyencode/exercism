#!/usr/bin/env bash

# Based on my solution in the C track: https://exercism.org/tracks/c/exercises/hamming/solutions/thuyencode

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
  [[ "$#" -ne 2 ]] && err "Usage: $0 <string1> <string2>"

  [[ ${#1} -ne ${#2} ]] && err "strands must be of equal length"

  COUNT=0

  for ((i = 0; i < ${#1}; i++)); do
    [[ ${1:i:1} != "${2:i:1}" ]] && ((COUNT++))
  done

  echo "$COUNT"
}

err() {
  echo "$@"
  exit 1
}

# call main with all of the positional arguments
main "$@"
