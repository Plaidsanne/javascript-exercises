const palindromes = function (s) {
  let removePunc = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let removeSpaces = removePunc.toLowerCase().replace(/\s+/g, "");
  let original = removeSpaces.toLowerCase();
  let reverseString = removeSpaces.split("").reverse().join("");
  if (original === reverseString) {
    console.log(original, reverseString);
    return true;
  }
  return false;
};

module.exports = palindromes;
