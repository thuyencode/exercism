#!/usr/bin/env bash

# Based on my solution at the Python track: https://exercism.org/tracks/python/exercises/raindrops/solutions/thuyencode

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
#
main() {
  # your main function code here
  if [[ "$#" -ne 1 ]] || [[ "$1" -le 1 ]]; then
    echo "1"
    return 0
  fi

  NUMBER=$1
  RAINDROP_SOUNDS=""

  # "Pling": 3, "Plang": 5, "Plong": 7
  declare -A RAINDROPS
  RAINDROPS["Pling"]=3
  RAINDROPS["Plang"]=5
  RAINDROPS["Plong"]=7

  for KEY in "${!RAINDROPS[@]}"; do
    if [[ $((NUMBER % RAINDROPS[$KEY])) -eq 0 ]]; then
      RAINDROP_SOUNDS="$KEY$RAINDROP_SOUNDS"
    fi
  done

  if [[ -z "$RAINDROP_SOUNDS" ]]; then
    echo "$NUMBER"
  else
    echo "$RAINDROP_SOUNDS"
  fi
}

# call main with all of the positional arguments
main "$@"
