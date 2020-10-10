module.exports = function check(str, bracketsConfig) {
  const openBrackets = {};
  const closeBrackets = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets[bracketsConfig[i][0]] = true;
    closeBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  const bracketsStack = [];
  let result = true;

  for (let j = 0; j < str.length; j++) {
    if (closeBrackets.hasOwnProperty(str[j])) {
      const lastOpen = bracketsStack[bracketsStack.length - 1];
      if (lastOpen === closeBrackets[str[j]]) {
        bracketsStack.pop();
      } else if (openBrackets.hasOwnProperty(str[j])) {
        bracketsStack.push(str[j]);
      } else {
        result = false;
        break;
      }
    } else if (openBrackets.hasOwnProperty(str[j])) {
        bracketsStack.push(str[j]);
    }
  }

  if (bracketsStack.length > 0) {
    result = false;
  }

  return result;
}
