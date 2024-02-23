#include "resistor_color.h"

int color_code(resistor_band_t resistor)
{
  return (int)resistor;
}

resistor_band_t *colors()
{
  static resistor_band_t resistors[] = {BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE};

  return resistors;
}