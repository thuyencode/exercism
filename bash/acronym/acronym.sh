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

# The solution is from: https://exercism.org/tracks/bash/exercises/acronym/solutions/seancowens13

main() {
  ACRONYM=""
  SENTENCE=${1//[^a-zA-Z\']/ }
  SENTENCE="${SENTENCE^^}"

  for WORD in $SENTENCE; do
    ACRONYM="$ACRONYM${WORD:0:1}"
  done

  echo "$ACRONYM"
}

# call main with all of the positional arguments
main "$@"
