#include <string>

namespace LOG_LEVELS {
const std::string INFO = "[INFO]:";
const std::string WARNING = "[WARNING]:";
const std::string ERROR = "[ERROR]:";
} // namespace LOG_LEVELS

namespace log_line {
std::string message(std::string log) { return log.substr(log.find(":") + 2); }

std::string log_level(std::string log) {
  return log.substr(log.find('[') + 1, log.find(']') - 1);
}

std::string reformat(std::string log) {
  return message(log) + " (" + log_level(log) + ")";
}
} // namespace log_line
