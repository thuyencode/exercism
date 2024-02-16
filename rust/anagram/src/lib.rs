use std::collections::HashSet;

pub fn anagrams_for<'a>(word: &str, possible_anagrams: &[&'a str]) -> HashSet<&'a str> {
    let mut anagrams: HashSet<&str> = HashSet::new();

    possible_anagrams.iter().for_each(|&ele| {
        if test_anagram(word, ele) {
            anagrams.insert(ele);
        }
    });

    anagrams
}

fn test_anagram(str1: &str, str2: &str) -> bool {
    if str1.len() != str1.len() {
        return false;
    }

    let str1: String = str1.to_lowercase();
    let str2: String = str2.to_lowercase();

    if str1.eq(&str2) {
        return false;
    }

    let mut sorted_str1: Vec<char> = str1.chars().collect();
    sorted_str1.sort_unstable();

    let mut sorted_str2: Vec<char> = str2.chars().collect();
    sorted_str2.sort_unstable();

    sorted_str1.eq(&sorted_str2)
}
