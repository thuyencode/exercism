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
  # your main function code here
  NUMBER_OF_DIGITS=0
  TEMP=$1

  while [[ $TEMP -ne 0 ]]; do
    TEMP=$((TEMP / 10))
    ((NUMBER_OF_DIGITS++))
  done

  SUM=0

  for ((i = $1; i != 0; i /= 10)); do
    NUM=$((i % 10))
    N=1

    for ((j = 0; j < NUMBER_OF_DIGITS; j++)); do
      N=$((N * NUM))
    done

    SUM=$((SUM + N))
  done

  if [[ $SUM -eq $1 ]]; then
    echo "true"
  else
    echo "false"
  fi
}

# call main with all of the positional arguments
main "$@"
