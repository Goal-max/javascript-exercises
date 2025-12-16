const removeFromArray = function(array, ...args) {
 //first know length of ...args []
//create loop which goes through index of ...args [] and assign to variable
//the loop will then splice the variable from array
  for (let i = 0; i  < args.length; i++) {
    let index = array.findIndex (element => element === args[i]);
    array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
