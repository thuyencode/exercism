class ArmstrongNumbers {
    boolean isArmstrongNumber(int numberToCheck) {
        int temp = numberToCheck;
        int number_of_digits = 0;

        // Calculate the number on digits in `numberToCheck`
        while (temp != 0) {
            temp /= 10;
            number_of_digits++;
        }

        int sum = 0;

        for (int i = numberToCheck; i != 0; i /= 10) {
            int num = i % 10;
            int n = 1;

            for (int j = 0; j < number_of_digits; j++) {
                n *= num;
            }

            sum += n;
        }

        return sum == numberToCheck;
    }

}
