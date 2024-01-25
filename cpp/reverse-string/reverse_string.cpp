#include "reverse_string.h"
#include <string>

namespace reverse_string {
std::string reverse_string(std::string str) {
  std::string new_string = "";

  for (char c : str) {
    new_string = c + new_string;
  }

  return new_string;
}
} // namespace reverse_string
