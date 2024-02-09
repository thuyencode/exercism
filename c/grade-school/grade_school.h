#ifndef GRADE_SCHOOL_H
#define GRADE_SCHOOL_H

#include <stddef.h>
#include <stdint.h>
#include <string.h>
#include <stdlib.h>

#define MAX_NAME_LENGTH 20
#define MAX_STUDENTS 20
#define TRUE 1
#define FALSE 0

typedef struct
{
   uint8_t grade;
   char name[MAX_NAME_LENGTH];
} student_t;

typedef struct
{
   size_t count;
   student_t students[MAX_STUDENTS];
} roster_t;

void init_roster(roster_t *roster);
int add_student(roster_t *roster, const char *name, const int grade);
roster_t get_grade(const roster_t *roster, const int desired_grade);

#endif
