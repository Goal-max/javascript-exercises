const removeFromArray = function(array, ...args) {
  for (let i = 0; i  < args.length; i++) {
//while loop to keep searching for index if still in array
    while ( array.includes(args[i]) ) {
      let index = array.indexOf(args[i]);
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
