public class LogLevels {
    public static String message(String logLine) {
        return logLine.substring(logLine.indexOf(":") + 2).strip();
    }

    public static String logLevel(String logLine) {
        return logLine.substring(logLine.indexOf("[") + 1, logLine.indexOf("]")).toLowerCase();
    }

    public static String reformat(String logLine) {
        return message(logLine) + " (" + logLevel(logLine) + ")";
    }
}
