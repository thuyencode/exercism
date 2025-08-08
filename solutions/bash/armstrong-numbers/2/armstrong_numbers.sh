#!/usr/bin/env bash

# Based on my solution at the C track: https://exercism.org/tracks/c/exercises/armstrong-numbers/solutions/thuyencode

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
  NUMBER_OF_DIGITS=${#1}
  SUM=0

  for ((i = $1; i != 0; i /= 10)); do
    NUM=$((i % 10))
    N=1

    for ((j = 0; j < NUMBER_OF_DIGITS; j++)); do
      N=$((N * NUM))
    done

    SUM=$((SUM + N))
  done

  [[ $SUM -eq $1 ]] && echo "true" || echo "false"
}

# call main with all of the positional arguments
main "$@"
