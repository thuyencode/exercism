class SqueakyClean {
    static String clean(String identifier) {
        String str = "";
        boolean uppercaseNextChar = false;

        for (char c : identifier.toCharArray()) {
            if (uppercaseNextChar) {
                str += Character.toString(c).toUpperCase();
                uppercaseNextChar = false;
                continue;
            }

            if (isWhiteSpace(c)) {
                str += "_";
                continue;
            }

            if (isLeetspeak(c)) {
                str += convertLeetToChar(c);
                continue;
            }

            if (isMinus(c)) {
                uppercaseNextChar = true;
                continue;
            }

            if (!isAlphabet(c)) {
                continue;
            }

            str += c;
        }

        return str;
    }

    private static boolean isAlphabet(char c) {
        return Character.isLetter(c);
    }

    private static boolean isWhiteSpace(char c) {
        return ' ' == c;
    }

    private static boolean isLeetspeak(char c) {
        return ('0' == c) || ('1' == c) || ('3' == c) || ('4' == c) || ('7' == c);
    }

    public static boolean isMinus(char c) {
        return '-' == c;
    }

    private static char convertLeetToChar(char c) {
        switch (c) {
            case '0':
                return 'o';
            case '1':
                return 'l';
            case '3':
                return 'e';
            case '4':
                return 'a';
            case '7':
                return 't';
            default:
                return c;
        }
    }
}
