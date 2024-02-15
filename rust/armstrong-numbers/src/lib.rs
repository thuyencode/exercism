pub fn is_armstrong_number(num: u64) -> bool {
    let digits: String = num.to_string();
    let number_of_digits: u32 = digits.len() as u32;

    num == digits.chars().fold(0, |acc: u64, char: char| {
        (char.to_digit(10).unwrap() as u64).pow(number_of_digits) + acc
    })
}
