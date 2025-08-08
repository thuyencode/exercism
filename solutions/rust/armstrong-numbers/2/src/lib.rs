pub fn is_armstrong_number(num: u32) -> bool {
    let mut temp: u64 = u64::from(num);
    let mut number_of_digit: i32 = 0;

    while temp != 0 {
        temp /= 10;
        number_of_digit += 1;
    }

    let mut sum: u64 = 0;
    let mut i: u64 = u64::from(num);

    while i != 0 {
        let num: u64 = i % 10;
        let mut n: u64 = 1;

        for _j in 0..number_of_digit {
            n *= num;
        }

        sum += n;
        i /= 10;
    }

    sum == u64::from(num)
}

// Based on my solution at the C track: https://exercism.org/tracks/c/exercises/armstrong-numbers
