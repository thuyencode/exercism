#include "rational_numbers.h"
#include <stdlib.h>
#include <math.h>

rational_t absolute(rational_t r)
{
  return reduce((rational_t){abs(r.numerator), abs(r.denominator)});
}

rational_t add(rational_t r1, rational_t r2)
{
  const int numerator = r1.numerator * r2.denominator + r2.numerator * r1.denominator;
  const int denominator = r1.denominator * r2.denominator;

  return reduce((rational_t){numerator, denominator});
}

rational_t subtract(rational_t r1, rational_t r2)
{
  const int numerator = r1.numerator * r2.denominator - r2.numerator * r1.denominator;
  const int denominator = r1.denominator * r2.denominator;

  return reduce((rational_t){numerator, denominator});
}

rational_t multiply(rational_t r1, rational_t r2)
{
  const int numerator = r1.numerator * r2.numerator;
  const int denominator = r1.denominator * r2.denominator;

  return reduce((rational_t){numerator, denominator});
}

rational_t divide(rational_t r1, rational_t r2)
{
  const int numerator = r1.numerator * r2.denominator;
  const int denominator = r1.denominator * r2.numerator;

  return reduce((rational_t){numerator, denominator});
}

rational_t exp_rational(rational_t r, int n)
{
  if (n < 0)
  {
    int m = abs(n);

    return reduce((rational_t){pow(r.denominator, m), pow(r.numerator, m)});
  }

  return reduce((rational_t){pow(r.numerator, n), pow(r.denominator, n)});
}

float exp_real(float x, rational_t r)
{
  return powf(x, (float)r.numerator / r.denominator);
}

// Thanks to (at line 34): https://exercism.org/tracks/c/exercises/rational-numbers/solutions/siebenschlaefer
rational_t reduce(rational_t r)
{
  int g = gcd(r.numerator, r.denominator);

  r.numerator /= g;
  r.denominator /= g;

  if (r.denominator < 0)
  {
    r.numerator = -r.numerator;
    r.denominator = -r.denominator;
  }

  return (rational_t){
      r.numerator,
      r.denominator};
}

int gcd(int n1, int n2)
{
  int temp;

  while (n2 != 0)
  {
    temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }

  return n1;
}
