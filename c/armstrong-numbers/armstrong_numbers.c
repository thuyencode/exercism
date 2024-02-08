#include "armstrong_numbers.h"
// Thanks to: https://en.wikipedia.org/wiki/Narcissistic_number#C

bool is_armstrong_number(int candidate)
{
  int temp = candidate;
  int number_of_digits = 0;

  // Calculate the number on digits in `candidate`
  while (temp != 0)
  {
    temp /= 10;
    number_of_digits++;
  }

  int sum = 0;

  for (int i = candidate; i != 0; i /= 10)
  {
    int num = i % 10;
    int n = 1;

    for (int j = 0; j < number_of_digits; j++)
    {
      n *= num;
    }

    sum += n;
  }

  return sum == candidate;
}
