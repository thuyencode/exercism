// Based on my solution at the JavaScript track: https://exercism.org/tracks/javascript/exercises/leap

class Leap {
    boolean isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    }
}
