class CalculatorConundrum {
    public String calculate(int operand1, int operand2, String operation)
            throws IllegalOperationException, IllegalArgumentException {
        if (operation == null) {
            throw new IllegalArgumentException("Operation cannot be null");
        }

        try {
            switch (operation) {
                case "+":
                    return String.format("%d %s %d = %d", operand1, operation, operand2, operand1 + operand2);

                case "*":
                    return String.format("%d %s %d = %d", operand1, operation, operand2, operand1 * operand2);

                case "/":
                    return String.format("%d %s %d = %d", operand1, operation, operand2, operand1 / operand2);

                case "":
                    throw new IllegalArgumentException("Operation cannot be empty");

                default:
                    throw new IllegalOperationException(String.format("Operation '%s' does not exist", operation));
            }
        } catch (ArithmeticException e) {
            throw new IllegalOperationException("Division by zero is not allowed", e);
        }
    }
}
