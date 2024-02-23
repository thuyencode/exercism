#ifndef RESISTOR_COLOR_H
#define RESISTOR_COLOR_H

typedef enum resistor_band
{
  BLACK,
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  VIOLET,
  GREY,
  WHITE
} resistor_band_t;

int color_code(resistor_band_t resistor);
resistor_band_t *colors();

#endif
