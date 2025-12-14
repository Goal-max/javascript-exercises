const removeFromArray = function(array, ...args) {
 //first know length of ...args []
//create loop which goes through index of ...args [] and assign to variable
//the loop will then splice the variable from array
  let arg = ...args;
  for (let i = 0; i  < ...arg.length; i++) {
    get remove = arg[i];
    array.splice(remove, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
