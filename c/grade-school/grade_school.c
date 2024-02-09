#include "grade_school.h"

static int student_t_comparator(const void *lhs, const void *rhs);

void init_roster(roster_t *roster)
{
  if (roster == NULL)
  {
    return;
  }

  roster->count = 0;
}

int add_student(roster_t *roster, const char *name, const int grade)
{
  if (roster->count >= MAX_STUDENTS)
  {
    return FALSE;
  }

  for (size_t i = 0; i < roster->count; i++)
  {
    if (strncmp(roster->students[i].name, name, strlen(name)) == 0)
    {
      return FALSE;
    }
  }

  strncpy(roster->students[roster->count].name, name, MAX_NAME_LENGTH);
  roster->students[roster->count].grade = grade;
  roster->count += 1;

  qsort(roster->students, roster->count, sizeof(student_t), student_t_comparator);

  return TRUE;
}

roster_t get_grade(const roster_t *roster, const int desired_grade)
{
  roster_t desired_roster;
  init_roster(&desired_roster);

  for (size_t i = 0; i < roster->count; i++)
  {
    if (roster->students[i].grade == desired_grade)
    {
      add_student(&desired_roster, roster->students[i].name, desired_grade);
    }
  }

  return desired_roster;
}

// Thanks to: https://exercism.org/tracks/c/exercises/grade-school/solutions/bobahop
static int student_t_comparator(const void *lhs, const void *rhs)
{
  student_t *left = (student_t *)lhs;
  student_t *right = (student_t *)rhs;

  if (left->grade - right->grade)
  {
    return left->grade - right->grade;
  }

  return strncmp(left->name, right->name, MAX_NAME_LENGTH);
}