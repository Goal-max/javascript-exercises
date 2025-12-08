const removeFromArray = function(array, argument) {
  let index = array.indexOf(argument); 
  array.splice(index, 1);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
