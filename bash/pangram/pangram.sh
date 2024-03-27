#!/usr/bin/env bash

# Based on my solution at the JavaScript track: https://exercism.org/tracks/javascript/exercises/pangram/iterations?idx=3

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
  # your main function code here
  SENTENCE=${1,,}
  LETTERS=("a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z")

  for LETTER in "${LETTERS[@]}"; do
    if [[ ! $SENTENCE =~ $LETTER ]]; then
      echo "false"
      exit 0
    fi
  done

  echo "true"
}

# call main with all of the positional arguments
main "$@"
