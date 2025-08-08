// Based on my solution on the JavaScript track: https://exercism.org/tracks/javascript/exercises/clock
use std::fmt::{Display, Formatter, Result};

#[derive(Debug, PartialEq)]
pub struct Clock {
    hours: i32,
    minutes: i32,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        Self {
            hours: Clock::convert_to_hours(hours, minutes),
            minutes: Clock::convert_to_minutes(minutes),
        }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        Clock::new(self.hours, self.minutes + minutes)
    }

    fn convert_to_minutes(minutes: i32) -> i32 {
        let temp_for_minutes: i32 = minutes % 60;

        if temp_for_minutes < 0 {
            60 + temp_for_minutes
        } else {
            temp_for_minutes
        }
    }

    fn convert_to_hours(hours: i32, minutes: i32) -> i32 {
        let temp_for_hours: i32 = (hours + (f64::from(minutes) / 60_f64).floor() as i32) % 24;

        if temp_for_hours < 0 {
            24 + temp_for_hours
        } else {
            temp_for_hours
        }
    }
}

impl Display for Clock {
    fn fmt(&self, f: &mut Formatter<'_>) -> Result {
        write!(f, "{:02}:{:02}", self.hours, self.minutes)
    }
}
