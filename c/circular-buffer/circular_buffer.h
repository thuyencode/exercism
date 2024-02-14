#include <stddef.h>
#include <stdlib.h>
#include <errno.h>
#ifndef CIRCULAR_BUFFER_H
#define CIRCULAR_BUFFER_H

typedef int buffer_value_t;

typedef struct
{
  size_t capacity;
  size_t size;
  buffer_value_t *head;
  buffer_value_t *tail;
  buffer_value_t data[];
} circular_buffer_t;

int write(circular_buffer_t *buffer, buffer_value_t value);
int overwrite(circular_buffer_t *buffer, buffer_value_t value);
int read(circular_buffer_t *buffer, buffer_value_t *value);
void delete_buffer(circular_buffer_t *buffer);
void clear_buffer(circular_buffer_t *buffer);

circular_buffer_t *new_circular_buffer(size_t capacity);

#endif
