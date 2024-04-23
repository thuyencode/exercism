public class LogLine {
    private String logMessage;
    private LogLevel logLevel;

    public LogLine(String logLine) {
        this.logMessage = logLine.substring(logLine.indexOf(':') + 2).strip();

        System.out.println(logLine.substring(logLine.indexOf('[') + 1, logLine.indexOf(']')));
        switch (logLine.substring(logLine.indexOf('[') + 1, logLine.indexOf(']'))) {
            case "TRC":
                this.logLevel = LogLevel.TRACE;
                break;

            case "DBG":
                this.logLevel = LogLevel.DEBUG;
                break;

            case "INF":
                this.logLevel = LogLevel.INFO;
                break;

            case "WRN":
                this.logLevel = LogLevel.WARNING;
                break;

            case "ERR":
                this.logLevel = LogLevel.ERROR;
                break;

            case "FTL":
                this.logLevel = LogLevel.FATAL;
                break;

            default:
                this.logLevel = LogLevel.UNKNOWN;
                break;
        }
    }

    public LogLevel getLogLevel() {
        return this.logLevel;
    }

    public String getOutputForShortLog() {
        return String.format("%d:%s", this.logLevel.getEncodedLogLevel(), this.logMessage);
    }
}
