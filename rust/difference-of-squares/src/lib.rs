// Based on my solution on the C track: https://exercism.org/tracks/c/exercises/difference-of-squares

pub fn square_of_sum(n: u32) -> u32 {
    let mut sum: u32 = 0;

    for i in 0..=n {
        sum += i;
    }

    sum.pow(2)
}

pub fn sum_of_squares(n: u32) -> u32 {
    let mut sum: u32 = 0;

    for i in 0..=n {
        sum += i.pow(2);
    }

    sum
}

pub fn difference(n: u32) -> u32 {
    square_of_sum(n) - sum_of_squares(n)
}
