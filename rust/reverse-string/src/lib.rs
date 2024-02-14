use unicode_segmentation::UnicodeSegmentation;

pub fn reverse(input: &str) -> String {
    let mut reversed_string: String = "".to_string();

    for char in String::from(input).graphemes(true) {
        reversed_string = format!("{}{}", char, reversed_string);
    }

    return reversed_string;
}
