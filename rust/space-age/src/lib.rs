// The code below is a stub. Just enough to satisfy the compiler.
// In order to pass the tests you can add-to or change any of this code.
// Based on my solution at the JavaScript track: https://exercism.org/tracks/javascript/exercises/space-age/solutions/thuyencode

const A_YEAR_ON_EARTH: f64 = 31557600.0;

#[derive(Debug)]
pub struct Duration {
    seconds: u64,
}

impl From<u64> for Duration {
    fn from(s: u64) -> Self {
        Self { seconds: s }
    }
}

pub trait Planet {
    fn years_during(d: &Duration) -> f64 {
        todo!("convert a duration ({d:?}) to the number of years on this planet for that duration");
    }
}

pub struct Mercury;
pub struct Venus;
pub struct Earth;
pub struct Mars;
pub struct Jupiter;
pub struct Saturn;
pub struct Uranus;
pub struct Neptune;

impl Planet for Mercury {
    fn years_during(d: &Duration) -> f64 {
        format!("{:.2}", d.seconds as f64 / (0.2408467 * A_YEAR_ON_EARTH))
            .parse()
            .unwrap()
    }
}
impl Planet for Venus {
    fn years_during(d: &Duration) -> f64 {
        format!("{:.2}", d.seconds as f64 / (0.61519726 * A_YEAR_ON_EARTH))
            .parse()
            .unwrap()
    }
}

impl Planet for Earth {
    fn years_during(d: &Duration) -> f64 {
        format!("{:.2}", d.seconds as f64 / (1.0 * A_YEAR_ON_EARTH))
            .parse()
            .unwrap()
    }
}

impl Planet for Mars {
    fn years_during(d: &Duration) -> f64 {
        format!("{:.2}", d.seconds as f64 / (1.8808158 * A_YEAR_ON_EARTH))
            .parse()
            .unwrap()
    }
}

impl Planet for Jupiter {
    fn years_during(d: &Duration) -> f64 {
        format!("{:.2}", d.seconds as f64 / (11.862615 * A_YEAR_ON_EARTH))
            .parse()
            .unwrap()
    }
}
impl Planet for Saturn {
    fn years_during(d: &Duration) -> f64 {
        format!("{:.2}", d.seconds as f64 / (29.447498 * A_YEAR_ON_EARTH))
            .parse()
            .unwrap()
    }
}

impl Planet for Uranus {
    fn years_during(d: &Duration) -> f64 {
        format!("{:.2}", d.seconds as f64 / (84.016846 * A_YEAR_ON_EARTH))
            .parse()
            .unwrap()
    }
}

impl Planet for Neptune {
    fn years_during(d: &Duration) -> f64 {
        format!("{:.2}", d.seconds as f64 / (164.79132 * A_YEAR_ON_EARTH))
            .parse()
            .unwrap()
    }
}
