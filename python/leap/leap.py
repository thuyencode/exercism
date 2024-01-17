"""
Python Exercism: Leap
"""

def leap_year(year: int) -> bool:
    """
    Determine whether a given year is a leap year.

    :param year: int - the year to check
    :return: bool - True if the year is a leap year, False otherwise
    """
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0
