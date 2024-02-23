#ifndef RESISTOR_COLOR_H
#define RESISTOR_COLOR_H
// Thanks to: https://exercism.org/tracks/c/exercises/resistor-color/dig_deeper
#define COLORS BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE

typedef enum resistor_band
{
  COLORS
} resistor_band_t;

int color_code(resistor_band_t resistor);
resistor_band_t *colors();

#endif
