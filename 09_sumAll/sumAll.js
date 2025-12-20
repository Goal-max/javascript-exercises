const sumAll = function(a,b) {
  let array = [a,b];
  let test = '';
  for (element of array) {
    if (element < 0 | !Number.isInteger(element) | !Number.isFinite(element)) {
      test = 'incorrect'
      break;
    }   
  }
  if (test === 'incorrect') {
    return 'ERROR'
  }
  else {
  array.sort();
  let diff = array[1] - array[0];
  
  for (let i = 1; i < diff; i++) {
    let number = array[0] + i;
    array.push(number); 
  }
  
  let sum = array.reduce((sum, current) => sum + current, 0);
  return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
