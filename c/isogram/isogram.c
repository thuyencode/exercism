#include <stddef.h>
#include <ctype.h>
#include "isogram.h"
// Thanks to: https://exercism.org/tracks/c/exercises/isogram/solutions/anguish

bool is_isogram(const char phrase[])
{
  if (!phrase)
    return false;

  bool seen['z' - 'a' + 1] = {false};
  size_t i = 0;
  char c;

  while ((c = tolower(phrase[i++])))
  {
    if (isalpha(c))
    {
      if (seen[c - 'a'])
        return false;

      seen[c - 'a'] = true;
    }
  }

  return true;
}
