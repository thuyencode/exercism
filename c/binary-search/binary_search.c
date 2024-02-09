#include "binary_search.h"

const int *binary_search(int value, const int *arr, size_t length)
{
  if (!arr)
    return NULL;

  size_t left = 0, right = length;

  while (left < right)
  {
    size_t mid = left + ((right - left) / 2);
    int look = arr[mid];

    if (look == value)
      return (int *)&arr[mid];
    if (look < value)
      left = mid + 1;
    else
      right = mid;
  }

  return NULL;
}