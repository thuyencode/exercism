pub fn reverse(input: &str) -> String {
    let mut reversed_string: String = "".to_string();

    for char in String::from(input).chars() {
        reversed_string = format!("{}{}", char, reversed_string);
    }

    return reversed_string;
}
