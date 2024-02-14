#include "list_ops.h"

list_t *new_list(size_t length, list_element_t elements[])
{
  list_t *list = malloc(sizeof(*list) + sizeof(list_element_t) * length);

  if (list == NULL)
    return NULL;

  list->length = length;

  if (elements)
    memcpy(list->elements, elements, sizeof(*elements) * length);

  return list;
}

list_t *append_list(list_t *list1, list_t *list2)
{
  if (list1 == NULL || list2 == NULL)
    return NULL;

  size_t new_length = list1->length + list2->length;
  list_t *list = new_list(new_length, list1->elements);

  if (list == NULL)
    return NULL;

  memcpy(list->elements + list1->length, list2->elements, sizeof(list_element_t) * list2->length);

  return list;
}

list_t *filter_list(list_t *list, bool (*filter)(list_element_t))
{
  if (list == NULL)
    return NULL;

  list_t *filtered_list = new_list(list->length, NULL);

  if (filtered_list == NULL)
    return NULL;

  filtered_list->length = 0;

  for (size_t i = 0; i < list->length; i++)
  {
    list_element_t e = list->elements[i];

    if (filter(e))
    {
      size_t index = filtered_list->length;

      filtered_list->elements[index] = e;
      filtered_list->length += 1;
    }
  }

  return filtered_list;
}

size_t length_list(list_t *list)
{
  return list->length;
}

list_t *map_list(list_t *list, list_element_t (*map)(list_element_t))
{
  if (list == NULL)
    return NULL;

  list_t *mapped_list = new_list(list->length, NULL);

  if (mapped_list == NULL)
    return NULL;

  for (size_t i = 0; i < list->length; i++)
    mapped_list->elements[i] = map(list->elements[i]);

  return mapped_list;
}

list_element_t foldl_list(list_t *list, list_element_t initial, list_element_t (*foldl)(list_element_t, list_element_t))
{
  list_element_t accumulator = initial;

  for (size_t i = 0; i < list->length; i++)
    accumulator = foldl(list->elements[i], accumulator);

  return accumulator;
}

list_element_t foldr_list(list_t *list, list_element_t initial, list_element_t (*foldr)(list_element_t, list_element_t))
{
  list_element_t accumulator = initial;

  for (int i = list->length - 1; i >= 0; i--)
    accumulator = foldr(list->elements[i], accumulator);

  return accumulator;
}

list_t *reverse_list(list_t *list)
{
  if (list == NULL)
    return NULL;

  list_element_t reversed[list->length];

  for (int i = list->length - 1, j = 0; i >= 0; i--, j++)
    reversed[j] = list->elements[i];

  return new_list(list->length, reversed);
}

void delete_list(list_t *list)
{
  free(list);
}
