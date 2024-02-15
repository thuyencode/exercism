pub fn is_armstrong_number(num: u32) -> bool {
    let num: u64 = u64::from(num);
    let digits: String = num.to_string();
    let number_of_digits: u32 = digits.len() as u32;

    let mut sum: u64 = 0;

    for char in digits.chars() {
        let digit: u64 = char.to_digit(10).unwrap().into();

        sum += digit.pow(number_of_digits);
    }

    sum == num
}
