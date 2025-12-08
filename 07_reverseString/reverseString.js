const reverseString = function(string) {
  let length = string.length - 1;
  let newString = '';
  for (i = length; i > -1; i--) {
    newString += string.at(i);
  }
  return newString;
   
};

// Do not edit below this line
module.exports = reverseString;
