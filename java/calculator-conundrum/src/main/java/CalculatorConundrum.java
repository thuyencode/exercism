class CalculatorConundrum {
    public String calculate(int operand1, int operand2, String operation)
            throws IllegalOperationException, IllegalArgumentException {
        if (operation == null) {
            throw new IllegalArgumentException("Operation cannot be null");
        }

        int result = 0;

        try {
            switch (operation) {
                case "+":
                    result = operand1 + operand2;
                    break;

                case "*":
                    result = operand1 * operand2;
                    break;

                case "/":
                    result = operand1 / operand2;
                    break;

                case "":
                    throw new IllegalArgumentException("Operation cannot be empty");

                default:
                    throw new IllegalOperationException(String.format("Operation '%s' does not exist", operation));
            }

            return String.format("%d %s %d = %d", operand1, operation, operand2, result);
        } catch (ArithmeticException e) {
            throw new IllegalOperationException("Division by zero is not allowed", e);
        }

    }
}
