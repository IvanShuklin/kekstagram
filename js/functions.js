const stringLengthCheck = function (string, maxLength) {
  return string.length <= maxLength;
};

const palindromeCheck = function (string) {
  const str = string.toString().toLowerCase().replaceAll(" ", "");
  let reversedString = str.split("").reverse().join("");

  return str === reversedString;
};

const getIntegers = function (string) {
  const str = string.toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }

  return parseInt(result, 10);
};
