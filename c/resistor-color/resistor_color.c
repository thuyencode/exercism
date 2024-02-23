#include "resistor_color.h"

int color_code(resistor_band_t resistor)
{
  return (int)resistor;
}

resistor_band_t *colors()
{
  // Thanks to: https://exercism.org/tracks/c/exercises/resistor-color/dig_deeper
  static resistor_band_t resistors[] = {COLORS};

  return resistors;
}