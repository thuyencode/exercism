#include "reverse_string.h"

char *reverse(const char *value)
{
  const int len = strlen(value);
  char *reversed = malloc(len + 1);

  for (int i = 0, j = len - 1; j >= 0; i++, j--)
    reversed[i] = value[j];

  reversed[len] = '\0';

  return reversed;
}
