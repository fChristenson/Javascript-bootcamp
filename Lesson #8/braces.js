module.exports = str => {
  if (!str) return false;

  const stack = [];
  const braces = str.split("");

  for (const brace of braces) {
    const lastOpeningBrace = stack[stack.length - 1];

    switch (brace) {
      case "{":
      case "(":
      case "[":
        // if we find an opening brace we add it to the stack
        stack.push(brace);
        break;

      case "}":
        // if we find a closing brace we check if the last opening brace is a match
        // if it is we remove it since it has a match
        if (lastOpeningBrace === "{") {
          stack.pop();
        } else {
          return false;
        }
        break;

      case ")":
        if (lastOpeningBrace === "(") {
          stack.pop();
        } else {
          return false;
        }
        break;

      case "]":
        if (lastOpeningBrace === "[") {
          stack.pop();
        } else {
          return false;
        }
        break;

      default:
        break;
    }

    // if there are no more braces to match and we there are no
    // missmatched braces we know that the opening braces
    // have a matching closing brace
    if (stack.length === 0) return true;
  }

  // if there is only a opening brace
  // we will return false
  return false;
};
