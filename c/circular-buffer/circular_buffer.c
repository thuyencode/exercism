#include "circular_buffer.h"

int write(circular_buffer_t *buffer, buffer_value_t value)
{
  if (!buffer)
  {
    errno = ENODATA;
    return EXIT_FAILURE;
  }

  if (buffer->size == buffer->capacity)
  {
    errno = ENOBUFS;
    return EXIT_FAILURE;
  }

  return overwrite(buffer, value);
}

int overwrite(circular_buffer_t *buffer, buffer_value_t value)
{
  if (!buffer)
  {
    errno = ENODATA;
    return EXIT_FAILURE;
  }

  if (buffer->size == buffer->capacity)
  {
    buffer_value_t discard;
    read(buffer, &discard);
  }

  *(buffer->tail++) = value;

  if (buffer->tail == buffer->data + buffer->capacity)
  {
    buffer->tail = buffer->data;
  }

  ++buffer->size;

  return EXIT_SUCCESS;
}

int read(circular_buffer_t *buffer, buffer_value_t *value)
{
  if (!buffer || !value || buffer->size == 0)
  {
    errno = ENODATA;
    return EXIT_FAILURE;
  }

  *value = *(buffer->head++);

  if (buffer->head == buffer->data + buffer->capacity)
  {
    buffer->head = buffer->data;
  }

  --buffer->size;

  return EXIT_SUCCESS;
}

circular_buffer_t *new_circular_buffer(size_t capacity)
{
  circular_buffer_t *buffer = malloc(sizeof(*buffer) + sizeof(buffer_value_t) * capacity);

  if (!buffer)
    return NULL;

  buffer->capacity = capacity;

  clear_buffer(buffer);

  return buffer;
}

void delete_buffer(circular_buffer_t *buffer)
{
  free(buffer);
}

void clear_buffer(circular_buffer_t *buffer)
{
  buffer->size = 0;
  buffer->head = buffer->data;
  buffer->tail = buffer->data;
}