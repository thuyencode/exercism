#include "isogram.h"
#include <string.h>

bool is_isogram(const char phrase[])
{
  const int length = strlen(phrase);

  for (int i = 0; i < length; i++)
  {
    const char temp = phrase[i];

    for (int j = 0; j < length; j++)
    {
      if (j == i)
        continue;

      if (phrase[j] == temp)
      {
        return false;
      }
    }
  }

  return true;
}
