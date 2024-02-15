use time::{Duration, PrimitiveDateTime as DateTime};

const GIGA_MS: i64 = 10_i64.pow(9) * 1000;

// Returns a DateTime one billion seconds after start.
pub fn after(start: DateTime) -> DateTime {
    start + Duration::milliseconds(GIGA_MS)
}

// Based on my solution at the JavaScript track: https://exercism.org/tracks/javascript/exercises/gigasecond
